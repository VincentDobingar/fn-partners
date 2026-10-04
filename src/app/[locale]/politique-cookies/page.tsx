import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { analyticsId } from "@/lib/data/firm";
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
  return pageMetadata(locale, "politique-cookies", { title: t.title, description: t.metaDescription });
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const analyticsEnabled = analyticsId.length > 0;

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <h2>What is a cookie?</h2>
        <p>A cookie is a small file stored on your device when you visit a website, used to remember information about your visit.</p>

        <h2>Cookies used on this site</h2>
        {analyticsEnabled ? (
          <>
            <p>
              <strong>Strictly necessary items.</strong> Your choice about cookies is saved locally in your browser (it is
              not a cookie and is never sent to our servers). The client area and back office use a session cookie that
              is essential for signing in.
            </p>
            <p>
              <strong>Audience measurement (Google Analytics 4).</strong> Only if you click “Accept”, the site loads
              Google Analytics, which sets the <code>_ga</code> and <code>_ga_*</code> cookies for a maximum of 13 months.
              They are used to count visits and find out which pages are viewed, in order to improve the site. No
              advertising cookies are set and advertising features are disabled. If you refuse, nothing is loaded.
            </p>
          </>
        ) : (
          <>
            <p>
              This site does not currently set any audience-measurement or advertising cookies. The only item stored on the
              public pages is a preference saved locally in your browser (not a cookie, and never sent to our servers) to
              remember that you have seen the cookie banner. The client area and back office use a session cookie that is
              essential for signing in.
            </p>
            <p>
              Should the firm introduce audience-measurement tools in the future, this page will be updated accordingly and
              your consent will be requested beforehand via the banner.
            </p>
          </>
        )}

        <h2>Managing your preferences</h2>
        <p>
          {analyticsEnabled
            ? "You can accept or refuse audience measurement in the banner shown on your first visit, and change your choice at any time using the “Manage my cookies” link at the bottom of every page. Refusing has no effect on your browsing."
            : "You can dismiss the banner shown on your first visit."}{" "}
          You can also manage or delete cookies directly in your browser settings at any time.
        </p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Qu’est-ce qu’un cookie ?</h2>
      <p>Un cookie est un petit fichier déposé sur votre appareil lors de la visite d’un site internet, permettant de mémoriser des informations relatives à votre visite.</p>

      <h2>Cookies utilisés sur ce site</h2>
      {analyticsEnabled ? (
        <>
          <p>
            <strong>Éléments strictement nécessaires.</strong> Votre choix en matière de cookies est enregistré localement
            dans votre navigateur (ce n’est pas un cookie et il n’est jamais transmis à nos serveurs). L’espace client et
            le back-office utilisent un cookie de session indispensable à la connexion.
          </p>
          <p>
            <strong>Mesure d’audience (Google Analytics 4).</strong> Uniquement si vous cliquez sur « Accepter », le site
            charge Google Analytics, qui dépose les cookies <code>_ga</code> et <code>_ga_*</code> pour une durée maximale
            de 13 mois. Ils servent à compter les visites et à connaître les pages consultées, afin d’améliorer le site.
            Aucun cookie publicitaire n’est déposé et les fonctions publicitaires sont désactivées. Si vous refusez, rien
            n’est chargé.
          </p>
        </>
      ) : (
        <>
          <p>
            Ce site ne dépose actuellement aucun cookie de mesure d’audience ou publicitaire. Le seul élément conservé sur
            les pages publiques est une préférence enregistrée localement dans votre navigateur (et non un cookie, jamais
            transmise à nos serveurs) permettant de mémoriser que vous avez pris connaissance de la bannière relative aux
            cookies. L’espace client et le back-office utilisent un cookie de session indispensable à la connexion.
          </p>
          <p>
            Si le cabinet venait à mettre en place des outils de mesure d’audience, cette page serait mise à jour en
            conséquence et votre consentement serait demandé au préalable via la bannière.
          </p>
        </>
      )}

      <h2>Gestion de vos préférences</h2>
      <p>
        {analyticsEnabled
          ? "Vous pouvez accepter ou refuser la mesure d’audience dans la bannière affichée lors de votre première visite, et modifier votre choix à tout moment grâce au lien « Gérer mes cookies » en bas de chaque page. Un refus n’a aucune conséquence sur votre navigation."
          : "Vous pouvez fermer la bannière affichée lors de votre première visite."}{" "}
        Vous pouvez également gérer ou supprimer les cookies directement depuis les paramètres de votre navigateur, à tout
        moment.
      </p>
    </LegalPage>
  );
}
