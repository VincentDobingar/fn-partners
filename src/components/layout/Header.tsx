"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/data/firm";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { firm } from "@/lib/data/firm";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: `${base}/a-propos`, label: dict.nav.about },
    { href: `${base}/le-cabinet`, label: dict.nav.firm },
    { href: `${base}/domaines-expertise`, label: dict.nav.expertise },
    { href: `${base}/secteurs-intervention`, label: dict.nav.sectors },
    { href: `${base}/notre-equipe`, label: dict.nav.team },
    { href: `${base}/publications`, label: dict.nav.publications },
    { href: `${base}/faq`, label: dict.nav.faq },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-raised/95 backdrop-blur border-b border-line">
      <div className="hidden md:flex justify-end bg-navy text-white/85 text-xs font-mono">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-1.5 flex justify-between">
          <span>{firm.address.city}, {firm.address.country[locale]}</span>
          <div className="flex gap-5">
            <a href={`tel:${firm.phones[0].replace(/\s/g, "")}`} className="hover:text-gold-light">
              {firm.phones[0]}
            </a>
            <a href={`mailto:${firm.email}`} className="hover:text-gold-light">
              {firm.email}
            </a>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <Link href={base} className="flex items-center gap-3 min-w-0 xl:shrink-0">
          <Image src="/images/logo-nfp.png" alt="FN & PARTNERS" width={52} height={52} className="shrink-0" />
          <div className="leading-tight min-w-0 xl:whitespace-nowrap">
            <div className="font-serif text-lg text-navy truncate">FN &amp; PARTNERS</div>
            <div className="hidden sm:block text-[10px] uppercase tracking-widest text-muted font-mono truncate">
              {firm.tagline[locale]}
            </div>
          </div>
        </Link>

        <div className="hidden xl:flex items-center gap-6 min-w-0">
          <nav className="flex items-center gap-5 text-sm text-ink-soft">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-gold-deep transition-colors whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`${base}/rendez-vous`}
              className="inline-flex items-center rounded-sm bg-navy text-white text-sm px-5 py-2.5 hover:bg-navy-light transition-colors whitespace-nowrap"
            >
              {dict.cta.appointment}
            </Link>
          </div>
        </div>

        <button
          type="button"
          className="xl:hidden p-2 text-navy shrink-0"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-line bg-raised px-6 py-5">
          <nav className="flex flex-col gap-4 text-base text-ink-soft">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="hover:text-gold-deep">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between">
            <LanguageSwitcher locale={locale} />
            <Link
              href={`${base}/rendez-vous`}
              onClick={() => setOpen(false)}
              className="inline-flex items-center rounded-sm bg-navy text-white text-sm px-5 py-2.5"
            >
              {dict.cta.appointment}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
