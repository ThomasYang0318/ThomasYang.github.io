const THEME_STORAGE_KEY = 'portfolio-theme';

function getStoredTheme() {
  try {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return theme === 'dark' || theme === 'light' ? theme : null;
  } catch {
    return null;
  }
}

function getSystemTheme() {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme, root = document) {
  root.documentElement.dataset.theme = theme;
}

export function initThemeToggle(root = document) {
  const initialTheme = getStoredTheme() || getSystemTheme();
  applyTheme(initialTheme, root);

  const navToggle = root.querySelector('.nav-toggle');
  if (!navToggle || root.querySelector('[data-theme-toggle]')) return;

  const button = root.createElement('button');
  button.className = 'theme-toggle';
  button.type = 'button';
  button.dataset.themeToggle = '';
  button.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span>';
  navToggle.before(button);

  const updateButton = theme => {
    const darkMode = theme === 'dark';
    button.setAttribute('aria-pressed', String(darkMode));
    button.setAttribute('aria-label', darkMode ? 'Switch to light background' : 'Switch to dark background');
    button.title = darkMode ? 'Light background' : 'Dark background';
  };

  updateButton(initialTheme);

  button.addEventListener('click', () => {
    const nextTheme = root.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme, root);
    updateButton(nextTheme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The theme still works for the current page when storage is unavailable.
    }
  });

  const colorScheme = window.matchMedia?.('(prefers-color-scheme: dark)');
  colorScheme?.addEventListener?.('change', event => {
    if (getStoredTheme()) return;
    const nextTheme = event.matches ? 'dark' : 'light';
    applyTheme(nextTheme, root);
    updateButton(nextTheme);
  });
}

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
