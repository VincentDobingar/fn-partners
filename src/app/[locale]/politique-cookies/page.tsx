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
        <p>
          This site does not currently set any audience-measurement or advertising cookies. The only element stored is a preference saved locally in your browser (not a cookie, and never sent to our servers) to remember that you have seen the cookie banner.
        </p>
        <p>
          Should the firm introduce audience-measurement tools in the future, this page will be updated accordingly and your consent will be requested beforehand via the banner.
        </p>

        <h2>Managing your preferences</h2>
        <p>
          You can dismiss the banner shown on your first visit. You can also manage cookies directly in your browser settings at any time.
        </p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Qu’est-ce qu’un cookie ?</h2>
      <p>Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site internet, permettant de mémoriser des informations relatives à votre visite.</p>

      <h2>Cookies utilisés sur ce site</h2>
      <p>
        Ce site ne dépose actuellement aucun cookie de mesure d’audience ou publicitaire. Le seul élément conservé est une préférence enregistrée localement dans votre navigateur (et non un cookie, jamais transmise à nos serveurs) permettant de mémoriser que vous avez pris connaissance de la bannière relative aux cookies.
      </p>
      <p>
        Si le cabinet venait à mettre en place des outils de mesure d’audience, cette page serait mise à jour en conséquence et votre consentement serait demandé au préalable via la bannière.
      </p>

      <h2>Gestion de vos préférences</h2>
      <p>
        Vous pouvez fermer la bannière affichée lors de votre première visite. Vous pouvez également gérer les cookies directement depuis les paramètres de votre navigateur, à tout moment.
      </p>
    </LegalPage>
  );
}
