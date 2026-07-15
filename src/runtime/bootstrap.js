import { appStore, productStore } from '../stores/index.js';
import { getTranslationContext } from '../utils/i18nContext.js';
import { els } from '../utils/dom.js';
import { t, applyTranslations, setLanguage, setLanguageChangeHandler } from '../i18n/index.js';
import { showToast } from '../utils/toast.js';
import { configureApiClient } from '../api/apiClient.js';
import { HomeService } from '../services/HomeService.js';
import { setDeps } from './deps.js';
import { renderEmpty, syncModeBadges } from '../pages/shared/productGrid.js';
import { HomePage } from '../pages/home/HomePage.js';
import { CartPage } from '../pages/cart/CartPage.js';
import { ProfilePage } from '../pages/profile/ProfilePage.js';
import { AuthController } from '../controllers/AuthController.js';
import { CartController } from '../controllers/CartController.js';
import { CheckoutController } from '../controllers/CheckoutController.js';
import { FavoriteController } from '../controllers/FavoriteController.js';
import { NotificationController } from '../controllers/NotificationController.js';
import { OrderController } from '../controllers/OrderController.js';
import { AssistantController } from '../controllers/AssistantController.js';
import { unlockBodyIfNoOverlay } from './navigation.js';
import { handleRoute } from './router.js';
import { initPremiumUi } from './uiInit.js';
import {
  bindEvents,
  rerenderLanguageSensitiveUi,
  openMyReviews,
  openWriteReview,
  openSupport,
  openPrivacy,
  openTerms,
} from './eventDispatcher.js';

async function ensureRecentlyViewedState() {
  const ids = HomeService.getRecentProductIds();
  if (!ids.length) {
    productStore.recentlyViewed = [];
    return;
  }
  productStore.recentlyViewed = await HomeService.loadRecentlyViewed();
}

function wireDeps() {
  setDeps({
    cart: { load: () => CartController.load(), render: () => CartPage.render() },
    favorites: {
      load: (options) => FavoriteController.load(options),
      open: () => FavoriteController.open(),
      updateUi: () => FavoriteController.updateUi(),
    },
    notifications: {
      open: () => NotificationController.open(),
      load: () => NotificationController.load(),
      loadUnreadCount: () => NotificationController.loadUnreadCount(),
      clearState: () => NotificationController.clearState(),
    },
    home: { ensureRecentlyViewed: ensureRecentlyViewedState },
    profile: { render: () => ProfilePage.render() },
    orders: { show: () => OrderController.show() },
    reviews: { open: openMyReviews, openWrite: openWriteReview },
    support: { open: openSupport, openPrivacy, openTerms },
    assistant: {
      open: () => AssistantController.openWidget(),
      close: () => AssistantController.closeWidget(),
      render: () => AssistantController.render(),
    },
    checkout: { prepare: () => CheckoutController.prepare({ showLoginRequired: AuthController.showLoginRequired }) },
    i18n: { t, setLanguage, applyTranslations: () => applyTranslations(getTranslationContext()) },
    navigation: { unlockBodyIfNoOverlay },
    toast: showToast,
  });
}

export async function init() {
  wireDeps();
  setLanguageChangeHandler(rerenderLanguageSensitiveUi);

  configureApiClient({
    onUnauthorized: () => {
      AuthController.clearAuth();
      AuthController.openDialog("login");
      showToast(t("auth.sessionExpired"));
    },
    onLoginRequired: () => AuthController.showLoginRequired(),
    showToast: (message, type = "error") => showToast(message, type),
  });

  try {
    bindEvents();
    initPremiumUi();
    applyTranslations(getTranslationContext());
  } catch (error) {
    console.error("Init event binding failed:", error);
    els.status.textContent = `UI ishga tushishda xatolik yuz berdi: ${error.message}`;
    showToast("UI ishga tushishda xatolik yuz berdi.");
    return;
  }

  AuthController.updateUi();
  AuthController.validateOnStartup().catch((error) => {
    console.error("Auth startup failed:", error);
  });
  AssistantController.init().catch((error) => {
    console.error("Assistant startup failed:", error);
  });
  HomePage.load({ loadCart: () => CartController.load() })
    .then(() => handleRoute())
    .catch((error) => {
      console.error("Home loading failed:", error);
      productStore.demoProducts = false;
      productStore.demoDeals = false;
      els.status.textContent = "";
      els.dealsStatus.textContent = "";
      renderEmpty(els.grid, t("common.serverFailed"), t("common.tryAgain"));
      syncModeBadges();
      handleRoute();
    });
}
