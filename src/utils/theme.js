/**
 * Light theme only — Beauty Skin Korea marketplace.
 * Dark / system theme support has been removed for production.
 */
export function initTheme() {
  document.documentElement.removeAttribute("data-theme");
  document.documentElement.style.colorScheme = "light";
  try {
    localStorage.removeItem("beauty_skin_theme");
  } catch {
    /* ignore */
  }
  document.getElementById("themeToggle")?.remove();
}

export function getThemePreference() {
  return "light";
}

export function getResolvedTheme() {
  return "light";
}

export function setThemePreference() {
  /* no-op: light theme only */
}

export function cycleTheme() {
  return "light";
}
