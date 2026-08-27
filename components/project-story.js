function storyCardMarkup(image, pathPrefix) {
  return `
    <figure class="story-card${image.wide ? ' story-card-wide' : ''}">
      <div class="story-card-media"><img src="${pathPrefix}${image.src}" alt="${image.alt}" loading="lazy" /></div>
      <figcaption>
        <p>${image.eyebrow}</p>
        <h4>${image.title}</h4>
        <span>${image.description}</span>
      </figcaption>
    </figure>`;
}

function storyChapterMarkup(chapter, pathPrefix) {
  return `
    <section class="story-chapter" id="mijing-story-${chapter.id}">
      <header class="story-chapter-heading">
        <div><span>${chapter.index}</span><p>${chapter.label}</p></div>
        <div><h3>${chapter.title}</h3><p>${chapter.description}</p></div>
      </header>
      <div class="story-card-grid">
        ${chapter.images.map(image => storyCardMarkup(image, pathPrefix)).join('')}
      </div>
    </section>`;
}

function projectStoryMarkup(story, pathPrefix) {
  return `
    <div class="project-story">
      <header class="project-story-heading">
        <p class="eyebrow">Systematic case study</p>
        <h2>${story.title}</h2>
        <p>${story.intro}</p>
      </header>
      <nav class="story-navigation" aria-label="Mijing case study chapters">
        ${story.chapters.map(chapter => `<a href="#mijing-story-${chapter.id}"><span>${chapter.index}</span>${chapter.label}</a>`).join('')}
      </nav>
      ${story.chapters.map(chapter => storyChapterMarkup(chapter, pathPrefix)).join('')}
    </div>`;
}

export function renderProjectStories(projects, { root = document, pathPrefix = '' } = {}) {
  root.querySelectorAll('[data-project-story]').forEach(container => {
    const project = projects[container.dataset.projectStory];
    if (!project?.caseStudy?.chapters?.length) return;
    container.innerHTML = projectStoryMarkup(project.caseStudy, pathPrefix);
  });
}
