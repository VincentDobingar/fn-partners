import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";

const copy = {
  fr: {
    title: "Suivre mon dossier",
    metaDescription: "Connectez-vous à l’espace client sécurisé de FN & PARTNERS pour suivre l’avancement de votre dossier.",
    kicker: "Espace client",
    lead: "Suivez l’avancement de votre dossier, consultez les documents associés et retrouvez l’historique de vos échanges avec le cabinet, en toute confidentialité.",
    cardTitle: "Accès personnel et nominatif",
    cardBody:
      "L’accès à l’espace client vous est ouvert par le cabinet au moment du traitement de votre dossier : vous recevez par e-mail un lien d’activation personnel pour créer votre mot de passe. Si vous avez reçu cette invitation, connectez-vous ci-dessous.",
    cardNote: "Vous n’avez pas encore reçu d’invitation ? Contactez le cabinet pour toute question sur votre dossier.",
    cta1: "Accéder à mon espace",
    cta2: "Nous contacter",
  },
  en: {
    title: "Track My File",
    metaDescription: "Sign in to FN & PARTNERS’ secure client area to follow the progress of your file.",
    kicker: "Client area",
    lead: "Follow the progress of your file, access the related documents and review the history of your exchanges with the firm, in full confidentiality.",
    cardTitle: "Personal, named access",
    cardBody:
      "Access to the client area is granted by the firm once your file is being handled: you receive a personal activation link by e-mail to set your password. If you’ve received this invitation, sign in below.",
    cardNote: "Haven’t received an invitation yet? Contact the firm with any questions about your file.",
    cta1: "Access my client area",
    cta2: "Contact Us",
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

export default async function TrackFilePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16 md:py-20">
        <div className="mx-auto max-w-xl rounded-sm border border-line bg-raised p-10 md:p-14 text-center shadow-sm">
          <h2 className="font-serif text-xl text-navy">{t.cardTitle}</h2>
          <p className="mt-4 text-muted leading-relaxed">{t.cardBody}</p>
          <p className="mt-3 text-sm text-muted italic">{t.cardNote}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/client/login">{t.cta1}</Button>
            <Button href={`${base}/contact`} variant="ghost">
              {t.cta2}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
