import { els } from "../utils/dom.js";
import { authStore } from "../stores/index.js";
import { unlockBodyIfNoOverlay, syncBottomNav } from "./navigation.js";

/**
 * Shell tabs (Cart / Favorites / Profile / Notifications) are mutually exclusive.
 * Leaving Profile open while opening Cart made Cart invisible (lower z-index),
 * which looked like a "dead" bottom-nav button.
 */
export function closeShellTab(tab) {
  if (tab === "cart" && els.cartDrawer) {
    els.cartDrawer.classList.remove("open");
    els.cartDrawer.setAttribute("aria-hidden", "true");
  }
  if (tab === "favorites" && els.favoritesDialog) {
    els.favoritesDialog.classList.remove("open");
    els.favoritesDialog.setAttribute("aria-hidden", "true");
  }
  if (tab === "profile" && els.profileDrawer) {
    authStore.profileMenuOpen = false;
    els.profileDrawer.classList.remove("open");
    els.profileDrawer.setAttribute("aria-hidden", "true");
  }
  if (tab === "notifications" && els.notificationsDrawer) {
    els.notificationsDrawer.classList.remove("open");
    els.notificationsDrawer.setAttribute("aria-hidden", "true");
  }
}

/**
 * @param {string | { except?: string } | undefined} exceptOrOpts
 *   Pass a tab id to keep open, or `{ except: "cart" }`.
 *   Omit (or call with no args) to close all shell tabs.
 */
export function closeOtherShellTabs(exceptOrOpts) {
  const except =
    typeof exceptOrOpts === "string"
      ? exceptOrOpts
      : exceptOrOpts?.except;

  if (except !== "cart") closeShellTab("cart");
  if (except !== "favorites") closeShellTab("favorites");
  if (except !== "profile") closeShellTab("profile");
  if (except !== "notifications") closeShellTab("notifications");
  unlockBodyIfNoOverlay();
  syncBottomNav();
}

export function isShellTabOpen(tab) {
  if (tab === "cart") return Boolean(els.cartDrawer?.classList.contains("open"));
  if (tab === "favorites") return Boolean(els.favoritesDialog?.classList.contains("open"));
  if (tab === "profile") return Boolean(els.profileDrawer?.classList.contains("open"));
  if (tab === "notifications") return Boolean(els.notificationsDrawer?.classList.contains("open"));
  return false;
}
