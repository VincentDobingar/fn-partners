import type { Metadata } from "next";
import { firm, siteConfig } from "@/lib/data/firm";
import type { Locale } from "@/lib/data/firm";
import { localizePath } from "@/lib/i18n/routes";

/** URL publique (relative) d'une page : `localizedHref("en", "domaines-expertise")`. */
export function localizedHref(locale: Locale, path = ""): string {
  return localizePath(`/${locale}${path ? `/${path}` : ""}`);
}

/** URL publique absolue d'une page (canonical, sitemap, données structurées). */
export function absoluteUrl(locale: Locale, path = ""): string {
  return `${siteConfig.url}${localizedHref(locale, path)}`;
}

/** Balises hreflang d'une page, avec le français comme version par défaut. */
export function languageAlternates(path = ""): Record<string, string> {
  return {
    fr: localizedHref("fr", path),
    en: localizedHref("en", path),
    "x-default": localizedHref("fr", path),
  };
}

/**
 * Métadonnées complètes d'une page : titre, description, URL canonique propre à la page,
 * alternances de langue et Open Graph. `path` est le chemin interne sans la locale
 * (ex. `"domaines-expertise/droit-ohada"`, ou `""` pour l'accueil).
 */
export function pageMetadata(
  locale: Locale,
  path: string,
  meta: {
    title: string;
    description: string;
    keywords?: string[];
    type?: "website" | "article";
    publishedTime?: string;
    image?: { url: string; alt: string };
  }
): Metadata {
  const url = localizedHref(locale, path);
  const socialTitle = `${meta.title} — ${firm.name}`;
  const images = meta.image
    ? [{ url: meta.image.url, alt: meta.image.alt }]
    : [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: firm.name }];

  return {
    title: meta.title,
    description: meta.description,
    ...(meta.keywords ? { keywords: meta.keywords } : {}),
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      title: socialTitle,
      description: meta.description,
      url,
      siteName: firm.name,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: meta.type ?? "website",
      ...(meta.type === "article" && meta.publishedTime ? { publishedTime: meta.publishedTime } : {}),
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: meta.description,
      images: images.map((image) => image.url),
    },
  };
}
