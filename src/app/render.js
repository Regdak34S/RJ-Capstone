/**
 * Render — paints one real row from the project document into the DOM.
 * Walking skeleton: show project title + first section name and status.
 * Traces to: FR-VIEW-11, FR-SEC-07 (thin slice)
 */

/**
 * @param {object} project
 * @param {ParentNode} root
 */
export function renderProject(project, root) {
  if (!root) {
    throw new Error("RENDER_ROOT_MISSING");
  }
  root.innerHTML = "";

  const heading = document.createElement("h1");
  heading.id = "project-title";
  heading.textContent = project?.title || "(untitled project)";
  root.appendChild(heading);

  const list = document.createElement("ul");
  list.id = "section-list";
  list.setAttribute("aria-label", "Project sections");

  const sections = Array.isArray(project?.sections) ? project.sections : [];
  if (sections.length === 0) {
    const empty = document.createElement("li");
    empty.id = "empty-state";
    empty.textContent = "No sections yet.";
    list.appendChild(empty);
  } else {
    for (const section of sections) {
      const li = document.createElement("li");
      li.className = "section-row";
      li.dataset.sectionId = section.id;
      // Visible text the smoke test can match (SMOKE_EXPECT=Introduction)
      li.textContent = `${section.name} — ${section.status}`;
      list.appendChild(li);
    }
  }

  root.appendChild(list);

  const meta = document.createElement("p");
  meta.id = "skeleton-meta";
  meta.textContent = "Walking skeleton · data from Persistence (localStorage / memory)";
  root.appendChild(meta);

  return root;
}
