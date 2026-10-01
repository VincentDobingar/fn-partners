import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendMail } from "@/lib/mailer";
import { createActivationToken, invalidateOtps } from "@/lib/auth/otp";
import { requireStaffSessionApi } from "@/lib/auth/guard";

export const runtime = "nodejs";

const ACTIVATION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 jours

async function findOrCreateClientAccount(db: ReturnType<typeof getDb>, email: string, fullName: string, staffId: number) {
  const existing = await db("client_accounts").where({ email }).first();
  if (existing) return existing.id as number;

  try {
    const [clientId] = await db("client_accounts").insert({
      email,
      full_name: fullName,
      invited_by_staff_id: staffId,
      is_active: 1,
    });
    return clientId as number;
  } catch {
    // Collision concurrente sur la contrainte unique email (double clic) : l'autre insertion
    // a gagné, on réutilise simplement le compte qu'elle vient de créer.
    const race = await db("client_accounts").where({ email }).first();
    if (!race) throw new Error("client_account_lookup_failed");
    return race.id as number;
  }
}

export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const auth = await requireStaffSessionApi();
  if ("error" in auth) return auth.error;

  const { id } = await params;
  const requestId = Number(id);
  if (!Number.isInteger(requestId)) {
    return NextResponse.json({ ok: false, error: "invalid_id" }, { status: 400 });
  }

  const db = getDb();
  const existingRequest = await db("requests").where({ id: requestId }).first();
  if (!existingRequest) {
    return NextResponse.json({ ok: false, error: "not_found" }, { status: 404 });
  }

  let clientId: number;
  if (existingRequest.client_account_id) {
    clientId = existingRequest.client_account_id;
  } else {
    const email = String(existingRequest.email).trim().toLowerCase();
    clientId = await findOrCreateClientAccount(db, email, existingRequest.full_name, auth.staff.id);
    await db("requests").where({ id: requestId }).update({ client_account_id: clientId });
  }

  const client = await db("client_accounts").where({ id: clientId }).first();

  await invalidateOtps("client", clientId, "client_activation");
  const token = await createActivationToken("client", clientId, "client_activation", ACTIVATION_TTL_MS);
  const activationUrl = `${new URL(request.url).origin}/client/activate?token=${token}`;

  try {
    await sendMail({
      to: client.email,
      subject: "Accès à votre espace client — FN & PARTNERS",
      text: `Bonjour,\n\nVous avez été invité(e) à créer votre accès à l'espace client FN & PARTNERS, qui vous permet de suivre l'avancement de votre dossier et de consulter les documents associés.\n\nPour activer votre accès, cliquez sur le lien suivant et choisissez un mot de passe :\n${activationUrl}\n\nCe lien est valable 7 jours. Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail.\n\nCordialement,\nL'équipe FN & PARTNERS`,
    });
  } catch {
    // Même logique que la connexion staff : un souci SMTP ne doit pas faire échouer l'action.
  }

  return NextResponse.json({ ok: true, alreadyActivated: Boolean(client.activated_at) });
}
