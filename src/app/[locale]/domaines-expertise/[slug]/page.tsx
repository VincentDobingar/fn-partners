import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { expertiseDomains, getExpertiseBySlug } from "@/lib/data/expertise";
import { siteConfig } from "@/lib/data/firm";
import { Container } from "@/components/ui/Container";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/seo/jsonld";

export function generateStaticParams() {
  return locales.flatMap((locale) => expertiseDomains.map((domain) => ({ locale, slug: domain.slug })));
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
  return {
    title: content.title,
    description: content.summary,
    keywords: domain.keywords,
    alternates: {
      canonical: `/${locale}/domaines-expertise/${slug}`,
      languages: { fr: `/fr/domaines-expertise/${slug}`, en: `/en/domaines-expertise/${slug}` },
    },
  };
}

const ui = {
  fr: { issues: "Problématiques traitées", clients: "Clients concernés", approach: "Notre approche", faq: "Questions fréquentes", cta: "Demander une consultation", breadcrumbExpertise: "Domaines d’expertise" },
  en: { issues: "Issues We Handle", clients: "Clients We Serve", approach: "Our Approach", faq: "Frequently Asked Questions", cta: "Request a Consultation", breadcrumbExpertise: "Areas of Expertise" },
} as const;

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
  const dict = getDictionary(locale);
  const t = ui[locale];
  const base = `/${locale}`;
  const url = `${siteConfig.url}${base}/domaines-expertise/${slug}`;

  return (
    <Container className="py-16">
      <JsonLd data={faqSchema(content.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.common.breadcrumbHome, url: `${siteConfig.url}${base}` },
          { name: t.breadcrumbExpertise, url: `${siteConfig.url}${base}/domaines-expertise` },
          { name: content.title, url },
        ])}
      />
      <nav className="text-xs font-mono uppercase tracking-wider text-muted mb-6">
        <Link href={base} className="hover:text-gold-deep">{dict.common.breadcrumbHome}</Link>
        <span className="mx-2">/</span>
        <Link href={`${base}/domaines-expertise`} className="hover:text-gold-deep">{t.breadcrumbExpertise}</Link>
      </nav>

      <div className="max-w-3xl">
        <h1 className="font-serif text-3xl md:text-4xl text-navy leading-tight">{content.title}</h1>
        <p className="mt-4 text-lg text-muted leading-relaxed">{content.intro}</p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-10 max-w-4xl">
        <div>
          <h2 className="font-serif text-xl text-navy">{t.issues}</h2>
          <ul className="mt-4 space-y-2">
            {content.issues.map((issue) => (
              <li key={issue} className="flex gap-2 text-ink-soft text-sm leading-relaxed">
                <span className="text-gold-deep">—</span>
                <span>{issue}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-serif text-xl text-navy">{t.clients}</h2>
          <ul className="mt-4 space-y-2">
            {content.clients.map((client) => (
              <li key={client} className="flex gap-2 text-ink-soft text-sm leading-relaxed">
                <span className="text-gold-deep">—</span>
                <span>{client}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 max-w-3xl rounded-sm bg-white border border-line p-6">
        <h2 className="font-serif text-xl text-navy">{t.approach}</h2>
        <p className="mt-3 text-ink-soft leading-relaxed">{content.approach}</p>
      </div>

      <div className="mt-14 max-w-3xl">
        <h2 className="font-serif text-xl text-navy mb-4">{t.faq}</h2>
        <FaqAccordion items={content.faq} />
      </div>

      <div className="mt-12">
        <Link href={`${base}/rendez-vous`} className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light">
          {t.cta}
        </Link>
      </div>
    </Container>
  );
}
