import { NextResponse } from "next/server";
import { z } from "zod";
import { getDb } from "@/lib/db";
import { verifyOtp } from "@/lib/auth/otp";
import { createSession } from "@/lib/auth/session";
import { getClientIp, isRateLimited } from "@/lib/security/rateLimit";

export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email(),
  code: z.string().trim().length(6),
});

const RATE_LIMIT = 8;
const RATE_WINDOW_MS = 15 * 60 * 1000;

export async function POST(request: Request) {
  if (isRateLimited(`backoffice-otp:${getClientIp(request)}`, RATE_LIMIT, RATE_WINDOW_MS)) {
    return NextResponse.json({ ok: false, error: "rate_limited" }, { status: 429 });
  }

  const json = await request.json().catch(() => null);
  const parsed = schema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const { email, code } = parsed.data;
  const db = getDb();
  const staff = await db("staff_accounts").where({ email, is_active: true }).first();
  if (!staff) {
    return NextResponse.json({ ok: false, error: "invalid_code" }, { status: 401 });
  }

  const valid = await verifyOtp(staff.id, code);
  if (!valid) {
    return NextResponse.json({ ok: false, error: "invalid_code" }, { status: 401 });
  }

  await db("staff_accounts").where({ id: staff.id }).update({ last_login_at: new Date() });
  await createSession(staff.id, request);

  return NextResponse.json({ ok: true });
}
