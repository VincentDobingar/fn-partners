import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { ComingSoon } from "@/components/ui/ComingSoon";

const copy = {
  fr: {
    title: "Soumettre une demande",
    metaDescription: "Le formulaire de soumission de demande en ligne de FN & PARTNERS sera bientôt disponible.",
    lead: "Le formulaire de soumission de demande en ligne, avec vérification des conflits d’intérêts et dépôt de pièces jointes, est en cours de déploiement.",
    note: "En attendant sa mise en ligne, vous pouvez prendre rendez-vous ou contacter directement le cabinet pour exposer votre situation.",
  },
  en: {
    title: "Submit a Request",
    metaDescription: "FN & PARTNERS’ online request submission form will be available soon.",
    lead: "The online request submission form, including conflict-of-interest checks and document upload, is currently being rolled out.",
    note: "In the meantime, you can book an appointment or contact the firm directly to explain your situation.",
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

export default async function SubmitRequestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  return <ComingSoon locale={locale} title={t.title} lead={t.lead} note={t.note} />;
}
