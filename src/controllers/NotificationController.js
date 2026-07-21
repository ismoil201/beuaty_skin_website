import { appStore, notificationStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { NotificationService } from "../services/NotificationService.js";
import { NotificationsPage } from "../pages/notifications/NotificationsPage.js";
import { OrdersPage } from "../pages/orders/OrdersPage.js";
import { showToast } from "../utils/toast.js";
import { lockBody, unlockBodyIfNoOverlay } from "../runtime/navigation.js";
import { closeOtherShellTabs } from "../runtime/shellTabs.js";
import { AuthController } from "./AuthController.js";
import { deps } from "../runtime/deps.js";

export const NotificationController = {
  clearState() {
    NotificationsPage.clearState({ closeDrawer: NotificationController.close });
  },

  async loadUnreadCount() {
    return NotificationsPage.loadUnreadCount({
      isLoggedIn: AuthController.isLoggedIn,
      onSessionExpired: NotificationController.close,
    });
  },

  async open() {
    if (!AuthController.isLoggedIn()) {
      AuthController.showLoginRequired();
      return;
    }
    closeOtherShellTabs({ except: "notifications" });
    els.notificationsDrawer.classList.add("open");
    els.notificationsDrawer.setAttribute("aria-hidden", "false");
    lockBody();
    await Promise.all([NotificationController.load(), NotificationController.loadUnreadCount()]);
  },

  close() {
    els.notificationsDrawer.classList.remove("open");
    els.notificationsDrawer.setAttribute("aria-hidden", "true");
    unlockBodyIfNoOverlay();
  },

  async load() {
    return NotificationsPage.load({
      isLoggedIn: AuthController.isLoggedIn,
      showLoginRequired: AuthController.showLoginRequired,
      onSessionExpired: NotificationController.close,
    });
  },

  async markRead(notificationId, options = {}) {
    const notification = notificationStore.notifications.find((item) => String(item.id) === String(notificationId));
    if (!notification || notification.read) return true;

    notificationStore.notificationUpdatingIds.add(String(notificationId));
    NotificationsPage.render();
    const result = await NotificationService.markRead(notificationId);
    notificationStore.notificationUpdatingIds.delete(String(notificationId));

    if (!result.success) {
      if (result.sessionExpired) {
        NotificationController.clearState();
        return false;
      }
      showToast(appStore.lastApiError || "Notification could not be updated.");
      NotificationsPage.render();
      return false;
    }

    notification.read = true;
    notificationStore.notifications = notificationStore.notifications.map((item) => (
      String(item.id) === String(notificationId) ? { ...item, read: true } : item
    ));
    notificationStore.unreadCount = Math.max(0, notificationStore.unreadCount - 1);
    NotificationsPage.render();
    await NotificationController.loadUnreadCount();
    if (!options.silent) showToast("Marked as read");
    return true;
  },

  async handleCardClick(notificationId) {
    const notification = notificationStore.notifications.find((item) => String(item.id) === String(notificationId));
    if (!notification) return;

    if (!notification.read) {
      await NotificationController.markRead(notificationId, { silent: true });
    }

    if (notification.type === "ORDER" && notification.refId) {
      NotificationController.close();
      await deps.orders?.show?.();
      await OrdersPage.openDetail(notification.refId);
    }
  },
};
