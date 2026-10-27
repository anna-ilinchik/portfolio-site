(() => {
  const root = document.documentElement;
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  const storageKey = 'hanna-theme';
  let chosenTheme = null;
  try {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'light' || stored === 'dark') chosenTheme = stored;
  } catch { /* Theme switching still works when storage is unavailable. */ }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]').content =
      theme === 'dark' ? '#17211b' : '#f6f6f0';
    const toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;
    const isDark = theme === 'dark';
    const label = isDark ? 'Switch to light theme' : 'Switch to dark theme';
    toggle.setAttribute('aria-label', label);
    toggle.setAttribute('title', label);
    toggle.setAttribute('aria-pressed', String(isDark));
    toggle.querySelector('.theme-label').textContent = isDark ? 'Light' : 'Dark';
  }

  // Apply before styles load to avoid a bright flash on a dark page.
  applyTheme(chosenTheme || (preference.matches ? 'dark' : 'light'));
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(root.dataset.theme);
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      chosenTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(chosenTheme);
      try { localStorage.setItem(storageKey, chosenTheme); } catch { /* Optional persistence. */ }
    });
  });
  preference.addEventListener('change', event => {
    if (!chosenTheme) applyTheme(event.matches ? 'dark' : 'light');
  });
})();
