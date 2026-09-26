import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { publications, getPublicationBySlug } from "@/lib/data/publications";
import { siteConfig } from "@/lib/data/firm";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return locales.flatMap((locale) => publications.map((pub) => ({ locale, slug: pub.slug })));
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
  return { title: pub[locale].title, description: pub[locale].excerpt };
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
  const base = `/${locale}`;

  return (
    <Container className="py-16 max-w-3xl">
      <JsonLd
        data={articleSchema({
          title: pub[locale].title,
          description: pub[locale].excerpt,
          ...(pub.date ? { datePublished: pub.date } : {}),
          url: `${siteConfig.url}${base}/publications/${slug}`,
        })}
      />
      <div className="text-xs font-mono uppercase tracking-wider text-gold-deep">{pub.category[locale]}</div>
      <h1 className="mt-2 font-serif text-3xl md:text-4xl text-navy leading-tight">{pub[locale].title}</h1>
      {pub.date && (
        <time dateTime={pub.date} className="mt-2 block text-sm text-muted">{pub.date}</time>
      )}
      {pub.isDemo && (
        <div className="mt-4 inline-block text-xs font-mono uppercase tracking-wider text-gold-deep bg-gold-light/20 px-3 py-1 rounded-sm">
          {dict.common.demoContent}
        </div>
      )}

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

      <div className="mt-8 space-y-4">
        {pub[locale].content.map((paragraph, i) => (
          <p key={i} className="text-ink-soft leading-relaxed">{paragraph}</p>
        ))}
      </div>
    </Container>
  );
}
