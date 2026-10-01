import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getSession, type StaffAccount } from "./session";

/** For Server Component pages: redirects to the login page when there is no valid session. */
export async function requireStaffSession(): Promise<StaffAccount> {
  const staff = await getSession();
  if (!staff) redirect("/backoffice/login");
  return staff;
}

/** For Route Handlers: returns a 401 JSON response instead of redirecting. */
export async function requireStaffSessionApi(): Promise<{ staff: StaffAccount } | { error: NextResponse }> {
  const staff = await getSession();
  if (!staff) {
    return { error: NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 }) };
  }
  return { staff };
}
