import { apiFetch } from "./apiClient.js";

export const getNotifications = () =>
  apiFetch("/api/notifications", { requireAuth: true, showError: false, silentAuth: true });

export const getUnreadCount = () =>
  apiFetch("/api/notifications/unread-count", { requireAuth: true, showError: false, silentAuth: true });

export const markNotificationRead = (id) =>
  apiFetch(`/api/notifications/${id}/read`, {
    method: "POST",
    requireAuth: true,
    showError: false,
    promptLogin: true,
  });

export const saveNotificationToken = (token) =>
  apiFetch("/api/notifications/token", {
    method: "POST",
    body: JSON.stringify({ token }),
    requireAuth: true,
    silentAuth: true,
  });
