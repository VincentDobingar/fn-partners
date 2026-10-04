import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "@/components/ui/Link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { publishedPublications } from "@/lib/data/publications";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

const copy = {
  fr: {
    title: "Publications et analyses juridiques",
    metaDescription:
      "Analyses juridiques et publications du cabinet FN & PARTNERS : création d’entreprise au Tchad, droit OHADA, Cour africaine des droits de l’homme, droit minier.",
    kicker: "Publications",
    lead: "Analyses et décryptages juridiques par le cabinet FN & PARTNERS, pour comprendre le droit applicable au Tchad et dans l’espace OHADA.",
    readMore: "Lire l’article →",
    guidesTitle: "Besoin d’un mode d’emploi ?",
    guidesLead: "Nos guides pratiques détaillent, étape par étape, les démarches les plus courantes.",
    guidesCta: "Voir les ressources et guides",
    newsCta: "Voir les actualités du cabinet",
  },
  en: {
    title: "Publications & Legal Analysis",
    metaDescription:
      "Legal analysis and publications from FN & PARTNERS: setting up a business in Chad, OHADA law, the African Court on Human and Peoples’ Rights, mining law.",
    kicker: "Publications",
    lead: "Legal analysis and insights from FN & PARTNERS, to understand the law applicable in Chad and across the OHADA area.",
    readMore: "Read the article →",
    guidesTitle: "Looking for a how-to?",
    guidesLead: "Our practical guides set out the most common procedures step by step.",
    guidesCta: "See resources and guides",
    newsCta: "See the firm’s news",
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
  return pageMetadata(locale, "publications", { title: t.title, description: t.metaDescription });
}

export default async function PublicationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {publishedPublications.map((pub) => (
            <Link
              key={pub.slug}
              href={`${base}/publications/${pub.slug}`}
              className="group flex flex-col rounded-sm border border-line bg-raised overflow-hidden hover:border-gold transition-colors"
            >
              {pub.image && (
                <div className="relative aspect-[3/2] bg-ink">
                  <Image
                    src={pub.image}
                    alt={pub.imageAlt?.[locale] ?? pub[locale].title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-deep">{pub.category[locale]}</span>
                <h2 className="mt-2 font-serif text-lg text-navy group-hover:text-gold-deep transition-colors">
                  {pub[locale].title}
                </h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">{pub[locale].excerpt}</p>
                <span className="mt-auto pt-4 text-xs font-mono uppercase tracking-wider text-gold-deep">
                  {t.readMore}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-sm bg-navy text-white p-8 md:p-10">
          <h2 className="font-serif text-xl">{t.guidesTitle}</h2>
          <p className="mt-2 text-white/75 leading-relaxed max-w-2xl">{t.guidesLead}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button href={`${base}/ressources`} variant="secondary">
              {t.guidesCta}
            </Button>
            <Link
              href={`${base}/actualites`}
              className="inline-flex items-center rounded-sm border border-white/30 px-6 py-3 text-sm hover:border-gold-light hover:text-gold-light"
            >
              {t.newsCta}
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
