/**
 * Integration — Persistence seam (MemoryAdapter ↔ ProjectStore)
 * Seam: domain document ↔ storage adapter (localStorage contract in Node)
 */
import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { MemoryAdapter } from "../../src/persistence/storage.js";
import { ProjectStore } from "../../src/persistence/project-store.js";

const dataDir = join(dirname(fileURLToPath(import.meta.url)), "../data");

describe("integration: persistence round-trip", () => {
  it("saves and reloads happy-family project through the adapter", () => {
    const raw = readFileSync(join(dataDir, "happy/project.json"), "utf8");
    const doc = JSON.parse(raw);
    const store = new ProjectStore(new MemoryAdapter());
    store.save(doc);
    const loaded = store.load();
    assert.equal(loaded.title, "Happy Path Capstone");
    assert.equal(loaded.sections.length, 2);
    assert.equal(loaded.sections[0].name, "Introduction");
  });

  it("survives clear then re-seed path", () => {
    const store = new ProjectStore(new MemoryAdapter());
    const first = store.loadOrSeed();
    assert.ok(first.sections.length >= 1);
    store.clear();
    assert.equal(store.load(), null);
    const second = store.loadOrSeed();
    assert.equal(second.sections[0].name, "Introduction");
  });
});
