/**
 * Persistence — owns the single project JSON document (architecture §4).
 * Key: ccp:project:v1 (or STORAGE_KEY env in Node).
 * Traces to: FR-SAVE-09, FR-LOAD-10, NFR-REL-02, NFR-PRIV-01
 */

import { createStorage } from "./storage.js";

export const DEFAULT_STORAGE_KEY = "ccp:project:v1";
export const SCHEMA_VERSION = 1;

export function storageKey() {
  if (typeof process !== "undefined" && process.env && process.env.STORAGE_KEY) {
    return process.env.STORAGE_KEY;
  }
  return DEFAULT_STORAGE_KEY;
}

/** Empty project skeleton matching architecture data model §6. */
export function emptyProject() {
  return {
    id: "proj-skeleton",
    title: "Capstone Content Project",
    schemaVersion: SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
    sections: [],
  };
}

/**
 * Seeded project used by the walking skeleton.
 * One section so the UI can render a real row from the store.
 */
export function seededProject() {
  return {
    id: "proj-skeleton",
    title: "Capstone Content Project",
    schemaVersion: SCHEMA_VERSION,
    updatedAt: new Date().toISOString(),
    sections: [
      {
        id: "sec-intro",
        name: "Introduction",
        order: 0,
        status: "draft",
        draftText: "Skeleton seed text for the Introduction section.",
        checklist: [],
        revisions: [],
      },
    ],
  };
}

export class ProjectStore {
  /**
   * @param {object} [adapter] storage adapter with getItem/setItem/removeItem
   */
  constructor(adapter) {
    this.adapter = adapter || createStorage();
    this.key = storageKey();
  }

  load() {
    const raw = this.adapter.getItem(this.key);
    if (raw == null || raw === "") {
      return null;
    }
    try {
      const doc = JSON.parse(raw);
      if (typeof doc !== "object" || doc === null) {
        throw new Error("CORRUPT_DOCUMENT");
      }
      return doc;
    } catch {
      const err = new Error("CORRUPT_DOCUMENT");
      err.code = "CORRUPT_DOCUMENT";
      throw err;
    }
  }

  save(project) {
    if (!project || typeof project !== "object") {
      throw new Error("INVALID_PROJECT");
    }
    const copy = {
      ...project,
      schemaVersion: SCHEMA_VERSION,
      updatedAt: new Date().toISOString(),
    };
    this.adapter.setItem(this.key, JSON.stringify(copy));
    return { ok: true, savedAt: copy.updatedAt, bytes: JSON.stringify(copy).length };
  }

  clear() {
    this.adapter.removeItem(this.key);
  }

  /** Load or seed the skeleton project (one real row in the store). */
  loadOrSeed() {
    let doc = this.load();
    if (!doc || !Array.isArray(doc.sections) || doc.sections.length === 0) {
      doc = seededProject();
      this.save(doc);
    }
    return doc;
  }
}
