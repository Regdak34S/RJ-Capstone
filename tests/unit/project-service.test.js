import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  addSection,
  updateSectionBody,
  setSectionStatus,
  VALID_STATUSES,
} from "../../src/app/project-service.js";
import { seededProject } from "../../src/persistence/project-store.js";

describe("project-service FR-MAP-01", () => {
  it("adds a named section", () => {
    const p = seededProject();
    const next = addSection(p, "Results");
    assert.equal(next.sections.length, p.sections.length + 1);
    assert.equal(next.sections.at(-1).name, "Results");
    assert.equal(next.sections.at(-1).status, "not_started");
  });

  it("rejects empty name with EMPTY_SECTION_NAME", () => {
    const p = seededProject();
    assert.throws(() => addSection(p, "   "), /EMPTY_SECTION_NAME/);
  });
});

describe("project-service FR-DRAFT-02", () => {
  it("updates body for known section", () => {
    const p = seededProject();
    const id = p.sections[0].id;
    const next = updateSectionBody(p, id, "Hello body");
    assert.equal(next.sections[0].body, "Hello body");
  });

  it("rejects unknown section", () => {
    const p = seededProject();
    assert.throws(() => updateSectionBody(p, "nope", "x"), /UNKNOWN_SECTION/);
  });
});

describe("project-service FR-PROG-03", () => {
  it("sets a valid status", () => {
    const p = seededProject();
    const id = p.sections[0].id;
    const next = setSectionStatus(p, id, "in_review");
    assert.equal(next.sections[0].status, "in_review");
  });

  it("rejects invalid status", () => {
    const p = seededProject();
    const id = p.sections[0].id;
    assert.throws(() => setSectionStatus(p, id, "shipped"), /INVALID_STATUS/);
  });

  it("exports the status vocabulary", () => {
    assert.ok(VALID_STATUSES.includes("final"));
  });
});

