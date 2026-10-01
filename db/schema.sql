-- Schéma initial (Lot 2 — Stage 1 : soumission de demandes).
--
-- Ce fichier est appliqué manuellement (phpMyAdmin ou CLI `mysql` en Terminal cPanel) :
-- le déploiement standalone n'embarque pas le CLI de migration de Knex. Voir
-- db/migrations/README.md pour la marche à suivre et les évolutions futures (Stage 2/3).

CREATE TABLE IF NOT EXISTS requests (
  id                      BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  client_account_id       BIGINT UNSIGNED NULL,                  -- lié lors de l'invitation du client (back-office)
  reference               VARCHAR(20)  NOT NULL,                 -- ex. "REQ-2026-4F3A9C", communiqué au client
  status                  VARCHAR(20)  NOT NULL DEFAULT 'new',    -- new/in_review/accepted/declined/closed (géré côté appli)
  locale                  VARCHAR(5)   NOT NULL DEFAULT 'fr',
  full_name               VARCHAR(200) NOT NULL,
  email                   VARCHAR(255) NOT NULL,
  phone                   VARCHAR(30)  NOT NULL,
  legal_domain_slug       VARCHAR(100) NOT NULL,                  -- doit matcher expertiseDomains[].slug
  opposing_party_name     VARCHAR(200) NULL,
  opposing_party_details  TEXT NULL,
  urgency                 VARCHAR(20)  NOT NULL DEFAULT 'normal', -- low/normal/high/urgent (géré côté appli)
  description             TEXT NOT NULL,
  consent_given           TINYINT(1)   NOT NULL DEFAULT 0,
  consent_at              DATETIME NULL,
  client_ip               VARCHAR(45) NULL,
  user_agent              VARCHAR(255) NULL,
  created_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_requests_reference (reference),
  KEY idx_requests_email (email),
  KEY idx_requests_status (status),
  KEY idx_requests_created_at (created_at),
  KEY idx_requests_client_account_id (client_account_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS request_documents (
  id                 BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  request_id         BIGINT UNSIGNED NOT NULL,
  original_filename  VARCHAR(255) NOT NULL,   -- nom d'origine, affichage uniquement
  stored_filename    VARCHAR(255) NOT NULL,   -- nom aléatoire réellement sur disque
  storage_path       VARCHAR(500) NOT NULL,   -- chemin relatif sous UPLOAD_DIR
  mime_type          VARCHAR(150) NOT NULL,
  size_bytes         INT UNSIGNED NOT NULL,
  created_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_request_documents_request_id (request_id),
  CONSTRAINT fk_request_documents_request FOREIGN KEY (request_id)
    REFERENCES requests(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Back-office staff (MVP) : authentification interne + triage des demandes.
-- Voir db/migrations/README.md pour le contexte (comptes clients volontairement hors périmètre).

CREATE TABLE IF NOT EXISTS staff_accounts (
  id                      BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  email                   VARCHAR(255) NOT NULL,
  password_hash           VARCHAR(255) NOT NULL,
  full_name               VARCHAR(200) NOT NULL,
  role                    VARCHAR(30)  NOT NULL DEFAULT 'staff',
  is_active               TINYINT(1)   NOT NULL DEFAULT 1,
  failed_login_attempts   INT UNSIGNED NOT NULL DEFAULT 0,
  locked_until            DATETIME NULL,
  last_login_at           DATETIME NULL,
  created_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at              DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_staff_accounts_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS sessions (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  subject_type  VARCHAR(20) NOT NULL,   -- 'staff' aujourd'hui, 'client' plus tard
  subject_id    BIGINT UNSIGNED NOT NULL,
  token_hash    CHAR(64) NOT NULL,      -- sha256 du jeton ; le jeton brut ne vit que dans le cookie
  user_agent    VARCHAR(255) NULL,
  ip            VARCHAR(45) NULL,
  expires_at    DATETIME NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_sessions_token_hash (token_hash),
  KEY idx_sessions_subject (subject_type, subject_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS otp_codes (
  id            BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  subject_type  VARCHAR(20) NOT NULL,
  subject_id    BIGINT UNSIGNED NOT NULL,
  purpose       VARCHAR(30) NOT NULL,   -- 'login_2fa', 'client_activation', ...
  code_hash     CHAR(64) NOT NULL,      -- sha256 du code (6 chiffres) ou du token long (activation)
  expires_at    DATETIME NOT NULL,
  consumed_at   DATETIME NULL,
  attempts      INT UNSIGNED NOT NULL DEFAULT 0,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_otp_codes_subject (subject_type, subject_id, purpose),
  KEY idx_otp_codes_code_hash (code_hash) -- lookup direct par token (lien d'activation, sujet inconnu a priori)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS request_status_history (
  id                   BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  request_id           BIGINT UNSIGNED NOT NULL,
  old_status           VARCHAR(20) NOT NULL,
  new_status           VARCHAR(20) NOT NULL,
  changed_by_staff_id  BIGINT UNSIGNED NOT NULL,
  changed_at           DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY idx_request_status_history_request_id (request_id),
  CONSTRAINT fk_request_status_history_request FOREIGN KEY (request_id)
    REFERENCES requests(id) ON DELETE CASCADE,
  CONSTRAINT fk_request_status_history_staff FOREIGN KEY (changed_by_staff_id)
    REFERENCES staff_accounts(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Espace client : comptes clients invités depuis le back-office (voir
-- db/migrations/README.md). `sessions` et `otp_codes` ci-dessus sont génériques depuis le
-- départ précisément pour être réutilisées ici (subject_type='client').

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

-- client_accounts est défini après requests dans ce fichier (ordre de lecture plus clair),
-- donc la FK requests.client_account_id -> client_accounts(id) ne peut être posée qu'ici,
-- une fois la table cible créée. Sur une base déjà peuplée, voir
-- db/migrations/002_client_space.sql à la place (ALTER non ré-exécutable).
ALTER TABLE requests
  ADD CONSTRAINT fk_requests_client_account FOREIGN KEY (client_account_id)
    REFERENCES client_accounts(id) ON DELETE SET NULL;
