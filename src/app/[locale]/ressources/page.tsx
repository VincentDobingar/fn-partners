import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { resources } from "@/lib/data/resources";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "Ressources et guides pratiques",
    metaDescription: "Guides pratiques et ressources juridiques proposés par FN & PARTNERS.",
    kicker: "Ressources & guides",
    lead: "Des guides pratiques pour mieux comprendre vos démarches juridiques au Tchad et dans l’espace OHADA.",
  },
  en: {
    title: "Resources & Practical Guides",
    metaDescription: "Practical legal guides and resources offered by FN & PARTNERS.",
    kicker: "Resources & Guides",
    lead: "Practical guides to help you better understand legal procedures in Chad and the OHADA area.",
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

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const dict = getDictionary(locale);

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
        <div className="inline-block text-xs font-mono uppercase tracking-wider text-gold-deep bg-gold-light/20 px-3 py-1 rounded-sm">
          {dict.common.demoContent}
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.slug}
              className="rounded-sm border border-line bg-raised p-6 shadow-sm transition-colors hover:border-gold"
            >
              <h2 className="font-serif text-lg text-navy">{resource[locale].title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{resource[locale].description}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
