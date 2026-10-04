# FN & PARTNERS — Site institutionnel (Lot 1)

Site vitrine bilingue (FR/EN) du cabinet FN & PARTNERS, développé avec Next.js (App Router), TypeScript et Tailwind CSS.

## Contenu du Lot 1

- Pages institutionnelles : Accueil, Le Cabinet, Notre fondateur, Notre équipe, Implantation panafricaine, Contact.
- 22 pages Domaines d'expertise (contenu détaillé dans `src/lib/data/expertiseDetails/`) + Secteurs d'intervention, optimisées SEO.
- Blog / Publications, Ressources & guides pratiques, FAQ juridique.
- Prise de rendez-vous en ligne : créneaux du lundi au vendredi de 8 h à 17 h (réglables dans `appointmentConfig`, `src/lib/data/firm.ts`), pièces jointes transmises au cabinet par e-mail.
- Boutons Appel / E-mail / WhatsApp / Itinéraire.
- Bannière cookies : informative par défaut ; avec choix Accepter / Refuser dès qu'un identifiant Google Analytics 4 est configuré (`NEXT_PUBLIC_GA_ID`).
- SEO technique : sitemap.xml, robots.txt, données structurées (LegalService, Person, FAQPage, Article, BreadcrumbList), Open Graph.
- Site bilingue français / anglais (architecture prête pour l'ajout de l'arabe), avec URL anglaises traduites (`/en/areas-of-expertise/ohada-law`).
- En-têtes de sécurité (CSP, HSTS, etc.), redirection du domaine nu vers `www` et cache long des fichiers statiques, déclarés dans `next.config.ts`.

La page "Soumettre une demande" (Lot 2, Stage 1) est en ligne : formulaire multi-étapes avec dépôt de pièces jointes, enregistré en base MySQL — voir « Base de données (Lot 2) » ci-dessous. Le back-office staff (authentification + triage des demandes, `/backoffice`) et l'espace client (`/client`, comptes invités depuis le back-office, authentification + tableau de bord) sont également en ligne ; la page "Suivre mon dossier" y renvoie.

## Prérequis

- Node.js 20 ou supérieur
- npm
- Un serveur MySQL 8 local (pour la page "Soumettre une demande", Lot 2) — un conteneur Docker suffit :
  ```bash
  docker run --name fn-partners-mysql -e MYSQL_ROOT_PASSWORD=devpassword \
    -e MYSQL_DATABASE=fn_partners -p 3306:3306 -d mysql:8
  ```
  (ou toute installation MySQL/MariaDB locale existante, ex. XAMPP/WAMP).

## Installation

```bash
npm install
```

## Développement local

```bash
npm run dev
```

