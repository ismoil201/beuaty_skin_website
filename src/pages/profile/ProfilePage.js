import { CONFIG } from "../../config/config.js";
import { SUPPORTED_LANGUAGES } from "../../config/constants.js";
import { appStore, authStore, cartStore, notificationStore, productStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { normalizeOrderItem } from "../../utils/productMapper.js";
import { t, getCurrentLanguage } from "../../i18n/index.js";
import { ProfileService } from "../../services/ProfileService.js";
import { ProfileStatCard } from "../../components/profile/ProfileStats.js";
import { ProfileMenuRow } from "../../components/profile/ProfileMenu.js";
import { ProfileAvatar } from "../../components/profile/ProfileHeader.js";
import { UnreadBadge } from "../../components/notification/UnreadBadge.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { productCard } from "../shared/productGrid.js";
import { profileOrderStatusLabel } from "../shared/orderLabels.js";
import { requireAuth } from "../../auth/requireAuth.js";
import { PENDING_ACTION_TYPES } from "../../auth/pendingActionManager.js";
import { AuthService } from "../../services/AuthService.js";

function getLanguageLabel() {
  const lang = getCurrentLanguage();
  const labels = {
    uz: "O'zbek",
    en: "English",
    ru: "Русский",
    ko: "한국어",
  };
  return labels[lang] || labels.en;
}

function menuIcons() {
  return {
    promotions: `<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M12 3 20 8v4H4V8z"/></svg>`,
    help: `<svg viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z"/><path d="M14 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3z"/><path d="M8.5 11V7a3.5 3.5 0 1 1 7 0v4"/></svg>`,
    news: `<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11 6v12"/></svg>`,
    language: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    privacy: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
    terms: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
    licenses: `<svg viewBox="0 0 24 24"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
    recent: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
  };
}

function renderOrderPreviewCard(order) {
  const items = (Array.isArray(order.items) ? order.items : []).map((item) => normalizeOrderItem({ ...item, orderId: order.id }));
  const thumbs = items.slice(0, 4).map((item) => `
    <img src="${escapeHtml(item.image || CONFIG.placeholderImage)}" alt="" loading="eager" decoding="async" class="app-profile-order-thumb" />
  `).join("");
  const extra = items.length > 4 ? `<span class="app-profile-order-more">+${items.length - 4}</span>` : "";

  return `
    <button class="app-profile-order-card" type="button" data-profile-order="${escapeHtml(order.id)}">
      <span class="app-profile-order-status">${escapeHtml(profileOrderStatusLabel(order.status))}</span>
      <div class="app-profile-order-thumbs">${thumbs || `<span class="app-profile-order-empty">${escapeHtml(t("orders.items", { count: 0 }))}</span>`}${extra}</div>
    </button>
  `;
}

function renderEditForm(user) {
  return `
    <form class="app-profile-edit profile-edit" id="profileEditForm">
      <h3>${escapeHtml(t("profile.edit"))}</h3>
      <label>Email<input value="${escapeHtml(user.email || "")}" readonly /></label>
      <label>${escapeHtml(t("profile.fullName"))}<input id="profileFullName" value="${escapeHtml(user.fullName || "")}" required /></label>
      <label>${escapeHtml(t("profile.phone"))}<input id="profilePhone" value="${escapeHtml(user.phone || "")}" required /></label>
      <label>${escapeHtml(t("profile.imageUrl"))}<input id="profileImage" value="${escapeHtml(user.profileImage || "")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">${escapeHtml(t("profile.save"))}</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `;
}

function renderGuestProfile() {
  const icons = menuIcons();
  const recentCount = (productStore.recentlyViewed || []).length;
  const recentProducts = (productStore.recentlyViewed || []).slice(0, 6);
  const recentHtml = recentProducts.map((p, index) => productCard(p, { screen: "profile-recent", position: index })).join("");

  return `
    <div class="app-profile-page app-profile-page--guest">
      <header class="app-profile-header">
        <h2>${escapeHtml(t("profile.myProfile"))}</h2>
        <div class="app-profile-header-actions">
          <button class="app-profile-icon-btn" type="button" data-profile-action="notifications" aria-label="${escapeHtml(t("notifications.title"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
        </div>
      </header>

      <section class="app-profile-auth-card">
        <h3>${escapeHtml(t("profile.guestPromoTitle"))}</h3>
        <p>${escapeHtml(t("profile.guestPromoHint"))}</p>
        <div class="app-profile-auth-actions">
          <button class="app-profile-auth-register" type="button" data-profile-action="register">${escapeHtml(t("auth.register"))}</button>
          <button class="app-profile-auth-login" type="button" data-profile-action="login">${escapeHtml(t("auth.login"))}</button>
        </div>
      </section>

      <section class="app-profile-section">
        <div class="app-profile-section-head">
          <h3>${escapeHtml(t("profile.myOrders"))}</h3>
          <button class="app-profile-see-all" type="button" data-profile-action="orders">${escapeHtml(t("profile.seeAll"))} ›</button>
        </div>
      </section>

      <button class="app-profile-recent-row" type="button" data-profile-action="recent" ${recentCount ? "" : ""}>
        <span>${escapeHtml(t("home.recentlyViewed"))}</span>
        ${recentCount ? `<span class="app-profile-recent-count">${recentCount}</span>` : ""}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
      </button>

      ${recentHtml ? `
        <section class="app-profile-section app-profile-recent" id="profileRecentSection" hidden>
          <div class="product-grid app-rail-grid">${recentHtml}</div>
        </section>
      ` : ""}

      <nav class="app-profile-menu" aria-label="${escapeHtml(t("profile.settings"))}">
        <p class="app-profile-menu-heading">${escapeHtml(t("profile.recommendations"))}</p>
        ${ProfileMenuRow({ action: "promotions", icon: icons.promotions, label: t("profile.promotions") })}
        ${ProfileMenuRow({ action: "help", icon: icons.help, label: t("profile.help") })}
        ${ProfileMenuRow({ action: "news", icon: icons.news, label: t("profile.news") })}
        ${ProfileMenuRow({ action: "language", icon: icons.language, label: t("profile.language"), trailing: `<span>${escapeHtml(getLanguageLabel())}</span>` })}
        ${ProfileMenuRow({ action: "privacy", icon: icons.privacy, label: t("profile.privacy") })}
        ${ProfileMenuRow({ action: "terms", icon: icons.terms, label: t("profile.terms") })}
        ${ProfileMenuRow({ action: "licenses", icon: icons.licenses, label: t("profile.licenses") })}
      </nav>
    </div>
  `;
}

function renderAuthenticatedProfile() {
  const user = authStore.user || {};
  const avatar = ProfileAvatar({ imageUrl: user.profileImage, name: user.fullName || "Profile" });
  const icons = menuIcons();

  const ordersCount = appStore.orders?.length || 0;
  const reviewsCount = productStore.myReviews?.length || 0;
  const couponsCount = cartStore.cartCoupon ? 1 : 0;
  const recentProducts = (productStore.recentlyViewed || []).slice(0, 6);
  const recentHtml = recentProducts.map((p, index) => productCard(p, { screen: "profile-recent", position: index })).join("");
  const orderPreview = ProfileService.getOrderPreview(appStore.orders);
  const unreadBadge = UnreadBadge({ count: notificationStore.unreadCount });

  const statIcons = {
    orders: `<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>`,
    reviews: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    coupons: `<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>`,
    feedback: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
  };

  return `
    <div class="app-profile-page ${authStore.profileLoading ? "is-loading" : ""}">
      <header class="app-profile-header">
        <h2>${escapeHtml(t("profile.myProfile"))}</h2>
        <div class="app-profile-header-actions">
          <button class="app-profile-icon-btn" type="button" data-profile-action="notifications" aria-label="${escapeHtml(t("notifications.title"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            ${unreadBadge}
          </button>
          <button class="app-profile-icon-btn" type="button" data-profile-action="menu" aria-label="${escapeHtml(t("profile.menu"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
        </div>
      </header>

      <section class="app-profile-user">
        ${avatar}
        <div class="app-profile-user-meta">
          <div class="app-profile-user-top">
            <h3>${escapeHtml(user.fullName || t("profile.myProfile"))}</h3>
            <span class="app-profile-tier">${escapeHtml(t("profile.tierWhite"))}</span>
          </div>
          <p class="app-profile-email">${escapeHtml(user.email || "")}</p>
        </div>
      </section>

      <section class="app-profile-stats">
        ${ProfileStatCard({ action: "orders", icon: statIcons.orders, label: t("profile.ordersStat"), value: ordersCount })}
        ${ProfileStatCard({ action: "reviews", icon: statIcons.reviews, label: t("profile.reviewsStat"), value: reviewsCount })}
        ${ProfileStatCard({ action: "promotions", icon: statIcons.coupons, label: t("profile.couponsStat"), value: couponsCount })}
        ${ProfileStatCard({ action: "help", icon: statIcons.feedback, label: t("profile.feedbackStat"), value: "" })}
      </section>

      <section class="app-profile-section">
        <div class="app-profile-section-head">
          <h3>${escapeHtml(t("profile.myOrders"))}</h3>
          <button class="app-profile-see-all" type="button" data-profile-action="orders">${escapeHtml(t("profile.seeAll"))} ›</button>
        </div>
        <div class="app-profile-orders-rail">
          ${authStore.profileLoading && !orderPreview.length
            ? `<div class="app-profile-order-card skeleton-card"></div><div class="app-profile-order-card skeleton-card"></div>`
            : orderPreview.length
              ? orderPreview.map((order) => renderOrderPreviewCard(order)).join("")
              : `<div class="app-profile-empty-block">${escapeHtml(t("orders.none"))}</div>`}
        </div>
      </section>

      ${recentHtml ? `
        <section class="app-profile-section app-profile-recent">
          <div class="app-profile-section-head">
            <h3>${escapeHtml(t("home.recentlyViewed"))}</h3>
          </div>
          <div class="product-grid app-rail-grid">${recentHtml}</div>
        </section>
      ` : ""}

      <nav class="app-profile-menu" aria-label="${escapeHtml(t("profile.settings"))}">
        ${ProfileMenuRow({ action: "promotions", icon: icons.promotions, label: t("profile.promotions") })}
        ${ProfileMenuRow({ action: "help", icon: icons.help, label: t("profile.help") })}
        ${ProfileMenuRow({ action: "news", icon: icons.news, label: t("profile.news") })}
        ${ProfileMenuRow({ action: "language", icon: icons.language, label: t("profile.language"), trailing: `<span>${escapeHtml(getLanguageLabel())}</span>` })}
        ${ProfileMenuRow({ action: "privacy", icon: icons.privacy, label: t("profile.privacy") })}
        ${ProfileMenuRow({ action: "terms", icon: icons.terms, label: t("profile.terms") })}
        ${ProfileMenuRow({ action: "licenses", icon: icons.licenses, label: t("profile.licenses") })}
      </nav>

      ${authStore.profileEditing ? renderEditForm(user) : ""}
      ${authStore.profileMenuOpen ? `
        <div class="app-profile-menu-sheet open" id="profileMenuSheet">
          <button class="app-profile-menu-row" type="button" data-profile-action="edit">${escapeHtml(t("profile.edit"))}</button>
          <button class="app-profile-menu-row app-profile-menu-row--danger" type="button" data-profile-action="logout">${escapeHtml(t("profile.logout"))}</button>
        </div>
      ` : ""}
    </div>
  `;
}

function requireProfileAuth(pendingType) {
  return requireAuth({ type: pendingType });
}

export const ProfilePage = {
  render() {
    if (!els.profileContent) return;
    const guest = !AuthService.isLoggedIn();
    els.profileContent.innerHTML = guest ? renderGuestProfile() : renderAuthenticatedProfile();
    initLazyImages(els.profileContent);
  },

  async loadSnapshot({ isLoggedIn, loadUnreadCount, updateAuthUi } = {}) {
    if (!isLoggedIn?.()) {
      ProfilePage.render();
      return;
    }

    const loadId = ++authStore.profileLoadSeq;
    authStore.profileLoading = true;
    ProfilePage.render();

    try {
      const [snapshot] = await Promise.all([
        ProfileService.loadSnapshot(),
        loadUnreadCount?.(),
      ]);
      const { userResponse, ordersResponse, reviewsResult, recentlyViewed } = snapshot;

      if (loadId !== authStore.profileLoadSeq) return;

      if (userResponse) {
        authStore.user = userResponse;
        localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(userResponse));
        updateAuthUi?.();
      }

      if (ordersResponse !== null) {
        appStore.orders = ProfileService.normalizeOrdersResponse(ordersResponse);
        authStore.profileLoading = false;
        ProfilePage.render();

        appStore.orders = await ProfileService.enrichProfileOrders(appStore.orders);
        if (loadId !== authStore.profileLoadSeq) return;
      }

      if (reviewsResult.success) {
        productStore.myReviews = reviewsResult.items;
      }

      if (recentlyViewed.length) {
        productStore.recentlyViewed = recentlyViewed;
      }
    } catch {
      // Keep cached profile data visible without surfacing an error banner.
    } finally {
      if (loadId === authStore.profileLoadSeq) {
        authStore.profileLoading = false;
        if (els.profileDrawer.classList.contains("open")) ProfilePage.render();
      }
    }
  },

  async handleAction(event, deps = {}) {
    const orderPreview = event.target.closest("[data-profile-order]");
    if (orderPreview) {
      if (!deps.isLoggedIn?.()) {
        requireProfileAuth(PENDING_ACTION_TYPES.PROFILE_ORDERS);
        return;
      }
      deps.closeProfile?.();
      await deps.showOrders?.();
      await deps.openOrderDetail?.(orderPreview.dataset.profileOrder);
      return;
    }

    const button = event.target.closest("[data-profile-action]");
    if (!button) return;
    const action = button.dataset.profileAction;

    if (action === "login") {
      deps.openLogin?.();
      return;
    }

    if (action === "register") {
      deps.openRegister?.();
      return;
    }

    if (action === "recent") {
      const section = document.getElementById("profileRecentSection");
      if (section) {
        section.hidden = !section.hidden;
        if (!section.hidden) {
          section.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
      return;
    }

    if (action === "licenses") {
      deps.showToast?.(t("profile.comingSoon"), "info");
      return;
    }

    if (action === "menu") {
      authStore.profileMenuOpen = !authStore.profileMenuOpen;
      ProfilePage.render();
      return;
    }

    if (action === "edit") {
      if (!deps.isLoggedIn?.()) {
        requireProfileAuth(PENDING_ACTION_TYPES.OPEN_PROFILE);
        return;
      }
      authStore.profileMenuOpen = false;
      authStore.profileEditing = !authStore.profileEditing;
      ProfilePage.render();
      return;
    }

    if (action === "logout") {
      authStore.profileMenuOpen = false;
      deps.clearAuth?.();
      ProfilePage.render();
      deps.showToast?.(t("profile.loggedOut"));
      return;
    }

    if (action === "orders") {
      if (!requireProfileAuth(PENDING_ACTION_TYPES.PROFILE_ORDERS)) return;
      deps.closeProfile?.();
      await deps.showOrders?.();
      return;
    }

    if (action === "favorites") {
      deps.closeProfile?.();
      await deps.openFavorites?.();
      return;
    }

    if (action === "reviews") {
      if (!requireProfileAuth(PENDING_ACTION_TYPES.PROFILE_REVIEWS)) return;
      deps.closeProfile?.();
      await deps.openMyReviews?.();
      return;
    }

    if (action === "notifications") {
      if (!requireProfileAuth(PENDING_ACTION_TYPES.PROFILE_NOTIFICATIONS)) return;
      deps.closeProfile?.();
      await deps.openNotifications?.();
      return;
    }

    if (action === "language") {
      const langs = SUPPORTED_LANGUAGES;
      const idx = langs.indexOf(getCurrentLanguage());
      const next = langs[(idx + 1) % langs.length];
      deps.setLanguage?.(next);
      if (els.languageSelect) els.languageSelect.value = next;
      deps.applyTranslations?.();
      ProfilePage.render();
      return;
    }

    if (action === "privacy") {
      authStore.profileMenuOpen = false;
      deps.closeProfile?.();
      deps.openPrivacy?.();
      return;
    }

    if (action === "terms") {
      authStore.profileMenuOpen = false;
      deps.closeProfile?.();
      deps.openTerms?.();
      return;
    }

    if (action === "promotions" || action === "news") {
      if (!requireProfileAuth(PENDING_ACTION_TYPES.PROFILE_PROMOTIONS)) return;
      deps.showToast?.(t("profile.comingSoon"), "info");
      return;
    }

    if (action === "help") {
      authStore.profileMenuOpen = false;
      deps.closeProfile?.();
      deps.openSupport?.();
      return;
    }

    if (action === "addresses" || action === "receivers") {
      if (!requireProfileAuth(PENDING_ACTION_TYPES.CHECKOUT)) return;
      deps.closeProfile?.();
      await deps.prepareCheckout?.();
      return;
    }

    deps.showToast?.(t("profile.comingSoon"), "info");
  },
};

export const renderProfile = ProfilePage.render;
export const loadProfileSnapshot = ProfilePage.loadSnapshot;
