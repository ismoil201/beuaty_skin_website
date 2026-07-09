import { CONFIG } from '../config/config.js';
import { CATEGORY_LABELS } from '../config/constants.js';
import {
  appStore,
  productStore,
  cartStore,
  checkoutStore,
} from '../stores/index.js';
import { els } from '../utils/dom.js';
import { escapeHtml } from '../utils/html.js';
import { t, applyTranslations, setLanguage } from '../i18n/index.js';
import { showToast } from '../utils/toast.js';
import { getTranslationContext } from '../utils/i18nContext.js';
import { renderStars } from '../utils/rating.js';
import { ReviewService } from '../services/ReviewService.js';
import { saveForLaterItem } from '../store/savedForLaterStore.js';
import { ReviewList, ReviewListItem } from '../components/review/ReviewList.js';
import { renderProductList, syncModeBadges } from '../pages/shared/productGrid.js';
import { sendProductClick } from '../pages/shared/analytics.js';
import { CartController } from '../controllers/CartController.js';
import { CheckoutController } from '../controllers/CheckoutController.js';
import { ProductController } from '../controllers/ProductController.js';
import { AuthController } from '../controllers/AuthController.js';
import { ProfileController } from '../controllers/ProfileController.js';
import { OrderController } from '../controllers/OrderController.js';
import { FavoriteController } from '../controllers/FavoriteController.js';
import { NotificationController } from '../controllers/NotificationController.js';
import { SearchController } from '../controllers/SearchController.js';
import { CartPage } from '../pages/cart/CartPage.js';
import { CheckoutPage } from '../pages/checkout/CheckoutPage.js';
import { ProductDetailPage } from '../pages/product/ProductDetailPage.js';
import { FavoritesPage } from '../pages/favorites/FavoritesPage.js';
import { SupportPage } from '../pages/support/SupportPage.js';
import { NotificationsPage } from '../pages/notifications/NotificationsPage.js';
import { OrdersPage } from '../pages/orders/OrdersPage.js';
import { HomePage } from '../pages/home/HomePage.js';
import { CatalogPage } from '../pages/catalog/CatalogPage.js';
import { ProfilePage } from '../pages/profile/ProfilePage.js';
import {
  openCart,
  closeCart,
  openCatalog,
  closeCatalog,
  openApiDialog,
  saveApiBaseUrl,
  lockBody,
  unlockBodyIfNoOverlay,
  routeHome,
  showHomeView,
  syncBottomNav,
  navigateToProduct,
  isFavoritesOpen,
} from './navigation.js';
import { handleRoute } from './router.js';
import { openPdpFullscreen } from './uiInit.js';
import { toggleCompareProduct } from './compareUi.js';
import { handleProductCardKeydown, handleProductGridClick } from './productGridHandlers.js';

export { handleProductGridClick };

function addToCart(productId, variantId, quantity) {
  return CartController.add(productId, variantId, quantity, { showLoginRequired: () => AuthController.showLoginRequired() });
}

function prepareCheckout() {
  return CheckoutController.prepare({ showLoginRequired: () => AuthController.showLoginRequired() });
}

/* ================= EVENT BINDING ================= */

