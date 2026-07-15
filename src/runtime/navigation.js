import { CONFIG } from '../config/config.js';
import { appStore } from '../stores/index.js';
import { els } from '../utils/dom.js';
import { normalizeSavedBaseUrl } from '../config/apiBase.js';
import { AuthService } from '../services/AuthService.js';
import { showToast } from '../utils/toast.js';
import { t } from '../i18n/index.js';
import { CartController } from '../controllers/CartController.js';
import { HomePage } from '../pages/home/HomePage.js';
import { AuthController } from '../controllers/AuthController.js';
import { handleRoute } from './router.js';

function showLoginRequired() {
  AuthController.showLoginRequired();
}

export function showBrandView() {
  appStore.currentRoute = "brand";
  els.homeView.hidden = true;
  els.productDetailPage.hidden = true;
  if (els.assistantPage) els.assistantPage.hidden = true;
  document.getElementById("brandView")?.removeAttribute("hidden");
}

export function hideBrandView() {
  document.getElementById("brandView")?.setAttribute("hidden", "");
}

export function showAssistantView() {
  appStore.currentRoute = "assistant";
  els.homeView.hidden = true;
  els.productDetailPage.hidden = true;
  hideBrandView();
  if (els.assistantPage) els.assistantPage.hidden = false;
  document.title = "AI Assistant - BEAUTY SKIN KOREA";
  window.scrollTo({ top: 0, behavior: "smooth" });
  syncBottomNav();
}

export function isFavoritesOpen() {
  return Boolean(els.favoritesDialog?.classList.contains("open"));
}

export function syncBottomNav() {
  const nav = document.querySelector(".mobile-bottom-nav");
  if (!nav) return;
  let activeAction = "home";
  if (els.profileDrawer?.classList.contains("open")) {
    activeAction = "loginButton";
  } else if (els.favoritesDialog?.classList.contains("open")) {
    activeAction = "favoritesButton";
  } else if (els.cartDrawer?.classList.contains("open")) {
    activeAction = "cartButton";
  }
  nav.querySelectorAll("[data-mobile-action]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mobileAction === activeAction);
  });
}

export function showHomeView() {
  appStore.currentRoute = "home";
  els.homeView.hidden = false;
  els.productDetailPage.hidden = true;
  if (els.assistantPage) els.assistantPage.hidden = true;
  hideBrandView();
  document.title = "BEAUTY SKIN KOREA";
  syncBottomNav();
}

export function showProductView() {
  appStore.currentRoute = "product";
  els.homeView.hidden = true;
  els.productDetailPage.hidden = false;
  if (els.assistantPage) els.assistantPage.hidden = true;
  hideBrandView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function routeHome() {
  if (window.location.hash && window.location.hash !== "#/" && window.location.hash !== "#") {
    window.location.hash = "#/";
  } else {
    showHomeView();
  }
}

export function navigateToProduct(productId) {
  if (!productId) return;
  const nextHash = `#/product/${encodeURIComponent(productId)}`;
  if (window.location.hash === nextHash) {
    handleRoute();
  } else {
    window.location.hash = nextHash;
  }
}

export function openCart() {
  if (!AuthService.isLoggedIn()) {
    showLoginRequired();
    return;
  }
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  syncBottomNav();
  CartController.load();
}

export function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
  syncBottomNav();
}

export function openCatalog() {
  const megaMenu = document.getElementById("megaMenu");
  if (window.innerWidth > 680 && megaMenu) {
    const isOpen = megaMenu.classList.toggle("open");
    megaMenu.setAttribute("aria-hidden", String(!isOpen));
    els.catalogButton.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      els.catalogDrawer.classList.remove("open");
      els.catalogDrawer.setAttribute("aria-hidden", "true");
    }
    return;
  }
  els.catalogDrawer.classList.add("open");
  els.catalogDrawer.setAttribute("aria-hidden", "false");
  els.catalogButton.setAttribute("aria-expanded", "true");
  lockBody();
}

export function closeCatalog() {
  const megaMenu = document.getElementById("megaMenu");
  megaMenu?.classList.remove("open");
  megaMenu?.setAttribute("aria-hidden", "true");
  els.catalogDrawer.classList.remove("open");
  els.catalogDrawer.setAttribute("aria-hidden", "true");
  els.catalogButton.setAttribute("aria-expanded", "false");
  unlockBodyIfNoOverlay();
}

export function lockBody() {
  document.body.classList.add("locked");
}

export function unlockBodyIfNoOverlay() {
  const compareOpen = document.getElementById("compareDrawer")?.classList.contains("open");
  const assistantOpen = els.assistantWidget?.classList.contains("open");
  const hasOpenDrawer = els.cartDrawer.classList.contains("open") || els.catalogDrawer.classList.contains("open") || els.profileDrawer.classList.contains("open") || els.notificationsDrawer.classList.contains("open") || els.favoritesDialog?.classList.contains("open") || compareOpen || assistantOpen;
  const hasOpenDialog = [els.detailDialog, els.authDialog, els.apiDialog, els.checkoutDialog, els.ordersDialog, els.supportDialog, els.privacyDialog, els.termsDialog, els.myReviewsDialog, els.writeReviewDialog, document.getElementById("compareDialog")].some((dialog) => dialog?.open);
  if (!hasOpenDrawer && !hasOpenDialog) {
    document.body.classList.remove("locked");
  }
}

export function openApiDialog() {
  els.baseUrl.value = appStore.baseUrl;
  els.apiDialog.showModal();
  lockBody();
}

export function saveApiBaseUrl(event) {
  event.preventDefault();
  appStore.baseUrl = normalizeSavedBaseUrl(els.baseUrl.value || "");
  localStorage.setItem(CONFIG.storageKeys.baseUrl, appStore.baseUrl);
  els.apiDialog.close();
  HomePage.load({ loadCart: () => CartController.load() });
}
