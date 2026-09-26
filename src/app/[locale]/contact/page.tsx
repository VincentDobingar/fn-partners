import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { firm } from "@/lib/data/firm";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";

const copy = {
  fr: {
    title: "Contact",
    metaDescription: "Contactez le cabinet FN & PARTNERS à N’Djamena, Tchad : téléphone, e-mail, WhatsApp et adresse.",
    kicker: "Contact",
    lead: "Une question ? Contactez le cabinet par téléphone, e-mail, WhatsApp ou via le formulaire ci-dessous.",
    addressLabel: "Adresse",
    mapTitle: "Localisation du cabinet FN & PARTNERS sur la carte",
  },
  en: {
    title: "Contact",
    metaDescription: "Contact FN & PARTNERS in N’Djamena, Chad: phone, email, WhatsApp and address.",
    kicker: "Contact",
    lead: "A question? Contact the firm by phone, email, WhatsApp or via the form below.",
    addressLabel: "Address",
    mapTitle: "Location of FN & PARTNERS on the map",
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

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "fr";
  const t = copy[locale];
  const dict = getDictionary(locale);

  return (
    <Container className="py-16">
      <SectionHeading kicker={t.kicker} title={t.title} lead={t.lead} />
      <div className="mt-12 grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex flex-wrap gap-3">
            <a href={`tel:${firm.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center rounded-sm bg-navy text-white px-5 py-2.5 text-sm hover:bg-navy-light">
              {dict.cta.call}
            </a>
            <a href={`mailto:${firm.email}`} className="inline-flex items-center rounded-sm border border-line px-5 py-2.5 text-sm hover:border-gold hover:text-gold-deep">
              {dict.cta.email}
            </a>
            <a
              href={`https://wa.me/${firm.social.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm border border-line px-5 py-2.5 text-sm hover:border-gold hover:text-gold-deep"
            >
              {dict.cta.whatsapp}
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${firm.geo.lat},${firm.geo.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm border border-line px-5 py-2.5 text-sm hover:border-gold hover:text-gold-deep"
            >
              {dict.cta.itinerary}
            </a>
          </div>

          <div className="mt-10">
            <h2 className="font-serif text-lg text-navy">{t.addressLabel}</h2>
            <address className="mt-2 not-italic text-ink-soft leading-relaxed">
              {firm.address.line1[locale]}<br />
              {firm.address.line2[locale]}<br />
              {firm.address.city}, {firm.address.country[locale]}<br />
              {firm.address.poBox}
            </address>
            <div className="mt-4 text-sm text-ink-soft space-y-1">
              {firm.phones.map((phone) => (
                <div key={phone}>
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold-deep">{phone}</a>
                </div>
              ))}
              <div><a href={`mailto:${firm.email}`} className="hover:text-gold-deep">{firm.email}</a></div>
            </div>
          </div>
        </div>

        <div>
          <ContactForm locale={locale} />
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-sm border border-line">
        <iframe
          title={t.mapTitle}
          src={`https://maps.google.com/maps?q=${firm.geo.lat},${firm.geo.lng}&z=16&hl=${locale}&output=embed`}
          className="block w-full h-[380px] md:h-[450px]"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </Container>
  );
}
