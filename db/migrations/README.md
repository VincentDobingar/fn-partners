# Migrations — approche manuelle

Ce projet est déployé en build `standalone` (voir `next.config.ts`) : le serveur ne reçoit
jamais les `devDependencies`, donc pas de CLI Knex disponible en production. Les évolutions
de schéma sont donc des fichiers `.sql` simples, versionnés ici, appliqués manuellement une
fois via **phpMyAdmin** (cPanel → « Bases de données MySQL® ») ou le CLI `mysql` en
Terminal cPanel.

Knex est utilisé uniquement comme *query builder* à l'exécution (`src/lib/db.ts`), jamais
comme outil de migration en production.

## Ordre d'application

1. `db/schema.sql` — schéma initial (Stage 1 : tables `requests` et `request_documents`).

## Évolutions prévues (à ne PAS appliquer maintenant — pour mémoire uniquement)

**Stage 2** — lier une demande à un compte client une fois `client_accounts` créé :

```sql
ALTER TABLE requests
  ADD COLUMN client_account_id BIGINT UNSIGNED NULL AFTER id,
  ADD CONSTRAINT fk_requests_client_account FOREIGN KEY (client_account_id)
    REFERENCES client_accounts(id) ON DELETE SET NULL;
```

**Stage 3** — historique des changements de statut (audit pour le back-office) :

```sql
CREATE TABLE request_status_history (
  id           BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  request_id   BIGINT UNSIGNED NOT NULL,
  old_status   VARCHAR(20) NOT NULL,
  new_status   VARCHAR(20) NOT NULL,
  changed_by   VARCHAR(200) NOT NULL,
  changed_at   DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_request_status_history_request_id (request_id),
  CONSTRAINT fk_request_status_history_request FOREIGN KEY (request_id)
    REFERENCES requests(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

**Stage 3/4** — liens de téléchargement temporaires et signés pour les pièces jointes :

```sql
ALTER TABLE request_documents
  ADD COLUMN download_token CHAR(43) NULL,
  ADD COLUMN download_token_expires_at DATETIME NULL;
```
