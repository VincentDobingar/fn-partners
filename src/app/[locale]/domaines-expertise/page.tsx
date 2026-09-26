import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { expertiseDomains } from "@/lib/data/expertise";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";

const copy = {
  fr: {
    title: "Domaines d’expertise",
    metaDescription:
      "Les 22 domaines d’expertise du cabinet FN & PARTNERS : droit des affaires, droit OHADA, contentieux, droits humains et bien plus.",
    kicker: "Domaines d’expertise",
    lead: "Un accompagnement structuré sur 22 domaines, du conseil courant aux contentieux les plus complexes.",
  },
  en: {
    title: "Areas of Expertise",
    metaDescription:
      "The 22 areas of expertise of FN & PARTNERS: business law, OHADA law, litigation, human rights and more.",
    kicker: "Areas of Expertise",
    lead: "Structured support across 22 areas, from routine advice to the most complex litigation.",
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

export default async function ExpertiseIndexPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  return (
    <Container className="py-16">
      <SectionHeading kicker={t.kicker} title={t.title} lead={t.lead} />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {expertiseDomains.map((domain) => (
          <ExpertiseCard key={domain.slug} domain={domain} locale={locale} />
        ))}
      </div>
    </Container>
  );
}
