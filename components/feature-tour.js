function featureImageMarkup(item, pathPrefix) {
  return `<img src="${pathPrefix}${item.image.src}" alt="${item.image.alt}" loading="lazy" data-feature-tour-image />`;
}

function hotspotMarkup(item, index) {
  return `
    <button
      class="feature-hotspot${index === 0 ? ' is-active' : ''}"
      type="button"
      style="--hotspot-x:${item.x}%;--hotspot-y:${item.y}%"
      data-feature-tour-control="${item.id}"
      data-feature-tour-hotspot
      aria-label="Show ${item.label}"
      aria-pressed="${index === 0 ? 'true' : 'false'}"
    ><span>${item.label}</span></button>`;
}

function tabMarkup(item, index) {
  return `
    <button
      class="feature-tour-tab${index === 0 ? ' is-active' : ''}"
      type="button"
      data-feature-tour-control="${item.id}"
      aria-pressed="${index === 0 ? 'true' : 'false'}"
    >${String(index + 1).padStart(2, '0')} · ${item.label}</button>`;
}

function featureTourMarkup(tour, pathPrefix) {
  const firstItem = tour.items[0];

  return `
    <div class="feature-tour-shell">
      <div class="feature-tour-heading">
        <p class="eyebrow">Interactive walkthrough</p>
        <h3>${tour.title}</h3>
        <p>${tour.intro}</p>
      </div>
      <div class="feature-tour-map">
        <img src="${pathPrefix}${tour.image.src}" alt="${tour.image.alt}" loading="lazy" />
        ${tour.items.map(hotspotMarkup).join('')}
      </div>
      <div class="feature-tour-tabs" role="group" aria-label="Mijing feature selector">
        ${tour.items.map(tabMarkup).join('')}
      </div>
      <div class="feature-tour-detail" aria-live="polite">
        <div class="feature-tour-preview">${featureImageMarkup(firstItem, pathPrefix)}</div>
        <article class="feature-tour-panel">
          <p class="feature-tour-index" data-feature-tour-index>Feature 01</p>
          <h3 data-feature-tour-title>${firstItem.label}</h3>
          <p data-feature-tour-description>${firstItem.description}</p>
        </article>
      </div>
    </div>`;
}

function initFeatureTour(container, tour, pathPrefix) {
  const controls = [...container.querySelectorAll('[data-feature-tour-control]')];
  const image = container.querySelector('[data-feature-tour-image]');
  const index = container.querySelector('[data-feature-tour-index]');
  const title = container.querySelector('[data-feature-tour-title]');
  const description = container.querySelector('[data-feature-tour-description]');

  controls.forEach(control => {
    control.addEventListener('click', () => {
      const itemIndex = tour.items.findIndex(item => item.id === control.dataset.featureTourControl);
      if (itemIndex < 0) return;

      const item = tour.items[itemIndex];
      controls.forEach(candidate => {
        const active = candidate.dataset.featureTourControl === item.id;
        candidate.classList.toggle('is-active', active);
        candidate.setAttribute('aria-pressed', String(active));
      });

      image.src = `${pathPrefix}${item.image.src}`;
      image.alt = item.image.alt;
      index.textContent = `Feature ${String(itemIndex + 1).padStart(2, '0')}`;
      title.textContent = item.label;
      description.textContent = item.description;
    });
  });
}

export function renderFeatureTours(projects, { root = document, pathPrefix = '' } = {}) {
  root.querySelectorAll('[data-feature-tour]').forEach(container => {
    const project = projects[container.dataset.featureTour];
    if (!project?.featureTour?.items?.length) return;

    container.innerHTML = featureTourMarkup(project.featureTour, pathPrefix);
    initFeatureTour(container, project.featureTour, pathPrefix);
  });
}
