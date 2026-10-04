import type { Metadata } from "next";
import Image from "next/image";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { publishedPublications, getPublicationBySlug } from "@/lib/data/publications";
import { getExpertiseBySlug } from "@/lib/data/expertise";
import { Container } from "@/components/ui/Container";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { RichContent } from "@/components/ui/RichContent";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/seo/jsonld";
import { absoluteUrl, pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return locales.flatMap((locale) => publishedPublications.map((pub) => ({ locale, slug: pub.slug })));
}

// Seules les publications listées existent : tout autre slug renvoie une page 404.
export const dynamicParams = false;

const copy = {
  fr: {
    breadcrumb: "Publications",
    published: "Publié le",
    updated: "Mis à jour le",
    author: "Par le cabinet FN & PARTNERS",
    related: "Domaines d’expertise liés",
    ctaTitle: "Une question sur ce sujet ?",
    ctaLead: "Le cabinet peut examiner votre situation et vous indiquer les options envisageables.",
    cta: "Prendre rendez-vous",
    back: "← Toutes les publications",
  },
  en: {
    breadcrumb: "Publications",
    published: "Published on",
    updated: "Updated on",
    author: "By FN & PARTNERS",
    related: "Related areas of expertise",
    ctaTitle: "A question on this topic?",
    ctaLead: "The firm can review your situation and outline the options available.",
    cta: "Book an Appointment",
    back: "← All publications",
  },
} as const;

function formatDate(date: string, locale: Locale) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const pub = getPublicationBySlug(slug);
  if (!pub) return {};
  return pageMetadata(locale, `publications/${slug}`, {
    title: pub[locale].title,
    description: pub[locale].excerpt,
    type: "article",
    publishedTime: pub.date,
    ...(pub.image ? { image: { url: pub.image, alt: pub.imageAlt?.[locale] ?? pub[locale].title } } : {}),
  });
}

export default async function PublicationPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const pub = getPublicationBySlug(slug);
  if (!pub) notFound();
  const dict = getDictionary(locale);
  const t = copy[locale];
  const base = `/${locale}`;
  const url = absoluteUrl(locale, `publications/${slug}`);
  const related = (pub.relatedExpertise ?? [])
    .map((relatedSlug) => getExpertiseBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <Container className="py-16">
      <JsonLd
        data={articleSchema({
          locale,
          title: pub[locale].title,
          description: pub[locale].excerpt,
          datePublished: pub.date,
          dateModified: pub.updated,
          url,
          image: pub.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.breadcrumbHome, url: absoluteUrl(locale) },
          { name: t.breadcrumb, url: absoluteUrl(locale, "publications") },
          { name: pub[locale].title, url },
        ])}
      />

      <article className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-wider text-muted mb-6">
          <Link href={base} className="hover:text-gold-deep">{dict.common.breadcrumbHome}</Link>
          <span className="mx-2" aria-hidden>/</span>
          <Link href={`${base}/publications`} className="hover:text-gold-deep">{t.breadcrumb}</Link>
        </nav>

        <div className="text-xs font-mono uppercase tracking-wider text-gold-deep">{pub.category[locale]}</div>
        <h1 className="mt-2 font-serif text-3xl md:text-4xl text-navy leading-tight">{pub[locale].title}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{pub[locale].excerpt}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <span>{t.author}</span>
          {pub.date && (
            <>
              <span aria-hidden>·</span>
              <span>
                {t.published} <time dateTime={pub.date}>{formatDate(pub.date, locale)}</time>
              </span>
            </>
          )}
          {pub.updated && (
            <>
              <span aria-hidden>·</span>
              <span>
                {t.updated} <time dateTime={pub.updated}>{formatDate(pub.updated, locale)}</time>
              </span>
            </>
          )}
        </div>

        {pub.image && (
          <div className="mt-6 rounded-sm border border-line overflow-hidden bg-ink">
            <Image
              src={pub.image}
              alt={pub.imageAlt?.[locale] ?? pub[locale].title}
              width={1280}
              height={883}
              className="w-full h-auto"
              priority
            />
          </div>
        )}

        <div className="mt-8">
          <RichContent blocks={pub[locale].content} />
        </div>

        <p className="mt-10 border-t border-line pt-6 text-xs text-muted leading-relaxed">{dict.common.legalDisclaimer}</p>

        <div className="mt-10 rounded-sm bg-navy text-white p-8">
          <h2 className="font-serif text-xl">{t.ctaTitle}</h2>
          <p className="mt-2 text-white/75 leading-relaxed">{t.ctaLead}</p>
          <Link
            href={`${base}/rendez-vous`}
            className="mt-6 inline-flex items-center rounded-sm bg-gold text-navy px-6 py-3 text-sm hover:bg-gold-light"
          >
            {t.cta}
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-xl text-navy">{t.related}</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((item) => (
              <ExpertiseCard key={item.slug} domain={item} locale={locale} />
            ))}
          </div>
        </div>
      )}

      <Link
        href={`${base}/publications`}
        className="mt-12 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
      >
        {t.back}
      </Link>
    </Container>
  );
}
