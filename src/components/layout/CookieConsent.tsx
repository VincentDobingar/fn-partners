"use client";

import { useEffect, useState } from "react";
import Link from "@/components/ui/Link";
import type { Locale } from "@/lib/data/firm";
import { analyticsId } from "@/lib/data/firm";
import type { Dictionary } from "@/lib/i18n/dictionaries";

const STORAGE_KEY = "nfp-cookie-consent";
/** Événement émis par le lien « Gérer mes cookies » du pied de page pour rouvrir le bandeau. */
export const OPEN_COOKIE_SETTINGS_EVENT = "nfp:open-cookie-settings";

type Choice = "accepted" | "refused" | "seen" | null;

function readChoice(): Choice {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "refused" || value === "seen" ? value : null;
  } catch {
    return null;
  }
}

function storeChoice(choice: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, choice);
  } catch {
    // stockage indisponible (navigation privée, stockage bloqué…) : le choix vaut pour la page en cours
  }
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Charge Google Analytics 4 — appelé uniquement après un consentement explicite. */
function loadAnalytics() {
  if (!analyticsId || document.getElementById("ga4-script")) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${analyticsId}`] = false;
  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer?.push(arguments);
  };
  window.gtag("js", new Date());
  // Adresses IP anonymisées par GA4 ; cookies limités à 13 mois, sans signaux publicitaires.
  window.gtag("config", analyticsId, {
    cookie_expires: 34128000,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
  document.head.appendChild(script);
}

function disableAnalytics() {
  if (!analyticsId) return;
  (window as unknown as Record<string, unknown>)[`ga-disable-${analyticsId}`] = true;
}

export function CookieConsent({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [visible, setVisible] = useState(false);
  const analyticsEnabled = analyticsId.length > 0;

  useEffect(() => {
    // Le choix n'est lisible que côté navigateur (localStorage) : aucune valeur pendant le rendu serveur.
    const choice = readChoice();
    if (analyticsEnabled && choice === "accepted") loadAnalytics();
    // Avec mesure d'audience, un simple « vu » (ancien bandeau informatif) ne vaut pas consentement.
    const answered = analyticsEnabled ? choice === "accepted" || choice === "refused" : choice !== null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(!answered);

    const reopen = () => setVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, reopen);
  }, [analyticsEnabled]);

  function answer(choice: Exclude<Choice, null>) {
    storeChoice(choice);
    if (choice === "accepted") loadAnalytics();
    if (choice === "refused") disableAnalytics();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={dict.cookies.label}
      className="fixed inset-x-0 bottom-0 z-[60] bg-navy text-white/90 border-t border-white/10"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
        <p className="text-sm text-white/80 max-w-2xl">
          {analyticsEnabled ? dict.cookies.consentMessage : dict.cookies.message}{" "}
          <Link href={`/${locale}/politique-cookies`} className="underline hover:text-gold-light">
            {dict.cookies.more}
          </Link>
        </p>
        <div className="flex flex-wrap gap-3 shrink-0">
          {analyticsEnabled ? (
            <>
              <button
                type="button"
                onClick={() => answer("refused")}
                className="px-4 py-2 text-sm border border-white/30 rounded-sm hover:border-gold-light hover:text-gold-light"
              >
                {dict.cookies.refuse}
              </button>
              <button
                type="button"
                onClick={() => answer("accepted")}
                className="px-4 py-2 text-sm bg-gold text-navy rounded-sm hover:bg-gold-light"
              >
                {dict.cookies.accept}
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => answer("seen")}
              className="px-4 py-2 text-sm bg-gold text-navy rounded-sm hover:bg-gold-light"
            >
              {dict.cookies.dismiss}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

/** Lien du pied de page permettant de revenir à tout moment sur son choix. */
export function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className="text-left hover:text-gold-light"
    >
      {label}
    </button>
  );
}
