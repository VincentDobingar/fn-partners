import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { generalFaq } from "@/lib/data/faq";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/seo/jsonld";

const copy = {
  fr: {
    title: "FAQ juridique",
    metaDescription: "Réponses aux questions fréquentes sur les services de FN & PARTNERS : rendez-vous, dossiers, confidentialité.",
    kicker: "FAQ juridique",
    lead: "Les réponses aux questions les plus fréquemment posées au cabinet.",
  },
  en: {
    title: "Legal FAQ",
    metaDescription: "Answers to frequently asked questions about FN & PARTNERS’ services: appointments, files, confidentiality.",
    kicker: "Legal FAQ",
    lead: "Answers to the questions most frequently asked of the firm.",
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
  return pageMetadata(locale, "faq", { title: t.title, description: t.metaDescription });
}

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const items = generalFaq.map((item) => item[locale]);

  return (
    <>
      <JsonLd data={faqSchema(items)} />
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16 max-w-3xl">
        <FaqAccordion items={items} />
      </Container>
    </>
  );
}
