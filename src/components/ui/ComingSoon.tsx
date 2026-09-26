import Link from "next/link";
import type { Locale } from "@/lib/data/firm";

const copy = {
  fr: {
    badge: "Fonctionnalité à venir",
    cta1: "Prendre rendez-vous",
    cta2: "Nous contacter",
  },
  en: {
    badge: "Coming soon",
    cta1: "Book an Appointment",
    cta2: "Contact Us",
  },
} as const;

export function ComingSoon({
  locale,
  title,
  lead,
  note,
}: {
  locale: Locale;
  title: string;
  lead: string;
  note: string;
}) {
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <div className="py-24 max-w-2xl mx-auto px-6 text-center">
      <div className="inline-block text-xs font-mono uppercase tracking-wider text-gold-deep bg-gold-light/20 px-3 py-1 rounded-sm">
        {t.badge}
      </div>
      <h1 className="mt-5 font-serif text-3xl md:text-4xl text-navy">{title}</h1>
      <p className="mt-4 text-muted leading-relaxed">{lead}</p>
      <p className="mt-3 text-sm text-muted italic">{note}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href={`${base}/rendez-vous`} className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light">
          {t.cta1}
        </Link>
        <Link href={`${base}/contact`} className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-deep">
          {t.cta2}
        </Link>
      </div>
    </div>
  );
}
