# Migrations — approche manuelle

Ce projet est déployé en build `standalone` (voir `next.config.ts`) : le serveur ne reçoit
jamais les `devDependencies`, donc pas de CLI Knex disponible en production. Les évolutions
de schéma sont donc des fichiers `.sql` simples, versionnés ici, appliquées manuellement une
fois via **phpMyAdmin** (cPanel → « Bases de données MySQL® ») ou le CLI `mysql` en
Terminal cPanel.

Knex est utilisé uniquement comme *query builder* à l'exécution (`src/lib/db.ts`), jamais
comme outil de migration en production.

## Historique

1. **Stage 1** (soumission de demandes) — tables `requests` et `request_documents`.
2. **Back-office staff MVP** — tables `staff_accounts`, `sessions`, `otp_codes` et
   `request_status_history` (remplace l'esquisse précédente : `changed_by VARCHAR` devient
   `changed_by_staff_id`, une vraie clé étrangère vers `staff_accounts`). `sessions` et
   `otp_codes` sont génériques (`subject_type`/`subject_id`) pour être réutilisées par les
   futurs comptes clients sans nouvelle table.
3. **Espace client** — table `client_accounts` (comptes invités depuis le back-office,
   `password_hash` NULL tant que non activé) et colonne `requests.client_account_id`.
   Réutilise `sessions`/`otp_codes` tel quel (`subject_type='client'`), y compris pour les
   liens d'activation (`otp_codes.purpose='client_activation'`, token long au lieu d'un code
   à 6 chiffres — d'où l'ajout d'un index `idx_otp_codes_code_hash` pour la recherche par
   token seul, sans `subject_id` connu à l'avance). Premier changement touchant des tables
   déjà peuplées : `db/schema.sql` contient le schéma final (base neuve), et
   `db/migrations/002_client_space.sql` contient le delta `ALTER`/`CREATE` à appliquer une
   fois sur une base de prod existante (non ré-exécutable, contrairement à `schema.sql`).

`db/schema.sql` regroupe le schéma complet (instructions `CREATE TABLE IF NOT EXISTS`) pour
une base neuve — ré-exécutable sans erreur si les tables existent déjà. Une base existante
qui a déjà appliqué les étapes précédentes doit en plus appliquer les fichiers de migration
numérotés (`00N_*.sql`) listés ci-dessus, chacun une seule fois.

## Évolutions prévues (à ne PAS appliquer maintenant — pour mémoire uniquement)

**Liens de téléchargement temporaires et signés** pour les pièces jointes — l'espace client
(étape 3 ci-dessus) réutilise la route protégée par session existante côté staff, avec une
vérification de propriété (`request.client_account_id`), donc cette évolution reste hors
périmètre pour l'instant. Utile seulement si un lien doit un jour être partageable sans
connexion préalable :

```sql
ALTER TABLE request_documents
  ADD COLUMN download_token CHAR(43) NULL,
  ADD COLUMN download_token_expires_at DATETIME NULL;
```
