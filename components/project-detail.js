function tagsMarkup(tags = []) {
  return `<div class="tags">${tags.map(tag => `<span>${tag}</span>`).join('')}</div>`;
}

function linksMarkup(links = []) {
  if (!links.length) return '';
  return `<div class="link-row">${links.map((link, index) => `
    <a class="button ${index === 0 ? 'button-dark' : 'button-light'}" href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>
  `).join('')}</div>`;
}

export function renderGenericProjectDetail(projects, { root = document } = {}) {
  const container = root.querySelector('[data-generic-project-detail]');
  if (!container) return;

  const projectId = new URLSearchParams(window.location.search).get('id');
  const project = projects[projectId];

  if (!project) {
    root.title = 'Project not found — Yang Chi Hung';
    container.innerHTML = `
      <section class="project-hero wrap">
        <a class="back-link" href="../index.html#projects">← Back to projects</a>
        <p class="eyebrow">Project</p>
        <h1>Project not found.</h1>
        <p class="hero-lead">The requested project does not exist or its link has changed.</p>
      </section>`;
    return;
  }

  root.title = `${project.title} — Yang Chi Hung`;
  const description = root.querySelector('meta[name="description"]');
  description?.setAttribute('content', `${project.title} — ${project.description}`);

  const detailParagraphs = (project.details || [project.description])
    .map(paragraph => `<p>${paragraph}</p>`)
    .join('');
  const videoSection = project.videos?.length ? `
    <section class="case-section wrap reveal">
      <div class="case-grid">
        <h2>Project video${project.videos.length > 1 ? 's' : ''}</h2>
        <div class="case-content" data-project-videos="${projectId}"></div>
      </div>
    </section>` : '';
  const featureTourSection = project.featureTour ? `
    <section class="case-section wrap reveal">
      <div class="case-grid">
        <h2>Interactive experience</h2>
        <div class="case-content" data-feature-tour="${projectId}"></div>
      </div>
    </section>` : '';

  container.innerHTML = `
    <section class="project-hero wrap reveal">
      <a class="back-link" href="../index.html#project-${projectId}">← Back to project card</a>
      <p class="eyebrow">${project.discipline} · ${project.type || project.meta}</p>
      <h1>${project.title}</h1>
      <div class="project-summary">
        ${tagsMarkup(project.tags)}
        <p>${project.description}</p>
      </div>
      <div class="project-hero-image project-carousel project-detail-carousel" data-project-gallery="${projectId}" aria-label="${project.title} project gallery"></div>
    </section>

    <section class="case-section wrap reveal">
      <div class="case-grid">
        <h2>Project overview</h2>
        <div class="case-content">${detailParagraphs}${linksMarkup(project.links)}</div>
      </div>
    </section>
    ${featureTourSection}
    ${videoSection}`;
}
