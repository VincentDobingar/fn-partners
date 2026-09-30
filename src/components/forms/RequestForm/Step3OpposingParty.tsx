import type { Locale } from "@/lib/data/firm";
import { copy } from "./copy";
import type { StepProps } from "./types";

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

export function Step3OpposingParty({ state, update, locale }: StepProps & { locale: Locale }) {
  const t = copy[locale].step3;

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-lg text-navy">{t.title}</h3>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.opposingPartyName}</span>
        <input
          type="text"
          className={inputClass}
          value={state.opposingPartyName}
          onChange={(e) => update("opposingPartyName", e.target.value)}
        />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.opposingPartyDetails}</span>
        <textarea
          rows={4}
          className={inputClass}
          value={state.opposingPartyDetails}
          onChange={(e) => update("opposingPartyDetails", e.target.value)}
        />
      </label>
    </div>
  );
}
