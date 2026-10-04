import { firm, siteConfig } from "@/lib/data/firm";
import type { Locale } from "@/lib/data/firm";
import { absoluteUrl } from "@/lib/seo/metadata";

const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
const WEBSITE_ID = `${siteConfig.url}/#website`;
const FOUNDER_ID = `${siteConfig.url}/#founder`;

export function organizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": ORGANIZATION_ID,
    name: firm.name,
    url: absoluteUrl(locale),
    logo: `${siteConfig.url}/images/logo-nfp.png`,
    image: `${siteConfig.url}/images/logo-nfp.jpeg`,
    email: firm.contactEmail,
    telephone: firm.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: firm.address.line1[locale],
      postOfficeBoxNumber: "5080",
      addressLocality: firm.address.city,
      addressCountry: "TD",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: firm.geo.lat,
      longitude: firm.geo.lng,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${firm.geo.lat},${firm.geo.lng}`,
    contactPoint: firm.phones.map((phone) => ({
      "@type": "ContactPoint",
      telephone: phone,
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    })),
    areaServed: [
      { "@type": "Country", name: firm.address.country[locale] },
      { "@type": "Place", name: locale === "fr" ? "Espace OHADA" : "OHADA area" },
      { "@type": "Continent", name: locale === "fr" ? "Afrique" : "Africa" },
    ],
    knowsLanguage: ["fr", "en"],
    founder: {
      "@type": "Person",
      "@id": FOUNDER_ID,
      name: firm.founder.name,
    },
    foundingDate: String(firm.founder.foundedYear),
    description: firm.positioning[locale],
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: firm.name,
    inLanguage: locale === "fr" ? "fr-FR" : "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function personSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FOUNDER_ID,
    name: firm.founder.name,
    jobTitle: firm.founder.title[locale],
    url: absoluteUrl(locale, "notre-fondateur"),
    image: `${siteConfig.url}/images/frederic/frederic-fondateur.jpg`,
    worksFor: { "@id": ORGANIZATION_ID },
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

/** Page de domaine d'expertise : service juridique proposé par le cabinet. */
export function serviceSchema({
  locale,
  name,
  description,
  url,
}: {
  locale: Locale;
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    serviceType: name,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: firm.address.country[locale] },
    inLanguage: locale === "fr" ? "fr-FR" : "en",
  };
}

export function articleSchema({
  locale,
  title,
  description,
  datePublished,
  dateModified,
  url,
  image,
}: {
  locale: Locale;
  title: string;
  description: string;
  /** Renseigné uniquement lorsque la date de publication est confirmée. */
  datePublished?: string;
  dateModified?: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    ...(datePublished ? { datePublished } : {}),
    ...(dateModified || datePublished ? { dateModified: dateModified ?? datePublished } : {}),
    ...(image ? { image: `${siteConfig.url}${image}` } : {}),
    url,
    mainEntityOfPage: url,
    inLanguage: locale === "fr" ? "fr-FR" : "en",
    author: { "@id": ORGANIZATION_ID, "@type": "LegalService", name: firm.name },
    publisher: { "@id": ORGANIZATION_ID, "@type": "LegalService", name: firm.name },
  };
}
