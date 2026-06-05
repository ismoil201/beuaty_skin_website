/** Safe access to Vite-injected env (undefined when opened via Live Server without Vite). */
export function getViteEnv() {
  try {
    return import.meta?.env ?? {};
  } catch {
    return {};
  }
}

export function getEnvString(key) {
  const value = getViteEnv()[key];
  return typeof value === "string" ? value.trim() : "";
}

export function isDevMode() {
  return Boolean(getViteEnv().DEV);
}

export function isProdMode() {
  return Boolean(getViteEnv().PROD);
}
