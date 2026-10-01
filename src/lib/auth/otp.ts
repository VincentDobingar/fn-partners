import { createHash, randomBytes, randomInt } from "crypto";
import { getDb } from "@/lib/db";

export type SubjectType = "staff" | "client";

const OTP_TTL_MS = 10 * 60 * 1000; // 10 min
const MAX_ATTEMPTS = 5;

function hashToken(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

/** Generates a 6-digit code, stores its hash, and returns the raw code to be emailed. */
export async function createOtp(subjectType: SubjectType, subjectId: number, purpose = "login_2fa"): Promise<string> {
  const code = String(randomInt(100000, 1000000));

  await getDb()("otp_codes").insert({
    subject_type: subjectType,
    subject_id: subjectId,
    purpose,
    code_hash: hashToken(code),
    expires_at: new Date(Date.now() + OTP_TTL_MS),
  });

  return code;
}

/** Verifies against the most recent unconsumed code for this subject/purpose. */
export async function verifyOtp(
  subjectType: SubjectType,
  subjectId: number,
  code: string,
  purpose = "login_2fa"
): Promise<boolean> {
  const db = getDb();
  const otp = await db("otp_codes")
    .where({ subject_type: subjectType, subject_id: subjectId, purpose })
    .whereNull("consumed_at")
    .orderBy("created_at", "desc")
    .first();

  if (!otp) return false;
  if (new Date(otp.expires_at) < new Date()) return false;
  if (otp.attempts >= MAX_ATTEMPTS) return false;

  await db("otp_codes").where({ id: otp.id }).increment("attempts", 1);

  if (otp.code_hash !== hashToken(code)) return false;

  await db("otp_codes").where({ id: otp.id }).update({ consumed_at: new Date() });
  return true;
}

/**
 * Generates a long random token (e.g. for an emailed activation link), stores its hash, and
 * returns the raw token. Unlike createOtp's 6-digit codes, this isn't brute-forceable, so no
 * attempts/lockout tracking is needed on the verify side.
 */
export async function createActivationToken(
  subjectType: SubjectType,
  subjectId: number,
  purpose: string,
  ttlMs: number
): Promise<string> {
  const token = randomBytes(32).toString("base64url");

  await getDb()("otp_codes").insert({
    subject_type: subjectType,
    subject_id: subjectId,
    purpose,
    code_hash: hashToken(token),
    expires_at: new Date(Date.now() + ttlMs),
  });

  return token;
}

/**
 * Looks up an activation token by its hash alone (the caller doesn't know the subject id in
 * advance — they only have the token from the emailed link). Consumes it on success.
 */
export async function consumeActivationToken(
  token: string,
  purpose: string
): Promise<{ subjectType: SubjectType; subjectId: number } | null> {
  const db = getDb();
  const otp = await db("otp_codes")
    .where({ code_hash: hashToken(token), purpose })
    .whereNull("consumed_at")
    .first();

  if (!otp) return null;
  if (new Date(otp.expires_at) < new Date()) return null;

  await db("otp_codes").where({ id: otp.id }).update({ consumed_at: new Date() });
  return { subjectType: otp.subject_type, subjectId: otp.subject_id };
}

/** Invalidates unconsumed codes/tokens for a subject+purpose — used before issuing a fresh one. */
export async function invalidateOtps(subjectType: SubjectType, subjectId: number, purpose: string): Promise<void> {
  await getDb()("otp_codes")
    .where({ subject_type: subjectType, subject_id: subjectId, purpose })
    .whereNull("consumed_at")
    .update({ consumed_at: new Date() });
}
