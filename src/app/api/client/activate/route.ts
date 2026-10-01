import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { hashPassword } from "@/lib/auth/passwords";
import { consumeActivationToken } from "@/lib/auth/otp";
import { createClientSession } from "@/lib/auth/session";
import { getClientIp, isRateLimited } from "@/lib/security/rateLimit";

export const runtime = "nodejs";

const schema = z.object({
  token: z.string().trim().min(20),
  password: z.string().min(8),
});

const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  if (isRateLimited(`client-activate:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const { token, password } = parsed.data;
  const result = await consumeActivationToken(token, "client_activation");
  if (!result || result.subjectType !== "client") {
    return NextResponse.json({ ok: false, error: "invalid_or_expired_token" }, { status: 400 });
  }

  const passwordHash = await hashPassword(password);
  const db = getDb();
  await db("client_accounts")
    .where({ id: result.subjectId })
    .update({
      password_hash: passwordHash,
      activated_at: db.raw("COALESCE(activated_at, NOW())"),
      is_active: 1,
      failed_login_attempts: 0,
      locked_until: null,
    });

  await createClientSession(result.subjectId, request);

  return NextResponse.json({ ok: true });
}
