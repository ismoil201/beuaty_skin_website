/**
 * Light theme only — Beauty Skin Korea marketplace.
 * Dark / system theme support removed for production.
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
