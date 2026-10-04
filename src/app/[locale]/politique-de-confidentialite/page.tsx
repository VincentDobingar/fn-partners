import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { LegalPage } from "@/components/ui/LegalPage";

const copy = {
  fr: {
    title: "Politique de confidentialité",
    metaDescription:
      "Quelles données personnelles FN & PARTNERS collecte sur ce site, pourquoi, pendant combien de temps, et comment exercer vos droits.",
    kicker: "Informations légales",
  },
  en: {
    title: "Privacy Policy",
    metaDescription:
      "What personal data FN & PARTNERS collects on this site, why, for how long, and how to exercise your rights.",
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
  return pageMetadata(locale, "politique-de-confidentialite", { title: t.title, description: t.metaDescription });
}

// Durées de conservation : valeurs proposées par défaut, à faire valider par le cabinet.
const retention = {
  fr: [
    { data: "Messages de contact et demandes de rendez-vous (pièces jointes comprises)", period: "12 mois après le dernier échange" },
    { data: "Demandes soumises en ligne qui ne donnent pas lieu à une prise en charge", period: "12 mois après la décision du cabinet" },
    { data: "Dossiers pris en charge et documents associés", period: "Durée de la mission, puis archivage pendant la durée nécessaire au respect des obligations légales et déontologiques du cabinet" },
    { data: "Comptes de l’espace client", period: "Jusqu’à la clôture du dossier, puis désactivation" },
    { data: "Journaux techniques et de sécurité (connexions, adresse IP)", period: "12 mois" },
    { data: "Données de mesure d’audience, si vous y avez consenti", period: "13 mois au maximum" },
  ],
  en: [
    { data: "Contact messages and appointment requests (including attachments)", period: "12 months after the last exchange" },
    { data: "Online requests that do not lead to the firm taking on the matter", period: "12 months after the firm’s decision" },
    { data: "Matters taken on and related documents", period: "Duration of the engagement, then archived for as long as needed to meet the firm’s legal and professional obligations" },
    { data: "Client area accounts", period: "Until the file is closed, then deactivated" },
    { data: "Technical and security logs (sign-ins, IP address)", period: "12 months" },
    { data: "Audience-measurement data, if you consented", period: "13 months at most" },
  ],
} as const;

function RetentionTable({ locale }: { locale: Locale }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-line text-navy">
            <th scope="col" className="py-2 pr-4 font-medium">{locale === "fr" ? "Données" : "Data"}</th>
            <th scope="col" className="py-2 font-medium">{locale === "fr" ? "Durée de conservation" : "Retention period"}</th>
          </tr>
        </thead>
        <tbody>
          {retention[locale].map((row) => (
            <tr key={row.data} className="border-b border-line-soft align-top">
              <td className="py-2 pr-4">{row.data}</td>
              <td className="py-2">{row.period}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const address = `${firm.address.line1[locale]}, ${firm.address.city}, ${firm.address.country[locale]} (${firm.address.poBox})`;

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <h2>Data controller</h2>
        <p>
          {firm.name}, law firm, {address}, is the data controller for the personal information collected through this
          website. For any question about your data: <a href={`mailto:${firm.contactEmail}`}>{firm.contactEmail}</a>.
        </p>

        <h2>Data we collect</h2>
        <ul>
          <li>Contact and appointment forms: name, email, phone, the legal area concerned, the description of your situation and any documents you attach.</li>
          <li>“Submit a Request” form: the same information, plus the opposing party’s name where provided, the level of urgency, your attachments, and the IP address and browser used when the form is sent.</li>
          <li>Client area: your sign-in email, an encrypted password, verification codes and the history of your sign-ins.</li>
          <li>Technical data needed to operate and secure the site.</li>
          <li>Audience-measurement data, only if you have consented (see our Cookie Policy).</li>
        </ul>

        <h2>Why we use it</h2>
        <ul>
          <li>To reply to your messages and organise appointments, at your request.</li>
          <li>To review a request, check for conflicts of interest and, where appropriate, handle the matter entrusted to the firm.</li>
          <li>To give you secure access to your file in the client area.</li>
          <li>To keep the site secure and prevent abuse of the forms.</li>
          <li>To measure how the site is used, with your consent.</li>
        </ul>

        <h2>Who has access</h2>
        <p>
          Your data is read only by the members of the firm who need it, all of whom are bound by professional secrecy. It
          is hosted by the firm’s technical providers (website and email hosting in France) acting on its instructions.
          It is never sold or passed on to third parties for commercial purposes.
        </p>

        <h2>How long we keep it</h2>
        <RetentionTable locale={locale} />

        <h2>Your rights</h2>
        <p>
          In accordance with Chadian Law No. 007/PR/2015 on the protection of personal data, you may ask to access,
          correct or delete your data, object to its processing or withdraw your consent, by writing to{" "}
          <a href={`mailto:${firm.contactEmail}`}>{firm.contactEmail}</a>. The firm replies as promptly as possible and
          may ask for proof of identity. You may also lodge a complaint with the national authority responsible for
          personal data protection.
        </p>

        <h2>Security</h2>
        <p>
          Exchanges with the site are encrypted (HTTPS). Documents attached to a request are stored outside the
          public area of the site and are accessible only to authorised members of the firm; those attached to an
          appointment request are sent to the firm by email without being kept on the site. Access to the client area and the
          back office is protected by a password and a verification code.
        </p>

        <h2>Updates</h2>
        <p>This policy may be updated to reflect changes to the site or to the law. Last updated: 3 October 2026.</p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Responsable du traitement</h2>
      <p>
        {firm.name}, cabinet d’avocats, {address}, est responsable du traitement des données personnelles collectées via
        ce site. Pour toute question relative à vos données : <a href={`mailto:${firm.contactEmail}`}>{firm.contactEmail}</a>.
      </p>

      <h2>Données collectées</h2>
      <ul>
        <li>Formulaires de contact et de rendez-vous : nom, e-mail, téléphone, domaine juridique concerné, description de votre situation et documents que vous joignez.</li>
        <li>Formulaire « Soumettre une demande » : les mêmes informations, ainsi que le nom de la partie adverse s’il est indiqué, le niveau d’urgence, vos pièces jointes, l’adresse IP et le navigateur utilisés lors de l’envoi.</li>
        <li>Espace client : votre e-mail de connexion, un mot de passe chiffré, les codes de vérification et l’historique de vos connexions.</li>
        <li>Données techniques nécessaires au fonctionnement et à la sécurité du site.</li>
        <li>Données de mesure d’audience, uniquement si vous y avez consenti (voir notre Politique relative aux cookies).</li>
      </ul>

      <h2>Finalités du traitement</h2>
      <ul>
        <li>Répondre à vos messages et organiser les rendez-vous, à votre demande.</li>
        <li>Examiner une demande, vérifier l’absence de conflit d’intérêts et, le cas échéant, traiter le dossier confié au cabinet.</li>
        <li>Vous donner un accès sécurisé à votre dossier dans l’espace client.</li>
        <li>Assurer la sécurité du site et prévenir les abus des formulaires.</li>
        <li>Mesurer la fréquentation du site, avec votre accord.</li>
      </ul>

      <h2>Destinataires</h2>
      <p>
        Vos données sont consultées uniquement par les membres du cabinet qui en ont besoin, tous tenus au secret
        professionnel. Elles sont hébergées par les prestataires techniques du cabinet (hébergement du site et de la
        messagerie en France), qui agissent sur ses instructions. Elles ne sont jamais vendues ni cédées à des tiers à des
        fins commerciales.
      </p>

      <h2>Durées de conservation</h2>
      <RetentionTable locale={locale} />

      <h2>Vos droits</h2>
      <p>
        Conformément à la loi tchadienne n° 007/PR/2015 portant protection des données à caractère personnel, vous pouvez
        demander l’accès à vos données, leur rectification ou leur suppression, vous opposer à leur traitement ou retirer
        votre consentement, en écrivant à <a href={`mailto:${firm.contactEmail}`}>{firm.contactEmail}</a>. Le cabinet
        répond dans les meilleurs délais et peut vous demander de justifier de votre identité. Vous pouvez également
        saisir l’autorité nationale chargée de la protection des données à caractère personnel.
      </p>

      <h2>Sécurité</h2>
      <p>
        Les échanges avec le site sont chiffrés (HTTPS). Les documents joints à une demande sont conservés en dehors
        de l’espace public du site et ne sont accessibles qu’aux membres habilités du cabinet ; ceux joints à une demande
        de rendez-vous sont transmis au cabinet par e-mail sans être conservés sur le site. L’accès à l’espace
        client et au back-office est protégé par un mot de passe et un code de vérification.
      </p>

      <h2>Mise à jour</h2>
      <p>Cette politique peut être mise à jour pour tenir compte de l’évolution du site ou de la loi. Dernière mise à jour : 3 octobre 2026.</p>
    </LegalPage>
  );
}