Le site est accessible sur [http://localhost:3000](http://localhost:3000) (redirection automatique vers `/fr`).

## Variables d'environnement

Copier `.env.example` en `.env.local` et renseigner :
- les identifiants SMTP pour l'envoi réel des e-mails (formulaires de contact, rendez-vous et demandes). Sans configuration SMTP, les messages sont journalisés dans la console du serveur — pratique en développement, à configurer avant la mise en production ;
- les identifiants `DB_*` de connexion MySQL (voir « Base de données (Lot 2) » ci-dessous) ;
- `UPLOAD_DIR` (et éventuellement `UPLOAD_MAX_FILE_SIZE_MB`/`UPLOAD_MAX_FILES`) pour le stockage des pièces jointes déposées avec les demandes — en local, la valeur par défaut (`./var/uploads`, ignoré par git) suffit.

```bash
cp .env.example .env.local
```

## Base de données (Lot 2)

La page "Soumettre une demande" enregistre chaque demande (et ses pièces jointes) en base MySQL. Aucun outil de migration n'est utilisé en production (déploiement `standalone`, sans devDependencies sur le serveur) : le schéma est un fichier SQL simple, appliqué manuellement.

**En local**, une fois le serveur MySQL démarré (voir Prérequis) :

```bash
mysql -h 127.0.0.1 -u root -pdevpassword fn_partners < db/schema.sql
```

**En production (o2switch/cPanel)** : créer la base via cPanel → « Bases de données MySQL® » (le nom sera préfixé par l'identifiant cPanel), puis appliquer `db/schema.sql` via phpMyAdmin ou le CLI `mysql` en Terminal cPanel. Voir `db/migrations/README.md` pour le détail et les évolutions de schéma prévues aux étapes suivantes du Lot 2.

Les pièces jointes sont stockées sur disque **en dehors** du dossier de déploiement (`UPLOAD_DIR`, ex. `~/fn-partners-uploads` en production) pour survivre aux redéploiements — jamais dans `public/` ni `~/fn-partners.com`.

## Build de production

```bash
npm run build
npm run start
```

## Déploiement, nom de domaine, hébergement et messagerie

Le nom de domaine, l'hébergement et les 10 adresses e-mail professionnelles (offre incluse pour la première année, cf. proposition commerciale) doivent être configurés avant la mise en ligne définitive :

1. Déployer l'application (Vercel, ou tout hébergeur compatible Node.js/Next.js).
2. Pointer le nom de domaine `fn-partners.com` vers l'hébergement (l'adresse officielle est `https://www.fn-partners.com` ; le domaine nu y est redirigé par l'application).
3. Configurer les enregistrements DNS MX pour les 10 adresses e-mail professionnelles.
4. Renseigner les variables d'environnement SMTP en production pour l'envoi des e-mails du site (formulaires de rendez-vous et de contact).
5. Mettre à jour `src/lib/data/firm.ts` (`siteConfig.url`) avec l'URL définitive du site.

## URL anglaises

Les dossiers de `src/app/[locale]` et les `slug` des contenus restent en français. Les URL anglaises sont traduites par `src/lib/i18n/routes.ts` :

- `next.config.ts` en tire les réécritures (`/en/about` → page `/en/a-propos`) et les redirections 308 des anciennes URL (`/en/a-propos` → `/en/about`) ;
- les liens internes passent par `@/components/ui/Link` (à utiliser à la place de `next/link`), qui traduit le chemin automatiquement ;
- les URL canoniques, les balises hreflang et le sitemap passent par `src/lib/seo/metadata.ts` (`pageMetadata`, `absoluteUrl`).

Pour ajouter une page ou un contenu, ajouter sa ligne dans `pageSegments` ou `itemSegments` (sinon l'URL anglaise garde simplement le segment français).

## Ajouter un contenu

- **Publication** : une entrée dans `src/lib/data/publications.ts` (paragraphes, intertitres `{ heading }`, listes `{ list }`, encadrés `{ note }`). Une entrée `isDemo: true` n'est ni listée ni indexée.
- **Guide pratique** : une entrée dans `src/lib/data/resources.ts` (étapes, documents à réunir, points de vigilance, FAQ).
- **Domaine d'expertise** : `src/lib/data/expertise.ts` (titre, résumé, problématiques, clients) et `src/lib/data/expertiseDetails/` (présentation, prestations, cadre juridique, FAQ, domaines connexes).

Les contenus juridiques sont des informations générales : les faire relire par le cabinet avant toute mise en ligne.

## Structure du projet

```
db/
  schema.sql            Schéma MySQL (Lot 2), appliqué manuellement
  migrations/README.md  Marche à suivre + évolutions de schéma prévues
src/
  app/
    [locale]/          Pages du site (fr / en)
    api/                Routes API (formulaires)
    sitemap.ts          Sitemap XML généré dynamiquement
    robots.ts           robots.txt généré dynamiquement
  components/
    layout/             Header, Footer, sélecteur de langue, bannière cookies
    ui/                 Composants d'interface réutilisables
    forms/              Formulaires (rendez-vous, contact, soumission de demande)
    seo/                Composant d'injection des données structurées
  lib/
    data/               Contenus du site (cabinet, expertise, équipe, publications...)
    i18n/               Dictionnaire de traduction et configuration des langues
    seo/                Données structurées (JSON-LD) et métadonnées par page (canonical, hreflang, Open Graph)
    appointments.ts     Règles des créneaux et des pièces jointes de la prise de rendez-vous
    security/           Anti-spam et limitation de débit des formulaires
    storage/            Gestion des pièces jointes déposées avec les demandes
    db.ts               Connexion MySQL (Knex)
    mailer.ts           Envoi d'e-mails (SMTP via nodemailer)
```

## Contenus à valider par le cabinet

Conformément au cahier des charges, aucune information non confirmée (biographies détaillées, distinctions, résultats judiciaires, membres de l'équipe, etc.) n'a été inventée. Restent à faire valider par le cabinet :

- les articles et guides pratiques rédigés le 3 octobre 2026 (`publications.ts`, `resources.ts`) et le contenu détaillé des 22 domaines d'expertise (`expertiseDetails/`) : informations juridiques générales, à relire par un avocat du cabinet ;
- les durées de conservation des données indiquées dans la politique de confidentialité (valeurs proposées par défaut) ;
- les horaires de rendez-vous (`appointmentConfig`).

Les références clients sont présentées par catégories, sans nom, par respect du secret professionnel.
