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
  return `
    <iframe
      src="https://www.youtube-nocookie.com/embed/${video.youtubeId}"
      title="${video.title}"
      loading="lazy"
      referrerpolicy="strict-origin-when-cross-origin"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>`;
}

function chunkedVideoMarkup(video) {
  return `
    <div
      class="video-chunk-loader"
      data-video-parts-base="${video.parts.basePath}"
      data-video-parts-count="${video.parts.count}"
      data-video-type="${video.type || 'video/mp4'}"
      data-video-title="${video.title}"
      aria-busy="true"
    >
      <span class="video-loading-indicator" aria-hidden="true"></span>
      <p data-video-load-status aria-live="polite">Preparing introduction video${video.sizeLabel ? ` · ${video.sizeLabel}` : ''}…</p>
    </div>`;
}

export function videoMarkup(video, { pathPrefix = '' } = {}) {
  const player = video.parts
    ? chunkedVideoMarkup(video)
    : video.src
      ? localVideoMarkup(video, pathPrefix)
      : youtubeVideoMarkup(video);

  return `
    <article class="video-card">
      <div class="video-embed">
        ${player}
      </div>
      <h3>${video.title}</h3>
    </article>`;
}

function partUrl(basePath, partNumber, pathPrefix) {
  return `${pathPrefix}${basePath}/part-${String(partNumber).padStart(3, '0')}.bin`;
}

function initChunkedVideos(root, pathPrefix) {
  root.querySelectorAll('[data-video-parts-base]').forEach(loader => {
    const status = loader.querySelector('[data-video-load-status]');
    const count = Number(loader.dataset.videoPartsCount);
    const batchSize = 6;

    const loadVideo = async () => {
      loader.setAttribute('aria-busy', 'true');
      status.textContent = 'Loading video…';

      try {
        const buffers = [];
        for (let start = 1; start <= count; start += batchSize) {
          const end = Math.min(start + batchSize - 1, count);
          const requests = [];
          for (let partNumber = start; partNumber <= end; partNumber += 1) {
            requests.push(fetch(partUrl(loader.dataset.videoPartsBase, partNumber, pathPrefix)));
          }

          const responses = await Promise.all(requests);
          if (responses.some(response => !response.ok)) throw new Error('A video segment could not be loaded.');
          buffers.push(...await Promise.all(responses.map(response => response.arrayBuffer())));
          status.textContent = `Loading video… ${end} / ${count}`;
        }

        const objectUrl = URL.createObjectURL(new Blob(buffers, { type: loader.dataset.videoType }));
        const video = document.createElement('video');
        video.controls = true;
        video.preload = 'auto';
        video.playsInline = true;
        video.autoplay = true;
        video.muted = true;
        video.title = loader.dataset.videoTitle;
        video.src = objectUrl;
        loader.replaceWith(video);
        video.play().catch(() => {});
        window.addEventListener('pagehide', () => URL.revokeObjectURL(objectUrl), { once: true });
      } catch (error) {
        loader.setAttribute('aria-busy', 'false');
        loader.innerHTML = '<button type="button">Retry video</button><p data-video-load-status>The video could not be loaded.</p>';
        loader.querySelector('button')?.addEventListener('click', loadVideo, { once: true });
      }
    };

    loadVideo();
  });
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
    initChunkedVideos(container, pathPrefix);
  });
}
