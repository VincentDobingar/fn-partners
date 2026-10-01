import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { getClientIp } from "@/lib/security/rateLimit";

const COOKIE_NAME = "bo_session";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8h

export type StaffAccount = {
  id: number;
  email: string;
  full_name: string;
  role: string;
};

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export async function createSession(subjectId: number, request: Request): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  const db = getDb();
  await db("sessions").insert({
    subject_type: "staff",
    subject_id: subjectId,
    token_hash: hashToken(token),
    user_agent: request.headers.get("user-agent") ?? null,
    ip: getClientIp(request),
    expires_at: expiresAt,
  });

  const jar = await cookies();
  jar.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

/** Reads and validates the session cookie. Read-only — safe to call from Server Components. */
export async function getSession(): Promise<StaffAccount | null> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;
  if (!token) return null;

  const db = getDb();
  const session = await db("sessions")
    .where({ token_hash: hashToken(token), subject_type: "staff" })
    .first();
  if (!session || new Date(session.expires_at) < new Date()) return null;

  const staff = await db("staff_accounts").where({ id: session.subject_id, is_active: true }).first();
  if (!staff) return null;

  return { id: staff.id, email: staff.email, full_name: staff.full_name, role: staff.role };
}

/** Mutates the cookie jar — only callable from Route Handlers / Server Actions. */
export async function destroySession(): Promise<void> {
  const jar = await cookies();
  const token = jar.get(COOKIE_NAME)?.value;

  if (token) {
    const db = getDb();
    await db("sessions").where({ token_hash: hashToken(token) }).delete();
  }

  jar.delete(COOKIE_NAME);
}
