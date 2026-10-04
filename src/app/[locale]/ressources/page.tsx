import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo/metadata";
import Link from "@/components/ui/Link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { resources } from "@/lib/data/resources";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "Ressources et guides pratiques",
    metaDescription:
      "Guides pratiques de FN & PARTNERS : créer son entreprise au Tchad, recouvrer une créance en zone OHADA, s’implanter au Tchad en tant qu’investisseur étranger.",
    kicker: "Ressources & guides",
    lead: "Des guides pratiques pour mieux comprendre vos démarches juridiques au Tchad et dans l’espace OHADA.",
    steps: "étapes",
    read: "Consulter le guide →",
    moreTitle: "Pour aller plus loin",
    more: [
      { href: "publications", label: "Publications", text: "Les analyses juridiques du cabinet." },
      { href: "faq", label: "FAQ juridique", text: "Les réponses aux questions les plus fréquentes." },
      { href: "domaines-expertise", label: "Domaines d’expertise", text: "Les 22 domaines d’intervention du cabinet." },
    ],
  },
  en: {
    title: "Resources & Practical Guides",
    metaDescription:
      "Practical guides from FN & PARTNERS: setting up a business in Chad, recovering a debt in the OHADA area, establishing in Chad as a foreign investor.",
    kicker: "Resources & Guides",
    lead: "Practical guides to help you better understand legal procedures in Chad and the OHADA area.",
    steps: "steps",
    read: "Read the guide →",
    moreTitle: "Further reading",
    more: [
      { href: "publications", label: "Publications", text: "The firm’s legal analysis." },
      { href: "faq", label: "Legal FAQ", text: "Answers to the most frequently asked questions." },
      { href: "domaines-expertise", label: "Areas of Expertise", text: "The firm’s 22 areas of practice." },
    ],
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
  return pageMetadata(locale, "ressources", { title: t.title, description: t.metaDescription });
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} />
      <Container className="py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`${base}/ressources/${resource.slug}`}
              className="group flex flex-col rounded-sm border border-line bg-raised p-6 shadow-sm transition-colors hover:border-gold"
            >
              <span className="text-xs font-mono uppercase tracking-wider text-gold-deep">
                {resource[locale].steps.length} {t.steps}
              </span>
              <h2 className="mt-2 font-serif text-lg text-navy group-hover:text-gold-deep transition-colors">
                {resource[locale].title}
              </h2>
              <p className="mt-2 text-sm text-muted leading-relaxed">{resource[locale].description}</p>
              <span className="mt-auto pt-4 text-xs font-mono uppercase tracking-wider text-gold-deep">{t.read}</span>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-serif text-2xl text-navy">{t.moreTitle}</h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-5">
            {t.more.map((link) => (
              <Link
                key={link.href}
                href={`${base}/${link.href}`}
                className="group block rounded-sm border border-line p-6 hover:border-gold transition-colors"
              >
                <h3 className="font-serif text-lg text-navy group-hover:text-gold-deep transition-colors">{link.label}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{link.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
