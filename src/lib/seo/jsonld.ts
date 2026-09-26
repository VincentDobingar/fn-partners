import { firm, siteConfig } from "@/lib/data/firm";
import type { Locale } from "@/lib/data/firm";

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: firm.name,
    url: siteConfig.url,
    email: firm.email,
    telephone: firm.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.line1[locale],
      addressLocality: firm.address.city,
      addressCountry: firm.address.country[locale],
    },
    areaServed: "Africa",
    founder: {
      "@type": "Person",
      name: firm.founder.name,
    },
    foundingDate: String(firm.founder.foundedYear),
    description: firm.positioning[locale],
  };
}

export function personSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: firm.founder.name,
    jobTitle: firm.founder.title[locale],
    worksFor: {
      "@type": "LegalService",
      name: firm.name,
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleSchema({
  title,
  description,
  datePublished,
  url,
}: {
  title: string;
  description: string;
  /** Renseigné uniquement lorsque la date de publication est confirmée. */
  datePublished?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    ...(datePublished ? { datePublished } : {}),
    url,
    author: {
      "@type": "Organization",
      name: firm.name,
    },
  };
}
