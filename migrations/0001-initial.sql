-- 0001-initial.sql — logical schema for Content Creation Project
-- Runtime v0.1 persists an equivalent JSON document in localStorage.
-- This SQL documents keys, types, and invariants for reviewers and a possible later SQLite port.

CREATE TABLE project (
  id            TEXT PRIMARY KEY,
  title         TEXT NOT NULL,
  schema_version INTEGER NOT NULL DEFAULT 1,
  updated_at    TEXT NOT NULL
);

CREATE TABLE section (
  id         TEXT PRIMARY KEY,
  project_id TEXT NOT NULL REFERENCES project(id) ON DELETE CASCADE,
  name       TEXT NOT NULL CHECK (length(name) > 0),
  sort_order INTEGER NOT NULL DEFAULT 0,
  status     TEXT NOT NULL CHECK (status IN ('not_started','draft','in_review','final')),
  draft_text TEXT NOT NULL DEFAULT ''
);

CREATE TABLE checklist_item (
  id         TEXT PRIMARY KEY,
  section_id TEXT NOT NULL REFERENCES section(id) ON DELETE CASCADE,
  label      TEXT NOT NULL,
  done       INTEGER NOT NULL DEFAULT 0 CHECK (done IN (0,1))
);

CREATE TABLE revision_note (
  id         TEXT PRIMARY KEY,
  section_id TEXT NOT NULL REFERENCES section(id) ON DELETE CASCADE,
  created_at TEXT NOT NULL,
  body       TEXT NOT NULL CHECK (length(body) > 0)
);

CREATE INDEX idx_section_project ON section(project_id);
CREATE INDEX idx_checklist_section ON checklist_item(section_id);
CREATE INDEX idx_revision_section ON revision_note(section_id);
