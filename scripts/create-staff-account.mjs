#!/usr/bin/env node
// Création ponctuelle d'un compte back-office (aucune auto-inscription n'existe côté site).
//
// Usage (depuis la racine du projet, .env.local chargé automatiquement s'il existe) :
//   node scripts/create-staff-account.mjs --email me@fn-partners.com --name "Me Untel" --password "MotDePasse!" [--role admin]
//
// En production (Terminal cPanel), exporter DB_HOST/DB_PORT/DB_NAME/DB_USER/DB_PASSWORD avant
// l'appel, ou les préfixer sur la ligne de commande.
//
// La logique de hachage est dupliquée depuis src/lib/auth/passwords.ts (ce script tourne en
// dehors du build Next, sans dépendance dev supplémentaire type tsx/ts-node) — toute évolution
// des paramètres scrypt doit être répercutée aux deux endroits.

import { existsSync, readFileSync } from "fs";
import path from "path";
import { randomBytes, scrypt as scryptCallback } from "crypto";
import { promisify } from "util";
import mysql from "mysql2/promise";

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

const scrypt = promisify(scryptCallback);
const N = 65536;
const R = 8;
const P = 1;
const KEYLEN = 64;

async function hashPassword(password) {
  const salt = randomBytes(16);
  // 256*N*r, not the commonly-cited 128*N*r — verified in practice against this Node version.
  const hash = await scrypt(password, salt, KEYLEN, { N, r: R, p: P, maxmem: 256 * N * R });
  return `scrypt$N=${N},r=${R},p=${P}$${salt.toString("base64")}$${hash.toString("base64")}`;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    const key = argv[i]?.replace(/^--/, "");
    if (key) args[key] = argv[i + 1];
  }
  return args;
}

async function main() {
  loadEnvLocal();
  const { email, name, password, role = "staff" } = parseArgs(process.argv.slice(2));

  if (!email || !name || !password) {
    console.error(
      'Usage: node scripts/create-staff-account.mjs --email <e-mail> --name "Nom complet" --password <mot de passe> [--role admin]'
    );
    process.exit(1);
  }

  const passwordHash = await hashPassword(password);

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT ?? 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    await connection.execute(
      "INSERT INTO staff_accounts (email, password_hash, full_name, role) VALUES (?, ?, ?, ?)",
      [email, passwordHash, name, role]
    );
    console.log(`Compte staff créé : ${email} (rôle : ${role})`);
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error(error.message ?? error);
  process.exit(1);
});
