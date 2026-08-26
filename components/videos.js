function videoMarkup(video) {
  return `
    <article class="video-card">
      <div class="video-embed">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${video.youtubeId}"
          title="${video.title}"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h3>${video.title}</h3>
    </article>`;
}

export function renderProjectVideos(projects, root = document) {
  root.querySelectorAll('[data-project-videos]').forEach(container => {
    const project = projects[container.dataset.projectVideos];
    if (!project?.videos?.length) return;

    container.innerHTML = `<div class="video-grid">${project.videos.map(videoMarkup).join('')}</div>`;
  });
}
