import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import Image from "next/image";
import Link from "@/components/ui/Link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { newsItems } from "@/lib/data/news";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "Actualités",
    metaDescription: "Les actualités de FN & PARTNERS et de son fondateur, Me Frédéric NANADJINGUE.",
    kicker: "Actualités",
    lead: "Distinctions, élections et temps forts de la vie du cabinet et de son fondateur.",
    readMore: "Lire l’article →",
  },
  en: {
    title: "News",
    metaDescription: "News from FN & PARTNERS and its founder, Me Frédéric NANADJINGUE.",
    kicker: "News",
    lead: "Awards, elections and highlights from the firm and its founder.",
    readMore: "Read the article →",
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
  return pageMetadata(locale, "actualites", { title: t.title, description: t.metaDescription });
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const base = `/${locale}`;

  const sortedItems = [...newsItems].sort((a, b) => {
    if (a.date && b.date) return b.date.localeCompare(a.date);
    if (a.date) return -1;
    if (b.date) return 1;
    return 0;
  });

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {sortedItems.map((item) => (
          <Link
            key={item.slug}
            href={`${base}/actualites/${item.slug}`}
            className="group block rounded-sm border border-line bg-raised overflow-hidden hover:border-gold transition-colors"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.imageAlt[locale]}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              {(item.video || item.externalVideoUrl) && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <span className="ml-0.5 border-y-[8px] border-y-transparent border-l-[13px] border-l-navy" />
                  </span>
                </span>
              )}
            </div>
            <div className="p-6">
              <h2 className="font-serif text-lg text-navy leading-snug">{item[locale].title}</h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{item[locale].excerpt}</p>
              <span className="mt-4 inline-block text-xs font-mono uppercase tracking-wider text-gold-deep">
                {t.readMore}
              </span>
            </div>
          </Link>
        ))}
      </div>
      </Container>
    </>
  );
}
