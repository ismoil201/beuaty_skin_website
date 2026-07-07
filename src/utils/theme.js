import { CONFIG } from "../config/config.js";

const THEME_KEY = "beauty_skin_theme";
const THEMES = ["light", "dark", "system"];

let mediaQuery = null;

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(resolved) {
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.style.colorScheme = resolved;
  updateThemeToggleIcon(resolved);
}

function updateThemeToggleIcon(resolved) {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const isDark = resolved === "dark";
  btn.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  btn.setAttribute("title", isDark ? "Light mode" : "Dark mode");
}

export function getThemePreference() {
  const saved = localStorage.getItem(THEME_KEY);
  return THEMES.includes(saved) ? saved : "system";
}

export function getResolvedTheme() {
  const pref = getThemePreference();
  return pref === "system" ? getSystemTheme() : pref;
}

export function setThemePreference(preference) {
  if (!THEMES.includes(preference)) return;
  localStorage.setItem(THEME_KEY, preference);
  applyResolved();
}

export function cycleTheme() {
  const current = getThemePreference();
  const next = current === "light" ? "dark" : current === "dark" ? "system" : "light";
  setThemePreference(next);
  return next;
}

function applyResolved() {
  const pref = getThemePreference();
  const resolved = pref === "system" ? getSystemTheme() : pref;
  applyTheme(resolved);
}

function onSystemChange() {
  if (getThemePreference() === "system") {
    applyResolved();
  }
}

export function initTheme() {
  applyResolved();

  mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", onSystemChange);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(onSystemChange);
  }

  document.getElementById("themeToggle")?.addEventListener("click", () => {
    const next = cycleTheme();
    const labels = { light: "Light", dark: "Dark", system: "System" };
    return labels[next];
  });
}
