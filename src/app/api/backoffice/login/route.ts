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
  if (isRateLimited(`backoffice-login:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const { email, password } = parsed.data;
  const db = getDb();
  const staff = await db("staff_accounts").where({ email, is_active: true }).first();

  if (!staff) {
    // Coûte le même temps qu'une vérification réelle, pour ne pas révéler si l'e-mail existe.
    await hashPassword(password);
    return NextResponse.json({ ok: false, error: "invalid_credentials" }, { status: 401 });
  }

  if (staff.locked_until && new Date(staff.locked_until) > new Date()) {
    return NextResponse.json({ ok: false, error: "account_locked" }, { status: 423 });
  }

  const valid = await verifyPassword(password, staff.password_hash);
  if (!valid) {
    const attempts = staff.failed_login_attempts + 1;
    const lockedUntil = attempts >= MAX_FAILED_ATTEMPTS ? new Date(Date.now() + LOCK_DURATION_MS) : null;
    await db("staff_accounts")
      .where({ id: staff.id })
      .update({ failed_login_attempts: attempts, locked_until: lockedUntil });
    return NextResponse.json({ ok: false, error: "invalid_credentials" }, { status: 401 });
  }

  await db("staff_accounts").where({ id: staff.id }).update({ failed_login_attempts: 0, locked_until: null });

  const code = await createOtp(staff.id);
  try {
    await sendMail({
      to: staff.email,
      subject: "Votre code de connexion — FN & PARTNERS",
      text: `Votre code de connexion au back-office est : ${code}\n\nCe code expire dans 10 minutes. Si vous n'êtes pas à l'origine de cette demande, ignorez cet e-mail.`,
    });
  } catch {
    // Le mot de passe est valide ; un souci SMTP ne doit pas empêcher la suite (le code reste
    // consultable dans les journaux du serveur en développement, comme pour les autres formulaires).
  }

  return NextResponse.json({ ok: true });
}
