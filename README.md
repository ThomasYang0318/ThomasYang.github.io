# Thomas Yang — Personal Portfolio

A lightweight, modular static portfolio that deploys directly to GitHub Pages.

## Edit projects, images, and videos

Most portfolio updates only require editing [`data/projects.js`](data/projects.js).

- `projectTracks` controls the three disciplines and their order.
- `featured` controls the large project shown for each discipline.
- `otherProjects` controls the smaller project cards.
- `images` is the carousel image list. Add another `{ src, alt }` object to add a slide.
- `videos` is the embedded YouTube list. Add a `{ title, youtubeId }` object to add a video.
- `details` contains the paragraphs shown on a project's internal article page.
- `links` contains external presentations, demos, or source links shown inside the article.

Example:

```js
images: [
  {
    src: 'assets/images/projects/visual/my-image.jpg',
    alt: 'Description of the image'
  }
],
videos: [
  {
    title: 'Project demo',
    youtubeId: 'VIDEO_ID_ONLY'
  }
]
```

Use only the YouTube video ID, not the entire URL. For example, the ID in
`https://youtu.be/DJ7WR7n6QPM` is `DJ7WR7n6QPM`.

## Link skills to projects

Edit [`data/skills.js`](data/skills.js) to control the Technical Toolkit tags.

- Use `projectId` when a skill points to one project. Clicking jumps directly to it.
- Use `projectIds` when a skill points to multiple projects. Clicking opens a project chooser.

```js
{ name: 'OpenGL', projectId: 'opengl' }
{ name: 'Flutter', projectIds: ['nebula', 'mijing', 'wearable'] }
```

Project IDs are defined in `data/projects.js`.

## Project article pages

Each project card contains a topic, title, and one-sentence summary. Featured
projects use their dedicated pages in `projects/`. Other projects use the shared
`projects/project.html?id=PROJECT_ID` page, which is populated from
`data/projects.js`. External Canva and YouTube destinations belong inside the
detail page, so card clicks stay within the portfolio first.

## Structure

- `index.html` — page content outside the project list, plus a static project fallback
- `data/projects.js` — single source of truth for project cards, galleries, and videos
- `data/skills.js` — skill tags and their one-to-one or one-to-many project links
- `components/projects.js` — project-card and gallery rendering
- `components/project-detail.js` — shared article-style detail-page rendering
- `components/carousel.js` — reusable carousel markup and controls
- `components/videos.js` — privacy-enhanced YouTube embeds
- `components/skills.js` — skill links and the multi-project selection dialog
- `components/site.js` — navigation, reveal animation, and copyright year
- `script.js` — small module entry point
- `projects/` — featured project detail pages
- `styles.css` — responsive visual system
- `assets/images/projects/` — project images grouped by discipline

## Preview locally

JavaScript modules require a local web server. From the repository directory, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## GitHub Pages

No build step is required. GitHub Pages can continue publishing directly from
the `main` branch and repository root.
