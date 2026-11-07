
/**
 * Acceptance tests — one-to-one with Must acceptance criteria that Iteration 1 implements.
 * Each test name includes the criterion id it verifies.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MemoryAdapter } from "../../src/persistence/storage.js";
import { ProjectStore, seededProject } from "../../src/persistence/project-store.js";
import {
  addSection,
  updateSectionBody,
  setSectionStatus,
  VALID_STATUSES,
} from "../../src/app/project-service.js";

describe("AC FR-MAP-01", () => {
  it("AC-MAP-01-1: adding a named section stores and lists it", () => {
    const p = seededProject();
    const next = addSection(p, "Results");
    assert.ok(next.sections.some((s) => s.name === "Results"));
    assert.equal(next.sections.at(-1).status, "not_started");
  });

  it("AC-MAP-01-2: empty section name is rejected (EMPTY_SECTION_NAME)", () => {
    assert.throws(() => addSection(seededProject(), "  "), (e) => e.code === "EMPTY_SECTION_NAME" || /EMPTY_SECTION_NAME/.test(e.message));
  });
});

describe("AC FR-DRAFT-02", () => {
  it("AC-DRAFT-02-1: editing body updates the model for the active section", () => {
    const p = seededProject();
    const id = p.sections[0].id;
    const next = updateSectionBody(p, id, "Revised intro");
    assert.equal(next.sections[0].body, "Revised intro");
  });

  it("AC-DRAFT-02-2: unknown section id yields UNKNOWN_SECTION", () => {
    assert.throws(() => updateSectionBody(seededProject(), "missing", "x"), /UNKNOWN_SECTION/);
  });
});

describe("AC FR-PROG-03", () => {
  it("AC-PROG-03-1: valid status values persist on the section", () => {
    const p = seededProject();
    const id = p.sections[0].id;
    for (const st of VALID_STATUSES) {
      const next = setSectionStatus(p, id, st);
      assert.equal(next.sections[0].status, st);
    }
  });

  it("AC-PROG-03-2: invalid status yields INVALID_STATUS", () => {
    const p = seededProject();
    assert.throws(() => setSectionStatus(p, p.sections[0].id, "shipped"), /INVALID_STATUS/);
  });
});

describe("AC FR-SAVE-09 / FR-LOAD-10", () => {
  it("AC-SAVE-09-1: save then load returns the same section body", () => {
    const store = new ProjectStore(new MemoryAdapter());
    let p = seededProject();
    p = updateSectionBody(p, p.sections[0].id, "Persisted text");
    store.save(p);
    const loaded = store.load();
    assert.equal(loaded.sections[0].body, "Persisted text");
  });

  it("AC-LOAD-10-1: loadOrSeed provides Introduction when store empty", () => {
    const store = new ProjectStore(new MemoryAdapter());
    const doc = store.loadOrSeed();
    assert.equal(doc.sections[0].name, "Introduction");
  });
});

describe("AC FR-VIEW-11 / FR-SEC-07", () => {
  it("AC-VIEW-11-1: project exposes sections list for overview", () => {
    const p = seededProject();
    assert.ok(Array.isArray(p.sections));
    assert.ok(p.sections.length >= 1);
  });

  it("AC-SEC-07-1: each section carries a status string", () => {
    const p = seededProject();
    for (const s of p.sections) {
      assert.equal(typeof s.status, "string");
      assert.ok(VALID_STATUSES.includes(s.status) || s.status.length > 0);
    }
  });
});

describe("AC FR-NAV-06 (partial)", () => {
  it("AC-NAV-06-1: domain does not auto-discard body on status change", () => {
    // Full UI dirty-guard is browser-level; domain keeps body when status changes
    let p = seededProject();
    const id = p.sections[0].id;
    p = updateSectionBody(p, id, "Keep me");
    p = setSectionStatus(p, id, "in_review");
    assert.equal(p.sections[0].body, "Keep me");
  });
});
