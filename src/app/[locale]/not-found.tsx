"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy: Record<Locale, { kicker: string; title: string; lead: string; home: string; contact: string }> = {
  fr: {
    kicker: "Erreur 404",
    title: "Page introuvable",
    lead: "La page que vous recherchez n’existe pas ou a été déplacée. Vérifiez l’adresse ou repartez de l’accueil.",
    home: "Retour à l’accueil",
    contact: "Contacter le cabinet",
  },
  en: {
    kicker: "404 Error",
    title: "Page Not Found",
    lead: "The page you are looking for does not exist or has moved. Check the address or head back to the homepage.",
    home: "Back to Homepage",
    contact: "Contact the Firm",
  },
};

export default function NotFound() {
  const pathname = usePathname() || "/";
  const segment = pathname.split("/")[1];
  const locale: Locale = isLocale(segment) ? segment : "fr";
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href={base} className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light">
            {t.home}
          </Link>
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-deep"
          >
            {t.contact}
          </Link>
        </div>
      </Container>
    </>
  );
}
