import {
  getNotifications,
  getUnreadCount,
  markNotificationRead as markNotificationReadApi,
  saveNotificationToken as saveNotificationTokenApi,
} from "../api/notificationApi.js";
import {
  getNotificationsContent,
  normalizeNotification,
  normalizeUnreadCount,
} from "../utils/productMapper.js";
import { createApiFailure, isSessionExpired } from "./serviceHelpers.js";

export const NotificationService = {
  async loadNotifications() {
    const response = await getNotifications();
    if (response === null) {
      return createApiFailure("Notifications could not be loaded.");
    }
    return {
      success: true,
      notifications: getNotificationsContent(response)
        .map(normalizeNotification)
        .filter((item) => item.id !== undefined),
    };
  },

  async loadUnreadCount() {
    const response = await getUnreadCount();
    if (response === null) {
      return { success: false, sessionExpired: isSessionExpired() };
    }
    return { success: true, count: normalizeUnreadCount(response) };
  },

  async markRead(notificationId) {
    const response = await markNotificationReadApi(notificationId);
    if (response === null) {
      return { success: false, sessionExpired: isSessionExpired() };
    }
    return { success: true };
  },

  async saveToken(token) {
    const cleanToken = String(token || "").trim();
    if (!cleanToken) {
      return { success: false, error: "empty" };
    }
    const result = await saveNotificationTokenApi(cleanToken);
    return { success: result !== null, result };
  },
};
