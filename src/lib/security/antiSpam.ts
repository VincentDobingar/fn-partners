/** Minimum time (ms) a human plausibly needs to fill the form; bots tend to submit instantly. */
const MIN_FILL_TIME_MS = 1500;

/**
 * Detects bot submissions via a honeypot field (bots fill every input) and a minimum
 * fill-time check (bots submit near-instantly). Both fields are added to the form schemas
 * as optional so the check never blocks a genuine submission that omits them.
 */
export function looksLikeSpam(honeypot: string | undefined, startedAt: string | undefined): boolean {
  if (honeypot && honeypot.trim().length > 0) return true;

  if (startedAt) {
    const elapsed = Date.now() - Number(startedAt);
    if (Number.isFinite(elapsed) && elapsed < MIN_FILL_TIME_MS) return true;
  }

  return false;
}
