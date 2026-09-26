import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { LegalPage } from "@/components/ui/LegalPage";

const copy = {
  fr: {
    title: "Politique de confidentialité",
    metaDescription: "Politique de confidentialité et de protection des données du site FN & PARTNERS.",
    kicker: "Informations légales",
  },
  en: {
    title: "Privacy Policy",
    metaDescription: "Privacy and data protection policy for the FN & PARTNERS website.",
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

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <h2>Data controller</h2>
        <p>{firm.name} is the data controller for the personal information collected through this website.</p>

        <h2>Data we collect</h2>
        <ul>
          <li>Identification and contact details provided via the appointment or contact forms</li>
          <li>Information you choose to share to describe your legal situation</li>
          <li>Technical data related to your use of the site (cookies, see our Cookie Policy)</li>
        </ul>

        <h2>Purpose of processing</h2>
        <p>
          Your data is processed solely to respond to your requests, manage appointments, and, where applicable, handle a file entrusted to the firm. It is never sold to third parties.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of your personal data by contacting the firm at {firm.email}. Detailed retention periods and procedures will be confirmed here by the firm.
        </p>

        <h2>Security</h2>
        <p>The firm implements appropriate technical and organisational measures to protect the confidentiality of your data and documents.</p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Responsable du traitement</h2>
      <p>{firm.name} est responsable du traitement des données personnelles collectées via ce site.</p>

      <h2>Données collectées</h2>
      <ul>
        <li>Coordonnées et informations d’identification fournies via les formulaires de rendez-vous ou de contact</li>
        <li>Informations que vous choisissez de communiquer pour décrire votre situation juridique</li>
        <li>Données techniques liées à votre navigation sur le site (cookies, voir notre Politique relative aux cookies)</li>
      </ul>

      <h2>Finalité du traitement</h2>
      <p>
        Vos données sont traitées uniquement pour répondre à vos demandes, gérer les rendez-vous et, le cas échéant, traiter un dossier confié au cabinet. Elles ne sont jamais cédées à des tiers.
      </p>

      <h2>Vos droits</h2>
      <p>
        Vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles en contactant le cabinet à l’adresse {firm.email}. Les durées de conservation détaillées et les procédures seront confirmées ici par le cabinet.
      </p>

      <h2>Sécurité</h2>
      <p>Le cabinet met en œuvre des mesures techniques et organisationnelles appropriées pour protéger la confidentialité de vos données et documents.</p>
    </LegalPage>
  );
}
