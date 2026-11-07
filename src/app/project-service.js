/**
 * Domain operations for Content Creation Project.
 * Vertical slices: FR-MAP-01, FR-DRAFT-02, FR-PROG-03, FR-SAVE-09, FR-VIEW-11, FR-SEC-07
 */

export const VALID_STATUSES = Object.freeze([
  "not_started",
  "draft",
  "in_review",
  "final",
]);

export function createSection(name) {
  const trimmed = String(name || "").trim();
  if (!trimmed) {
    const err = new Error("EMPTY_SECTION_NAME");
    err.code = "EMPTY_SECTION_NAME";
    throw err;
  }
  return {
    id: `sec_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name: trimmed,
    status: "not_started",
    body: "",
    checklist: [],
  };
}

/** FR-MAP-01 — add a section; reject empty name. */
export function addSection(project, name) {
  if (!project || typeof project !== "object") {
    const err = new Error("INVALID_PROJECT");
    err.code = "INVALID_PROJECT";
    throw err;
  }
  const section = createSection(name);
  const sections = Array.isArray(project.sections) ? [...project.sections] : [];
  sections.push(section);
  return { ...project, sections };
}

/** FR-DRAFT-02 — update body for a known section. */
export function updateSectionBody(project, sectionId, body) {
  const sections = Array.isArray(project?.sections) ? project.sections : [];
  const idx = sections.findIndex((s) => s.id === sectionId);
  if (idx < 0) {
    const err = new Error("UNKNOWN_SECTION");
    err.code = "UNKNOWN_SECTION";
    throw err;
  }
  const next = sections.map((s, i) =>
    i === idx ? { ...s, body: String(body ?? "") } : s
  );
  return { ...project, sections: next };
}

/** FR-PROG-03 — set status; reject invalid values. */
export function setSectionStatus(project, sectionId, status) {
  if (!VALID_STATUSES.includes(status)) {
    const err = new Error("INVALID_STATUS");
    err.code = "INVALID_STATUS";
    throw err;
  }
  const sections = Array.isArray(project?.sections) ? project.sections : [];
  const idx = sections.findIndex((s) => s.id === sectionId);
  if (idx < 0) {
    const err = new Error("UNKNOWN_SECTION");
    err.code = "UNKNOWN_SECTION";
    throw err;
  }
  const next = sections.map((s, i) =>
    i === idx ? { ...s, status } : s
  );
  return { ...project, sections: next };
}

export function findSection(project, sectionId) {
  return (project?.sections || []).find((s) => s.id === sectionId) || null;
}
