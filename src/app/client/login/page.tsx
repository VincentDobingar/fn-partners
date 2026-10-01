import type { Metadata } from "next";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = { title: "Connexion" };

export default function ClientLoginPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="kicker text-gold-deep mb-2">FN &amp; PARTNERS</div>
          <h1 className="font-serif text-2xl text-navy">Espace client</h1>
        </div>
        <div className="rounded-sm border border-line bg-raised p-8 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </main>
  );
}
