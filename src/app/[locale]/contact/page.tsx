import type { Metadata } from "next";
import type { Locale } from "@/lib/data/firm";
import { isLocale } from "@/lib/i18n/config";
import { firm } from "@/lib/data/firm";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M6.5 3.5h3l1.3 3.8-2 1.6a12.5 12.5 0 006.3 6.3l1.6-2 3.8 1.3v3c0 1.1-.9 2-2 2h-.3C11.2 19.1 4.9 12.8 4.5 6.3v-.3c0-1.1.9-2 2-2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="M4 6.5l8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 19.5l-3.6-1.8H6a2 2 0 01-2-2V6.3a2 2 0 012-2h12a2 2 0 012 2v9.4a2 2 0 01-2 2h-2.4l-3.6 1.8z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path
        d="M12 21s7-7.1 7-12a7 7 0 10-14 0c0 4.9 7 12 7 12z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

const copy = {
  fr: {
    title: "Échangeons sur votre dossier",
    metaDescription:
      "Contactez le cabinet FN & PARTNERS à N’Djamena, Tchad : téléphone, e-mail, WhatsApp, adresse et formulaire de contact.",
    kicker: "Contact",
    lead: "Le cabinet FN & PARTNERS est à votre écoute à N’Djamena. Contactez-nous par téléphone, e-mail, WhatsApp ou via le formulaire ci-dessous : nous vous répondrons dans les meilleurs délais, en toute confidentialité.",
    quick: {
      call: { label: "Téléphone", value: firm.phones[0] },
      email: { label: "E-mail", value: firm.contactEmail },
      whatsapp: { label: "WhatsApp", value: "Discuter en direct" },
      itinerary: { label: "Adresse", value: `${firm.address.city}, ${firm.address.country.fr}` },
    },
    detailsTitle: "Coordonnées du cabinet",
    addressLabel: "Adresse",
    phonesLabel: "Téléphones",
    emailsLabel: "E-mails",
    founderNote: `Cabinet fondé par ${firm.founder.name}`,
    formTitle: "Envoyez-nous un message",
    formLead:
      "Décrivez brièvement votre besoin : un membre du cabinet reviendra vers vous rapidement pour convenir des prochaines étapes.",
    mapSectionTitle: "Nous trouver à N’Djamena",
    mapLead: "Le cabinet est situé au quartier Sabangali, en face du Bureau de la Coopération suisse au Tchad.",
    mapTitle: "Localisation du cabinet FN & PARTNERS sur la carte",
  },
  en: {
    title: "Let’s Discuss Your Matter",
    metaDescription: "Contact FN & PARTNERS in N’Djamena, Chad: phone, email, WhatsApp, address and contact form.",
    kicker: "Contact",
    lead: "FN & PARTNERS is here to listen, in N’Djamena. Reach us by phone, email, WhatsApp or the form below: we will get back to you promptly, in full confidentiality.",
    quick: {
      call: { label: "Phone", value: firm.phones[0] },
      email: { label: "Email", value: firm.contactEmail },
      whatsapp: { label: "WhatsApp", value: "Chat with us" },
      itinerary: { label: "Address", value: `${firm.address.city}, ${firm.address.country.en}` },
    },
    detailsTitle: "Firm Details",
    addressLabel: "Address",
    phonesLabel: "Phone Numbers",
    emailsLabel: "Emails",
    founderNote: `Firm founded by ${firm.founder.name}`,
    formTitle: "Send Us a Message",
    formLead:
      "Briefly describe your matter: a member of the firm will get back to you promptly to discuss next steps.",
    mapSectionTitle: "Find Us in N’Djamena",
    mapLead: "The firm is located in the Sabangali district, opposite the Swiss Cooperation Office in Chad.",
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

  const quickContacts = [
    {
      icon: <PhoneIcon />,
      label: t.quick.call.label,
      value: t.quick.call.value,
      href: `tel:${firm.phones[0].replace(/\s/g, "")}`,
      external: false,
    },
    {
      icon: <MailIcon />,
      label: t.quick.email.label,
      value: t.quick.email.value,
      href: `mailto:${firm.contactEmail}`,
      external: false,
    },
    {
      icon: <ChatIcon />,
      label: t.quick.whatsapp.label,
      value: t.quick.whatsapp.value,
      href: `https://wa.me/${firm.social.whatsapp}`,
      external: true,
    },
    {
      icon: <PinIcon />,
      label: t.quick.itinerary.label,
      value: t.quick.itinerary.value,
      href: `https://www.google.com/maps/dir/?api=1&destination=${firm.geo.lat},${firm.geo.lng}`,
      external: true,
    },
  ];

  return (
    <>
      <PageHero kicker={t.kicker} title={t.title} lead={t.lead} bleedBottom />

      <Container className="pb-16 md:pb-20">
        <div className="relative z-10 -mt-16 md:-mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quickContacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-4 rounded-sm border border-line bg-raised p-6 shadow-sm transition-colors hover:border-gold hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-gold-light transition-colors group-hover:bg-gold group-hover:text-navy">
                {item.icon}
              </span>
              <div>
                <div className="kicker text-muted">{item.label}</div>
                <div className="mt-1.5 text-navy font-medium break-words">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 md:mt-20 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-navy">{t.detailsTitle}</h2>

            <div className="mt-6">
              <div className="kicker text-muted">{t.addressLabel}</div>
              <address className="mt-2 not-italic text-ink-soft leading-relaxed">
                {firm.address.line1[locale]}
                <br />
                {firm.address.line2[locale]}
                <br />
                {firm.address.city}, {firm.address.country[locale]}
                <br />
                {firm.address.poBox}
              </address>
            </div>

            <div className="mt-6">
              <div className="kicker text-muted">{t.phonesLabel}</div>
              <div className="mt-2 text-sm text-ink-soft space-y-1.5">
                {firm.phones.map((phone) => (
                  <div key={phone}>
                    <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-gold-deep">
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="kicker text-muted">{t.emailsLabel}</div>
              <div className="mt-2 text-sm text-ink-soft space-y-1.5">
                <div>
                  <a href={`mailto:${firm.contactEmail}`} className="hover:text-gold-deep">
                    {firm.contactEmail}
                  </a>
                </div>
                <div>
                  <a href={`mailto:${firm.email}`} className="hover:text-gold-deep">
                    {firm.email}
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-8 pt-6 border-t border-line text-sm text-muted">{t.founderNote}</p>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-sm border border-line bg-raised p-8 md:p-10 shadow-sm">
              <h2 className="font-serif text-2xl text-navy">{t.formTitle}</h2>
              <p className="mt-2 text-muted text-sm leading-relaxed">{t.formLead}</p>
              <div className="mt-8">
                <ContactForm locale={locale} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <h2 className="font-serif text-2xl text-navy">{t.mapSectionTitle}</h2>
          <p className="mt-3 text-muted leading-relaxed max-w-2xl">{t.mapLead}</p>
          <div className="mt-6 overflow-hidden rounded-sm border border-line shadow-sm">
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
        </div>
      </Container>
    </>
  );
}
