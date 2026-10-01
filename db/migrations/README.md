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

Tout est regroupé dans `db/schema.sql` (instructions `CREATE TABLE IF NOT EXISTS`) — un seul
fichier à appliquer, ré-exécutable sans erreur si des tables existent déjà.

## Évolutions prévues (à ne PAS appliquer maintenant — pour mémoire uniquement)

**Espace client** (comptes clients, invitation depuis le back-office, connexion + 2FA côté
client) — hors périmètre du back-office staff MVP, objet d'une planification dédiée :

```sql
CREATE TABLE client_accounts ( ... );  -- email, password_hash (NULL tant que non activé),
                                        -- invited_by_staff_id, invited_at, activated_at...

ALTER TABLE requests
  ADD COLUMN client_account_id BIGINT UNSIGNED NULL AFTER id,
  ADD CONSTRAINT fk_requests_client_account FOREIGN KEY (client_account_id)
    REFERENCES client_accounts(id) ON DELETE SET NULL;
```

**Liens de téléchargement temporaires et signés** pour les pièces jointes — utile une fois
qu'un client (pas seulement le staff) doit pouvoir récupérer ses documents :

```sql
ALTER TABLE request_documents
  ADD COLUMN download_token CHAR(43) NULL,
  ADD COLUMN download_token_expires_at DATETIME NULL;
```
