import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { firm } from "@/lib/data/firm";
import { expertiseDomains } from "@/lib/data/expertise";
import { publications } from "@/lib/data/publications";
import { newsItems } from "@/lib/data/news";
import { generalFaq } from "@/lib/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExpertiseCard } from "@/components/ui/ExpertiseCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";

const copy = {
  fr: {
    heroKicker: "Cabinet d’avocats — N’Djamena, Tchad",
    heroTitle: "Un partenaire juridique stratégique au Tchad et en Afrique",
    heroLead:
      "FN & PARTNERS accompagne entreprises, investisseurs, institutions et particuliers avec rigueur, confidentialité et une vision panafricaine du droit.",
    heroCta1: "Prendre rendez-vous",
    heroCta2: "Soumettre une demande",
    heroCta3: "Accéder à mon dossier",
    aboutKicker: "Le Cabinet",
    aboutTitle: "Une expertise juridique panafricaine, une approche personnalisée",
    aboutLead:
      "Fondé en 2021 par Me Frédéric NANADJINGUE, avocat au Barreau du Tchad et avocat auprès de la Cour africaine des droits de l’homme et des peuples, FN & PARTNERS conseille et défend ses clients avec la même exigence, qu’il s’agisse d’un particulier, d’une entreprise ou d’une institution.",
    aboutCta: "Découvrir le cabinet",
    founderKicker: "Notre fondateur",
    founderTitle: firm.founder.name,
    founderText:
      "Avocat au Barreau du Tchad et avocat auprès de la Cour africaine des droits de l’homme et des peuples à Arusha, Me Frédéric NANADJINGUE a fondé FN & PARTNERS avec l’ambition d’offrir au Tchad et à l’Afrique un cabinet d’envergure internationale.",
    founderCta: "Voir le profil complet",
    whyKicker: "Pourquoi choisir FN & PARTNERS",
    whyTitle: "Une exigence constante, quel que soit le dossier",
    why: [
      { title: "Expertise", text: "Une maîtrise approfondie du droit national, OHADA et international." },
      { title: "Confidentialité", text: "Une protection stricte des informations et documents de nos clients." },
      { title: "Réactivité", text: "Une écoute attentive et des réponses adaptées aux urgences de chaque dossier." },
      { title: "Vision panafricaine", text: "Une pratique qui dépasse les frontières nationales, jusqu’à Arusha." },
      { title: "Approche personnalisée", text: "Un accompagnement sur mesure, sans solution standardisée." },
    ],
    expertiseKicker: "Domaines d’expertise",
    expertiseTitle: "22 domaines d’expertise au service de vos enjeux",
    expertiseLead: "Un accompagnement structuré, du conseil courant aux contentieux les plus complexes.",
    newsKicker: "Actualités",
    newsTitle: "Dernières actualités",
    pubKicker: "Publications",
    pubTitle: "Dernières publications",
    faqKicker: "Questions fréquentes",
    faqTitle: "Ce que nos clients demandent le plus souvent",
    ctaTitle: "Un besoin juridique ? Parlons-en.",
    ctaLead: "Prenez rendez-vous en ligne ou contactez directement le cabinet.",
  },
  en: {
    heroKicker: "Law Firm — N’Djamena, Chad",
    heroTitle: "A strategic legal partner in Chad and across Africa",
    heroLead:
      "FN & PARTNERS supports companies, investors, institutions and individuals with rigour, confidentiality and a pan-African vision of the law.",
    heroCta1: "Book an Appointment",
    heroCta2: "Submit a Request",
    heroCta3: "Access My File",
    aboutKicker: "The Firm",
    aboutTitle: "Pan-African legal expertise, a personalised approach",
    aboutLead:
      "Founded in 2021 by Me Frédéric NANADJINGUE, an attorney at the Chad Bar and before the African Court on Human and Peoples’ Rights, FN & PARTNERS advises and defends its clients with the same rigour, whether an individual, a company or an institution.",
    aboutCta: "Discover the firm",
    founderKicker: "Our Founder",
    founderTitle: firm.founder.name,
    founderText:
      "An attorney at the Chad Bar and before the African Court on Human and Peoples’ Rights in Arusha, Me Frédéric NANADJINGUE founded FN & PARTNERS with the ambition of offering Chad and Africa a firm of international standing.",
    founderCta: "View full profile",
    whyKicker: "Why Choose FN & PARTNERS",
    whyTitle: "Consistent rigour, whatever the matter",
    why: [
      { title: "Expertise", text: "A thorough command of national, OHADA and international law." },
      { title: "Confidentiality", text: "Strict protection of our clients’ information and documents." },
      { title: "Responsiveness", text: "Attentive listening and answers suited to each matter’s urgency." },
      { title: "Pan-African vision", text: "A practice that reaches beyond national borders, as far as Arusha." },
      { title: "Personalised approach", text: "Tailored support, with no one-size-fits-all solution." },
    ],
    expertiseKicker: "Areas of Expertise",
    expertiseTitle: "22 areas of expertise serving your objectives",
    expertiseLead: "Structured support, from routine advice to the most complex litigation.",
    newsKicker: "News",
    newsTitle: "Latest News",
    pubKicker: "Publications",
    pubTitle: "Latest Publications",
    faqKicker: "Frequently Asked Questions",
    faqTitle: "What our clients ask most often",
    ctaTitle: "A legal need? Let’s talk.",
    ctaLead: "Book an appointment online or contact the firm directly.",
  },
} as const;

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "fr";
  const dict = getDictionary(locale);
  const t = copy[locale];
  const base = `/${locale}`;

  const latestNews = [...newsItems]
    .sort((a, b) => {
      if (a.date && b.date) return b.date.localeCompare(a.date);
      if (a.date) return -1;
      if (b.date) return 1;
      return 0;
    })
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-white to-paper">
        <Container className="py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="kicker mb-4">{t.heroKicker}</div>
            <h1 className="font-serif text-4xl md:text-5xl text-navy leading-[1.1]">{t.heroTitle}</h1>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-xl">{t.heroLead}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`${base}/rendez-vous`} className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light">
                {t.heroCta1}
              </Link>
              <Link href={`${base}/soumettre-une-demande`} className="inline-flex items-center rounded-sm bg-gold text-navy px-6 py-3 text-sm hover:bg-gold-light">
                {t.heroCta2}
              </Link>
              <Link href={`${base}/suivre-mon-dossier`} className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-deep">
                {t.heroCta3}
              </Link>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full bg-white border border-line flex items-center justify-center shadow-sm">
              <Image src="/images/logo-nfp.jpeg" alt="FN & PARTNERS" width={180} height={180} className="w-3/5 h-auto" />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid md:grid-cols-2 gap-12 items-start">
          <SectionHeading kicker={t.aboutKicker} title={t.aboutTitle} lead={t.aboutLead} />
          <div className="flex md:justify-end">
            <Link href={`${base}/le-cabinet`} className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-deep">
              {t.aboutCta}
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-navy text-white">
        <Container className="grid md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1">
            <div className="kicker text-gold-light mb-3">{t.founderKicker}</div>
            <h2 className="font-serif text-2xl md:text-3xl">{t.founderTitle}</h2>
          </div>
          <div className="md:col-span-2">
            <p className="text-white/75 leading-relaxed">{t.founderText}</p>
            <Link href={`${base}/notre-fondateur`} className="mt-5 inline-flex items-center text-sm text-gold-light hover:text-gold underline underline-offset-4">
              {t.founderCta} →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading kicker={t.whyKicker} title={t.whyTitle} align="center" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.why.map((item) => (
              <div key={item.title} className="rounded-sm border border-line p-5">
                <div className="font-serif text-navy">{item.title}</div>
                <p className="mt-2 text-sm text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-y border-line">
        <Container>
          <SectionHeading kicker={t.expertiseKicker} title={t.expertiseTitle} lead={t.expertiseLead} />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertiseDomains.slice(0, 6).map((domain) => (
              <ExpertiseCard key={domain.slug} domain={domain} locale={locale} />
            ))}
          </div>
          <div className="mt-8">
            <Link href={`${base}/domaines-expertise`} className="text-sm font-mono uppercase tracking-wider text-gold-deep">
              {dict.cta.seeAllExpertise} →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading kicker={t.newsKicker} title={t.newsTitle} />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {latestNews.map((item) => (
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
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  {(item.video || item.externalVideoUrl) && (
                    <span className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                        <span className="ml-0.5 border-y-[8px] border-y-transparent border-l-[13px] border-l-navy" />
                      </span>
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg text-navy leading-snug">{item[locale].title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{item[locale].excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href={`${base}/actualites`} className="text-sm font-mono uppercase tracking-wider text-gold-deep">
              {dict.cta.seeAllNews} →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading kicker={t.pubKicker} title={t.pubTitle} />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {publications.slice(0, 3).map((pub) => (
              <Link
                key={pub.slug}
                href={`${base}/publications/${pub.slug}`}
                className="block rounded-sm border border-line p-6 hover:border-gold transition-colors"
              >
                <div className="text-xs font-mono uppercase tracking-wider text-gold-deep">{pub.category[locale]}</div>
                <h3 className="mt-2 font-serif text-lg text-navy">{pub[locale].title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{pub[locale].excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href={`${base}/publications`} className="text-sm font-mono uppercase tracking-wider text-gold-deep">
              {dict.cta.seeAllPublications} →
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white border-t border-line">
        <Container className="max-w-3xl">
          <SectionHeading kicker={t.faqKicker} title={t.faqTitle} align="center" />
          <div className="mt-10">
            <FaqAccordion items={generalFaq.slice(0, 4).map((item) => item[locale])} />
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gold-light/20">
        <Container className="text-center">
          <h2 className="font-serif text-3xl text-navy">{t.ctaTitle}</h2>
          <p className="mt-3 text-muted">{t.ctaLead}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`${base}/rendez-vous`} className="inline-flex items-center rounded-sm bg-navy text-white px-6 py-3 text-sm hover:bg-navy-light">
              {dict.cta.appointment}
            </Link>
            <Link href={`${base}/contact`} className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm hover:border-gold hover:text-gold-deep">
              {dict.cta.contactUs}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
