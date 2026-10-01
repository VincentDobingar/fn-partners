import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data/firm";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/backoffice"],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
