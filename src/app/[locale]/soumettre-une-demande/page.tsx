import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { RequestForm } from "@/components/forms/RequestForm";

const copy = {
  fr: {
    kicker: "Soumettre une demande",
    title: "Soumettre une demande",
    metaDescription: "Soumettez votre demande en ligne au cabinet FN & PARTNERS, en quelques étapes.",
    lead: "Décrivez votre situation en quelques étapes. Le cabinet examine chaque demande et revient vers vous dans les meilleurs délais.",
  },
  en: {
    kicker: "Submit a Request",
    title: "Submit a Request",
    metaDescription: "Submit your request online to FN & PARTNERS in a few steps.",
    lead: "Describe your situation in a few steps. The firm reviews every request and gets back to you as soon as possible.",
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
  return pageMetadata(locale, "soumettre-une-demande", { title: t.title, description: t.metaDescription });
}

export default async function SubmitRequestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16 max-w-2xl">
        <div className="relative rounded-sm border border-line bg-raised p-8 md:p-10 shadow-sm">
          <RequestForm locale={locale} />
        </div>
      </Container>
    </>
  );
}
