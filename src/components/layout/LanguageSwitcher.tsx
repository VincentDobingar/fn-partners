"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { locales } from "@/lib/i18n/config";
import { switchLocalePath } from "@/lib/i18n/routes";

const labels: Record<Locale, string> = { fr: "FR", en: "EN" };
const names: Record<Locale, string> = { fr: "Français", en: "English" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      {locales.map((loc, index) => {
        const active = loc === locale;
        return (
          <span key={loc} className="flex items-center">
            {index > 0 && <span className="mx-1 text-line">/</span>}
            <NextLink
              href={switchLocalePath(pathname, loc)}
              hrefLang={loc}
              lang={loc}
              aria-label={names[loc]}
              aria-current={active ? "true" : undefined}
              className={active ? "text-gold-deep" : "text-muted hover:text-ink"}
            >
              {labels[loc]}
            </NextLink>
          </span>
        );
      })}
    </div>
  );
}
