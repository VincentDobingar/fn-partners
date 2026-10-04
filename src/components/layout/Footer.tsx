import Image from "next/image";
import Link from "@/components/ui/Link";
import type { Locale } from "@/lib/data/firm";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { analyticsId, firm } from "@/lib/data/firm";
import { CookieSettingsButton } from "@/components/layout/CookieConsent";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();

  const firmLinks = [
    { href: `${base}/a-propos`, label: dict.nav.about },
    { href: `${base}/le-cabinet`, label: dict.nav.firm },
    { href: `${base}/notre-fondateur`, label: dict.nav.founder },
    { href: `${base}/notre-equipe`, label: dict.nav.team },
    { href: `${base}/implantation`, label: dict.nav.locations },
    { href: `${base}/galerie`, label: dict.nav.gallery },
    { href: `${base}/actualites`, label: dict.nav.news },
  ];

  const serviceLinks = [
    { href: `${base}/domaines-expertise`, label: dict.nav.expertise },
    { href: `${base}/secteurs-intervention`, label: dict.nav.sectors },
    { href: `${base}/publications`, label: dict.nav.publications },
    { href: `${base}/ressources`, label: dict.nav.resources },
    { href: `${base}/faq`, label: dict.nav.faq },
    { href: `${base}/rendez-vous`, label: dict.nav.appointment },
    { href: `${base}/soumettre-une-demande`, label: dict.nav.submitRequest },
    { href: `${base}/suivre-mon-dossier`, label: dict.nav.trackFile },
  ];

  const legalLinks = [
    { href: `${base}/mentions-legales`, label: dict.footer.legalNotice },
    { href: `${base}/politique-de-confidentialite`, label: dict.footer.privacy },
    { href: `${base}/politique-cookies`, label: dict.footer.cookies },
    { href: `${base}/conditions-espace-client`, label: dict.footer.clientTerms },
  ];

  return (
    <footer className="bg-navy text-white/85 mt-24">
      <div className="mx-auto w-full max-w-6xl px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/images/logo-nfp-white.png" alt="" width={36} height={36} aria-hidden />
            <div className="font-serif text-xl text-white">FN &amp; PARTNERS</div>
          </div>
          <p className="mt-3 text-sm text-white/60 leading-relaxed">{dict.footer.description}</p>
          <address className="mt-5 not-italic space-y-2 text-sm text-white/70">
            <div>{firm.address.line1[locale]}</div>
            <div>{firm.address.city}, {firm.address.country[locale]}</div>
            <div>
              <a href={`tel:${firm.phones[0].replace(/\s/g, "")}`} className="hover:text-gold-light">{firm.phones[0]}</a>
            </div>
            <div>
              <a href={`mailto:${firm.contactEmail}`} className="hover:text-gold-light">{firm.contactEmail}</a>
            </div>
          </address>
        </div>

        <nav aria-label={dict.footer.firmTitle}>
          <div className="kicker text-gold-light mb-4">{dict.footer.firmTitle}</div>
          <ul className="space-y-2 text-sm text-white/70">
            {firmLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} prefetch={false} className="hover:text-gold-light">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.servicesTitle}>
          <div className="kicker text-gold-light mb-4">{dict.footer.servicesTitle}</div>
          <ul className="space-y-2 text-sm text-white/70">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} prefetch={false} className="hover:text-gold-light">{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.legal}>
          <div className="kicker text-gold-light mb-4">{dict.footer.legal}</div>
          <ul className="space-y-2 text-sm text-white/70">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} prefetch={false} className="hover:text-gold-light">{link.label}</Link>
              </li>
            ))}
            {analyticsId && (
              <li>
                <CookieSettingsButton label={dict.cookies.manage} />
              </li>
            )}
          </ul>
        </nav>
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
