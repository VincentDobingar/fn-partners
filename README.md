# FN & PARTNERS — Site institutionnel (Lot 1)

Site vitrine bilingue (FR/EN) du cabinet FN & PARTNERS, développé avec Next.js (App Router), TypeScript et Tailwind CSS.

## Contenu du Lot 1

- Pages institutionnelles : Accueil, Le Cabinet, Notre fondateur, Notre équipe, Implantation panafricaine, Contact.
- 21 pages Domaines d'expertise + Secteurs d'intervention, optimisées SEO.
- Blog / Publications, Ressources & guides pratiques, FAQ juridique.
- Prise de rendez-vous en ligne (formulaire + confirmation par e-mail).
- Boutons Appel / E-mail / WhatsApp / Itinéraire.
- Bannière de consentement aux cookies (RGPD).
- SEO technique : sitemap.xml, robots.txt, données structurées (LegalService, Person, FAQPage, Article, BreadcrumbList), Open Graph.
- Site bilingue français / anglais (architecture prête pour l'ajout de l'arabe).

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
2. Pointer le nom de domaine `nf-partners.com` (ou domaine retenu) vers l'hébergement.
3. Configurer les enregistrements DNS MX pour les 10 adresses e-mail professionnelles.
4. Renseigner les variables d'environnement SMTP en production pour l'envoi des e-mails du site (formulaires de rendez-vous et de contact).
5. Mettre à jour `src/lib/data/firm.ts` (`siteConfig.url`) avec l'URL définitive du site.

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
    seo/                Générateurs de données structurées (JSON-LD)
    security/           Anti-spam et limitation de débit des formulaires
    storage/            Gestion des pièces jointes déposées avec les demandes
    db.ts               Connexion MySQL (Knex)
    mailer.ts           Envoi d'e-mails (SMTP via nodemailer)
```

## Contenus à valider par le cabinet

Conformément au cahier des charges, aucune information non confirmée (biographies détaillées, distinctions, résultats judiciaires, membres de l'équipe, etc.) n'a été inventée. Ces éléments sont clairement identifiés dans le code par la mention « À compléter » et doivent être validés par le cabinet avant la mise en ligne définitive. Les articles du blog sont des contenus de démonstration à remplacer par les publications réelles du cabinet.
