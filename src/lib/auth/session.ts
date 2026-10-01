import { createHash, randomBytes } from "crypto";
import { cookies } from "next/headers";
import { getDb } from "@/lib/db";
import { getClientIp } from "@/lib/security/rateLimit";
import type { SubjectType } from "./otp";

const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8h

const STAFF_COOKIE = "bo_session";
const CLIENT_COOKIE = "client_session";

export type StaffAccount = {
  id: number;
  email: string;
  full_name: string;
  role: string;
};

export type ClientAccount = {
  id: number;
  email: string;
  full_name: string;
};

function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

async function createSessionFor(subjectType: SubjectType, cookieName: string, subjectId: number, request: Request): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + SESSION_DURATION_MS);

  const db = getDb();
  await db("sessions").insert({
    subject_type: subjectType,
    subject_id: subjectId,
    token_hash: hashToken(token),
    user_agent: request.headers.get("user-agent") ?? null,
    ip: getClientIp(request),
    expires_at: expiresAt,
  });

  const jar = await cookies();
  jar.set(cookieName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_DURATION_MS / 1000,
  });
}

/** Reads and validates a session cookie. Read-only — safe to call from Server Components. */
async function getSessionFor<T>(
  subjectType: SubjectType,
  cookieName: string,
  table: string,
  mapRow: (row: Record<string, unknown>) => T
): Promise<T | null> {
  const jar = await cookies();
  const token = jar.get(cookieName)?.value;
  if (!token) return null;

  const db = getDb();
  const session = await db("sessions")
    .where({ token_hash: hashToken(token), subject_type: subjectType })
    .first();
  if (!session || new Date(session.expires_at) < new Date()) return null;

  const subject = await db(table).where({ id: session.subject_id, is_active: true }).first();
  if (!subject) return null;

  return mapRow(subject);
}

/** Mutates the cookie jar — only callable from Route Handlers / Server Actions. */
async function destroySessionFor(cookieName: string): Promise<void> {
  const jar = await cookies();
  const token = jar.get(cookieName)?.value;

  if (token) {
    const db = getDb();
    await db("sessions").where({ token_hash: hashToken(token) }).delete();
  }

  jar.delete(cookieName);
}

export function createSession(subjectId: number, request: Request): Promise<void> {
  return createSessionFor("staff", STAFF_COOKIE, subjectId, request);
}

export function getSession(): Promise<StaffAccount | null> {
  return getSessionFor("staff", STAFF_COOKIE, "staff_accounts", (row) => ({
    id: row.id as number,
    email: row.email as string,
    full_name: row.full_name as string,
    role: row.role as string,
  }));
}

export function destroySession(): Promise<void> {
  return destroySessionFor(STAFF_COOKIE);
}

export function createClientSession(subjectId: number, request: Request): Promise<void> {
  return createSessionFor("client", CLIENT_COOKIE, subjectId, request);
}

export function getClientSession(): Promise<ClientAccount | null> {
  return getSessionFor("client", CLIENT_COOKIE, "client_accounts", (row) => ({
    id: row.id as number,
    email: row.email as string,
    full_name: row.full_name as string,
  }));
}

export function destroyClientSession(): Promise<void> {
  return destroySessionFor(CLIENT_COOKIE);
}
