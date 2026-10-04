#!/usr/bin/env node
// Génère l'empreinte (hash scrypt) d'un mot de passe pour la colonne `password_hash` des tables
// `staff_accounts` / `client_accounts`. À utiliser quand un compte doit être corrigé à la main
// dans phpMyAdmin : on colle le résultat dans `password_hash` (ne JAMAIS y mettre un MD5 ou le
// mot de passe en clair, la connexion échouerait toujours avec « E-mail ou mot de passe incorrect »).
//
// Usage (depuis la racine du projet) :
//   node scripts/hash-password.mjs
// Le mot de passe est demandé à l'écran (saisie masquée) ; rien n'est enregistré ni envoyé.
//
// Les paramètres doivent rester identiques à ceux de src/lib/auth/passwords.ts.

import { randomBytes, scrypt as scryptCallback } from "crypto";
import { promisify } from "util";
import readline from "readline";

const scrypt = promisify(scryptCallback);
const N = 65536;
const R = 8;
const P = 1;
const KEYLEN = 64;

function ask(question, hidden) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: process.stdin.isTTY });
    let muted = false;
    const write = rl._writeToOutput?.bind(rl);
    rl._writeToOutput = (text) => {
      if (!muted || !hidden) write?.(text);
    };
    rl.question(question, (answer) => {
      rl.close();
      if (hidden) process.stdout.write("\n");
      resolve(answer);
    });
    muted = true;
  });
}

const password = await ask("Mot de passe : ", true);
const confirmation = process.stdin.isTTY ? await ask("Confirmez le mot de passe : ", true) : password;

if (password.length < 10) {
  console.error("Mot de passe trop court (10 caractères minimum).");
  process.exit(1);
}
if (password !== confirmation) {
  console.error("Les deux saisies ne correspondent pas.");
  process.exit(1);
}

const salt = randomBytes(16);
const hash = await scrypt(password, salt, KEYLEN, { N, r: R, p: P, maxmem: 256 * N * R });
console.log("\nValeur à coller dans la colonne password_hash :\n");
console.log(`scrypt$N=${N},r=${R},p=${P}$${salt.toString("base64")}$${hash.toString("base64")}`);
