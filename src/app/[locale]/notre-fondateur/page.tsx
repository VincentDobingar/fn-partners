import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { firm } from "@/lib/data/firm";
import { newsItems } from "@/lib/data/news";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { personSchema } from "@/lib/seo/jsonld";

const copy = {
  fr: {
    title: "Notre fondateur",
    metaDescription: "Me Frédéric NANADJINGUE, fondateur de FN & PARTNERS, avocat au Barreau du Tchad et auprès de la Cour africaine des droits de l’homme et des peuples.",
    kicker: "Notre fondateur",
    paragraphs: [
      `Me Frédéric NANADJINGUE est un avocat inscrit au tableau du Barreau du Tchad en 2015. Il est également avocat auprès de la Cour africaine des droits de l’homme et des peuples, siégeant à Arusha, en Tanzanie.`,
      `Il a fondé et dirige le cabinet FN & PARTNERS, avec l’ambition de mettre au service des clients tchadiens et africains une pratique juridique rigoureuse, intègre et ouverte sur les enjeux régionaux et internationaux. Il a été sollicité à plusieurs reprises pour donner des avis, assister, représenter et défendre les intérêts de personnes morales, de sociétés et d’ONG (nationales comme internationales) auprès des autorités et devant les instances judiciaires.`,
      `Il vient de publier un nouvel ouvrage, « La négociation des contrats miniers en droit tchadien », préfacé par le Dr Youssouf TOM, ancien Ministre de la Justice et des Droits Humains, Garde des Sceaux, avec un avant-propos du Dr Achille NGWANZA, Associé-gérant de Jus AFRICA.`,
    ],
    newBookBadge: "Nouvelle parution",
    newBookForeword: "Avant-propos : Dr Achille NGWANZA, Associé-gérant de Jus AFRICA",
    newBookPreface: "Préface : Dr Youssouf TOM, ancien Ministre de la Justice et des Droits Humains, Garde des Sceaux",
    functionsTitle: "Fonctions et engagements",
    functions: [
      "Président en exercice de la Fédération africaine des Unions et Associations des jeunes Avocats (FA-UJA)",
      "Coordonnateur du Réseau des Associations et Unions des Jeunes Avocats des Barreaux d’Afrique Centrale (RUBAC)",
      "Président de l’Union des Jeunes Avocats du Tchad (UJAT) de 2022 à 2026",
      "Inscrit en 2022 sur la liste des Conseils Défenseurs des requérants indigents auprès de la Cour africaine de Justice et des Droits de l’Homme (Arusha, Tanzanie)",
      "Enseignant-chercheur dans plusieurs établissements d’enseignement supérieur privés",
    ],
    experienceTitle: "Un carnet d’adresses au service des clients",
    experience: [
      "Consultant en matière sociale et fiscale auprès de l’Union Européenne et de l’Ambassade d’Allemagne au Tchad",
      "Consultant (avis juridique et démarches) du Haut-Commissariat Britannique lors de son installation effective au Tchad",
      "Conseil juridique de la Société d’Innovation des Bâtiments (SINOBAT) S.A",
      "Conseil de la Société Nouvelle de prestation de services (NSP) S.A",
      "Consultant auprès du CEFOD sur la question de la diya au Tchad, ainsi que sur les problématiques de harcèlement sexuel en milieu professionnel",
    ],
    publicationsTitle: "Publications",
    publications: [
      "« La justice tchadienne face au phénomène des réseaux sociaux », Maison d’Édition CIM LTD, 41 pages",
      "« La protection du consommateur des services d’internet au Tchad, état des lieux et perspectives », Editions Universitaires Européennes, 2024",
      "« La négociation des contrats miniers en droit tchadien », préfacé par Dr Youssouf TOM — nouvelle parution",
    ],
    newsTitle: "Dans l’actualité",
    newsCta: "Voir toutes les actualités →",
  },
  en: {
    title: "Our Founder",
    metaDescription: "Me Frédéric NANADJINGUE, founder of FN & PARTNERS, attorney at the Chad Bar and before the African Court on Human and Peoples’ Rights.",
    kicker: "Our Founder",
    paragraphs: [
      `Me Frédéric NANADJINGUE is an attorney admitted to the roll of the Chad Bar in 2015. He is also an attorney before the African Court on Human and Peoples’ Rights, seated in Arusha, Tanzania.`,
      `He founded and leads FN & PARTNERS, with the ambition of offering Chadian and African clients a rigorous, principled legal practice, open to regional and international matters. He has repeatedly been called upon to advise, assist, represent and defend the interests of legal entities, companies and NGOs (both national and international) before public authorities and the courts.`,
      `He has just published a new book, “La négociation des contrats miniers en droit tchadien” (Negotiating Mining Contracts under Chadian Law), with a foreword by Dr Youssouf TOM, former Minister of Justice and Human Rights, Keeper of the Seals, and an introduction by Dr Achille NGWANZA, Managing Partner of Jus AFRICA.`,
    ],
    newBookBadge: "New Release",
    newBookForeword: "Introduction: Dr Achille NGWANZA, Managing Partner of Jus AFRICA",
    newBookPreface: "Foreword: Dr Youssouf TOM, former Minister of Justice and Human Rights, Keeper of the Seals",
    functionsTitle: "Roles and Commitments",
    functions: [
      "Acting President of the African Federation of Young Lawyers’ Unions and Associations (FA-UJA)",
      "Coordinator of the Network of Central African Bar Young Lawyers’ Associations and Unions (RUBAC)",
      "President of the Union of Young Lawyers of Chad (UJAT) from 2022 to 2026",
      "Listed since 2022 among Defence Counsel for indigent applicants before the African Court of Justice and Human Rights (Arusha, Tanzania)",
      "Teaching researcher at several private higher education institutions",
    ],
    experienceTitle: "A Network Built to Serve Clients",
    experience: [
      "Consultant on social and tax matters for the European Union and the Embassy of Germany in Chad",
      "Consultant (legal opinions and procedures) for the British High Commission during its establishment in Chad",
      "Legal counsel to Société d’Innovation des Bâtiments (SINOBAT) S.A",
      "Counsel to Société Nouvelle de prestation de services (NSP) S.A",
      "Consultant to CEFOD on the diya (blood-money) question in Chad, as well as on issues of workplace sexual harassment",
    ],
    publicationsTitle: "Publications",
    publications: [
      "“La justice tchadienne face au phénomène des réseaux sociaux”, CIM LTD Publishing, 41 pages",
      "“La protection du consommateur des services d’internet au Tchad, état des lieux et perspectives”, Editions Universitaires Européennes, 2024",
      "“La négociation des contrats miniers en droit tchadien”, foreword by Dr Youssouf TOM — new release",
    ],
    newsTitle: "In the News",
    newsCta: "See all news →",
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

export default async function FounderPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const dict = getDictionary(locale);
  const base = `/${locale}`;

  return (
    <>
      <JsonLd data={personSchema(locale)} />
      <PageHero
        kicker={t.kicker}
        title={firm.founder.name}
        lead={firm.founder.title[locale]}
        breadcrumbs={[
          { label: dict.common.breadcrumbHome, href: base },
          { label: dict.nav.team, href: `${base}/notre-equipe` },
          { label: t.title },
        ]}
      />
      <Container className="py-16">
      <div className="grid md:grid-cols-3 gap-12">
        <div>
          <div className="w-full max-w-xs rounded-sm border border-line overflow-hidden shadow-sm">
            <Image
              src="/images/frederic/frederic-fondateur.jpg"
              alt={firm.founder.name}
              width={480}
              height={640}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="space-y-4">
            {t.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-soft leading-relaxed">{p}</p>
            ))}
          </div>

          <h2 className="mt-10 font-serif text-xl text-navy">{t.functionsTitle}</h2>
          <ul className="mt-3 space-y-2">
            {t.functions.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-xl text-navy">{t.experienceTitle}</h2>
          <ul className="mt-3 space-y-2">
            {t.experience.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-10 font-serif text-xl text-navy">{t.publicationsTitle}</h2>
          <ul className="mt-3 space-y-2">
            {t.publications.map((item) => (
              <li key={item} className="flex gap-3 text-ink-soft leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-sm border border-line bg-raised p-6 sm:p-8 flex flex-col sm:flex-row gap-6">
            <div className="w-32 sm:w-40 shrink-0 rounded-sm border border-line overflow-hidden self-start">
              <Image
                src="/images/publications/negociation-contrats-miniers.jpg"
                alt="La négociation des contrats miniers en droit tchadien"
                width={495}
                height={715}
                className="w-full h-auto object-cover"
              />
            </div>
            <div>
              <span className="kicker inline-block rounded-full border border-gold/40 px-3 py-1 text-gold-deep">
                {t.newBookBadge}
              </span>
              <h3 className="mt-3 font-serif text-lg text-navy leading-snug">
                « La négociation des contrats miniers en droit tchadien »
              </h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed">{t.newBookPreface}</p>
              <p className="mt-1 text-sm text-ink-soft leading-relaxed">{t.newBookForeword}</p>
            </div>
          </div>

          <h2 className="mt-10 font-serif text-xl text-navy">{t.newsTitle}</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {newsItems.map((item) => (
              <Link
                key={item.slug}
                href={`${base}/actualites/${item.slug}`}
                className="group block rounded-sm border border-line bg-raised overflow-hidden hover:border-gold transition-colors"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.imageAlt[locale]}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-sm text-navy leading-snug">{item[locale].title}</h3>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href={`${base}/actualites`}
            className="mt-4 flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
          >
            {t.newsCta}
          </Link>

          <Link
            href={`${base}/notre-equipe`}
            className="mt-10 flex items-center gap-2 text-sm font-mono uppercase tracking-wider text-gold-deep hover:text-gold-light w-fit"
          >
            {locale === "fr" ? "← Retour à l’équipe" : "← Back to the team"}
          </Link>
        </div>
      </div>
      </Container>
    </>
  );
}
