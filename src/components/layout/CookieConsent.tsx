"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const STORAGE_KEY = "nfp-cookie-consent";

export function CookieConsent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(value: "accepted" | "declined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // ignore storage errors (private browsing, blocked storage, etc.)
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] bg-navy text-white/90 border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-white/80 max-w-2xl">
          {dict.cookies.message}{" "}
          <Link href={`/${locale}/politique-cookies`} className="underline hover:text-gold-light">
            {dict.cookies.more}
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={() => decide("declined")}
            className="px-4 py-2 text-sm border border-white/30 rounded-sm hover:border-white"
          >
            {dict.cookies.decline}
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="px-4 py-2 text-sm bg-gold text-navy rounded-sm hover:bg-gold-light"
          >
            {dict.cookies.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
