import type { Locale } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";
import { copy } from "./copy";
import type { StepProps } from "./types";

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

export function Step2Domain({ state, update, locale }: StepProps & { locale: Locale }) {
  const t = copy[locale].step2;

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-lg text-navy">{t.title}</h3>
      <label className="block text-sm">
        <select
          required
          className={inputClass}
          value={state.legalDomainSlug}
          onChange={(e) => update("legalDomainSlug", e.target.value)}
        >
          <option value="" disabled>
            {t.domainPlaceholder}
          </option>
          {expertiseDomains.map((domain) => (
            <option key={domain.slug} value={domain.slug}>
              {domain[locale].title}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
