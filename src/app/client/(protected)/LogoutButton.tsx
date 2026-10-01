"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/client/logout", { method: "POST" });
    router.push("/client/login");
    router.refresh();
  }

  return (
    <button type="button" onClick={handleLogout} className="text-white/70 hover:text-gold-light">
      Déconnexion
    </button>
  );
}
