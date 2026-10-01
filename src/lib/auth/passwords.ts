import { randomBytes, scrypt as scryptCallback, timingSafeEqual } from "crypto";
import { promisify } from "util";

const scrypt = promisify(scryptCallback) as (
  password: string,
  salt: Buffer,
  keylen: number,
  options: { N: number; r: number; p: number; maxmem: number }
) => Promise<Buffer>;

const N = 65536;
const R = 8;
const P = 1;
const KEYLEN = 64;
// scrypt's default maxmem (32MB) is too small for N=65536. The commonly-cited 128*N*r formula
// undershoots Node's actual OpenSSL requirement in practice (verified: throws
// ERR_CRYPTO_INVALID_SCRYPT_PARAMS at 128x, succeeds at 256x) — use 256*N*r for real headroom.
const MAXMEM = 256 * N * R;

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16);
  const hash = await scrypt(password, salt, KEYLEN, { N, r: R, p: P, maxmem: MAXMEM });
  return `scrypt$N=${N},r=${R},p=${P}$${salt.toString("base64")}$${hash.toString("base64")}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const parts = stored.split("$");
  if (parts.length !== 4 || parts[0] !== "scrypt") return false;
  const [, params, saltB64, hashB64] = parts;

  const paramEntries = params.split(",").map((kv) => {
    const [key, value] = kv.split("=");
    return [key, Number(value)] as const;
  });
  const { N: paramN, r: paramR, p: paramP } = Object.fromEntries(paramEntries) as {
    N: number;
    r: number;
    p: number;
  };
  if (!paramN || !paramR || !paramP) return false;

  const salt = Buffer.from(saltB64, "base64");
  const expected = Buffer.from(hashB64, "base64");
  const actual = await scrypt(password, salt, expected.length, {
    N: paramN,
    r: paramR,
    p: paramP,
    maxmem: 256 * paramN * paramR,
  });

  return actual.length === expected.length && timingSafeEqual(actual, expected);
}
