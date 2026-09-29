import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm, siteConfig } from "@/lib/data/firm";
import { teamMembers } from "@/lib/data/team";
import { LegalPage } from "@/components/ui/LegalPage";

const publicationDirector = teamMembers.find((member) => member.name === "Elise DAGOSSE");

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
        <p>Tax identification number (NIF): {firm.nif}. As a regulated legal profession, the firm is not required to register with the Trade and Personal Property Credit Register (RCCM).</p>
        <p>Publication director: {publicationDirector?.name} — {publicationDirector?.role.en}.</p>
        <p>Contact: {firm.email} — {firm.phones[0]}</p>

        <h2>Hosting</h2>
        <p>
          This website is hosted by O2SWITCH SARL, Chemin des Pardiaux, 63000 Clermont-Ferrand, France — www.o2switch.fr.
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
      <p>Numéro d’Identification Fiscale (NIF) : {firm.nif}. En tant que profession juridique réglementée, le cabinet n’est pas soumis à l’immatriculation au Registre du Commerce et du Crédit Mobilier (RCCM).</p>
      <p>Directeur de la publication : {publicationDirector?.name} — {publicationDirector?.role.fr}.</p>
      <p>Contact : {firm.email} — {firm.phones[0]}</p>

      <h2>Hébergement</h2>
      <p>
        Ce site est hébergé par O2SWITCH SARL, Chemin des Pardiaux, 63000 Clermont-Ferrand, France — www.o2switch.fr.
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
