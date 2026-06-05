import { CONFIG, CATEGORY_LABELS, QUICK_CATEGORIES, DEMO_PRODUCTS } from '../config/config.js';
import { CONFIG as _C } from '../config/config.js';
import { state } from '../store/state.js';
import { els } from '../utils/dom.js';
import { apiFetch } from '../api/apiClient.js';
import { getToken, isLoggedIn, saveAuth, clearAuth, showLoginRequired } from '../store/authStore.js';
import { t, applyTranslations, setLanguage, getSavedLanguage } from '../i18n/index.js';
import * as mappers from '../utils/productMapper.js';
import { getPageContent, normalizeProduct, normalizeCartItem, normalizeCategory, normalizeOrderItem, normalizeReview, normalizeNotification, normalizeMyReviewItem, getNotificationsContent, getMyReviewsContent, normalizeImages, imageValue, numberOrZero } from '../utils/productMapper.js';
import { escapeHtml, formatPrice, formatMoney, formatDateTime, statusLabel, showToast, renderSkeleton, renderEmpty, shortText } from '../utils/format.js';
import { categoryLabel } from '../utils/productMapper.js';
import { setCartItems, clearCartState, setFavoriteProducts, clearFavoritesState, syncProductFavorites } from '../store/cartStore.js';

export function bindEvents() {
  els.languageSelect?.addEventListener("change", (event) => setLanguage(event.target.value));
  els.searchForm.addEventListener("submit", (event) => event.preventDefault());
  els.searchInput.addEventListener("input", handleSearchInput);
  els.categoryToolbar.addEventListener("click", handleCategoryClick);
  els.quickCategoryGrid.addEventListener("click", handleCategoryClick);
  els.catalogList.addEventListener("click", handleCategoryClick);
  els.banners.addEventListener("click", handleBannerClick);
  els.grid.addEventListener("click", handleProductGridClick);
  els.dealsGrid.addEventListener("click", handleProductGridClick);
  els.detailContent.addEventListener("click", handleDetailClick);
  els.productDetailPageContent.addEventListener("click", (event) => {
    if (!handleDetailClick(event)) {
      handleProductGridClick(event);
    }
  });
  els.cartItems.addEventListener("click", handleCartClick);
  els.catalogButton.addEventListener("click", openCatalog);
  els.closeCatalog.addEventListener("click", closeCatalog);
  els.cartButton.addEventListener("click", openCart);
  els.closeCart.addEventListener("click", closeCart);
  els.loginButton.addEventListener("click", () => {
    if (isLoggedIn()) openProfile();
    else openAuthDialog("login");
  });
  els.favoritesButton.addEventListener("click", openFavorites);
  els.notificationsButton.addEventListener("click", openNotifications);
  els.apiButton.addEventListener("click", openApiDialog);
  els.loginTab.addEventListener("click", () => setAuthMode("login"));
  els.registerTab.addEventListener("click", () => setAuthMode("register"));
  els.authForm.addEventListener("submit", submitAuth);
  els.apiForm.addEventListener("submit", saveApiBaseUrl);
  els.checkoutButton.addEventListener("click", prepareCheckout);
  els.checkoutForm.addEventListener("submit", submitCheckout);
  els.checkoutContent.addEventListener("click", handleCheckoutClick);
  els.checkoutContent.addEventListener("submit", handleCheckoutSubmit);
  els.ordersContent.addEventListener("click", handleOrdersClick);
  els.refreshOrders.addEventListener("click", loadOrders);
  els.closeOrders.addEventListener("click", () => els.ordersDialog.close());
  els.favoritesContent.addEventListener("click", handleFavoritesClick);
  els.refreshFavorites.addEventListener("click", () => loadFavorites({ render: true }));
  els.closeFavorites.addEventListener("click", closeFavorites);
  els.notificationsContent.addEventListener("click", handleNotificationsClick);
  els.refreshNotifications.addEventListener("click", () => {
    loadNotifications();
    loadUnreadCount();
  });
  els.closeNotifications.addEventListener("click", closeNotifications);
  els.myReviewsContent.addEventListener("click", handleMyReviewsClick);
  els.refreshMyReviews.addEventListener("click", loadMyReviews);
  els.closeMyReviews.addEventListener("click", closeMyReviews);
  els.writeReviewForm.addEventListener("submit", submitReview);
  els.closeWriteReview.addEventListener("click", closeWriteReview);
  els.reviewRatingSelector.addEventListener("click", handleRatingSelectorClick);
  els.closeProfile.addEventListener("click", closeProfile);
  els.profileContent.addEventListener("click", handleProfileAction);
  els.profileContent.addEventListener("submit", submitProfileEdit);
  els.ordersButton.addEventListener("click", showOrders);
  els.refreshHome.addEventListener("click", loadHome);
  els.loadMore.addEventListener("click", loadMoreProducts);
  window.addEventListener("hashchange", handleRoute);
  els.catalogDrawer.addEventListener("click", (event) => {
    if (event.target === els.catalogDrawer) closeCatalog();
  });
  els.cartDrawer.addEventListener("click", (event) => {
    if (event.target === els.cartDrawer) closeCart();
  });
  els.profileDrawer.addEventListener("click", (event) => {
    if (event.target === els.profileDrawer) closeProfile();
  });
  els.notificationsDrawer.addEventListener("click", (event) => {
    if (event.target === els.notificationsDrawer) closeNotifications();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCatalog();
      closeCart();
      closeProfile();
      closeNotifications();
      if (els.ordersDialog.open) els.ordersDialog.close();
      if (els.favoritesDialog.open) els.favoritesDialog.close();
      if (els.myReviewsDialog.open) els.myReviewsDialog.close();
      if (els.writeReviewDialog.open) els.writeReviewDialog.close();
    }
  });
  els.detailDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.authDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.apiDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.checkoutDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.ordersDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.favoritesDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.myReviewsDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.writeReviewDialog.addEventListener("close", unlockBodyIfNoOverlay);

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog")?.close());
  });
}


