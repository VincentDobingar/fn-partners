import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { getSession, getClientSession, type StaffAccount, type ClientAccount } from "./session";

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

/** For Server Component pages: redirects to the login page when there is no valid session. */
export async function requireClientSession(): Promise<ClientAccount> {
  const client = await getClientSession();
  if (!client) redirect("/client/login");
  return client;
}

/** For Route Handlers: returns a 401 JSON response instead of redirecting. */
export async function requireClientSessionApi(): Promise<{ client: ClientAccount } | { error: NextResponse }> {
  const client = await getClientSession();
  if (!client) {
    return { error: NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 }) };
  }
  return { client };
}
