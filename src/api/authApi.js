import { apiFetch } from "./apiClient.js";

export const login = (body) =>
  apiFetch("/api/auth/login", { method: "POST", body: JSON.stringify(body), showError: false });

export const register = (body) =>
  apiFetch("/api/auth/register", { method: "POST", body: JSON.stringify(body), showError: false });

export const loginWithFirebase = (body) =>
  apiFetch("/api/auth/firebase", { method: "POST", body: JSON.stringify(body), showError: false });
