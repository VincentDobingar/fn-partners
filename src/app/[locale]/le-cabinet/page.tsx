import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const copy = {
  fr: {
    title: "Le Cabinet",
    metaDescription:
      "FN & PARTNERS, cabinet d’avocats et de conseil juridique à N’Djamena, Tchad : présentation, positionnement et engagements.",
    kicker: "Le Cabinet",
    lead: "Un cabinet d’avocats et de conseil juridique d’envergure panafricaine, fondé sur l’exigence, l’intégrité et la proximité avec ses clients.",
    sections: [
      {
        title: "Notre histoire",
        text: `Fondé par Me Frédéric NANADJINGUE, Avocat au Barreau du Tchad et auprès de la Cour Africaine des Droits de l’Homme et des Peuples (Arusha), FN & PARTNERS est installé et exerce sous la supervision de l’Ordre des Avocats au Barreau du Tchad. Le cabinet regroupe des avocats et juristes aux compétences pluridisciplinaires, réunis autour d’un même exigence de service.`,
      },
      {
        title: "Notre positionnement",
        text: firm.positioning.fr,
      },
      {
        title: "Nos engagements",
        text: "Le cabinet place la confidentialité, la rigueur et la réactivité au cœur de chaque mission, qu’il s’agisse d’un conseil ponctuel, d’un accompagnement permanent ou d’un contentieux complexe.",
      },
    ],
    languagesTitle: "Nos langues de travail",
    languagesText:
      "Le cabinet communique et rédige couramment en français, langue principale, mais également en anglais, grâce aux aptitudes personnelles de certains membres dont le fondateur, permettant de répondre aux préoccupations de partenaires anglophones. À ces deux langues s’ajoute l’arabe local, utilisé oralement.",
    practiceTitle: "Conseils & contentieux",
    practiceLead: "Nos domaines de compétences s’organisent autour de deux grands types de prestations.",
    practice: [
      {
        title: "En matière de conseil",
        text: "Le cabinet fournit des prestations de manière préventive : identification des risques juridiques liés aux activités des clients, avis juridiques sur la régularité des actes et décisions prises par l’organe dirigeant, vérification de la conformité des documents et procédures au regard des textes applicables (droit du travail, droit social, droit fiscal, droit administratif).",
      },
      {
        title: "En matière de contentieux",
        text: "Le cabinet représente ses clients devant les juridictions compétentes (civiles, commerciales, sociales, administratives, pénales). Il accompagne également ses clients dans les modes alternatifs de règlement des conflits, dont l’arbitrage, la conciliation et la médiation.",
      },
    ],
    practiceAreasTitle: "Nos matières de prédilection",
    practiceAreas: [
      "Droit social",
      "Droit des sociétés & commercial",
      "Droit civil",
      "Droit pénal",
      "Assistance fiscale",
    ],
    referencesTitle: "Ils nous ont fait confiance",
    referencesLead: "Le cabinet a été sollicité par des institutions, entreprises et organisations de premier plan, au Tchad comme à l’international.",
    references: [
      "Union Européenne au Tchad",
      "Ambassade d’Allemagne au Tchad",
      "Ambassade de Hongrie au Tchad",
      "Haut-Commissariat Britannique au Tchad",
      "CEFOD",
      "Société d’Innovation des Bâtiments (SINOBAT) S.A",
      "Société Nouvelle de prestation de services (NSP) S.A",
      "Société L’AMANDINE (SARL)",
      "Banque Agricole et Commerciale (BAC)",
      "United Bank for Africa (UBA)",
      "Banque Commerciale du Chari (BCC)",
    ],
    downloadCta: "Télécharger la présentation du cabinet (PDF)",
  },
  en: {
    title: "The Firm",
    metaDescription:
      "FN & PARTNERS, a law firm and legal advisory practice in N’Djamena, Chad: overview, positioning and commitments.",
    kicker: "The Firm",
    lead: "A pan-African law firm and legal advisory practice, built on rigour, integrity and closeness to its clients.",
    sections: [
      {
        title: "Our Story",
        text: `Founded by Me Frédéric NANADJINGUE, an attorney at the Chad Bar and before the African Court on Human and Peoples’ Rights (Arusha), FN & PARTNERS is established and operates under the supervision of the Chad Bar Association. The firm brings together attorneys and legal professionals with multidisciplinary skills, united by the same commitment to client service.`,
      },
      {
        title: "Our Positioning",
        text: firm.positioning.en,
      },
      {
        title: "Our Commitments",
        text: "The firm places confidentiality, rigour and responsiveness at the heart of every engagement, whether one-off advice, ongoing support or complex litigation.",
      },
    ],
    languagesTitle: "Our Working Languages",
    languagesText:
      "The firm communicates and drafts fluently in French, its main working language, as well as in English, thanks to the personal skills of several members including the founder, allowing it to meet the needs of English-speaking partners. In addition to these two languages, local Arabic is used orally.",
    practiceTitle: "Advisory & Litigation",
    practiceLead: "Our areas of practice are organised around two main types of services.",
    practice: [
      {
        title: "Advisory Services",
        text: "The firm provides preventive services: identifying legal risks related to clients’ activities, legal opinions on the validity of acts and decisions taken by the governing body, and verifying the compliance of documents and procedures with applicable law (employment law, social law, tax law, administrative law).",
      },
      {
        title: "Litigation Services",
        text: "The firm represents its clients before the competent courts (civil, commercial, social, administrative, criminal). It also supports clients through alternative dispute resolution methods, including arbitration, conciliation and mediation.",
      },
    ],
    practiceAreasTitle: "Our Core Practice Areas",
    practiceAreas: [
      "Employment & Social Law",
      "Corporate & Commercial Law",
      "Civil Law",
      "Criminal Law",
      "Tax Assistance",
    ],
    referencesTitle: "Trusted By",
    referencesLead: "The firm has been called upon by leading institutions, companies and organisations, in Chad and internationally.",
    references: [
      "European Union in Chad",
      "Embassy of Germany in Chad",
      "Embassy of Hungary in Chad",
      "British High Commission in Chad",
      "CEFOD",
      "Société d’Innovation des Bâtiments (SINOBAT) S.A",
      "Société Nouvelle de prestation de services (NSP) S.A",
      "Société L’AMANDINE (SARL)",
      "Banque Agricole et Commerciale (BAC)",
      "United Bank for Africa (UBA)",
      "Banque Commerciale du Chari (BCC)",
    ],
    downloadCta: "Download the firm presentation (PDF)",
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

export default async function FirmPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];

  return (
    <Container className="py-16">
      <SectionHeading kicker={t.kicker} title={t.title} lead={t.lead} />

      <div className="mt-8">
        <Button href="/documents/presentation-cabinet-fn-partners.pdf" variant="secondary">
          {t.downloadCta}
        </Button>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {t.sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-serif text-xl text-navy">{section.title}</h2>
            <p className="mt-3 text-ink-soft leading-relaxed">{section.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <h2 className="font-serif text-2xl text-navy">{t.practiceTitle}</h2>
        <p className="mt-3 text-muted leading-relaxed max-w-2xl">{t.practiceLead}</p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {t.practice.map((item) => (
            <div key={item.title}>
              <h3 className="font-serif text-lg text-navy">{item.title}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-10 font-serif text-lg text-navy">{t.practiceAreasTitle}</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {t.practiceAreas.map((area) => (
            <span
              key={area}
              className="rounded-sm border border-line px-4 py-2 text-sm text-ink-soft"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <h2 className="font-serif text-2xl text-navy">{t.languagesTitle}</h2>
        <p className="mt-3 text-ink-soft leading-relaxed max-w-2xl">{t.languagesText}</p>
      </div>

      <div className="mt-16 border-t border-line pt-12">
        <h2 className="font-serif text-2xl text-navy">{t.referencesTitle}</h2>
        <p className="mt-3 text-muted leading-relaxed max-w-2xl">{t.referencesLead}</p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.references.map((ref) => (
            <li
              key={ref}
              className="flex gap-3 rounded-sm border border-line px-4 py-3 text-sm text-ink-soft"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              <span>{ref}</span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
