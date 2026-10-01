import { requireStaffSession } from "@/lib/auth/guard";
import { LogoutButton } from "./LogoutButton";

export default async function ProtectedBackofficeLayout({ children }: { children: React.ReactNode }) {
  const staff = await requireStaffSession();

  return (
    <>
      <header className="border-b border-line bg-navy text-white">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div>
            <div className="kicker text-gold-light">FN &amp; PARTNERS</div>
            <div className="font-serif text-lg">Back-office</div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white/70">{staff.full_name}</span>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-6 py-10">{children}</div>
      </main>
    </>
  );
}
