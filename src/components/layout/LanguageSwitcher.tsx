"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/data/firm";
import { locales } from "@/lib/i18n/config";

const labels: Record<Locale, string> = { fr: "FR", en: "EN" };

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/");

  return (
    <div className="flex items-center gap-1 font-mono text-xs">
      {locales.map((loc, index) => {
        const targetSegments = [...segments];
        targetSegments[1] = loc;
        const href = targetSegments.join("/") || "/";
        const active = loc === locale;
        return (
          <span key={loc} className="flex items-center">
            {index > 0 && <span className="mx-1 text-line">/</span>}
            <Link
              href={href}
              aria-current={active ? "true" : undefined}
              className={active ? "text-gold-deep" : "text-muted hover:text-ink"}
            >
              {labels[loc]}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
