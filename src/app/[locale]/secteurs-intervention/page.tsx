import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { sectors } from "@/lib/data/sectors";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "Secteurs d’intervention",
    metaDescription: "Les secteurs accompagnés par FN & PARTNERS : entreprises, investisseurs, institutions financières, ONG et administrations.",
    kicker: "Secteurs d’intervention",
    lead: "Le cabinet accompagne des acteurs variés, publics comme privés, au Tchad et en Afrique.",
  },
  en: {
    title: "Sectors We Serve",
    metaDescription: "The sectors supported by FN & PARTNERS: companies, investors, financial institutions, NGOs and public administrations.",
    kicker: "Sectors We Serve",
    lead: "The firm supports a wide range of public and private actors, in Chad and across Africa.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  return { title: t.title, description: t.metaDescription };
}

export default async function SectorsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sectors.map((sector) => (
            <div
              key={sector.slug}
              className="rounded-sm border border-line bg-raised p-6 shadow-sm transition-colors hover:border-gold"
            >
              <h3 className="font-serif text-lg text-navy">{sector[locale].title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{sector[locale].description}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
