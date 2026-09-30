import type { Locale } from "@/lib/data/firm";
import { URGENCY_LEVELS } from "@/lib/data/requestOptions";
import { copy } from "./copy";
import type { StepProps } from "./types";

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

export function Step4UrgencyDescription({ state, update, locale }: StepProps & { locale: Locale }) {
  const t = copy[locale].step4;

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-lg text-navy">{t.title}</h3>
      <fieldset className="text-sm">
        <legend className="mb-1.5 text-ink-soft">{t.urgency}</legend>
        <div className="flex flex-wrap gap-4">
          {URGENCY_LEVELS.map((level) => (
            <label key={level} className="flex items-center gap-2">
              <input
                type="radio"
                name="urgency"
                checked={state.urgency === level}
                onChange={() => update("urgency", level)}
              />
              {copy[locale].urgencyLabels[level]}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.description}</span>
        <textarea
          required
          rows={6}
          minLength={10}
          className={inputClass}
          value={state.description}
          onChange={(e) => update("description", e.target.value)}
        />
        <span className="block mt-1.5 text-xs text-muted">{t.descriptionHint}</span>
      </label>
    </div>
  );
}