export function bindEvents() {
  els.languageSelect?.addEventListener("change", (event) => setLanguage(event.target.value));
  els.searchForm.addEventListener("submit", (event) => event.preventDefault());
  els.searchInput.addEventListener("input", (event) => SearchController.handleInput(event));
  els.categoryToolbar.addEventListener("click", (event) => SearchController.handleCategoryClick(event));
  els.quickCategoryGrid.addEventListener("click", (event) => SearchController.handleCategoryClick(event));
  els.catalogList.addEventListener("click", (event) => SearchController.handleCategoryClick(event));
  els.banners.addEventListener("click", handleBannerClick);
  els.homeView?.addEventListener("click", handleProductGridClick);
  els.homeView?.addEventListener("keydown", handleProductCardKeydown);
  els.brandViewContent?.addEventListener("click", handleProductGridClick);
  els.detailContent.addEventListener("click", handleDetailClick);
  els.productDetailPageContent.addEventListener("click", (event) => {
    if (!handleDetailClick(event)) {
      handleProductGridClick(event);
    }
  });
  els.productDetailPageContent.addEventListener("input", (event) => {
    if (event.target.matches("[data-review-search]")) {
      productStore.reviewSearchQuery = event.target.value;
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
  });
  els.productDetailPageContent.addEventListener("change", (event) => {
    if (event.target.matches("[data-review-sort]")) {
      productStore.reviewSort = event.target.value;
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
    if (event.target.matches("[data-review-filter-rating]")) {
      productStore.reviewFilterRating = Number(event.target.value);
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
  });
  els.cartItems.addEventListener("click", handleCartClick);
  els.cartItems.addEventListener("change", handleCartChange);
  els.catalogButton.addEventListener("click", openCatalog);
  els.closeCatalog.addEventListener("click", closeCatalog);
  els.cartButton.addEventListener("click", openCart);
  els.closeCart.addEventListener("click", closeCart);
  els.loginButton.addEventListener("click", () => {
    if (AuthController.isLoggedIn()) ProfileController.open();
    else AuthController.openDialog("login");
  });
  els.favoritesButton?.addEventListener("click", () => FavoriteController.open());
  els.notificationsButton.addEventListener("click", () => NotificationController.open());
  els.apiButton.addEventListener("click", openApiDialog);
  els.loginTab.addEventListener("click", () => AuthController.setMode("login"));
  els.registerTab.addEventListener("click", () => AuthController.setMode("register"));
  els.authForm.addEventListener("submit", (event) => AuthController.submit(event));
  els.googleLoginButton?.addEventListener("click", () => AuthController.submitFirebase());
  els.apiForm.addEventListener("submit", saveApiBaseUrl);
  els.checkoutButton.addEventListener("click", prepareCheckout);
  els.checkoutForm.addEventListener("submit", submitCheckout);
  els.checkoutContent.addEventListener("click", handleCheckoutClick);
  els.checkoutContent.addEventListener("submit", handleCheckoutSubmit);
  els.ordersContent.addEventListener("click", (event) => OrderController.handleClick(event));
  els.refreshOrders.addEventListener("click", () => OrderController.load());
  els.closeOrders.addEventListener("click", () => els.ordersDialog.close());
  els.favoritesContent?.addEventListener("click", handleFavoritesClick);
  els.favoritesContent?.addEventListener("keydown", handleProductCardKeydown);
  els.refreshFavorites?.addEventListener("click", () => FavoriteController.load({ render: true }));
  els.closeFavorites?.addEventListener("click", () => FavoriteController.close());
  els.notificationsContent.addEventListener("click", handleNotificationsClick);
  els.refreshNotifications.addEventListener("click", () => {
    NotificationController.load();
    NotificationController.loadUnreadCount();
  });
  els.closeNotifications.addEventListener("click", () => NotificationController.close());
  els.myReviewsContent.addEventListener("click", handleMyReviewsClick);
  els.refreshMyReviews.addEventListener("click", loadMyReviews);
  els.closeMyReviews.addEventListener("click", closeMyReviews);
  els.writeReviewForm.addEventListener("submit", submitReview);
  els.closeWriteReview.addEventListener("click", closeWriteReview);
  els.reviewRatingSelector.addEventListener("click", handleRatingSelectorClick);
  els.closeProfile?.addEventListener("click", () => ProfileController.close());
  els.profileContent.addEventListener("click", (event) => {
    if (!handleProductGridClick(event)) ProfileController.handleAction(event);
  });
  els.profileContent.addEventListener("submit", (event) => ProfileController.submitEdit(event));
  els.ordersButton.addEventListener("click", () => OrderController.show());
  els.supportButton?.addEventListener("click", openSupport);
  els.supportContent?.addEventListener("click", handleSupportClick);
  els.supportDialog?.addEventListener("close", unlockBodyIfNoOverlay);
  els.privacyContent?.addEventListener("click", handlePrivacyClick);
  els.privacyDialog?.addEventListener("close", unlockBodyIfNoOverlay);
  els.termsContent?.addEventListener("click", handleTermsClick);
  els.termsDialog?.addEventListener("close", unlockBodyIfNoOverlay);
  els.refreshHome.addEventListener("click", () => HomePage.load({ loadCart: () => CartController.load() }));
  els.loadMore.addEventListener("click", () => CatalogPage.loadMoreProducts());
  window.addEventListener("hashchange", handleRoute);
  els.catalogDrawer.addEventListener("click", (event) => {
    if (event.target === els.catalogDrawer) closeCatalog();
  });
  els.cartDrawer.addEventListener("click", (event) => {
    if (event.target === els.cartDrawer) closeCart();
  });
  els.profileDrawer.addEventListener("click", (event) => {
    if (event.target === els.profileDrawer) ProfileController.close();
  });
  els.notificationsDrawer.addEventListener("click", (event) => {
    if (event.target === els.notificationsDrawer) NotificationController.close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCatalog();
      closeCart();
      ProfileController.close();
      NotificationController.close();
      if (els.ordersDialog.open) els.ordersDialog.close();
      if (els.favoritesDialog?.classList.contains("open")) FavoriteController.close();
      if (els.myReviewsDialog.open) els.myReviewsDialog.close();
      if (els.writeReviewDialog.open) els.writeReviewDialog.close();
    }
  });
  els.detailDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.authDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.apiDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.checkoutDialog.addEventListener("close", () => {
    CheckoutController.abortOrder();
    checkoutStore.checkoutConfirmOpen = false;
    checkoutStore.orderSubmitting = false;
    checkoutStore.orderSuccess = null;
    checkoutStore.checkoutError = "";
    unlockBodyIfNoOverlay();
  });
  els.ordersDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.myReviewsDialog.addEventListener("close", unlockBodyIfNoOverlay);
  els.writeReviewDialog.addEventListener("close", unlockBodyIfNoOverlay);

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => button.closest("dialog")?.close());
  });
}

