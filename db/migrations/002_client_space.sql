-- Espace client : comptes clients invités depuis le back-office.
--
-- À appliquer UNE SEULE FOIS sur la base de production existante (déjà peuplée par
-- db/schema.sql). Contrairement à schema.sql (CREATE TABLE IF NOT EXISTS, ré-exécutable
-- sans risque), ce fichier modifie des tables déjà peuplées (requests, otp_codes) via
-- ALTER TABLE : NE PAS le rejouer sur une base où il a déjà été appliqué (les ADD
-- COLUMN/ADD KEY/ADD CONSTRAINT échoueraient sur une colonne/clé déjà existante).
--
-- Sur une base neuve, db/schema.sql suffit seul (il contient déjà ce schéma final) — ne
-- pas appliquer ce fichier en plus.

CREATE TABLE IF NOT EXISTS client_accounts (
  id                      BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  email                   VARCHAR(255) NOT NULL,            -- stockée en minuscules
  password_hash           VARCHAR(255) NULL,                -- NULL tant que le compte n'est pas activé
  full_name               VARCHAR(200) NOT NULL,
  is_active               TINYINT(1)   NOT NULL DEFAULT 1,
  failed_login_attempts   INT UNSIGNED NOT NULL DEFAULT 0,
  locked_until            DATETIME NULL,
  last_login_at           DATETIME NULL,
  invited_by_staff_id     BIGINT UNSIGNED NOT NULL,
  invited_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  activated_at            DATETIME NULL,
  created_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_client_accounts_email (email),
  CONSTRAINT fk_client_accounts_invited_by FOREIGN KEY (invited_by_staff_id)
    REFERENCES staff_accounts(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

ALTER TABLE requests
  ADD COLUMN client_account_id BIGINT UNSIGNED NULL AFTER id,
  ADD KEY idx_requests_client_account_id (client_account_id),
  ADD CONSTRAINT fk_requests_client_account FOREIGN KEY (client_account_id)
    REFERENCES client_accounts(id) ON DELETE SET NULL;

ALTER TABLE otp_codes
  ADD KEY idx_otp_codes_code_hash (code_hash);
