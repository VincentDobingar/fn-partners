import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
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
  return { title: t.title, description: t.metaDescription };
}

export default async function ClientTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  if (locale === "en") {
    return (
      <LegalPage kicker={t.kicker} title={t.title}>
        <p>
          The secure client area is currently being developed and will be made available in a future phase of the project. These terms of use will describe access conditions, the confidentiality of exchanges, each party’s responsibilities, and data retention rules once the client area is deployed.
        </p>
        <p>This page will be updated by the firm before the client area is put into service.</p>
      </LegalPage>
    );
  }

  return (
    <LegalPage kicker={t.kicker} title={t.title}>
      <p>
        L’espace client sécurisé est actuellement en cours de développement et sera mis à disposition dans une phase ultérieure du projet. Les présentes conditions décriront les conditions d’accès, la confidentialité des échanges, les responsabilités de chaque partie et les règles de conservation des données une fois l’espace client déployé.
      </p>
      <p>Cette page sera mise à jour par le cabinet avant la mise en service de l’espace client.</p>
    </LegalPage>
  );
}
