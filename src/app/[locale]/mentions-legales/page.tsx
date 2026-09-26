import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm, siteConfig } from "@/lib/data/firm";
import { LegalPage } from "@/components/ui/LegalPage";

const copy = {
  fr: {
    title: "Mentions légales",
    metaDescription: "Mentions légales du site FN & PARTNERS.",
    kicker: "Informations légales",
  },
  en: {
    title: "Legal Notice",
    metaDescription: "Legal notice for the FN & PARTNERS website.",
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

export default async function LegalNoticePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <h2>Publisher</h2>
        <p>
          This website is published by {firm.name}, {firm.tagline.en}, located at {firm.address.line1.en}, {firm.address.city}, {firm.address.country.en} ({firm.address.poBox}).
        </p>
        <p>Tax identification number (NIF): {firm.nif}. Business registration number (RCCM): to be completed.</p>
        <p>Publication director: {firm.founder.name} — to be confirmed by the firm.</p>
        <p>Contact: {firm.email} — {firm.phones[0]}</p>

        <h2>Hosting</h2>
        <p>
          The domain name, hosting and associated professional email addresses are provided under the terms agreed with the firm’s digital services partner. Full hosting provider details will be added here once finalised.
        </p>

        <h2>Intellectual property</h2>
        <p>
          The overall structure of this website, as well as the texts, images and other elements composing it, are the property of {firm.name} or are used with the necessary authorisations, unless otherwise stated.
        </p>

        <h2>Website URL</h2>
        <p>{siteConfig.url}</p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Éditeur du site</h2>
      <p>
        Le présent site est édité par {firm.name}, {firm.tagline.fr}, dont le siège est situé {firm.address.line1.fr}, {firm.address.city}, {firm.address.country.fr} ({firm.address.poBox}).
      </p>
      <p>Numéro d’Identification Fiscale (NIF) : {firm.nif}. Numéro RCCM : à compléter.</p>
      <p>Directeur de la publication : {firm.founder.name} — à confirmer par le cabinet.</p>
      <p>Contact : {firm.email} — {firm.phones[0]}</p>

      <h2>Hébergement</h2>
      <p>
        Le nom de domaine, l’hébergement et les adresses e-mail professionnelles associées sont fournis dans le cadre de l’accord conclu avec le partenaire numérique du cabinet. Les coordonnées complètes de l’hébergeur seront ajoutées ici une fois finalisées.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        La structure générale de ce site, ainsi que les textes, images et autres éléments qui le composent, sont la propriété de {firm.name} ou sont utilisés avec les autorisations nécessaires, sauf mention contraire.
      </p>

      <h2>Adresse du site</h2>
      <p>{siteConfig.url}</p>
    </LegalPage>
  );
}