export function handleSearchInput(event) {
  clearTimeout(state.searchTimer);
  state.searchTimer = setTimeout(() => {
    renderSearchResults(event.target.value).catch(() => {
      renderEmpty(els.grid, "Qidiruv vaqtida xatolik yuz berdi.");
      els.status.textContent = "";
    });
  }, CONFIG.searchDebounceMs);
}


export function handleCategoryClick(event) {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  closeCatalog();
  renderCategoryProducts(button.dataset.category).catch(() => {
    renderEmpty(els.grid, "Kategoriya mahsulotlari yuklanmadi.");
    els.status.textContent = "";
  });
  window.setTimeout(() => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 0);
}


export function handleProductGridClick(event) {
  const showAll = event.target.closest("[data-show-all]");
  const favorite = event.target.closest("[data-favorite]");
  const add = event.target.closest("[data-add]");
  const detail = event.target.closest("[data-detail]");
  const card = event.target.closest("[data-product]");

  if (showAll) {
    event.stopPropagation();
    loadHome();
    return;
  }

  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favorite);
    return;
  }

  if (add) {
    event.stopPropagation();
    addToCart(add.dataset.add, null, 1);
    return;
  }

  if (detail || (card && !event.target.closest("button"))) {
    event.stopPropagation();
    const productId = (detail || card).dataset.detail || card.dataset.product;
    sendProductClick(productId);
    openProductDetail(productId);
  }
}


export function handleBannerClick(event) {
  const nav = event.target.closest("[data-banner-nav]");
  if (nav) {
    const track = els.banners.querySelector(".banner-track");
    const amount = track?.clientWidth || 0;
    track?.scrollBy({ left: nav.dataset.bannerNav === "next" ? amount : -amount, behavior: "smooth" });
    return;
  }

  const banner = event.target.closest("[data-banner-link-type]");
  if (!banner) return;
  const type = banner.dataset.bannerLinkType;
  const id = banner.dataset.bannerLinkId;

  if (type === "PRODUCT" && id) {
    navigateToProduct(id);
    return;
  }

  if (type === "CATEGORY" && id) {
    const category = state.categories.find((item) => String(item) === String(id)) || (CATEGORY_LABELS[id] ? id : "");
    if (category) {
      routeHome();
      renderCategoryProducts(category);
    } else {
      showToast("Category banner is not available yet.");
    }
  }
}


