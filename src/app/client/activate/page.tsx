import type { Metadata } from "next";
import { ActivateForm } from "./ActivateForm";

export const metadata: Metadata = { title: "Activation du compte" };

export default async function ClientActivatePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="kicker text-gold-deep mb-2">FN &amp; PARTNERS</div>
          <h1 className="font-serif text-2xl text-navy">Activer votre espace client</h1>
        </div>
        <div className="rounded-sm border border-line bg-raised p-8 shadow-sm">
          {token ? (
            <ActivateForm token={token} />
          ) : (
            <p className="text-sm text-red-700">Lien d’activation invalide. Vérifiez l’adresse copiée depuis l’e-mail reçu.</p>
          )}
        </div>
      </div>
    </main>
  );
}
