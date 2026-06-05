import { apiFetch } from "./apiClient.js";

export const getNotifications = () =>
  apiFetch("/api/notifications", { requireAuth: true, showError: false });
export const getUnreadCount = () =>
  apiFetch("/api/notifications/unread-count", { requireAuth: true, showError: false });
export const markNotificationRead = (id) =>
  apiFetch(`/api/notifications/${id}/read`, { method: "PUT", requireAuth: true, showError: false });
export const saveNotificationToken = (token) =>
  apiFetch("/api/notifications/token", {
    method: "POST",
    body: JSON.stringify({ token }),
    requireAuth: true,
    showError: false,
  });
