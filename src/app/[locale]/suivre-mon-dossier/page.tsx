import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { ComingSoon } from "@/components/ui/ComingSoon";

const copy = {
  fr: {
    title: "Suivre mon dossier",
    metaDescription: "L’espace client sécurisé de FN & PARTNERS, pour suivre vos dossiers, sera bientôt disponible.",
    lead: "L’espace client sécurisé, permettant de suivre l’avancement d’un dossier, d’échanger des documents et de communiquer avec le cabinet, est en cours de déploiement.",
    note: "En attendant sa mise en ligne, vous pouvez contacter directement le cabinet pour obtenir des nouvelles de votre dossier.",
  },
  en: {
    title: "Track My File",
    metaDescription: "FN & PARTNERS’ secure client area, for tracking your files, will be available soon.",
    lead: "The secure client area, allowing you to follow the progress of a file, exchange documents and communicate with the firm, is currently being rolled out.",
    note: "In the meantime, you can contact the firm directly for updates on your file.",
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
  return <ComingSoon locale={locale} title={t.title} lead={t.lead} note={t.note} />;
}
