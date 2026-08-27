import { projectLookup, projectTracks } from './data/projects.js?v=20260827-2';
import { skillGroups } from './data/skills.js?v=20260827-2';
import { initCarousels } from './components/carousel.js?v=20260827-2';
import { renderFeatureTours } from './components/feature-tour.js?v=20260827-2';
import { renderGenericProjectDetail } from './components/project-detail.js?v=20260827-2';
import { renderProjectGalleries, renderProjectTracks } from './components/projects.js?v=20260827-2';
import { initNavigation, initRevealAnimations, initThemeToggle, restoreHashTarget, updateCopyrightYear } from './components/site.js?v=20260827-2';
import { initSkillProjectChooser, renderSkillGroups } from './components/skills.js?v=20260827-2';
import { renderProjectVideos, renderVideoEmbeds } from './components/videos.js?v=20260827-2';

const pathPrefix = document.body.classList.contains('project-page') ? '../' : '';

initThemeToggle();
renderProjectTracks(projectTracks, { pathPrefix });
renderGenericProjectDetail(projectLookup);
renderProjectGalleries(projectLookup, { pathPrefix });
renderFeatureTours(projectLookup, { pathPrefix });
renderProjectVideos(projectLookup, { pathPrefix });
renderVideoEmbeds();
renderSkillGroups(skillGroups);
initSkillProjectChooser(projectLookup);
initNavigation();
initCarousels();
initRevealAnimations();
updateCopyrightYear();
restoreHashTarget();
