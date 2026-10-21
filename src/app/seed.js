/**
 * Seed helper — ensures the walking-skeleton project exists in the store.
 * Used by the browser entry and by Node tests/smoke.
 */

import { ProjectStore, seededProject } from "../persistence/project-store.js";

export function ensureSeeded(store = new ProjectStore()) {
  const existing = store.load();
  if (existing && Array.isArray(existing.sections) && existing.sections.length > 0) {
    return { project: existing, seeded: false };
  }
  const project = seededProject();
  store.save(project);
  return { project, seeded: true };
}
