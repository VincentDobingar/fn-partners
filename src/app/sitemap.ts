import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/firm";
import { locales } from "@/lib/i18n/config";
import { expertiseDomains } from "@/lib/data/expertise";
import { publications } from "@/lib/data/publications";
import { newsItems } from "@/lib/data/news";

const staticPaths = [
  "",
  "a-propos",
  "le-cabinet",
  "notre-fondateur",
  "notre-equipe",
  "galerie",
  "actualites",
  "domaines-expertise",
  "secteurs-intervention",
  "implantation",
  "publications",
  "ressources",
  "faq",
  "rendez-vous",
  "soumettre-une-demande",
  "suivre-mon-dossier",
  "contact",
  "mentions-legales",
  "politique-de-confidentialite",
  "politique-cookies",
  "conditions-espace-client",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${siteConfig.url}/${locale}${path ? `/${path}` : ""}`,
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.6,
      });
    }
    for (const domain of expertiseDomains) {
      entries.push({
        url: `${siteConfig.url}/${locale}/domaines-expertise/${domain.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
    for (const pub of publications) {
      entries.push({
        url: `${siteConfig.url}/${locale}/publications/${pub.slug}`,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
    for (const item of newsItems) {
      entries.push({
        url: `${siteConfig.url}/${locale}/actualites/${item.slug}`,
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
