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

Les pages "Soumettre une demande" et "Suivre mon dossier" (espace client sécurisé) sont prévues aux Lots 2 et 3 : elles affichent une page "à venir" en attendant leur développement.

## Prérequis

- Node.js 20 ou supérieur
- npm

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

Copier `.env.example` en `.env.local` et renseigner les identifiants SMTP pour l'envoi réel des e-mails (formulaires de contact et de rendez-vous). Sans configuration SMTP, les messages sont journalisés dans la console du serveur — pratique en développement, à configurer avant la mise en production.

```bash
cp .env.example .env.local
```

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
src/
  app/
    [locale]/          Pages du site (fr / en)
    api/                Routes API (formulaires)
    sitemap.ts          Sitemap XML généré dynamiquement
    robots.ts           robots.txt généré dynamiquement
  components/
    layout/             Header, Footer, sélecteur de langue, bannière cookies
    ui/                 Composants d'interface réutilisables
    forms/              Formulaires (rendez-vous, contact)
    seo/                Composant d'injection des données structurées
  lib/
    data/               Contenus du site (cabinet, expertise, équipe, publications...)
    i18n/               Dictionnaire de traduction et configuration des langues
    seo/                Générateurs de données structurées (JSON-LD)
    mailer.ts           Envoi d'e-mails (SMTP via nodemailer)
```

## Contenus à valider par le cabinet

Conformément au cahier des charges, aucune information non confirmée (biographies détaillées, distinctions, résultats judiciaires, membres de l'équipe, etc.) n'a été inventée. Ces éléments sont clairement identifiés dans le code par la mention « À compléter » et doivent être validés par le cabinet avant la mise en ligne définitive. Les articles du blog sont des contenus de démonstration à remplacer par les publications réelles du cabinet.