/* ================= HOME / GRID HANDLERS ================= */

function handleBannerClick(event) {
  const dot = event.target.closest("[data-banner-dot]");
  if (dot) {
    HomePage.scrollToBanner(Number(dot.dataset.bannerDot));
    HomePage.resetBannerAutoSlide();
    return;
  }

  const nav = event.target.closest("[data-banner-nav]");
  if (nav) {
    if (nav.dataset.bannerNav === "next") HomePage.nextBanner();
    else HomePage.prevBanner();
    HomePage.resetBannerAutoSlide();
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
    const category = productStore.categories.find((item) => String(item) === String(id)) || (CATEGORY_LABELS[id] ? id : "");
    if (category) {
      routeHome();
      CatalogPage.renderCategoryProducts(category, { showHomeView });
    } else {
      showToast("Category banner is not available yet.", "info");
    }
  }
}

/* ================= PRODUCT DETAIL HANDLERS ================= */

function handleDetailClick(event) {
  const routeHomeButton = event.target.closest("[data-route-home]");
  const categoryButton = event.target.closest(".product-detail-page [data-category]");
  const brandButton = event.target.closest("[data-brand]");
  const close = event.target.closest("[data-close-detail]");
  const variant = event.target.closest("[data-variant]");
  const qty = event.target.closest("[data-qty]");
  const add = event.target.closest("[data-detail-add]");
  const favorite = event.target.closest("[data-detail-favorite]");
  const compare = event.target.closest("[data-compare]");
  const reviewsRetry = event.target.closest("[data-reviews-retry]");
  const pdpThumb = event.target.closest("[data-pdp-thumb]");
  const pdpTab = event.target.closest("[data-pdp-tab]");
  const pdpZoom = event.target.closest("[data-pdp-zoom]");
  const pdpFullscreen = event.target.closest("[data-pdp-fullscreen]");
  const reviewHelpful = event.target.closest("[data-review-helpful]");

  if (routeHomeButton) {
    event.stopPropagation();
    routeHome();
    return true;
  }

  if (brandButton && brandButton.dataset.brand) {
    event.stopPropagation();
    window.location.hash = `#/brand/${encodeURIComponent(brandButton.dataset.brand)}`;
    return true;
  }

  if (categoryButton) {
    event.stopPropagation();
    routeHome();
    CatalogPage.renderCategoryProducts(categoryButton.dataset.category, { showHomeView });
    return true;
  }

  if (close) {
    event.stopPropagation();
    els.detailDialog.close();
    unlockBodyIfNoOverlay();
    return true;
  }

  if (pdpThumb) {
    event.stopPropagation();
    productStore.pdpGalleryIndex = Number(pdpThumb.dataset.pdpThumb);
    ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    return true;
  }

  if (pdpZoom) {
    event.stopPropagation();
    pdpZoom.classList.toggle("zoomed");
    return true;
  }

  if (pdpFullscreen) {
    event.stopPropagation();
    const img = document.getElementById("pdpMainImage");
    openPdpFullscreen(img?.src);
    return true;
  }

  if (pdpTab) {
    event.stopPropagation();
    productStore.pdpActiveTab = pdpTab.dataset.pdpTab;
    ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    return true;
  }

  if (compare) {
    event.stopPropagation();
    toggleCompareProduct(compare.dataset.compare);
    return true;
  }

  if (variant) {
    event.stopPropagation();
    productStore.selectedVariantId = variant.dataset.variant;
    ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    return true;
  }

  if (qty) {
    event.stopPropagation();
    productStore.selectedQuantity = Math.max(1, productStore.selectedQuantity + (qty.dataset.qty === "plus" ? 1 : -1));
    ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    return true;
  }

  if (favorite) {
    event.stopPropagation();
    FavoriteController.toggle(favorite.dataset.detailFavorite);
    return true;
  }

  if (reviewsRetry) {
    event.stopPropagation();
    ProductController.loadReviews(reviewsRetry.dataset.reviewsRetry);
    return true;
  }

  if (reviewHelpful) {
    event.stopPropagation();
    const id = reviewHelpful.dataset.reviewHelpful;
    if (productStore.reviewHelpfulIds.has(id)) productStore.reviewHelpfulIds.delete(id);
    else productStore.reviewHelpfulIds.add(id);
    ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    return true;
  }

  if (add) {
    event.stopPropagation();
    const quantityInput = document.getElementById("quantityInput");
    productStore.selectedQuantity = Math.max(1, Number(quantityInput?.value || productStore.selectedQuantity));
    addToCart(productStore.selectedDetailProduct.id, productStore.selectedVariantId, productStore.selectedQuantity);
    return true;
  }

  return false;
}

