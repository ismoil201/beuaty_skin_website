export function parseResponseBody(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export function getApiErrorMessage(payload, status) {
  if (typeof payload === "string" && payload.trim()) return payload;
  return payload?.message || payload?.error || `API xatosi: HTTP ${status}`;
}
