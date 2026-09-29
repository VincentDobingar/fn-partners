import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { publications } from "@/lib/data/publications";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "Publications et actualités juridiques",
    metaDescription: "Analyses juridiques, actualités et publications du cabinet FN & PARTNERS.",
    kicker: "Publications",
    lead: "Analyses, actualités et décryptages juridiques par le cabinet FN & PARTNERS.",
  },
  en: {
    title: "Publications & Legal News",
    metaDescription: "Legal analysis, news and publications from FN & PARTNERS.",
    kicker: "Publications",
    lead: "Legal analysis, news and insights from FN & PARTNERS.",
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

export default async function PublicationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {publications.map((pub) => (
          <Link
            key={pub.slug}
            href={`${base}/publications/${pub.slug}`}
            className="group block rounded-sm border border-line bg-raised overflow-hidden hover:border-gold transition-colors"
          >
            {pub.image && (
              <div className="relative aspect-[3/2] bg-ink">
                <Image
                  src={pub.image}
                  alt={pub.imageAlt?.[locale] ?? pub[locale].title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono uppercase tracking-wider text-gold-deep">{pub.category[locale]}</span>
                {pub.isDemo && (
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-deep bg-gold-light/20 px-2 py-0.5 rounded-sm">
                    {dict.common.demoContent}
                  </span>
                )}
              </div>
              <h2 className="mt-2 font-serif text-lg text-navy">{pub[locale].title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{pub[locale].excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
      </Container>
    </>
  );
}