/* ================= CART HANDLERS ================= */

function handleCartChange(event) {
  const target = event.target;
  if (!target.matches("[data-cart-select-all], [data-cart-item-check]")) return;

  const selectedIds = CartPage.getCartSelectedIds();
  if (target.matches("[data-cart-select-all]")) {
    if (target.checked) {
      cartStore.cartItems.forEach((item) => selectedIds.add(String(item.id)));
    } else {
      selectedIds.clear();
    }
    CartPage.render();
    return;
  }

  const id = String(target.dataset.cartItemCheck || "");
  if (!id) return;
  if (target.checked) selectedIds.add(id);
  else selectedIds.delete(id);
  CartPage.render();
}

function handleCartClick(event) {
  const retry = event.target.closest("[data-cart-retry]");
  const startShopping = event.target.closest("[data-start-shopping]");
  const qty = event.target.closest("[data-cart-qty]");
  const remove = event.target.closest("[data-remove]");
  const saveLater = event.target.closest("[data-save-later]");
  const deleteSelected = event.target.closest("[data-cart-delete-selected]");
  if (retry) CartController.load();
  if (startShopping) {
    closeCart();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (deleteSelected && !deleteSelected.disabled) {
    CartController.removeSelected();
    return;
  }
  if (saveLater) {
    const item = cartStore.cartItems.find((i) => String(i.id) === String(saveLater.dataset.saveLater));
    if (item) {
      saveForLaterItem(item);
      CartController.removeItem(item.id);
    }
    return;
  }
  if (qty) {
    const item = cartStore.cartItems.find((cartItem) => String(cartItem.id) === String(qty.dataset.cartId));
    if (item) CartController.updateQuantity(item.id, item.quantity + (qty.dataset.cartQty === "plus" ? 1 : -1));
  }
  if (remove) CartController.removeItem(remove.dataset.remove);
}

/* ================= CHECKOUT HANDLERS ================= */

function submitCheckout(event) {
  event.preventDefault();
  CheckoutController.openConfirm();
}

async function handleCheckoutClick(event) {
  const closeCheckout = event.target.closest("[data-checkout-close]");
  const toggleAddress = event.target.closest("[data-checkout-toggle-address]");
  const toggleReceiver = event.target.closest("[data-checkout-toggle-receiver]");
  const toggleCoupon = event.target.closest("[data-checkout-toggle-coupon]");
  const applyCoupon = event.target.closest("[data-apply-coupon]");
  const receiver = event.target.closest("[data-select-receiver]");
  const address = event.target.closest("[data-select-address]");
  const deleteReceiver = event.target.closest("[data-delete-receiver]");
  const deleteAddress = event.target.closest("[data-delete-address]");
  const placeOrderButton = event.target.closest("[data-place-order]");
  const confirmCancel = event.target.closest("[data-checkout-confirm-cancel]");
  const confirmSubmit = event.target.closest("[data-checkout-confirm-submit]");
  const successDismiss = event.target.closest("[data-checkout-success-dismiss]");
  const successCard = event.target.closest("[data-checkout-success-card]");
  const viewOrdersButton = event.target.closest("[data-success-orders]");
  const continueButton = event.target.closest("[data-success-continue]");

  if (closeCheckout) {
    CheckoutController.abortOrder();
    checkoutStore.checkoutConfirmOpen = false;
    checkoutStore.orderSubmitting = false;
    checkoutStore.orderSuccess = null;
    checkoutStore.checkoutError = "";
    els.checkoutDialog.close();
    unlockBodyIfNoOverlay();
    return;
  }

  if (toggleAddress) {
    checkoutStore.checkoutAddressPickerOpen = !checkoutStore.checkoutAddressPickerOpen;
    checkoutStore.checkoutError = "";
    CheckoutPage.render();
    return;
  }

  if (toggleReceiver) {
    checkoutStore.checkoutReceiverPickerOpen = !checkoutStore.checkoutReceiverPickerOpen;
    checkoutStore.checkoutError = "";
    CheckoutPage.render();
    return;
  }

  if (toggleCoupon) {
    checkoutStore.checkoutCouponOpen = !checkoutStore.checkoutCouponOpen;
    CheckoutPage.render();
    return;
  }

  if (applyCoupon) {
    const input = document.getElementById("checkoutCouponInput");
    CheckoutController.applyCoupon((input?.value || "").trim());
    return;
  }

  if (deleteReceiver) {
    event.stopPropagation();
    await CheckoutController.deleteReceiver(deleteReceiver.dataset.deleteReceiver);
    return;
  }

  if (deleteAddress) {
    event.stopPropagation();
    await CheckoutController.deleteAddress(deleteAddress.dataset.deleteAddress);
    return;
  }

  if (receiver) {
    checkoutStore.selectedReceiverId = receiver.dataset.selectReceiver;
    checkoutStore.checkoutReceiverPickerOpen = false;
    checkoutStore.checkoutError = "";
    CheckoutPage.render();
    return;
  }

  if (address) {
    checkoutStore.selectedAddressId = address.dataset.selectAddress;
    checkoutStore.checkoutAddressPickerOpen = false;
    checkoutStore.checkoutError = "";
    CheckoutPage.render();
    return;
  }

  if (placeOrderButton) {
    CheckoutController.openConfirm();
    return;
  }

  if (confirmCancel) {
    CheckoutController.abortOrder();
    checkoutStore.checkoutConfirmOpen = false;
    checkoutStore.orderSubmitting = false;
    checkoutStore.checkoutError = "";
    CheckoutPage.render();
    return;
  }

  if (confirmSubmit) {
    await CheckoutController.submitOrder();
    return;
  }

  if (successDismiss && !successCard) {
    CheckoutController.finishAndGoHome();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (viewOrdersButton) {
    els.checkoutDialog.close();
    await OrderController.show();
    return;
  }

  if (continueButton) {
    els.checkoutDialog.close();
    closeCart();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function handleCheckoutSubmit(event) {
  const receiverForm = event.target.closest("[data-add-receiver-form]");
  const addressForm = event.target.closest("[data-add-address-form]");
  if (!receiverForm && !addressForm) return;
  event.preventDefault();

  if (receiverForm) await CheckoutController.createReceiver();
  if (addressForm) await CheckoutController.createAddress();
}

/* ================= FAVORITES / NOTIFICATIONS HANDLERS ================= */

function handleFavoritesClick(event) {
  FavoritesPage.handleClick(event, {
    close: () => FavoriteController.close(),
    reload: () => FavoriteController.load({ render: true }),
    handleProductGridClick,
  });
}

function handleNotificationsClick(event) {
  const retry = event.target.closest("[data-notifications-retry]");
  const readButton = event.target.closest("[data-notification-read]");
  const card = event.target.closest("[data-notification-card]");

  if (retry) {
    NotificationController.load();
    NotificationController.loadUnreadCount();
    return;
  }

  if (readButton) {
    event.stopPropagation();
    NotificationController.markRead(readButton.dataset.notificationRead);
    return;
  }

  if (card) {
    NotificationController.handleCardClick(card.dataset.notificationCard);
  }
}

/* ================= SUPPORT / LEGAL HANDLERS ================= */

export function openSupport() {
  appStore.supportFaqOpen = 0;
  SupportPage.render();
  els.supportDialog.showModal();
  lockBody();
}

function closeSupport() {
  els.supportDialog.close();
  unlockBodyIfNoOverlay();
}

function handleSupportClick(event) {
  SupportPage.handleClick(event, { close: closeSupport });
}

export function openPrivacy() {
  SupportPage.renderPrivacy();
  els.privacyDialog.showModal();
  lockBody();
}

function closePrivacy() {
  els.privacyDialog.close();
  unlockBodyIfNoOverlay();
}

function handlePrivacyClick(event) {
  SupportPage.handlePrivacyClick(event, { close: closePrivacy });
}

export function openTerms() {
  SupportPage.renderTerms();
  els.termsDialog.showModal();
  lockBody();
}

function closeTerms() {
  els.termsDialog.close();
  unlockBodyIfNoOverlay();
}

function handleTermsClick(event) {
  SupportPage.handleTermsClick(event, { close: closeTerms });
}

/* ================= REVIEWS ================= */

export async function openMyReviews() {
  if (!AuthController.isLoggedIn()) {
    AuthController.showLoginRequired();
    return;
  }
  els.myReviewsDialog.showModal();
  lockBody();
  await loadMyReviews();
}

async function loadMyReviews() {
  if (!AuthController.isLoggedIn()) {
    AuthController.showLoginRequired();
    return;
  }

  productStore.myReviewsLoading = true;
  productStore.myReviewsError = "";
  renderMyReviews();

  const result = await ReviewService.loadMyReviews();
  productStore.myReviewsLoading = false;

  if (!result.success) {
    if (result.sessionExpired) {
      closeMyReviews();
      closeWriteReview();
      return;
    }
    productStore.myReviewsError = result.error;
    renderMyReviews();
    return;
  }

  productStore.myReviews = result.items;
  renderMyReviews();
}

export function renderMyReviews() {
  els.myReviewsSummary.textContent = productStore.myReviews.length
    ? `${productStore.myReviews.length} item${productStore.myReviews.length === 1 ? "" : "s"}`
    : "Purchased products and written reviews";

  if (productStore.myReviewsLoading) {
    els.myReviewsContent.innerHTML = `
      <div class="my-reviews-list">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (productStore.myReviewsError) {
    els.myReviewsContent.innerHTML = `
      <div class="reviews-empty-state">
        <strong>Reviews unavailable</strong>
        <p>${escapeHtml(productStore.myReviewsError)}</p>
        <button class="secondary-button" data-my-reviews-retry type="button">Retry</button>
      </div>
    `;
    return;
  }

  if (!productStore.myReviews.length) {
    els.myReviewsContent.innerHTML = `
      <div class="reviews-empty-state">
        <strong>No review items yet</strong>
        <p>Your written reviews and reviewable purchases will appear here.</p>
      </div>
    `;
    return;
  }

  els.myReviewsContent.innerHTML = ReviewList({
    itemsHtml: productStore.myReviews.map((item) => renderMyReviewItem(item)).join(""),
  });
}

function renderMyReviewItem(item) {
  return ReviewListItem({
    item,
    starsHtml: item.review?.rating ? renderStars(item.review.rating) : "",
  });
}

export function openWriteReview(options = {}) {
  if (!AuthController.isLoggedIn()) {
    AuthController.showLoginRequired();
    return;
  }

  const productId = options.productId;
  const orderId = options.orderId;
  if (!productId || !orderId) {
    showToast("Product and order are required for review.");
    return;
  }

  productStore.reviewDraft = {
    productId,
    orderId,
    productName: options.productName || "Product",
  };
  productStore.reviewRating = 5;
  els.writeReviewProduct.textContent = `${productStore.reviewDraft.productName} · Order #${orderId}`;
  els.reviewContent.value = "";
  els.reviewImages.value = "";
  els.reviewImageFiles.value = "";
  els.reviewUploadStatus.textContent = "";
  setReviewFormMessage("");
  renderRatingSelector();
  els.writeReviewDialog.showModal();
  lockBody();
}

function renderRatingSelector() {
  els.reviewRatingSelector.innerHTML = Array.from({ length: 5 }, (_, index) => {
    const rating = index + 1;
    return `
      <button class="rating-choice ${rating <= productStore.reviewRating ? "active" : ""}" data-review-rating="${rating}" type="button" aria-label="Rating ${rating} out of 5">
        ★
      </button>
    `;
  }).join("");
}

function closeMyReviews() {
  if (els.myReviewsDialog.open) els.myReviewsDialog.close();
  unlockBodyIfNoOverlay();
}

function closeWriteReview() {
  if (els.writeReviewDialog.open) els.writeReviewDialog.close();
  unlockBodyIfNoOverlay();
}

function setReviewFormMessage(message, type = "") {
  els.reviewFormMessage.textContent = message;
  els.reviewFormMessage.className = `form-message ${type}`.trim();
}

async function uploadReviewImages(files) {
  return ReviewService.uploadReviewImages(files, {
    onProgress: (message) => {
      els.reviewUploadStatus.textContent = message;
    },
  });
}

async function submitReview(event) {
  event.preventDefault();
  if (productStore.reviewSubmitting) return;

  const draft = productStore.reviewDraft || {};
  const content = els.reviewContent.value.trim();
  const validation = ReviewService.validateSubmitReview({
    productId: draft.productId,
    orderId: draft.orderId,
    rating: productStore.reviewRating,
    content,
    manualImageUrlsText: els.reviewImages.value,
    files: els.reviewImageFiles.files,
  });

  if (!validation.valid) {
    setReviewFormMessage(validation.errors[0], "error");
    return;
  }

  productStore.reviewSubmitting = true;
  productStore.uploadingReviewImages = Boolean(validation.fileValidation.files.length);
  els.submitReviewButton.disabled = true;
  els.submitReviewButton.textContent = "Submitting...";
  setReviewFormMessage("");

  let uploadedImageUrls = [];
  try {
    uploadedImageUrls = validation.fileValidation.files.length
      ? await uploadReviewImages(validation.fileValidation.files)
      : [];
  } catch (error) {
    productStore.reviewSubmitting = false;
    productStore.uploadingReviewImages = false;
    els.submitReviewButton.disabled = false;
    els.submitReviewButton.textContent = "Submit review";
    setReviewFormMessage(error.message || "Image upload failed.", "error");
    return;
  }

  const imageUrls = [...uploadedImageUrls, ...validation.manualImageUrls].slice(0, 5);

  const result = await ReviewService.submitReview({
    productId: draft.productId,
    orderId: draft.orderId,
    rating: productStore.reviewRating,
    content,
    imageUrls,
  });

  productStore.reviewSubmitting = false;
  productStore.uploadingReviewImages = false;
  els.submitReviewButton.disabled = false;
  els.submitReviewButton.textContent = "Submit review";
  els.reviewUploadStatus.textContent = "";

  if (!result.success) {
    if (result.sessionExpired) {
      closeMyReviews();
      closeWriteReview();
      return;
    }
    setReviewFormMessage(result.error, "error");
    return;
  }

  showToast("Review submitted");
  closeWriteReview();
  await loadMyReviews();
  if (productStore.selectedDetailProduct?.id !== undefined && String(productStore.selectedDetailProduct.id) === String(draft.productId)) {
    await ProductController.loadReviews(draft.productId);
  }
}

function handleMyReviewsClick(event) {
  const retry = event.target.closest("[data-my-reviews-retry]");
  const write = event.target.closest("[data-write-review]");

  if (retry) {
    loadMyReviews();
    return;
  }

  if (write) {
    openWriteReview({
      productId: write.dataset.writeReview,
      orderId: write.dataset.reviewOrder,
      productName: write.dataset.reviewName,
    });
  }
}

function handleRatingSelectorClick(event) {
  const button = event.target.closest("[data-review-rating]");
  if (!button) return;
  productStore.reviewRating = Number(button.dataset.reviewRating);
  renderRatingSelector();
}

/* ================= LANGUAGE ================= */

export function rerenderLanguageSensitiveUi() {
  applyTranslations(getTranslationContext());
  CatalogPage.renderCategories();
  syncModeBadges();
  if (appStore.currentRoute === "product" && productStore.selectedDetailProduct) {
    ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
  } else {
    renderProductList(els.grid, productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
    renderProductList(els.dealsGrid, productStore.todayDeals.slice(0, 8), t("home.noProducts"));
    if (productStore.homeApiSections) HomePage.renderHomeApiSections(productStore.homeApiSections);
  }
  if (els.cartDrawer.classList.contains("open")) CartPage.render();
  if (els.profileDrawer.classList.contains("open")) ProfilePage.render();
  if (isFavoritesOpen()) FavoritesPage.render();
  if (els.ordersDialog.open) OrdersPage.render();
  if (els.notificationsDrawer.classList.contains("open")) NotificationsPage.render();
  if (els.myReviewsDialog.open) renderMyReviews();
  AuthController.updateUi();
}
