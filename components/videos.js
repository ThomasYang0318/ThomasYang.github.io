function localVideoMarkup(video, pathPrefix) {
  const source = `${pathPrefix}${video.src}`;
  const poster = video.poster ? ` poster="${pathPrefix}${video.poster}"` : '';

  return `
    <video controls preload="metadata" playsinline title="${video.title}"${poster}>
      <source src="${source}" type="${video.type || 'video/mp4'}" />
      Your browser does not support embedded video. <a href="${source}">Open the video file</a>.
    </video>`;
}

function youtubeVideoMarkup(video) {
  const autoplayParams = video.autoplay ? ['autoplay=1', 'playsinline=1'] : [];
  if (video.autoplay && video.muted) autoplayParams.push('mute=1');
  autoplayParams.push('rel=0');
  const embedUrl = `https://www.youtube-nocookie.com/embed/${video.youtubeId}?${autoplayParams.join('&')}`;

  return `
    <iframe
      src="${embedUrl}"
      title="${video.title}"
      loading="${video.autoplay ? 'eager' : 'lazy'}"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`;
}

export function videoMarkup(video, { pathPrefix = '' } = {}) {
  const player = video.src
    ? localVideoMarkup(video, pathPrefix)
    : youtubeVideoMarkup(video);
  const cardClass = video.portrait ? 'video-card video-card-portrait' : 'video-card';

  return `
    <article class="${cardClass}">
      <div class="video-embed">
        ${player}
      </div>
      <h3>${video.title}</h3>
    </article>`;
}

export function renderVideoEmbeds(root = document) {
  root.querySelectorAll('[data-video-embed]').forEach(container => {
    const youtubeId = container.dataset.youtubeId;
    if (!youtubeId) return;

    const title = container.dataset.videoTitle || 'Project video';
    container.innerHTML = videoMarkup({ youtubeId, title });
  });
}

export function renderProjectVideos(projects, { root = document, pathPrefix = '' } = {}) {
  root.querySelectorAll('[data-project-videos]').forEach(container => {
    const project = projects[container.dataset.projectVideos];
    if (!project?.videos?.length) return;

    const videos = project.videos
      .map(video => videoMarkup(video, { pathPrefix }))
      .join('');
    const gridClass = project.videos.length === 1 ? 'video-grid video-grid-single' : 'video-grid';
    container.innerHTML = `<div class="${gridClass}">${videos}</div>`;
  });
}
