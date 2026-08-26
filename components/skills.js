function skillMarkup(skill) {
  const projectIds = skill.projectIds || [skill.projectId];
  const chooserAttributes = projectIds.length > 1
    ? ` data-skill-name="${skill.name}" data-skill-projects="${projectIds.join(',')}"`
    : '';
  const icon = projectIds.length > 1 ? '+' : '↗';
  return `<a class="skill-tag" href="#project-${projectIds[0]}"${chooserAttributes}>${skill.name}<span aria-hidden="true">${icon}</span></a>`;
}

export function renderSkillGroups(groups, root = document) {
  const container = root.querySelector('[data-skill-groups]');
  if (!container) return;

  container.innerHTML = groups.map(group => `
    <div>
      <h3>${group.name}</h3>
      <div class="skill-tags">${group.skills.map(skillMarkup).join('')}</div>
    </div>
  `).join('');
}

function ensureProjectDialog(root) {
  let dialog = root.getElementById('skill-project-dialog');
  if (dialog) return dialog;

  dialog = root.createElement('dialog');
  dialog.id = 'skill-project-dialog';
  dialog.className = 'skill-dialog';
  dialog.setAttribute('aria-labelledby', 'skill-dialog-title');
  dialog.innerHTML = `
    <div class="skill-dialog-header">
      <div><p>Projects using this skill</p><h2 id="skill-dialog-title" data-skill-dialog-title>Select a project</h2></div>
      <button class="skill-dialog-close" type="button" aria-label="Close project selection">×</button>
    </div>
    <div class="skill-dialog-projects" data-skill-dialog-projects></div>`;
  root.body.append(dialog);

  dialog.querySelector('.skill-dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
  return dialog;
}

export function initSkillProjectChooser(projects, root = document) {
  const multiProjectTags = root.querySelectorAll('[data-skill-projects]');
  if (!multiProjectTags.length || typeof HTMLDialogElement === 'undefined') return;

  const dialog = ensureProjectDialog(root);
  const title = dialog.querySelector('[data-skill-dialog-title]');
  const projectList = dialog.querySelector('[data-skill-dialog-projects]');

  multiProjectTags.forEach(tag => tag.addEventListener('click', event => {
    const projectIds = tag.dataset.skillProjects.split(',');
    const choices = projectIds.map(id => ({ id, project: projects[id] })).filter(choice => choice.project);
    if (choices.length <= 1) return;

    event.preventDefault();
    title.textContent = tag.dataset.skillName;
    projectList.innerHTML = choices.map(({ id, project }) => `
      <a class="skill-dialog-project" href="#project-${id}">
        <span>${project.discipline}</span>
        <strong>${project.title}</strong>
        <b aria-hidden="true">→</b>
      </a>`).join('');
    projectList.querySelectorAll('a').forEach(link => link.addEventListener('click', () => dialog.close()));
    dialog.showModal();
  }));
}
