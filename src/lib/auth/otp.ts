import { createHash, randomInt } from "crypto";
import { getDb } from "@/lib/db";

const OTP_TTL_MS = 10 * 60 * 1000; // 10 min
const MAX_ATTEMPTS = 5;

function hashCode(code: string): string {
  return createHash("sha256").update(code).digest("hex");
}

/** Generates a 6-digit code, stores its hash, and returns the raw code to be emailed. */
export async function createOtp(subjectId: number, purpose = "login_2fa"): Promise<string> {
  const code = String(randomInt(100000, 1000000));

  await getDb()("otp_codes").insert({
    subject_type: "staff",
    subject_id: subjectId,
    purpose,
    code_hash: hashCode(code),
    expires_at: new Date(Date.now() + OTP_TTL_MS),
  });

  return code;
}

/** Verifies against the most recent unconsumed code for this subject/purpose. */
export async function verifyOtp(subjectId: number, code: string, purpose = "login_2fa"): Promise<boolean> {
  const db = getDb();
  const otp = await db("otp_codes")
    .where({ subject_type: "staff", subject_id: subjectId, purpose })
    .whereNull("consumed_at")
    .orderBy("created_at", "desc")
    .first();

  if (!otp) return false;
  if (new Date(otp.expires_at) < new Date()) return false;
  if (otp.attempts >= MAX_ATTEMPTS) return false;

  await db("otp_codes").where({ id: otp.id }).increment("attempts", 1);

  if (otp.code_hash !== hashCode(code)) return false;

  await db("otp_codes").where({ id: otp.id }).update({ consumed_at: new Date() });
  return true;
}
