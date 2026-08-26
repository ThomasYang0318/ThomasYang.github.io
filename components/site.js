export function initNavigation(root = document) {
  const toggle = root.querySelector('.nav-toggle');
  const nav = root.querySelector('.nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

export function initRevealAnimations(root = document) {
  const elements = root.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(element => observer.observe(element));
}

export function updateCopyrightYear(root = document) {
  const year = root.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

export function restoreHashTarget(root = document) {
  if (!window.location.hash.startsWith('#project-')) return;
  window.requestAnimationFrame(() => {
    root.querySelector(window.location.hash)?.scrollIntoView();
  });
}
