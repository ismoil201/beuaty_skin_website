import { appStore, notificationStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { t } from "../../i18n/index.js";
import { notificationTypeLabel } from "../../utils/productMapper.js";
import { NotificationService } from "../../services/NotificationService.js";
import { NotificationItem, notificationTypeIcon } from "../../components/notification/NotificationItem.js";
import { NotificationList, NotificationListSkeleton, NotificationListEmpty } from "../../components/notification/NotificationList.js";

export const NotificationsPage = {
  clearState({ closeDrawer } = {}) {
    notificationStore.notifications = [];
    notificationStore.notificationsLoading = false;
    notificationStore.notificationsError = "";
    notificationStore.unreadCount = 0;
    notificationStore.unreadCountLoading = false;
    notificationStore.notificationUpdatingIds = new Set();
    NotificationsPage.updateBadge();
    if (els.notificationsDrawer?.classList.contains("open")) {
      closeDrawer?.();
    }
  },

  updateBadge() {
    els.notificationsCount.textContent = notificationStore.unreadCount;
    els.notificationsCount.hidden = notificationStore.unreadCount <= 0;
    els.notificationsSummary.textContent = `${notificationStore.unreadCount} ${t("notifications.unread")}`;
  },

  renderCard(notification) {
    return NotificationItem({
      notification,
      updating: notificationStore.notificationUpdatingIds.has(String(notification.id)),
      labels: {
        unreadLabel: t("notifications.unread"),
        readLabel: t("notifications.read"),
        savingLabel: t("common.saving"),
        markReadLabel: t("notifications.markRead"),
        typeLabel: notificationTypeLabel(notification.type),
        typeIcon: notificationTypeIcon(notification.type),
      },
    });
  },

  render() {
    NotificationsPage.updateBadge();

    if (notificationStore.notificationsLoading) {
      els.notificationsContent.innerHTML = NotificationListSkeleton();
      return;
    }

    if (notificationStore.notificationsError) {
      els.notificationsContent.innerHTML = NotificationListEmpty({
        title: t("notifications.title"),
        message: notificationStore.notificationsError,
        retryLabel: t("common.tryAgain"),
      });
      return;
    }

    if (!notificationStore.notifications.length) {
      els.notificationsContent.innerHTML = NotificationListEmpty({
        title: t("notifications.none"),
        message: "Order, promo and system updates will appear here.",
      });
      return;
    }

    els.notificationsContent.innerHTML = NotificationList({
      itemsHtml: notificationStore.notifications.map((n) => NotificationsPage.renderCard(n)).join(""),
    });
  },

  async loadUnreadCount({ isLoggedIn, onSessionExpired } = {}) {
    if (!isLoggedIn?.()) {
      NotificationsPage.clearState();
      return;
    }

    notificationStore.unreadCountLoading = true;
    const result = await NotificationService.loadUnreadCount();
    notificationStore.unreadCountLoading = false;

    if (!result.success) {
      if (result.sessionExpired) {
        NotificationsPage.clearState({ closeDrawer: onSessionExpired });
        return;
      }
      NotificationsPage.updateBadge();
      return;
    }

    notificationStore.unreadCount = result.count;
    NotificationsPage.updateBadge();
  },

  async load({ isLoggedIn, showLoginRequired, onSessionExpired } = {}) {
    if (!isLoggedIn?.()) {
      showLoginRequired?.();
      return;
    }

    notificationStore.notificationsLoading = true;
    notificationStore.notificationsError = "";
    NotificationsPage.render();

    const result = await NotificationService.loadNotifications();
    notificationStore.notificationsLoading = false;

    if (!result.success) {
      if (result.sessionExpired) {
        NotificationsPage.clearState({ closeDrawer: onSessionExpired });
        return;
      }
      notificationStore.notificationsError = result.error;
      NotificationsPage.render();
      return;
    }

    notificationStore.notifications = result.notifications;
    NotificationsPage.render();
  },
};

export const loadNotifications = NotificationsPage.load;
export const loadUnreadCount = NotificationsPage.loadUnreadCount;
export const renderNotifications = NotificationsPage.render;
