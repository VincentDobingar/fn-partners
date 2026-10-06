import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { newsItems, getNewsBySlug } from "@/lib/data/news";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/jsonld";
import { absoluteUrl, pageMetadata } from "@/lib/seo/metadata";

const copy = {
  fr: {
    breadcrumbNews: "Actualités",
    sourceLabel: "Source",
    back: "← Retour aux actualités",
    watchOnFacebook: "Voir la vidéo complète sur Facebook →",
  },
  en: {
    breadcrumbNews: "News",
    sourceLabel: "Source",
    back: "← Back to news",
    watchOnFacebook: "Watch the full video on Facebook →",
  },
} as const;

export function generateStaticParams() {
  return locales.flatMap((locale) => newsItems.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const item = getNewsBySlug(slug);
  if (!item) return {};
  return pageMetadata(locale, `actualites/${slug}`, {
    title: item[locale].title,
    description: item[locale].excerpt,
    type: "article",
    publishedTime: item.date,
    image: { url: item.image, alt: item.imageAlt[locale] },
  });
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const item = getNewsBySlug(slug);
  if (!item) notFound();
  const t = copy[locale];
  const dict = getDictionary(locale);
  const base = `/${locale}`;
  const formattedDate = item.date
    ? new Date(`${item.date}T00:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
      })
    : null;

  // Affiche en hauteur : affichée entière et centrée, au lieu d’être recadrée au format 4/3.
  const isPortrait = !!item.imageSize && item.imageSize.height > item.imageSize.width;

  return (
    <Container className="py-16 max-w-3xl">
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.breadcrumbHome, url: absoluteUrl(locale) },
          { name: t.breadcrumbNews, url: absoluteUrl(locale, "actualites") },
          { name: item[locale].title, url: absoluteUrl(locale, `actualites/${slug}`) },
        ])}
      />
      <JsonLd
        data={articleSchema({
          locale,
          title: item[locale].title,
          description: item[locale].excerpt,
          datePublished: item.date,
          url: absoluteUrl(locale, `actualites/${slug}`),
          image: item.image,
        })}
      />

      <nav className="text-xs font-mono uppercase tracking-wider text-muted mb-6">
        <Link href={base} className="hover:text-gold-deep">{dict.common.breadcrumbHome}</Link>
        <span className="mx-2">/</span>
        <Link href={`${base}/actualites`} className="hover:text-gold-deep">{t.breadcrumbNews}</Link>
      </nav>

      <h1 className="font-serif text-3xl md:text-4xl text-navy leading-tight">{item[locale].title}</h1>

      <div className="mt-6 rounded-sm border border-line overflow-hidden bg-ink">
        {item.video ? (
          <video
            controls
            preload="none"
            poster={item.video.poster ?? item.image}
            className="w-full h-auto"
          >
            <source src={item.video.url} type="video/mp4" />
          </video>
        ) : (
          <div className={isPortrait ? "relative mx-auto max-w-md" : "relative"}>
            <Image
              src={item.image}
              alt={item.imageAlt[locale]}
              width={item.imageSize?.width ?? 1000}
              height={item.imageSize?.height ?? 750}
              className="w-full h-auto object-cover"
              priority
            />
            {item.externalVideoUrl && (
              <a
                href={item.externalVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/25 hover:bg-black/40 transition-colors group"
                aria-label={t.watchOnFacebook}
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors shadow-lg">
                  <span className="ml-1 border-y-[10px] border-y-transparent border-l-[16px] border-l-navy" />
                </span>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
        <span>{t.sourceLabel} : {item.source}</span>
        {formattedDate && (
          <>
            <span aria-hidden="true">·</span>
            <time dateTime={item.date}>{formattedDate}</time>
          </>
        )}
      </div>

      {item.externalVideoUrl && (
        <a
          href={item.externalVideoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
        >
          {t.watchOnFacebook}
        </a>
      )}

      <div className="mt-8 space-y-4">
        {item[locale].content.map((paragraph, i) => (
          <p key={i} className="text-ink-soft leading-relaxed">{paragraph}</p>
        ))}
      </div>

      <Link
        href={`${base}/actualites`}
        className="mt-10 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
      >
        {t.back}
      </Link>
    </Container>
  );
}