export function handleDetailClick(event) {
  const routeHomeButton = event.target.closest("[data-route-home]");
  const categoryButton = event.target.closest(".product-detail-page [data-category]");
  const close = event.target.closest("[data-close-detail]");
  const variant = event.target.closest("[data-variant]");
  const qty = event.target.closest("[data-qty]");
  const add = event.target.closest("[data-detail-add]");
  const favorite = event.target.closest("[data-detail-favorite]");
  const reviewsRetry = event.target.closest("[data-reviews-retry]");

  if (routeHomeButton) {
    event.stopPropagation();
    routeHome();
    return true;
  }

  if (categoryButton) {
    event.stopPropagation();
    routeHome();
    renderCategoryProducts(categoryButton.dataset.category);
    return true;
  }

  if (close) {
    event.stopPropagation();
    els.detailDialog.close();
    unlockBodyIfNoOverlay();
    return true;
  }

  if (variant) {
    event.stopPropagation();
    state.selectedVariantId = variant.dataset.variant;
    renderProductDetail(state.selectedDetailProduct);
    return true;
  }

  if (qty) {
    event.stopPropagation();
    state.selectedQuantity = Math.max(1, state.selectedQuantity + (qty.dataset.qty === "plus" ? 1 : -1));
    renderProductDetail(state.selectedDetailProduct);
    return true;
  }

  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.detailFavorite);
    return true;
  }

  if (reviewsRetry) {
    event.stopPropagation();
    loadProductReviews(reviewsRetry.dataset.reviewsRetry);
    return true;
  }

  if (add) {
    event.stopPropagation();
    const quantityInput = document.getElementById("quantityInput");
    state.selectedQuantity = Math.max(1, Number(quantityInput?.value || state.selectedQuantity));
    addToCart(state.selectedDetailProduct.id, state.selectedVariantId, state.selectedQuantity);
    return true;
  }

  return false;
}


export function handleCartClick(event) {
  const retry = event.target.closest("[data-cart-retry]");
  const startShopping = event.target.closest("[data-start-shopping]");
  const qty = event.target.closest("[data-cart-qty]");
  const remove = event.target.closest("[data-remove]");
  if (retry) loadCart();
  if (startShopping) {
    closeCart();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (qty) {
    const item = state.cartItems.find((cartItem) => String(cartItem.id) === String(qty.dataset.cartId));
    if (item) updateCartQuantity(item.id, item.quantity + (qty.dataset.cartQty === "plus" ? 1 : -1));
  }
  if (remove) removeCartItem(remove.dataset.remove);
}


export async function init() {
  try {
    bindEvents();
    applyTranslations();
  } catch (error) {
    console.error("Init event binding failed:", error);
    els.status.textContent = `UI ishga tushishda xatolik yuz berdi: ${error.message}`;
    showToast("UI ishga tushishda xatolik yuz berdi.");
    return;
  }

  updateAuthUi();
  await validateAuthOnStartup();
  loadHome().then(() => handleRoute()).catch((error) => {
    console.error("Home loading failed:", error);
    state.products = DEMO_PRODUCTS.map(normalizeProduct);
    state.todayDeals = DEMO_PRODUCTS.map(normalizeProduct);
    renderCategories();
    renderProductList(els.grid, state.products, "Mahsulot topilmadi.");
    renderProductList(els.dealsGrid, state.todayDeals, "Bugungi takliflar topilmadi.");
    setModeBadge(els.productsMode, true);
    setModeBadge(els.dealsMode, true);
    els.status.textContent = "";
    els.dealsStatus.textContent = "";
    handleRoute();
  });
}

init();

