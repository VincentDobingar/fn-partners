import type { Locale } from "@/lib/data/firm";
import { firm } from "@/lib/data/firm";

const labels: Record<Locale, string> = {
  fr: "Écrire au cabinet sur WhatsApp",
  en: "Message the firm on WhatsApp",
};

/** Bouton flottant d'accès direct à WhatsApp, présent sur toutes les pages publiques. */
export function WhatsAppButton({ locale }: { locale: Locale }) {
  return (
    <a
      href={`https://wa.me/${firm.social.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={labels[locale]}
      title={labels[locale]}
      className="group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-2 rounded-full bg-[#1f8f4e] px-4 text-white shadow-lg transition-colors hover:bg-[#19753f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold print:hidden"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        <path
          d="M12 19.5l-3.6-1.8H6a2 2 0 01-2-2V6.3a2 2 0 012-2h12a2 2 0 012 2v9.4a2 2 0 01-2 2h-2.4l-3.6 1.8z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 9.5h7M8.5 12.5h4.5" strokeLinecap="round" />
      </svg>
      <span className="hidden text-sm font-medium sm:inline">WhatsApp</span>
    </a>
  );
}
