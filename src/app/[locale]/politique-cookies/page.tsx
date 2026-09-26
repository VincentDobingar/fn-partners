import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { LegalPage } from "@/components/ui/LegalPage";

const copy = {
  fr: {
    title: "Politique relative aux cookies",
    metaDescription: "Politique relative aux cookies du site FN & PARTNERS.",
    kicker: "Informations légales",
  },
  en: {
    title: "Cookie Policy",
    metaDescription: "Cookie policy for the FN & PARTNERS website.",
    kicker: "Legal Information",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  return { title: t.title, description: t.metaDescription };
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <h2>What is a cookie?</h2>
        <p>A cookie is a small file stored on your device when you visit a website, used to remember information about your visit.</p>

        <h2>Cookies used on this site</h2>
        <ul>
          <li>Essential cookies, required for the site to function correctly</li>
          <li>Audience measurement cookies, used only with your consent</li>
        </ul>

        <h2>Managing your preferences</h2>
        <p>
          When you first visit the site, a banner lets you accept or decline non-essential cookies. You can also manage cookies directly in your browser settings at any time.
        </p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Qu’est-ce qu’un cookie ?</h2>
      <p>Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site internet, permettant de mémoriser des informations relatives à votre visite.</p>

      <h2>Cookies utilisés sur ce site</h2>
      <ul>
        <li>Cookies essentiels, nécessaires au bon fonctionnement du site</li>
        <li>Cookies de mesure d’audience, utilisés uniquement avec votre consentement</li>
      </ul>

      <h2>Gestion de vos préférences</h2>
      <p>
        Lors de votre première visite, une bannière vous permet d’accepter ou de refuser les cookies non essentiels. Vous pouvez également gérer les cookies directement depuis les paramètres de votre navigateur, à tout moment.
      </p>
    </LegalPage>
  );
}
