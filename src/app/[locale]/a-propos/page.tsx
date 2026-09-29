import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const copy = {
  fr: {
    title: "À propos",
    metaDescription:
      "La vision, la mission et les valeurs de FN & PARTNERS, cabinet d’avocats et de conseil juridique à N’Djamena, Tchad.",
    kicker: "À propos",
    heroTitle: "Notre vision",
    heroLead:
      "FN & PARTNERS est né de l’ambition de mettre au service du Tchad et de l’Afrique un cabinet d’avocats exigeant, intègre et ouvert sur le monde — capable de conjuguer maîtrise du droit national, du droit OHADA et du droit international.",
    missionTitle: "Notre mission",
    missionText:
      "Mettre une expertise juridique rigoureuse et pluridisciplinaire au service des entreprises, investisseurs, institutions, ONG et particuliers, en conseil comme en contentieux, avec la même exigence quel que soit le dossier.",
    visionTitle: "Notre ambition",
    visionText:
      "Devenir une référence panafricaine du conseil juridique et du contentieux, reconnue pour sa rigueur, son intégrité et sa capacité à porter la voix de ses clients jusque devant les juridictions régionales et internationales.",
    valuesTitle: "Nos valeurs",
    valuesLead: "Cinq principes guident chacune de nos interventions, du conseil ponctuel au contentieux le plus complexe.",
    values: [
      { title: "Rigueur", text: "Une analyse méthodique de chaque dossier, sans concession sur la qualité du conseil." },
      { title: "Intégrité", text: "Une pratique du droit fondée sur la confidentialité, l’honnêteté et le respect de la déontologie." },
      { title: "Professionnalisme", text: "Un haut niveau d’exigence, de compétence et de réactivité dans le traitement de chaque dossier." },
      { title: "Proximité", text: "Une disponibilité réelle et une écoute attentive des enjeux propres à chaque client." },
      { title: "Vision panafricaine", text: "Une pratique qui dépasse les frontières nationales, du Tchad jusqu’à la Cour africaine à Arusha." },
    ],
    factsTitle: "Le cabinet en bref",
    facts: [
      { label: "Fondation", value: `${firm.founder.foundedYear}` },
      { label: "Domaines d’expertise", value: `${expertiseDomains.length}` },
      { label: "Langues de travail", value: "Français, anglais, arabe local" },
      { label: "Portée", value: "Tchad, espace OHADA, Cour africaine (Arusha)" },
    ],
    linksTitle: "Pour aller plus loin",
    links: [
      { href: "notre-fondateur", label: "Notre fondateur", text: "Le parcours de Me Frédéric NANADJINGUE." },
      { href: "notre-equipe", label: "Notre équipe", text: "Les avocats et juristes qui composent le cabinet." },
      { href: "le-cabinet", label: "Le Cabinet", text: "Positionnement, engagements et références." },
      { href: "domaines-expertise", label: "Domaines d’expertise", text: "Nos 22 domaines de compétence." },
    ],
  },
  en: {
    title: "About",
    metaDescription:
      "The vision, mission and values of FN & PARTNERS, a law firm and legal advisory practice in N’Djamena, Chad.",
    kicker: "About",
    heroTitle: "Our Vision",
    heroLead:
      "FN & PARTNERS was born from the ambition to offer Chad and Africa a demanding, principled law firm, open to the world — able to combine command of national law, OHADA law and international law.",
    missionTitle: "Our Mission",
    missionText:
      "To place rigorous, multidisciplinary legal expertise at the service of companies, investors, institutions, NGOs and individuals, in both advisory and litigation matters, with the same rigour whatever the case.",
    visionTitle: "Our Ambition",
    visionText:
      "To become a pan-African reference in legal advisory and litigation, recognised for its rigour, integrity and ability to carry its clients’ voice before regional and international courts.",
    valuesTitle: "Our Values",
    valuesLead: "Five principles guide every engagement, from one-off advice to the most complex litigation.",
    values: [
      { title: "Rigour", text: "A methodical analysis of every matter, with no compromise on the quality of advice." },
      { title: "Integrity", text: "A practice of law built on confidentiality, honesty and respect for professional ethics." },
      { title: "Professionalism", text: "High standards of expertise, diligence and responsiveness in handling every matter." },
      { title: "Closeness", text: "Genuine availability and attentive listening to each client’s specific concerns." },
      { title: "Pan-African Vision", text: "A practice that reaches beyond national borders, from Chad to the African Court in Arusha." },
    ],
    factsTitle: "The Firm at a Glance",
    facts: [
      { label: "Founded", value: `${firm.founder.foundedYear}` },
      { label: "Areas of Expertise", value: `${expertiseDomains.length}` },
      { label: "Working Languages", value: "French, English, local Arabic" },
      { label: "Reach", value: "Chad, OHADA area, African Court (Arusha)" },
    ],
    linksTitle: "Learn More",
    links: [
      { href: "notre-fondateur", label: "Our Founder", text: "The background of Me Frédéric NANADJINGUE." },
      { href: "notre-equipe", label: "Our Team", text: "The attorneys and legal professionals of the firm." },
      { href: "le-cabinet", label: "The Firm", text: "Positioning, commitments and references." },
      { href: "domaines-expertise", label: "Areas of Expertise", text: "Our 22 areas of practice." },
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
  return { title: t.title, description: t.metaDescription };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <>
      <PageHero kicker={t.kicker} title={t.heroTitle} lead={t.heroLead} />
      <Container className="py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-sm border border-line bg-raised p-8">
          <h2 className="font-serif text-xl text-navy">{t.missionTitle}</h2>
          <p className="mt-3 text-ink-soft leading-relaxed">{t.missionText}</p>
        </div>
        <div className="rounded-sm border border-line bg-raised p-8">
          <h2 className="font-serif text-xl text-navy">{t.visionTitle}</h2>
          <p className="mt-3 text-ink-soft leading-relaxed">{t.visionText}</p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-serif text-2xl text-navy">{t.valuesTitle}</h2>
        <p className="mt-2 text-muted leading-relaxed max-w-2xl">{t.valuesLead}</p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {t.values.map((value) => (
            <div key={value.title} className="rounded-sm border border-line p-5">
              <div className="font-serif text-navy">{value.title}</div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{value.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 rounded-sm bg-navy text-white p-8 md:p-10">
        <h2 className="font-serif text-xl">{t.factsTitle}</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.facts.map((fact) => (
            <div key={fact.label}>
              <div className="text-xs font-mono uppercase tracking-wider text-gold-light">{fact.label}</div>
              <div className="mt-1 text-lg">{fact.value}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-serif text-2xl text-navy">{t.linksTitle}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.links.map((link) => (
            <Link
              key={link.href}
              href={`${base}/${link.href}`}
              className="group block rounded-sm border border-line bg-raised p-6 hover:border-gold transition-colors"
            >
              <h3 className="font-serif text-lg text-navy group-hover:text-gold-deep transition-colors">
                {link.label}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
      </Container>
    </>
  );
}
