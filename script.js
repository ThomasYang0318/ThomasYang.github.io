import { projectLookup, projectTracks } from './data/projects.js';
import { skillGroups } from './data/skills.js';
import { initCarousels } from './components/carousel.js';
import { renderGenericProjectDetail } from './components/project-detail.js';
import { renderProjectGalleries, renderProjectTracks } from './components/projects.js';
import { initNavigation, initRevealAnimations, restoreHashTarget, updateCopyrightYear } from './components/site.js';
import { initSkillProjectChooser, renderSkillGroups } from './components/skills.js';
import { renderProjectVideos, renderVideoEmbeds } from './components/videos.js';

const pathPrefix = document.body.classList.contains('project-page') ? '../' : '';

renderProjectTracks(projectTracks, { pathPrefix });
renderGenericProjectDetail(projectLookup);
renderProjectGalleries(projectLookup, { pathPrefix });
renderProjectVideos(projectLookup);
renderVideoEmbeds();
renderSkillGroups(skillGroups);
initSkillProjectChooser(projectLookup);
initNavigation();
initCarousels();
initRevealAnimations();
updateCopyrightYear();
restoreHashTarget();
