import type { Locale } from "@/lib/data/firm";
import { copy } from "./copy";
import type { StepProps } from "./types";

const inputClass =
  "w-full rounded-sm border border-line bg-white px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold";

export function Step1Identity({ state, update, locale }: StepProps & { locale: Locale }) {
  const t = copy[locale].step1;

  return (
    <div className="space-y-5">
      <h3 className="font-serif text-lg text-navy">{t.title}</h3>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.fullName}</span>
        <input
          required
          type="text"
          className={inputClass}
          value={state.fullName}
          onChange={(e) => update("fullName", e.target.value)}
        />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.email}</span>
        <input
          required
          type="email"
          className={inputClass}
          value={state.email}
          onChange={(e) => update("email", e.target.value)}
        />
      </label>
      <label className="block text-sm">
        <span className="block mb-1.5 text-ink-soft">{t.phone}</span>
        <input
          required
          type="tel"
          className={inputClass}
          value={state.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </label>
    </div>
  );
}
