import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/data/firm";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { firm } from "@/lib/data/firm";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white/85 mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo-nfp-white.png" alt="" width={36} height={36} aria-hidden />
            <div className="font-serif text-xl text-white">FN &amp; PARTNERS</div>
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">{dict.footer.description}</p>
        </div>

        <div>
          <div className="kicker text-gold-light mb-4">{dict.footer.navTitle}</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href={`${base}/a-propos`} className="hover:text-gold-light">{dict.nav.about}</Link></li>
            <li><Link href={`${base}/le-cabinet`} className="hover:text-gold-light">{dict.nav.firm}</Link></li>
            <li><Link href={`${base}/domaines-expertise`} className="hover:text-gold-light">{dict.nav.expertise}</Link></li>
            <li><Link href={`${base}/notre-equipe`} className="hover:text-gold-light">{dict.nav.team}</Link></li>
            <li><Link href={`${base}/galerie`} className="hover:text-gold-light">{dict.nav.gallery}</Link></li>
            <li><Link href={`${base}/actualites`} className="hover:text-gold-light">{dict.nav.news}</Link></li>
            <li><Link href={`${base}/publications`} className="hover:text-gold-light">{dict.nav.publications}</Link></li>
            <li><Link href={`${base}/faq`} className="hover:text-gold-light">{dict.nav.faq}</Link></li>
            <li><Link href={`${base}/rendez-vous`} className="hover:text-gold-light">{dict.nav.appointment}</Link></li>
          </ul>
        </div>

        <div>
          <div className="kicker text-gold-light mb-4">{dict.footer.contactTitle}</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li>{firm.address.line1[locale]}</li>
            <li>{firm.address.city}, {firm.address.country[locale]}</li>
            <li><a href={`tel:${firm.phones[0].replace(/\s/g, "")}`} className="hover:text-gold-light">{firm.phones[0]}</a></li>
            <li><a href={`mailto:${firm.email}`} className="hover:text-gold-light">{firm.email}</a></li>
          </ul>
        </div>

        <div>
          <div className="kicker text-gold-light mb-4">{dict.footer.legal}</div>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link href={`${base}/mentions-legales`} className="hover:text-gold-light">{dict.footer.legalNotice}</Link></li>
            <li><Link href={`${base}/politique-de-confidentialite`} className="hover:text-gold-light">{dict.footer.privacy}</Link></li>
            <li><Link href={`${base}/politique-cookies`} className="hover:text-gold-light">{dict.footer.cookies}</Link></li>
            <li><Link href={`${base}/conditions-espace-client`} className="hover:text-gold-light">{dict.footer.clientTerms}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-6xl px-6 py-5 text-xs text-white/50 flex flex-col md:flex-row justify-between gap-2">
          <span>
            © {year} FN &amp; PARTNERS — {dict.footer.rights} - {dict.footer.credit}{" "}
            <a
              href="https://dbs-africa.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-light"
            >
              Digital Business Services Africa
            </a>
          </span>
          <span>NIF : {firm.nif}</span>
        </div>
      </div>
    </footer>
  );
}
