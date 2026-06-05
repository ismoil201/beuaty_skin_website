import { apiFetch } from "./apiClient.js";

export const getBanners = () => apiFetch("/api/banners", { showError: false });
export const getAnnouncements = () => apiFetch("/api/announcements", { showError: false });
