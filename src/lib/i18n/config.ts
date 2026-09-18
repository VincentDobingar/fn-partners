import { siteConfig } from "@/lib/data/firm";

export const locales = siteConfig.locales;
export const defaultLocale = siteConfig.defaultLocale;

export function isLocale(value: string): value is (typeof locales)[number] {
  return (locales as readonly string[]).includes(value);
}
