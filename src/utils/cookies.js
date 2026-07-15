/** Read a browser cookie by name. */
export function getCookie(name) {
  if (typeof document === "undefined") return "";
  const encoded = encodeURIComponent(name);
  const parts = String(document.cookie || "").split(";");
  for (const part of parts) {
    const trimmed = part.trim();
    if (trimmed.startsWith(`${encoded}=`) || trimmed.startsWith(`${name}=`)) {
      const value = trimmed.slice(trimmed.indexOf("=") + 1);
      try {
        return decodeURIComponent(value);
      } catch {
        return value;
      }
    }
  }
  return "";
}

/** Spring CSRF cookie → header value for refresh/logout. */
export function getXsrfToken() {
  return getCookie("XSRF-TOKEN") || getCookie("Xsrf-Token") || getCookie("xsrf-token") || "";
}
