import { apiFetch } from "./apiClient.js";

export const getCategories = () => apiFetch("/api/categories", { showError: false });
