import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { Container } from "./Container";

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

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

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
    <Container className="py-20 md:py-28">
      <div className="mx-auto max-w-xl rounded-sm border border-line bg-raised p-10 md:p-14 text-center shadow-sm">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy text-gold-light">
          <ClockIcon />
        </span>
        <div className="mt-5 inline-block text-xs font-mono uppercase tracking-wider text-gold-deep bg-gold-light/20 px-3 py-1 rounded-sm">
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
    </Container>
  );
}
