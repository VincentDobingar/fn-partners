import type { Locale } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";
import { copy } from "./copy";
import type { StepProps } from "./types";

export function Step6Consent({ state, update, locale }: StepProps & { locale: Locale }) {
  const t = copy[locale].step6;
  const domain = expertiseDomains.find((d) => d.slug === state.legalDomainSlug);

  const recapRows: [string, string][] = [
    [copy[locale].step1.fullName, state.fullName],
    [copy[locale].step1.email, state.email],
    [copy[locale].step1.phone, state.phone],
    [copy[locale].step2.title, domain ? domain[locale].title : "—"],
    [copy[locale].step4.urgency, copy[locale].urgencyLabels[state.urgency]],
    ["Documents", String(state.documents.length)],
  ];

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-lg text-navy">{t.title}</h3>
      <p className="text-sm text-muted">{t.recap}</p>

      <dl className="rounded-sm border border-line divide-y divide-line">
        {recapRows.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 px-4 py-2.5 text-sm">
            <dt className="text-ink-soft">{label}</dt>
            <dd className="text-navy font-medium text-right">{value || "—"}</dd>
          </div>
        ))}
      </dl>

      <label className="flex items-start gap-2.5 text-sm text-ink-soft">
        <input
          required
          type="checkbox"
          className="mt-1"
          checked={state.consent}
          onChange={(e) => update("consent", e.target.checked)}
        />
        <span>{t.consent}</span>
      </label>
    </div>
  );
}
