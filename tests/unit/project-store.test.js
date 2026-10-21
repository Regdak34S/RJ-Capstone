/**
 * Unit tests for Persistence — real load/save/seed against MemoryAdapter.
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { MemoryAdapter } from "../../src/persistence/storage.js";
import {
  ProjectStore,
  seededProject,
  emptyProject,
  SCHEMA_VERSION,
} from "../../src/persistence/project-store.js";
import { ensureSeeded } from "../../src/app/seed.js";

describe("ProjectStore", () => {
  it("saves and loads a project document", () => {
    const store = new ProjectStore(new MemoryAdapter());
    const project = seededProject();
    const result = store.save(project);
    assert.equal(result.ok, true);
    assert.ok(result.savedAt);
    const loaded = store.load();
    assert.equal(loaded.title, project.title);
    assert.equal(loaded.sections.length, 1);
    assert.equal(loaded.sections[0].name, "Introduction");
    assert.equal(loaded.schemaVersion, SCHEMA_VERSION);
  });

  it("returns null when nothing is stored", () => {
    const store = new ProjectStore(new MemoryAdapter());
    assert.equal(store.load(), null);
  });

  it("loadOrSeed writes the skeleton row when empty", () => {
    const store = new ProjectStore(new MemoryAdapter());
    const doc = store.loadOrSeed();
    assert.equal(doc.sections[0].name, "Introduction");
    assert.equal(doc.sections[0].status, "draft");
    const again = store.load();
    assert.equal(again.sections[0].name, "Introduction");
  });

  it("ensureSeeded is idempotent", () => {
    const store = new ProjectStore(new MemoryAdapter());
    const first = ensureSeeded(store);
    assert.equal(first.seeded, true);
    const second = ensureSeeded(store);
    assert.equal(second.seeded, false);
    assert.equal(second.project.sections[0].name, "Introduction");
  });

  it("clear removes the document", () => {
    const store = new ProjectStore(new MemoryAdapter());
    store.save(emptyProject());
    store.clear();
    assert.equal(store.load(), null);
  });

  it("throws CORRUPT_DOCUMENT on invalid JSON", () => {
    const adapter = new MemoryAdapter();
    adapter.setItem("ccp:project:v1", "{not-json");
    const store = new ProjectStore(adapter);
    assert.throws(() => store.load(), /CORRUPT_DOCUMENT/);
  });
});

