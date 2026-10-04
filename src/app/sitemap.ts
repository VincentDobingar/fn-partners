import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/firm";
import { locales } from "@/lib/i18n/config";
import { expertiseDomains } from "@/lib/data/expertise";
import { publishedPublications } from "@/lib/data/publications";
import { resources } from "@/lib/data/resources";
import { newsItems } from "@/lib/data/news";
import { absoluteUrl } from "@/lib/seo/metadata";

type Entry = {
  path: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
  lastModified?: string;
};

const staticEntries: Entry[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "le-cabinet", changeFrequency: "monthly", priority: 0.8 },
  { path: "a-propos", changeFrequency: "monthly", priority: 0.7 },
  { path: "notre-fondateur", changeFrequency: "monthly", priority: 0.8 },
  { path: "notre-equipe", changeFrequency: "monthly", priority: 0.7 },
  { path: "domaines-expertise", changeFrequency: "monthly", priority: 0.9 },
  { path: "secteurs-intervention", changeFrequency: "monthly", priority: 0.7 },
  { path: "implantation", changeFrequency: "monthly", priority: 0.6 },
  { path: "actualites", changeFrequency: "weekly", priority: 0.7 },
  { path: "publications", changeFrequency: "weekly", priority: 0.7 },
  { path: "ressources", changeFrequency: "monthly", priority: 0.7 },
  { path: "faq", changeFrequency: "monthly", priority: 0.6 },
  { path: "galerie", changeFrequency: "monthly", priority: 0.4 },
  { path: "rendez-vous", changeFrequency: "yearly", priority: 0.8 },
  { path: "soumettre-une-demande", changeFrequency: "yearly", priority: 0.7 },
  { path: "suivre-mon-dossier", changeFrequency: "yearly", priority: 0.4 },
  { path: "contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "mentions-legales", changeFrequency: "yearly", priority: 0.2 },
  { path: "politique-de-confidentialite", changeFrequency: "yearly", priority: 0.2 },
  { path: "politique-cookies", changeFrequency: "yearly", priority: 0.2 },
  { path: "conditions-espace-client", changeFrequency: "yearly", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    ...staticEntries,
    ...expertiseDomains.map(
      (domain): Entry => ({
        path: `domaines-expertise/${domain.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    ),
    ...publishedPublications.map(
      (pub): Entry => ({
        path: `publications/${pub.slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
        lastModified: pub.updated ?? pub.date,
      })
    ),
    ...resources.map(
      (resource): Entry => ({
        path: `ressources/${resource.slug}`,
        changeFrequency: "monthly",
        priority: 0.6,
        lastModified: resource.updated,
      })
    ),
    ...newsItems.map(
      (item): Entry => ({
        path: `actualites/${item.slug}`,
        changeFrequency: "yearly",
        priority: 0.5,
        lastModified: item.date,
      })
    ),
  ];

  // Une entrée par langue, chacune déclarant ses alternances (hreflang) avec le français par défaut.
  return locales.flatMap((locale) =>
    entries.map((entry) => ({
      url: absoluteUrl(locale, entry.path),
      lastModified: entry.lastModified ?? siteConfig.lastUpdated,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {
        languages: {
          fr: absoluteUrl("fr", entry.path),
          en: absoluteUrl("en", entry.path),
          "x-default": absoluteUrl("fr", entry.path),
        },
      },
    }))
  );
}
