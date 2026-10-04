import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { resources, getResourceBySlug } from "@/lib/data/resources";
import { getExpertiseBySlug } from "@/lib/data/expertise";
import { Container } from "@/components/ui/Container";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/jsonld";
import { absoluteUrl, pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return locales.flatMap((locale) => resources.map((resource) => ({ locale, slug: resource.slug })));
}

export const dynamicParams = false;

const copy = {
  fr: {
    breadcrumb: "Ressources & guides",
    updated: "Mis à jour le",
    audience: "Pour qui ?",
    steps: "Les étapes",
    checklist: "Documents et informations à réunir",
    pitfalls: "Points de vigilance",
    faq: "Questions fréquentes",
    related: "Domaines d’expertise liés",
    ctaTitle: "Besoin d’un accompagnement ?",
    ctaLead: "Le cabinet peut vérifier votre dossier et vous accompagner à chaque étape.",
    cta: "Prendre rendez-vous",
    ctaRequest: "Soumettre une demande",
    back: "← Tous les guides",
  },
  en: {
    breadcrumb: "Resources & Guides",
    updated: "Updated on",
    audience: "Who is it for?",
    steps: "The steps",
    checklist: "Documents and information to gather",
    pitfalls: "Points to watch",
    faq: "Frequently Asked Questions",
    related: "Related areas of expertise",
    ctaTitle: "Need support?",
    ctaLead: "The firm can review your file and assist you at each step.",
    cta: "Book an Appointment",
    ctaRequest: "Submit a Request",
    back: "← All guides",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const resource = getResourceBySlug(slug);
  if (!resource) return {};
  return pageMetadata(locale, `ressources/${slug}`, {
    title: resource[locale].title,
    description: resource[locale].description,
    type: "article",
    publishedTime: resource.updated,
  });
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();
  const content = resource[locale];
  const dict = getDictionary(locale);
  const t = copy[locale];
  const base = `/${locale}`;
  const url = absoluteUrl(locale, `ressources/${slug}`);
  const related = resource.relatedExpertise
    .map((relatedSlug) => getExpertiseBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const updated = new Date(`${resource.updated}T00:00:00Z`).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <Container className="py-16">
      <JsonLd
        data={articleSchema({
          locale,
          title: content.title,
          description: content.description,
          datePublished: resource.updated,
          url,
        })}
      />
      <JsonLd data={faqSchema(content.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.breadcrumbHome, url: absoluteUrl(locale) },
          { name: t.breadcrumb, url: absoluteUrl(locale, "ressources") },
          { name: content.title, url },
        ])}
      />

      <article className="max-w-3xl">
        <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-wider text-muted mb-6">
          <Link href={base} className="hover:text-gold-deep">{dict.common.breadcrumbHome}</Link>
          <span className="mx-2" aria-hidden>/</span>
          <Link href={`${base}/ressources`} className="hover:text-gold-deep">{t.breadcrumb}</Link>
        </nav>

        <h1 className="font-serif text-3xl md:text-4xl text-navy leading-tight">{content.title}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{content.intro}</p>
        <p className="mt-3 text-sm text-muted">
          {t.updated} <time dateTime={resource.updated}>{updated}</time>
        </p>

        <div className="mt-8 rounded-sm border border-line bg-white p-6">
          <h2 className="font-serif text-lg text-navy">{t.audience}</h2>
          <p className="mt-2 text-ink-soft leading-relaxed">{content.audience}</p>
        </div>

        <h2 className="mt-12 font-serif text-xl md:text-2xl text-navy">{t.steps}</h2>
        <ol className="mt-6 space-y-6">
          {content.steps.map((step, index) => (
            <li key={step.title} className="flex gap-5">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy font-mono text-sm text-gold-light"
                aria-hidden
              >
                {index + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg text-navy">{step.title}</h3>
                <p className="mt-1 text-ink-soft leading-relaxed">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-12 font-serif text-xl md:text-2xl text-navy">{t.checklist}</h2>
        <ul className="mt-4 space-y-2">
          {content.checklist.map((item) => (
            <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 font-serif text-xl md:text-2xl text-navy">{t.pitfalls}</h2>
        <ul className="mt-4 space-y-2 rounded-sm border-l-2 border-gold bg-gold-light/15 px-5 py-4">
          {content.pitfalls.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-ink-soft leading-relaxed">
              <span className="text-gold-deep" aria-hidden>—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-12 mb-4 font-serif text-xl md:text-2xl text-navy">{t.faq}</h2>
        <FaqAccordion items={content.faq} />

        <p className="mt-10 border-t border-line pt-6 text-xs text-muted leading-relaxed">{dict.common.legalDisclaimer}</p>

        <div className="mt-10 rounded-sm bg-navy text-white p-8">
          <h2 className="font-serif text-xl">{t.ctaTitle}</h2>
          <p className="mt-2 text-white/75 leading-relaxed">{t.ctaLead}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={`${base}/rendez-vous`}
              className="inline-flex items-center rounded-sm bg-gold text-navy px-6 py-3 text-sm hover:bg-gold-light"
            >
              {t.cta}
            </Link>
            <Link
              href={`${base}/soumettre-une-demande`}
              className="inline-flex items-center rounded-sm border border-white/30 px-6 py-3 text-sm hover:border-gold-light hover:text-gold-light"
            >
              {t.ctaRequest}
            </Link>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <div className="mt-16">
          <h2 className="font-serif text-xl text-navy">{t.related}</h2>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {related.map((item) => (
              <ExpertiseCard key={item.slug} domain={item} locale={locale} />
            ))}
          </div>
        </div>
      )}

      <Link
        href={`${base}/ressources`}
        className="mt-12 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
      >
        {t.back}
      </Link>
    </Container>
  );
}
