import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { sendMail } from "@/lib/mailer";
import { hashPassword, verifyPassword } from "@/lib/auth/passwords";
import { createOtp } from "@/lib/auth/otp";
import { getClientIp, isRateLimited } from "@/lib/security/rateLimit";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email(),
  password: z.string().min(1),
});

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;
const MAX_FAILED_ATTEMPTS = 5;
const LOCK_DURATION_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  if (isRateLimited(`client-login:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const { password } = parsed.data;
  const email = parsed.data.email.toLowerCase();
  const db = getDb();
  const client = await db("client_accounts").where({ email, is_active: true }).first();

  if (!client || !client.password_hash) {
    // Même traitement qu'un compte inexistant : pas d'indice révélant qu'un e-mail a été
    // invité mais jamais activé. Coûte le même temps qu'une vérification réelle.
    await hashPassword(password);
    return NextResponse.json({ ok: false, error: "invalid_credentials" }, { status: 401 });
  }

  if (client.locked_until && new Date(client.locked_until) > new Date()) {
    return NextResponse.json({ ok: false, error: "account_locked" }, { status: 423 });
  }

  const valid = await verifyPassword(password, client.password_hash);
  if (!valid) {
    const attempts = client.failed_login_attempts + 1;
    const lockedUntil = attempts >= MAX_FAILED_ATTEMPTS ? new Date(Date.now() + LOCK_DURATION_MS) : null;
    await db("client_accounts")
      .where({ id: client.id })
      .update({ failed_login_attempts: attempts, locked_until: lockedUntil });
    return NextResponse.json({ ok: false, error: "invalid_credentials" }, { status: 401 });
  }

  await db("client_accounts").where({ id: client.id }).update({ failed_login_attempts: 0, locked_until: null });

  const code = await createOtp("client", client.id);
  try {
    await sendMail({
      to: client.email,
      subject: "Votre code de connexion — FN & PARTNERS",
      text: `Votre code de connexion à l'espace client est : ${code}\n\nCe code expire dans 10 minutes. Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail.`,
    });
  } catch {
    // Le mot de passe est valide ; un souci SMTP ne doit pas empêcher la suite.
  }

  return NextResponse.json({ ok: true });
}
