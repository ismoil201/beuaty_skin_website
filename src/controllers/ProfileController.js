import { CONFIG } from "../config/config.js";
import { appStore, authStore, productStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { ProfileService } from "../services/ProfileService.js";
import { ProfilePage } from "../pages/profile/ProfilePage.js";
import { OrdersPage } from "../pages/orders/OrdersPage.js";
import { showToast } from "../utils/toast.js";
import { lockBody, unlockBodyIfNoOverlay, syncBottomNav } from "../runtime/navigation.js";
import { AuthController } from "./AuthController.js";
import { deps } from "../runtime/deps.js";
import { HomeService } from "../services/HomeService.js";

export const ProfileController = {
  async open() {
    authStore.profileEditing = false;
    authStore.profileMenuOpen = false;
    els.profileDrawer.classList.add("open");
    els.profileDrawer.setAttribute("aria-hidden", "false");
    lockBody();
    syncBottomNav();

    // Guests see the marketing profile shell — login only on protected actions.
    if (!AuthController.isLoggedIn()) {
      authStore.profileLoading = false;
      // Local recently-viewed is public.
      if (!productStore.recentlyViewed?.length) {
        const ids = HomeService.getRecentProductIds?.() || [];
        if (ids.length) {
          productStore.recentlyViewed = await HomeService.loadRecentlyViewed();
        }
      }
      ProfilePage.render();
      return;
    }

    ProfilePage.render();
    await ProfileController.loadSnapshot();
  },

  close() {
    authStore.profileMenuOpen = false;
    authStore.profileLoadSeq += 1;
    els.profileDrawer.classList.remove("open");
    els.profileDrawer.setAttribute("aria-hidden", "true");
    unlockBodyIfNoOverlay();
    syncBottomNav();
  },

  async loadSnapshot() {
    return ProfilePage.loadSnapshot({
      isLoggedIn: AuthController.isLoggedIn,
      loadUnreadCount: deps.notifications?.loadUnreadCount,
      updateAuthUi: AuthController.updateUi,
    });
  },

  async handleAction(event) {
    return ProfilePage.handleAction(event, {
      isLoggedIn: AuthController.isLoggedIn,
      openLogin: () => AuthController.openDialog("login"),
      openRegister: () => AuthController.openDialog("register"),
      closeProfile: ProfileController.close,
      showOrders: deps.orders?.show,
      openOrderDetail: OrdersPage.openDetail,
      clearAuth: () => AuthController.logout(),
      showToast,
      openFavorites: deps.favorites?.open,
      openMyReviews: deps.reviews?.open,
      openNotifications: deps.notifications?.open,
      setLanguage: deps.i18n?.setLanguage,
      applyTranslations: deps.i18n?.applyTranslations,
      openPrivacy: deps.support?.openPrivacy,
      openTerms: deps.support?.openTerms,
      openSupport: deps.support?.open,
      prepareCheckout: deps.checkout?.prepare,
    });
  },

  async submitEdit(event) {
    event.preventDefault();
    const user = authStore.user || {};
    const body = {
      id: user.id,
      email: user.email,
      fullName: document.getElementById("profileFullName")?.value.trim(),
      phone: document.getElementById("profilePhone")?.value.trim(),
      profileImage: document.getElementById("profileImage")?.value.trim(),
    };

    const message = document.getElementById("profileMessage");
    const validation = ProfileService.validateProfileUpdate(body);
    if (!validation.valid) {
      if (message) {
        message.textContent = validation.error;
        message.className = "form-message error";
      }
      return;
    }

    const result = await ProfileService.updateProfile(body);
    if (!result.success) {
      if (message) {
        message.textContent = result.error;
        message.className = "form-message error";
      }
      return;
    }

    if (result.user) {
      authStore.user = result.user;
      localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(result.user));
    }
    authStore.profileEditing = false;
    AuthController.updateUi();
    ProfilePage.render();
    showToast("Profile updated.");
  },
};
