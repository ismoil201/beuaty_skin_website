/**
 * Light theme only — Beauty Skin Korea.
 * Night / dark / system theme fully disabled.
 */
export function initTheme() {
  const root = document.documentElement;
  root.removeAttribute("data-theme");
  root.classList.remove("dark", "theme-dark", "night");
  root.classList.add("light");
  root.style.colorScheme = "light";
  document.body?.classList.remove("dark", "theme-dark", "night");
  document.body?.classList.add("light-theme");

  try {
    localStorage.removeItem("beauty_skin_theme");
    localStorage.removeItem("theme");
    localStorage.removeItem("color-scheme");
  } catch {
    /* ignore */
  }

  document.getElementById("themeToggle")?.remove();
  document.getElementById("themeSelect")?.remove();
  document.querySelectorAll("[data-theme-toggle], .theme-toggle, .theme-picker").forEach((el) => el.remove());
}
