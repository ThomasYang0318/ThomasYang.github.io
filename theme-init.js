(() => {
  try {
    const theme = window.localStorage.getItem('portfolio-theme');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.dataset.theme = theme;
    }
  } catch {
    // System color preference remains the fallback when storage is unavailable.
  }
})();
