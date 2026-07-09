import { createStore } from "./createStore.js";

export const notificationStore = createStore({
  notifications: [],
  notificationsLoading: false,
  notificationsError: "",
  unreadCount: 0,
  unreadCountLoading: false,
  notificationUpdatingIds: new Set(),
});
