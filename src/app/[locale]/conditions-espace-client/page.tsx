import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { LegalPage } from "@/components/ui/LegalPage";

const copy = {
  fr: {
    title: "Conditions d’utilisation de l’espace client",
    metaDescription: "Conditions d’utilisation de l’espace client sécurisé FN & PARTNERS.",
    kicker: "Informations légales",
  },
  en: {
    title: "Client Area Terms of Use",
    metaDescription: "Terms of use for the FN & PARTNERS secure client area.",
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
  return pageMetadata(locale, "conditions-espace-client", { title: t.title, description: t.metaDescription });
}

export default async function ClientTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <h2>Purpose</h2>
        <p>
          These terms govern access to and use of {firm.name}’s secure client area, which allows a client of the
          firm to follow the progress of their file, view the associated documents, and review the history of its
          handling.
        </p>

        <h2>Access to the client area</h2>
        <p>
          Access to the client area is strictly personal and granted by name. There is no open self-registration: an
          account is created by the firm, on the initiative of a member of the team, once a file is being handled,
          and is then activated by the client via an activation link sent by e-mail. This link lets the client
          choose their password; it is for single use and expires after a limited period.
        </p>
        <p>
          Signing in is then done by e-mail and password, followed by a single-use verification code sent by e-mail
          at each sign-in (two-factor authentication).
        </p>

        <h2>User obligations</h2>
        <ul>
          <li>Keep their password confidential and never share it with any third party;</li>
          <li>Use a device and e-mail account under their sole control;</li>
          <li>Notify the firm without delay in the event of loss, theft, or suspected unauthorised use of their account;</li>
          <li>Use the client area strictly for personal purposes, to follow their own file.</li>
        </ul>

        <h2>Accessible content</h2>
        <p>
          The client area gives read-only access to information about the client’s files linked to their account:
          progress status, the history of status changes, and documents submitted as part of the request. This
          information is entered and updated by the firm; the client area does not allow the client to modify the
          content of their file or exchange messages directly with the firm — any question about a file should be
          addressed to the firm through the usual contact channels.
        </p>

        <h2>Personal data and security</h2>
        <p>
          The processing of personal data related to the client area is described in our Privacy Policy. The
          password is stored in an encrypted (hashed) form; the firm implements reasonable security measures to
          protect account access, including two-factor authentication and temporary account lockout after several
          failed sign-in attempts.
        </p>

        <h2>Service availability</h2>
        <p>
          The firm makes reasonable efforts to keep the client area accessible but does not guarantee continuous
          availability or the absence of interruptions, in particular for maintenance purposes. It cannot be held
          liable for the consequences of a temporary unavailability or a technical malfunction beyond its control.
        </p>

        <h2>Suspension and closure of access</h2>
        <p>
          The firm may suspend or deactivate an account, in particular in the event of use not complying with these
          terms, closure of the relevant file, or at the client’s request.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          The firm may amend these terms at any time; the version in force is the one published on this page.
          Continued use of the client area constitutes acceptance of the terms as amended.
        </p>

        <h2>Governing law</h2>
        <p>
          These terms are governed by the law of Chad. Any dispute relating to their interpretation or performance
          falls under the jurisdiction of the courts of Chad.
        </p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <h2>Objet</h2>
      <p>
        Les présentes conditions régissent l’accès et l’utilisation de l’espace client sécurisé de {firm.name}, qui
        permet à un client du cabinet de suivre l’avancement de son dossier, de consulter les documents associés et
        l’historique de son traitement.
      </p>

      <h2>Accès à l’espace client</h2>
      <p>
        L’accès à l’espace client est strictement personnel et nominatif. Il n’existe pas d’inscription libre : un
        compte est créé par le cabinet, à l’initiative d’un membre de l’équipe, au moment du traitement d’un
        dossier, puis activé par le client au moyen d’un lien d’activation envoyé par e-mail. Ce lien permet au
        client de choisir son mot de passe ; il est à usage unique et expire après un délai limité.
      </p>
      <p>
        La connexion s’effectue ensuite par e-mail et mot de passe, complétée par un code de vérification à usage
        unique envoyé par e-mail à chaque connexion (authentification à deux facteurs).
      </p>

      <h2>Obligations de l’utilisateur</h2>
      <ul>
        <li>Conserver la confidentialité de son mot de passe et ne le communiquer à aucun tiers ;</li>
        <li>Utiliser un appareil et une messagerie électronique dont il a seul le contrôle ;</li>
        <li>
          Informer sans délai le cabinet en cas de perte, de vol ou de soupçon d’utilisation non autorisée de son
          compte ;
        </li>
        <li>Utiliser l’espace client à des fins strictement personnelles, pour le suivi de son propre dossier.</li>
      </ul>

      <h2>Contenu accessible</h2>
      <p>
        L’espace client donne accès, en lecture seule, aux informations relatives aux dossiers du client rattachés à
        son compte : statut d’avancement, historique des changements de statut et documents transmis dans le cadre
        de la demande. Ces informations sont renseignées et mises à jour par le cabinet ; l’espace client ne permet
        pas au client de modifier le contenu de son dossier ni d’échanger directement des messages avec le cabinet —
        toute question relative à un dossier doit être adressée au cabinet par les moyens de contact habituels.
      </p>

      <h2>Données personnelles et sécurité</h2>
      <p>
        Le traitement des données personnelles liées à l’espace client est décrit dans notre Politique de
        confidentialité. Le mot de passe est conservé sous une forme chiffrée (hachage) ; le cabinet met en œuvre
        des mesures de sécurité raisonnables pour protéger l’accès au compte, notamment l’authentification à deux
        facteurs et le verrouillage temporaire du compte après plusieurs tentatives de connexion infructueuses.
      </p>

      <h2>Disponibilité du service</h2>
      <p>
        Le cabinet s’efforce de maintenir l’espace client accessible mais ne garantit pas une disponibilité continue
        ni l’absence d’interruption, notamment pour des besoins de maintenance. Il ne saurait être tenu responsable
        des conséquences d’une indisponibilité temporaire ou d’un dysfonctionnement technique indépendant de sa
        volonté.
      </p>

      <h2>Suspension et clôture de l’accès</h2>
      <p>
        Le cabinet peut suspendre ou désactiver un compte, notamment en cas d’usage non conforme aux présentes
        conditions, de clôture du dossier concerné, ou à la demande du client.
      </p>

      <h2>Modification des présentes conditions</h2>
      <p>
        Le cabinet peut modifier les présentes conditions à tout moment ; la version en vigueur est celle publiée
        sur cette page. L’utilisation continue de l’espace client vaut acceptation des conditions ainsi modifiées.
      </p>

      <h2>Droit applicable</h2>
      <p>
        Les présentes conditions sont soumises au droit tchadien. Tout litige relatif à leur interprétation ou à
        leur exécution relève de la compétence des juridictions tchadiennes.
      </p>
    </LegalPage>
  );
}
