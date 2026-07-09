import { apiFetch } from "./apiClient.js";

export const getHealth = () => apiFetch("/api/health", { showError: false });
