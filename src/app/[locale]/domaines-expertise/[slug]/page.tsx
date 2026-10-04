import type { Metadata } from "next";
import Link from "@/components/ui/Link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { firm } from "@/lib/data/firm";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { expertiseDomains, getExpertiseBySlug } from "@/lib/data/expertise";
import { getExpertiseDetail } from "@/lib/data/expertiseDetails";
import { Container } from "@/components/ui/Container";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema, serviceSchema } from "@/lib/seo/jsonld";
import { absoluteUrl, pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return locales.flatMap((locale) => expertiseDomains.map((domain) => ({ locale, slug: domain.slug })));
}

const metaSuffix: Record<Locale, string> = {
  fr: `${firm.name}, cabinet d’avocats à N’Djamena (Tchad).`,
  en: `${firm.name}, law firm in N’Djamena, Chad.`,
};

function metaDescription(summary: string, locale: Locale): string {
  return summary.length < 120 ? `${summary} ${metaSuffix[locale]}` : summary;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const domain = getExpertiseBySlug(slug);
  if (!domain) return {};
  const content = domain[locale];
  return pageMetadata(locale, `domaines-expertise/${slug}`, {
    title: content.title,
    description: metaDescription(content.summary, locale),
    keywords: domain.keywords,
  });
}

const ui = {
  fr: {
    issues: "Problématiques traitées",
    clients: "Clients concernés",
    services: "Comment nous intervenons",
    approach: "Notre approche",
    framework: "Cadre juridique de référence",
    faq: "Questions fréquentes",
    ctaTitle: "Parlons de votre situation",
    ctaLead: "Un premier échange permet de cerner votre besoin et de vous indiquer les options envisageables.",
    cta: "Demander une consultation",
    ctaRequest: "Soumettre une demande",
    related: "Domaines connexes",
    breadcrumbExpertise: "Domaines d’expertise",
  },
  en: {
    issues: "Issues We Handle",
    clients: "Clients We Serve",
    services: "How We Work",
    approach: "Our Approach",
    framework: "Legal Framework",
    faq: "Frequently Asked Questions",
    ctaTitle: "Let’s discuss your situation",
    ctaLead: "A first conversation helps define your need and outline the options available.",
    cta: "Request a Consultation",
    ctaRequest: "Submit a Request",
    related: "Related Areas",
    breadcrumbExpertise: "Areas of Expertise",
  },
} as const;

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-ink-soft text-sm leading-relaxed">
          <span className="text-gold-deep" aria-hidden>—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ExpertiseDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const domain = getExpertiseBySlug(slug);
  if (!domain) notFound();
  const content = domain[locale];
  const entry = getExpertiseDetail(slug);
  const detail = entry?.[locale];
  const dict = getDictionary(locale);
  const t = ui[locale];
  const base = `/${locale}`;
  const url = absoluteUrl(locale, `domaines-expertise/${slug}`);

  const faq = [...content.faq, ...(detail?.faq ?? [])];
  const related = (entry?.related ?? [])
    .map((relatedSlug) => getExpertiseBySlug(relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <Container className="py-16">
      <JsonLd data={serviceSchema({ locale, name: content.title, description: content.summary, url })} />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.breadcrumbHome, url: absoluteUrl(locale) },
          { name: t.breadcrumbExpertise, url: absoluteUrl(locale, "domaines-expertise") },
          { name: content.title, url },
        ])}
      />
      <nav aria-label="Breadcrumb" className="text-xs font-mono uppercase tracking-wider text-muted mb-6">
        <Link href={base} className="hover:text-gold-deep">{dict.common.breadcrumbHome}</Link>
        <span className="mx-2" aria-hidden>/</span>
        <Link href={`${base}/domaines-expertise`} className="hover:text-gold-deep">{t.breadcrumbExpertise}</Link>
      </nav>

      <div className="max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl text-navy leading-tight">{content.title}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{content.intro}</p>
        {detail && (
          <div className="mt-6 space-y-4">
            {detail.overview.map((paragraph) => (
              <p key={paragraph} className="text-ink-soft leading-relaxed">{paragraph}</p>
            ))}
          </div>
        )}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl">
        <div>
          <h2 className="font-serif text-xl text-navy">{t.issues}</h2>
          <BulletList items={content.issues} />
        </div>
        <div>
          <h2 className="font-serif text-xl text-navy">{t.clients}</h2>
          <BulletList items={content.clients} />
        </div>
      </div>

      {detail && (
        <div className="mt-14 max-w-4xl">
          <h2 className="font-serif text-xl text-navy">{t.services}</h2>
          <div className="mt-5 grid sm:grid-cols-2 gap-5">
            {detail.services.map((service) => (
              <div key={service.title} className="rounded-sm border border-line bg-raised p-5">
                <h3 className="font-serif text-base text-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 max-w-3xl rounded-sm bg-white border border-line p-6">
        <h2 className="font-serif text-xl text-navy">{t.approach}</h2>
        <p className="mt-3 text-ink-soft leading-relaxed">{content.approach}</p>
      </div>

      {detail && (
        <div className="mt-12 max-w-3xl">
          <h2 className="font-serif text-xl text-navy">{t.framework}</h2>
          <BulletList items={detail.framework} />
        </div>
      )}

      <div className="mt-14 max-w-3xl">
        <h2 className="font-serif text-xl text-navy mb-4">{t.faq}</h2>
        <FaqAccordion items={faq} />
        <p className="mt-6 text-xs text-muted leading-relaxed">{dict.common.legalDisclaimer}</p>
      </div>

      <div className="mt-14 max-w-3xl rounded-sm bg-navy text-white p-8">
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
    </Container>
  );
}
