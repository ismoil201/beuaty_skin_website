import { CONFIG } from '../config/config.js';
import { CATEGORY_LABELS, QUICK_CATEGORIES, SUPPORTED_LANGUAGES } from '../config/constants.js';
import { state } from '../store/state.js';
import { els } from '../utils/dom.js';
import { normalizeSavedBaseUrl } from '../config/apiBase.js';
import { getToken } from '../utils/storage.js';
import { escapeHtml } from '../utils/html.js';
import {
  getPageContent,
  normalizeProduct,
  normalizeCartItem,
  normalizeCategory,
  normalizeOrderItem,
  normalizeFavoriteItem,
  normalizeReview,
  normalizeNotification,
  normalizeMyReviewItem,
  getNotificationsContent,
  getMyReviewsContent,
  normalizeImages,
  imageValue,
  numberOrZero,
  categoryLabel,
} from '../utils/productMapper.js';
import { setCartItems, clearCartState } from '../store/cartStore.js';
import { setFavoriteProducts, clearFavoritesState, syncProductFavorites } from '../store/favoriteStore.js';
import { t, applyTranslations, setLanguage, getSavedLanguage, setLanguageChangeHandler, getCurrentLanguage } from '../i18n/index.js';
import { apiFetch, configureApiClient } from '../api/apiClient.js';
import { showToast } from '../utils/toast.js';
import { signInWithGoogleIdToken } from '../config/firebase.js';
import { initTheme } from '../utils/theme.js';
import {
  initHeaderScroll,
  initPageTransitions,
  initOfflineBanner,
  favoritePop,
  flyToCart,
  ripple,
} from '../utils/motion.js';
import {
  initSearchPanel,
  saveSearchHistory,
  closeSearchPanel,
} from '../utils/searchPanel.js';
import { initFilterState, setSourceProducts, getFilteredProducts, renderFilterSidebar, renderFilterChips, persistFilters, clearAllFilters, applyViewMode, renderCompareFab, renderCompareDrawer, renderComparePage, renderCartExtras, renderCheckoutStepper, renderFlashCountdown, renderBrandPage, FREE_SHIPPING_THRESHOLD, STANDARD_DELIVERY_FEE } from '../utils/phase2Ui.js';
import { toggleCompareId, getCompareIds, removeCompareId, clearCompare, MAX_COMPARE } from '../store/compareStore.js';
import { saveForLaterItem, removeSavedForLater, getSavedForLater } from '../store/savedForLaterStore.js';
import { initLazyImages } from '../utils/imageLoader.js';

export { apiFetch, showToast };

function saveAuth(loginResponse) {
  const token = loginResponse?.token || loginResponse?.accessToken || loginResponse?.jwt || "";
  const user = {
    id: loginResponse?.id,
    email: loginResponse?.email,
    fullName: loginResponse?.fullName,
    phone: loginResponse?.phone || "",
    profileImage: loginResponse?.profileImage || "",
  };

  if (token) {
    localStorage.setItem(CONFIG.storageKeys.accessToken, token);
  }

  localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(user));
  localStorage.setItem(CONFIG.storageKeys.role, loginResponse?.role || "");
  state.accessToken = token;
  state.user = user;
  state.role = loginResponse?.role || "";
}

function clearAuth() {
  localStorage.removeItem(CONFIG.storageKeys.accessToken);
  localStorage.removeItem(CONFIG.storageKeys.legacyAccessToken);
  localStorage.removeItem(CONFIG.storageKeys.user);
  localStorage.removeItem(CONFIG.storageKeys.legacyUser);
  localStorage.removeItem(CONFIG.storageKeys.role);
  state.accessToken = "";
  state.user = null;
  state.role = "";
  clearCartState();
  renderCart();
  clearFavoritesState();
  updateFavoritesUi();
  clearNotificationsState();
  state.myReviews = [];
  state.myReviewsLoading = false;
  state.myReviewsError = "";
  if (els.myReviewsDialog?.open) els.myReviewsDialog.close();
  if (els.writeReviewDialog?.open) els.writeReviewDialog.close();
  updateAuthUi();
}

function isLoggedIn() {
  return Boolean(getToken());
}

function showLoginRequired() {
  openAuthDialog("login");
  showToast(t("auth.loginRequired"), "warning");
}

async function validateAuthOnStartup() {
  if (!getToken()) {
    updateAuthUi();
    return;
  }

  const profile = await apiFetch("/api/users/me", {
    requireAuth: true,
    showError: false,
    silentAuth: true,
  });

  if (!profile) {
    clearAuth();
    return;
  }

  state.user = profile;
  localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(profile));
  updateAuthUi();

  await Promise.allSettled([loadFavorites(), loadUnreadCount()]);
}

function updateAuthUi() {
  const label = els.loginButton.querySelector("span");
  if (!label) return;
  if (isLoggedIn() && state.user) {
    label.textContent = firstName(state.user.fullName) || t("profile.myProfile");
    els.loginButton.setAttribute("aria-label", t("profile.myProfile"));
  } else {
    label.textContent = t("auth.login");
    els.loginButton.setAttribute("aria-label", t("auth.login"));
  }
}

function firstName(fullName = "") {
  return String(fullName).trim().split(/\s+/)[0] || "";
}

/* ================= FORMAT / UI HELPERS ================= */

function formatPrice(value) {
  const currentLanguage = getCurrentLanguage();
  const currencyLabels = { uz: "so‘m", en: "UZS", ru: "сум", ko: "UZS" };
  return `${new Intl.NumberFormat(currentLanguage === "uz" ? "uz-UZ" : currentLanguage).format(numberOrZero(value))} ${currencyLabels[currentLanguage] || "UZS"}`;
}

function formatMoney(amount) {
  return formatPrice(amount);
}

function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  const currentLanguage = getCurrentLanguage();
  return new Intl.DateTimeFormat(currentLanguage, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function statusLabel(status = "") {
  return t(`status.${status}`) || status || t("common.unknown");
}

function setModeBadge(element, visible) {
  if (!element) return;
  element.hidden = !visible;
}

function syncModeBadges() {
  setModeBadge(els.productsMode, state.demoProducts);
  setModeBadge(els.dealsMode, state.demoDeals);
}

function renderSkeleton(container, count = 12) {
  container.innerHTML = Array.from({ length: count }, () => `
    <div class="skeleton-card" aria-hidden="true">
      <div class="ds-skeleton" style="aspect-ratio:1/1.05;border-radius:14px;margin-bottom:12px"></div>
      <div class="ds-skeleton" style="height:12px;width:40%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:14px;width:90%;margin-bottom:8px;border-radius:6px"></div>
      <div class="ds-skeleton" style="height:18px;width:55%;border-radius:6px"></div>
    </div>
  `).join("");
}

function renderEmpty(container, message, actionLabel = t("home.showAll")) {
  container.innerHTML = `
    <div class="empty-state">
      <strong>${escapeHtml(message)}</strong>
      <button class="secondary-button" data-show-all type="button">${escapeHtml(actionLabel)}</button>
    </div>
  `;
}

function postEvent(path, options = {}) {
  apiFetch(path, { ...options, showError: false }).catch(() => {});
}

function sendImpression(productId, screen, position) {
  if (!productId || String(productId).startsWith("demo-")) return;
  const key = `${state.sessionId}:${screen}:${productId}`;
  if (state.impressionsSent.has(key)) return;
  state.impressionsSent.add(key);
  postEvent("/events/impression", {
    method: "POST",
    body: JSON.stringify({
      productId: Number(productId),
      screen,
      position,
      queryText: state.currentSearchQuery || null,
      sessionId: state.sessionId,
    }),
  });
}

function sendProductClick(productId) {
  if (!productId || String(productId).startsWith("demo-")) return;
  postEvent("/events/click", {
    method: "POST",
    query: { productId },
  });
}

function sendProductView(productId) {
  if (!productId || String(productId).startsWith("demo-")) return;
  postEvent("/events/view", {
    method: "POST",
    query: { productId },
  });
}

function observeProductImpressions(container) {
  if (!("IntersectionObserver" in window)) {
    container.querySelectorAll("[data-product]").forEach((card) => {
      sendImpression(card.dataset.product, card.dataset.screen || "home", Number(card.dataset.position || 0));
    });
    return;
  }

  if (!state.impressionObserver) {
    state.impressionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        sendImpression(card.dataset.product, card.dataset.screen || "home", Number(card.dataset.position || 0));
        state.impressionObserver.unobserve(card);
      });
    }, { threshold: 0.35 });
  }

  container.querySelectorAll("[data-product]").forEach((card) => state.impressionObserver.observe(card));
}

function productCard(product, meta = {}) {
  const isFavorite = state.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
  const isCompared = getCompareIds().includes(String(product.id));
  const screen = meta.screen || state.currentGridScreen || "home";
  const position = meta.position ?? 0;
  const stock = numberOrZero(product.stock);
  const lowStock = stock > 0 && stock <= 5;
  const outOfStock = stock === 0;
  const ratingDisplay = product.ratingAvg
    ? `<span class="rating"><span class="star" aria-hidden="true">★</span> ${product.ratingAvg.toFixed(1)} <span class="review-count">(${product.reviewCount || 0})</span></span>`
    : `<span class="rating"><span class="star" aria-hidden="true">★</span> 0 <span class="review-count">(0)</span></span>`;
  const ratingLine = product.ratingAvg
    ? `<div class="rating-line"><span class="star" aria-hidden="true">★</span> ${product.ratingAvg.toFixed(1)} <span class="review-count">(${product.reviewCount || 0})</span></div>`
    : "";

  return `
    <article class="product-card" data-product="${escapeHtml(product.id)}" data-screen="${escapeHtml(screen)}" data-position="${escapeHtml(position)}" role="link" tabindex="0" aria-label="${escapeHtml(product.name)}">
      <div class="card-media">
        <div class="badge-row">
          ${product.discountPercent ? `<span class="badge ds-badge--sale">-${product.discountPercent}%</span>` : ""}
          ${product.todayDeal ? `<span class="badge today ds-badge--deal">${escapeHtml(t("home.todayOnly"))}</span>` : ""}
          ${product.isNew ? `<span class="badge ds-badge--new">NEW</span>` : ""}
        </div>
        <button class="icon-button favorite-float ${isFavorite ? "active" : ""}" data-favorite="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(t("favorites.title"))}" aria-pressed="${isFavorite}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
        </button>
        <img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" decoding="async" />
        <div class="card-badges-bottom">
          ${lowStock ? `<span class="ds-badge ds-badge--stock">${escapeHtml(t("product.lowStock"))}</span>` : ""}
          ${outOfStock ? `<span class="ds-badge ds-badge--stock">${escapeHtml(t("product.outOfStock"))}</span>` : ""}
          <span class="ds-badge ds-badge--delivery">${escapeHtml(t("product.freeShipping"))}</span>
        </div>
        <div class="card-overlay">
          <button class="secondary-button" data-quick-view="${escapeHtml(product.id)}" type="button">${escapeHtml(t("product.quickView"))}</button>
          <button class="icon-button ${isCompared ? "active" : ""}" data-compare="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(t("product.compare"))}" aria-pressed="${isCompared}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${escapeHtml(product.brand || product.category || "BEAUTY SKIN KOREA")}</span>
          ${ratingDisplay}
        </div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description || `${product.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${formatPrice(product.finalPrice)}</span>
          ${product.discountPercent ? `<span class="old-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        ${ratingLine}
        <p class="hint">${escapeHtml(t("product.sold", { count: product.soldCount }))}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button ${state.addingProductIds.has(String(product.id)) ? "loading" : ""}" data-add="${escapeHtml(product.id)}" type="button" ${outOfStock ? "disabled" : ""}>
          ${escapeHtml(state.addingProductIds.has(String(product.id)) ? t("product.adding") : t("product.addToCart"))}
        </button>
        <button class="icon-button" data-detail="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(t("product.viewDetails"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `;
}

function renderProductList(container, products, emptyMessage, meta = {}) {
  if (!products.length) {
    renderEmpty(container, emptyMessage);
    return;
  }
  container.innerHTML = products.map((product, index) => productCard(product, { ...meta, position: index })).join("");
  observeProductImpressions(container);
  initLazyImages(container);
  applyViewMode(container, state.filters?.viewMode || "grid");
}

function applyAndRenderGrid(products, emptyMessage, meta = {}) {
  setSourceProducts(state, products);
  renderFilterSidebar(state, t, categoryLabel);
  renderFilterChips(state, t);
  const filtered = getFilteredProducts(state);
  renderProductList(els.grid, filtered, emptyMessage, meta);
  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect && sortSelect.value !== state.filters.sort) sortSelect.value = state.filters.sort;
}

function renderSelect(select, items, labelOf) {
  select.innerHTML = items.length
    ? items.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(labelOf(item))}</option>`).join("")
    : "<option value=\"\">Ma’lumot topilmadi</option>";
}

function renderStars(rating, label = "Rating") {
  const safeRating = Math.min(5, Math.max(0, Math.round(numberOrZero(rating))));
  return `
    <span class="stars" role="img" aria-label="${escapeHtml(label)} ${safeRating} out of 5">
      ${Array.from({ length: 5 }, (_, index) => `<span class="${index < safeRating ? "filled" : ""}">★</span>`).join("")}
    </span>
  `;
}

function reviewStats(reviews) {
  const count = reviews.length;
  const average = count ? reviews.reduce((sum, review) => sum + numberOrZero(review.rating), 0) / count : 0;
  return { count, average };
}

/* ================= PAGE RENDERERS ================= */

export async function loadHome() {
  state.selectedCategory = "ALL";
  state.currentSearchQuery = "";
  state.currentGridScreen = "home";
  state.feedPage = 0;
  els.title.textContent = t("home.recommended");
  els.status.textContent = t("home.loading");
  renderSkeleton(els.grid, 12);
  renderSkeleton(els.dealsGrid, 6);

  try {
    await Promise.all([loadCategories(), loadBanners(), loadAnnouncements()]);
    const homeLoaded = await loadHomeApi();
    if (!homeLoaded) {
      await Promise.all([loadProducts(), loadTodayDeals()]);
      renderHomeApiSections({
        hits: state.products.slice(0, 12),
        discounts: state.todayDeals.slice(0, 10),
        newArrivals: state.products.slice(6, 18),
      });
    }
    await loadRecentlyViewed();
    renderPersonalizationSections();
    await loadCart();
  } catch (error) {
    console.error("Home loading failed:", error);
    state.demoProducts = false;
    state.demoDeals = false;
    renderEmpty(els.grid, t("common.serverFailed"), t("common.tryAgain"));
  } finally {
    if (els.status?.textContent === t("home.loading")) {
      els.status.textContent = "";
    }
    if (els.dealsStatus?.textContent === t("home.loading") || els.dealsStatus?.textContent === "Yuklanmoqda...") {
      els.dealsStatus.textContent = "";
    }
  }
}

export async function loadHomeApi() {
  const response = await apiFetch("/api/home", {
    query: { limit: 10, page: 0, size: 20 },
    showError: false,
  });

  if (response === null) {
    state.homeLoadedFromApi = false;
    els.homeApiSections.hidden = true;
    return false;
  }

  const hits = getPageContent(response.hits || []).map(normalizeProduct);
  const discounts = getPageContent(response.discounts || []).map(normalizeProduct);
  const newArrivals = getPageContent(response.newArrivals || []).map(normalizeProduct);
  const popular = getPageContent(response.popular).map(normalizeProduct);
  const hasAny = hits.length || discounts.length || newArrivals.length || popular.length;

  if (!hasAny) {
    state.homeLoadedFromApi = false;
    els.homeApiSections.hidden = true;
    return false;
  }

  state.homeLoadedFromApi = true;
  state.products = popular.length ? popular : [...hits, ...discounts, ...newArrivals].filter(uniqueProductById);
  state.todayDeals = discounts;
  state.demoProducts = false;
  state.demoDeals = false;
  syncProductFavorites();
  state.homeApiSections = { hits, discounts, newArrivals };
  renderHomeApiSections({ hits, discounts, newArrivals });
  applyAndRenderGrid(state.products, t("home.noProducts"), { screen: "home" });
  renderProductList(els.dealsGrid, discounts.slice(0, 8), "Chegirmalar topilmadi.", { screen: "home-discounts" });
  els.status.textContent = "";
  els.dealsStatus.textContent = "";
  syncModeBadges();
  return true;
}

function renderHomeApiSections(sections) {
  const hits = sections.hits || [];
  const arrivals = sections.newArrivals || [];

  const forYouSection = document.getElementById("personalizationSection");
  const forYouGrid = document.getElementById("personalizationGrid");
  if (forYouGrid) {
    const picks = hits.length ? hits : state.products.slice(0, 10);
    if (forYouSection) forYouSection.hidden = !picks.length;
    if (picks.length) {
      renderProductList(forYouGrid, picks.slice(0, 10), t("home.noProducts"), { screen: "home-for-you" });
    }
  }

  const arrivalsGrid = document.getElementById("newArrivalsGrid");
  if (arrivalsGrid) {
    const items = arrivals.length ? arrivals : state.products.slice(0, 10);
    renderProductList(arrivalsGrid, items.slice(0, 10), t("home.noProducts"), { screen: "home-new" });
  }

  // Keep legacy container for compatibility, but hide it in new homepage narrative.
  els.homeApiSections.hidden = true;
  els.homeApiSections.innerHTML = "";
}

function uniqueProductById(product, index, list) {
  return product?.id !== undefined && list.findIndex((item) => String(item.id) === String(product.id)) === index;
}

const DEFAULT_CATEGORIES = ["SKINCARE", "MAKEUP", "COLLAGEN", "HAIR_CARE", "FRAGRANCE"];

async function loadCategories() {
  const response = await apiFetch("/api/categories", { showError: false });
  const categories = getPageContent(response).map(normalizeCategory).filter(Boolean);

  if (categories.length) {
    state.categories = categories;
    state.demoCategories = false;
  } else {
    state.categories = DEFAULT_CATEGORIES;
    state.demoCategories = false;
  }

  syncModeBadges();
  renderCategories();
}

async function loadBanners() {
  const response = await apiFetch("/api/banners", { showError: false });
  const banners = getPageContent(response)
    .map((banner) => ({
      id: banner.id,
      title: banner.title || "",
      subtitle: banner.subtitle || "",
      imageUrl: banner.imageUrl || "",
      linkType: String(banner.linkType || "NONE").toUpperCase(),
      linkId: banner.linkId,
      position: numberOrZero(banner.position),
    }))
    .sort((a, b) => a.position - b.position);

  state.banners = banners;
  renderBanners();
}

const BANNER_AUTO_MS = 5000;
let bannerAutoTimer = null;
let bannerPaused = false;
let bannerScrollListener = null;
let bannerScrollEndTimer = 0;

function getBannerTrack() {
  return els.banners?.querySelector(".banner-track");
}

function getBannerCount() {
  return state.banners.length;
}

function getActiveBannerIndex() {
  const track = getBannerTrack();
  if (!track) return 0;
  const width = track.clientWidth || 1;
  return Math.max(0, Math.min(getBannerCount() - 1, Math.round(track.scrollLeft / width)));
}

function updateBannerDots() {
  const index = getActiveBannerIndex();
  els.banners?.querySelectorAll("[data-banner-dot]").forEach((dot) => {
    const active = Number(dot.dataset.bannerDot) === index;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function scrollToBanner(index, behavior = "smooth") {
  const track = getBannerTrack();
  const count = getBannerCount();
  if (!track || !count) return;
  const normalized = ((index % count) + count) % count;
  track.scrollTo({ left: normalized * track.clientWidth, behavior });
}

function nextBanner() {
  scrollToBanner(getActiveBannerIndex() + 1);
}

function prevBanner() {
  scrollToBanner(getActiveBannerIndex() - 1);
}

function stopBannerAutoSlide() {
  if (bannerAutoTimer) {
    clearInterval(bannerAutoTimer);
    bannerAutoTimer = null;
  }
}

function resetBannerAutoSlide() {
  stopBannerAutoSlide();
  if (bannerPaused || getBannerCount() <= 1) return;
  bannerAutoTimer = setInterval(() => nextBanner(), BANNER_AUTO_MS);
}

function teardownBannerSlider() {
  stopBannerAutoSlide();
  const track = getBannerTrack();
  if (track && bannerScrollListener) {
    track.removeEventListener("scroll", bannerScrollListener);
  }
  bannerScrollListener = null;
  if (els.banners) {
    els.banners.onmouseenter = null;
    els.banners.onmouseleave = null;
  }
}

function initBannerSlider() {
  teardownBannerSlider();

  const track = getBannerTrack();
  if (!track || getBannerCount() <= 1) {
    updateBannerDots();
    return;
  }

  bannerScrollListener = () => {
    clearTimeout(bannerScrollEndTimer);
    bannerScrollEndTimer = setTimeout(updateBannerDots, 80);
  };
  track.addEventListener("scroll", bannerScrollListener, { passive: true });

  els.banners.onmouseenter = () => {
    bannerPaused = true;
    stopBannerAutoSlide();
  };
  els.banners.onmouseleave = () => {
    bannerPaused = false;
    resetBannerAutoSlide();
  };

  updateBannerDots();
  resetBannerAutoSlide();
}

function renderBanners() {
  if (!state.banners.length) {
    els.banners.hidden = true;
    els.banners.innerHTML = "";
    setHeroCampaignImage("");
    return;
  }

  els.banners.hidden = false;
  els.banners.innerHTML = `
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${state.banners.map((banner) => `
        <article class="banner-card ${banner.imageUrl ? "has-image" : ""}" data-banner-link-type="${escapeHtml(banner.linkType)}" data-banner-link-id="${escapeHtml(banner.linkId ?? "")}">
          ${banner.imageUrl ? `<img src="${escapeHtml(banner.imageUrl)}" alt="${escapeHtml(banner.title || "Banner")}" />` : `
          <div>
            <strong>${escapeHtml(banner.title || "BEAUTY SKIN KOREA")}</strong>
            ${banner.subtitle ? `<p>${escapeHtml(banner.subtitle)}</p>` : ""}
          </div>`}
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots" role="tablist" aria-label="Banner slides">
      ${state.banners.map((_, index) => `
        <button
          class="banner-dot ${index === 0 ? "active" : ""}"
          type="button"
          data-banner-dot="${index}"
          role="tab"
          aria-label="Banner ${index + 1}"
          aria-selected="${index === 0 ? "true" : "false"}"
        ></button>
      `).join("")}
    </div>
  `;

  setHeroCampaignImage(state.banners[0]?.imageUrl || "");
  initBannerSlider();
}

function setHeroCampaignImage(imageUrl) {
  const hero = document.querySelector(".hero-main");
  if (!hero) return;
  if (!imageUrl) {
    hero.style.removeProperty("--hero-campaign-image");
    return;
  }
  hero.style.setProperty("--hero-campaign-image", `url("${imageUrl}")`);
}

async function loadAnnouncements() {
  const response = await apiFetch("/api/announcements", { showError: false });
  const announcements = getPageContent(response).map((item) => ({
    title: item.title || "",
    message: item.content || item.message || "",
    type: String(item.type || "SYSTEM").toUpperCase(),
    createdAt: item.createdAt || "",
  })).filter((item) => item.title || item.message);

  state.announcements = announcements;
  renderAnnouncements();
}

function renderAnnouncements() {
  if (!state.announcements.length) {
    els.announcements.hidden = true;
    els.announcements.innerHTML = "";
    return;
  }

  els.announcements.hidden = false;
  els.announcements.innerHTML = state.announcements.slice(0, 3).map((item) => `
    <article class="announcement-item ${item.type.toLowerCase()}">
      <strong>${escapeHtml(item.title || item.type)}</strong>
      <span>${escapeHtml(item.message)}</span>
    </article>
  `).join("");
}

async function ensureRecentlyViewedState() {
  const ids = getRecentProductIds();
  if (!ids.length) {
    state.recentlyViewed = [];
    return;
  }

  const response = await apiFetch("/api/products/by-ids", {
    method: "POST",
    body: JSON.stringify(ids.map(Number).filter(Number.isFinite)),
    showError: false,
  });
  state.recentlyViewed = getPageContent(response).map(normalizeProduct).filter((product) => product.id);
}

async function loadRecentlyViewed() {
  const ids = getRecentProductIds();
  if (!ids.length) {
    state.recentlyViewed = [];
    els.recentlyViewedSection.hidden = true;
    return;
  }

  await ensureRecentlyViewedState();
  const products = state.recentlyViewed || [];
  if (!products.length) {
    els.recentlyViewedSection.hidden = true;
    return;
  }

  els.recentlyViewedSection.hidden = false;
  renderProductList(els.recentlyViewedGrid, products, "Recently viewed is empty.", { screen: "recent" });
}

function getRecentProductIds() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.storageKeys.recentProducts) || "[]").filter(Boolean);
  } catch {
    return [];
  }
}

function addRecentProduct(productId) {
  if (!productId || String(productId).startsWith("demo-")) return;
  const ids = [String(productId), ...getRecentProductIds().filter((id) => String(id) !== String(productId))].slice(0, 12);
  localStorage.setItem(CONFIG.storageKeys.recentProducts, JSON.stringify(ids));
}

async function loadProducts() {
  try {
    els.status.textContent = "Yuklanmoqda...";
    renderSkeleton(els.grid, 12);

    const response = await apiFetch("/api/products", {
      query: { page: 0, size: CONFIG.defaultPageSize },
      showError: false,
    });

    console.info("[LOAD PRODUCTS]", response);

    const products = getPageContent(response).map(normalizeProduct);

    if (products.length) {
      state.products = products;
      state.demoProducts = false;
      applyAndRenderGrid(state.products, "Mahsulot topilmadi.", { screen: state.currentGridScreen || "home" });
    } else {
      state.products = [];
      state.demoProducts = false;
      renderEmpty(els.grid, "Mahsulot topilmadi.");
    }

    syncProductFavorites();
  } catch (error) {
    console.error("[LOAD PRODUCTS FAILED]", error);
    state.demoProducts = false;
    renderEmpty(els.grid, "API data failed to load.");
  } finally {
    syncModeBadges();
    els.status.textContent = "";
  }
}

async function loadMoreProducts() {
  if (state.feedLoading) return;
  state.feedLoading = true;
  els.loadMore.disabled = true;
  els.loadMore.textContent = "Yuklanmoqda...";

  let products = [];
  const feedResponse = await apiFetch("/api/home/feed", {
    query: { limit: 30 },
    showError: false,
  });

  products = getPageContent(feedResponse).map(normalizeProduct);

  if (!products.length) {
    state.feedPage += 1;
    const fallback = await apiFetch("/api/products", {
      query: { page: state.feedPage, size: CONFIG.defaultPageSize },
      showError: false,
    });
    products = getPageContent(fallback).map(normalizeProduct);
  }

  const existingIds = new Set(state.products.map((product) => String(product.id)));
  const nextProducts = products.filter((product) => product.id && !existingIds.has(String(product.id)));
  state.products = [...state.products, ...nextProducts];
  syncProductFavorites();
  applyAndRenderGrid(state.products, "Mahsulot topilmadi.", { screen: state.currentGridScreen || "home" });

  state.feedLoading = false;
  els.loadMore.disabled = false;
  els.loadMore.textContent = nextProducts.length ? "Yana yuklash" : "Boshqa mahsulot topilmadi";
}

async function loadTodayDeals() {
  try {
    els.dealsStatus.textContent = "Yuklanmoqda...";
    renderSkeleton(els.dealsGrid, 5);

    const response = await apiFetch("/api/products/today-deals", { showError: false });

    console.info("[LOAD TODAY DEALS]", response);

    const products = getPageContent(response).map(normalizeProduct);

    state.todayDeals = products;
    state.demoDeals = false;

    renderProductList(
      els.dealsGrid,
      state.todayDeals.slice(0, 8),
      "Mahsulot topilmadi."
    );
    syncProductFavorites();
  } catch (error) {
    console.error("[LOAD TODAY DEALS FAILED]", error);
    state.demoDeals = false;
    renderEmpty(els.dealsGrid, "API data failed to load.");
  } finally {
    syncModeBadges();
    els.dealsStatus.textContent = "";
  }
}

function renderCategories() {
  const buttons = ["ALL", ...state.categories].map((category) => `
    <button class="chip ${state.selectedCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
      ${category === "ALL" ? escapeHtml(t("home.all")) : escapeHtml(categoryLabel(category))}
    </button>
  `);
  els.categoryToolbar.innerHTML = buttons.join("");
  renderCatalogList();
  renderQuickCategories();
}

function renderCatalogList() {
  const categories = ["ALL", ...state.categories];
  els.catalogList.innerHTML = categories.map((category) => `
    <button class="catalog-item ${state.selectedCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
      <span>${category === "ALL" ? escapeHtml(t("home.showAll")) : escapeHtml(categoryLabel(category))}</span>
      <span>${category === "ALL" ? "→" : "›"}</span>
    </button>
  `).join("");
}

function renderPersonalizationSections() {
  const section = document.getElementById("personalizationSection");
  const grid = document.getElementById("personalizationGrid");
  if (!section || !grid || grid.children.length) return;
  const picks = state.homeApiSections?.hits?.length
    ? state.homeApiSections.hits
    : state.products.slice(0, 10);
  section.hidden = !picks.length;
  if (!picks.length) return;
  renderProductList(grid, picks.slice(0, 10), t("home.noProducts"), { screen: "home-for-you" });
}

function renderQuickCategories() {
  els.quickCategoryGrid.innerHTML = QUICK_CATEGORIES.map((item) => `
    <button class="quick-card" data-category="${escapeHtml(item.category)}" type="button">
      <span>${escapeHtml(item.icon)}</span>
      ${escapeHtml(categoryLabel(item.category))}
    </button>
  `).join("");
  renderMegaMenu();
  renderPopularSearches();
  renderMobileNav();
}

const POPULAR_SEARCHES = ["SNAIL CREAM", "COSRX", "SUNSCREEN", "LIP TINT", "VITAMIN C", "COLLAGEN"];

function renderPopularSearches() {
  const container = document.getElementById("popularSearchesChips");
  if (!container) return;
  container.innerHTML = POPULAR_SEARCHES.map((term) => `
    <button class="search-chip" type="button" data-search-chip="${escapeHtml(term)}" data-chip-type="trending">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>
      ${escapeHtml(term)}
    </button>
  `).join("");
}

function renderMegaMenu() {
  const mega = document.getElementById("megaMenuContent");
  if (!mega) return;
  const groups = [
    { title: t("home.categories"), items: state.categories.slice(0, 8) },
    { title: t("home.quickCategories"), items: QUICK_CATEGORIES.map((c) => c.category) },
  ];
  mega.innerHTML = groups.map((group) => `
    <div class="mega-menu-group">
      <h3>${escapeHtml(group.title)}</h3>
      ${group.items.map((cat) => `
        <button type="button" data-category="${escapeHtml(cat)}">${escapeHtml(categoryLabel(cat))}</button>
      `).join("")}
    </div>
  `).join("");
}

function renderMobileNav() {
  const nav = document.getElementById("mobileNavLinks");
  if (!nav) return;
  const links = [
    { id: "ordersButton", label: t("header.orders") },
    { id: "favoritesButton", label: t("favorites.title") },
    { id: "cartButton", label: t("cart.title") },
    { id: "loginButton", label: t("auth.login") },
  ];
  nav.innerHTML = `
    ${["ALL", ...state.categories].map((cat) => `
      <button class="mobile-nav-link" type="button" data-category="${escapeHtml(cat)}">
        ${cat === "ALL" ? escapeHtml(t("home.all")) : escapeHtml(categoryLabel(cat))}
      </button>
    `).join("")}
    ${links.map((link) => `<button class="mobile-nav-link" type="button" data-mobile-action="${escapeHtml(link.id)}">${escapeHtml(link.label)}</button>`).join("")}
  `;
}

function initPremiumUi() {
  initTheme();
  initHeaderScroll();
  initPageTransitions();
  initOfflineBanner();

  initSearchPanel({
    onSearch: (query) => {
      els.searchInput.value = query;
      saveSearchHistory(query);
      closeSearchPanel();
      renderSearchResults(query).catch(() => {
        renderEmpty(els.grid, t("common.serverFailed"));
        els.status.textContent = "";
      });
    },
    onProductSelect: (productId) => {
      saveSearchHistory(els.searchInput.value);
      navigateToProduct(productId);
    },
  });

  const megaMenu = document.getElementById("megaMenu");

  megaMenu?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-category]");
    if (!btn) return;
    megaMenu.classList.remove("open");
    megaMenu.setAttribute("aria-hidden", "true");
    els.catalogButton?.setAttribute("aria-expanded", "false");
    handleCategoryClick(event);
  });

  document.getElementById("popularSearchesChips")?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-search-chip]");
    if (!chip) return;
    els.searchInput.value = chip.dataset.searchChip;
    saveSearchHistory(chip.dataset.searchChip);
    renderSearchResults(chip.dataset.searchChip).catch(() => {});
  });

  document.querySelector(".mobile-bottom-nav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mobile-action]");
    if (!button) return;
    const action = button.dataset.mobileAction;
    if (action === "home") {
      window.location.hash = "#/";
      return;
    }
    document.getElementById(action)?.click();
  });

  const mobileDrawer = document.getElementById("mobileDrawer");
  const mobileToggle = document.getElementById("mobileMenuToggle");
  const closeMobile = document.getElementById("closeMobileMenu");

  mobileToggle?.addEventListener("click", () => {
    mobileDrawer?.classList.add("open");
    mobileDrawer?.setAttribute("aria-hidden", "false");
    mobileToggle.setAttribute("aria-expanded", "true");
    lockBody();
  });

  const closeMobileMenu = () => {
    mobileDrawer?.classList.remove("open");
    mobileDrawer?.setAttribute("aria-hidden", "true");
    mobileToggle?.setAttribute("aria-expanded", "false");
    unlockBodyIfNoOverlay();
  };

  closeMobile?.addEventListener("click", closeMobileMenu);
  mobileDrawer?.addEventListener("click", (event) => {
    if (event.target === mobileDrawer) closeMobileMenu();
  });

  document.getElementById("mobileNavLinks")?.addEventListener("click", (event) => {
    const category = event.target.closest("[data-category]");
    const action = event.target.closest("[data-mobile-action]");
    if (category) {
      closeMobileMenu();
      handleCategoryClick(event);
      return;
    }
    if (action) {
      closeMobileMenu();
      document.getElementById(action.dataset.mobileAction)?.click();
    }
  });

  document.getElementById("currencySelect")?.addEventListener("change", (event) => {
    showToast(`${t("header.currency")}: ${event.target.value}`, "info");
  });

  document.addEventListener("click", (event) => {
    const primary = event.target.closest(".primary-button");
    if (primary && !primary.disabled) ripple(event, primary);
  });

  initPhase2Ui();
}

function initPhase2Ui() {
  initFilterState(state);
  state.compareIds = getCompareIds();
  syncCompareUi();
  renderFilterSidebar(state, t, categoryLabel);

  if (!state.flashSaleEnd) {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    state.flashSaleEnd = end.getTime();
  }
  startFlashCountdown();

  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    state.filters.sort = e.target.value;
    persistFilters(state);
    applyAndRenderGrid(state.sourceProducts.length ? state.sourceProducts : state.products, t("home.noProducts"), { screen: state.currentGridScreen });
  });

  document.getElementById("gridViewBtn")?.addEventListener("click", () => {
    state.filters.viewMode = "grid";
    persistFilters(state);
    applyViewMode(els.grid, "grid");
  });

  document.getElementById("listViewBtn")?.addEventListener("click", () => {
    state.filters.viewMode = "list";
    persistFilters(state);
    applyViewMode(els.grid, "list");
  });

  bindFilterEvents(document.getElementById("filterSidebar"));
  bindFilterEvents(document.getElementById("filterSheetContent"));

  document.getElementById("mobileFilterBtn")?.addEventListener("click", () => openBottomSheet("filterSheet"));
  document.getElementById("mobileSortBtn")?.addEventListener("click", () => {
    const sheet = document.getElementById("sortSheetOptions");
    const labels = { popular: t("sort.popular"), "price-asc": t("sort.priceAsc"), "price-desc": t("sort.priceDesc"), rating: t("sort.rating"), newest: t("sort.newest"), discount: t("sort.discount") };
    if (sheet) {
      sheet.innerHTML = Object.entries(labels).map(([v, label]) => `
        <button class="mobile-nav-link" type="button" data-sort-option="${v}">${escapeHtml(label)}</button>
      `).join("");
    }
    openBottomSheet("sortSheet");
  });

  document.getElementById("closeFilterSheet")?.addEventListener("click", () => closeBottomSheet("filterSheet"));
  document.getElementById("applyFilterSheet")?.addEventListener("click", () => {
    closeBottomSheet("filterSheet");
    applyAndRenderGrid(state.sourceProducts.length ? state.sourceProducts : state.products, t("home.noProducts"), { screen: state.currentGridScreen });
  });

  document.getElementById("sortSheetOptions")?.addEventListener("click", (e) => {
    const opt = e.target.closest("[data-sort-option]");
    if (!opt) return;
    state.filters.sort = opt.dataset.sortOption;
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) sortSelect.value = state.filters.sort;
    persistFilters(state);
    closeBottomSheet("sortSheet");
    applyAndRenderGrid(state.sourceProducts.length ? state.sourceProducts : state.products, t("home.noProducts"), { screen: state.currentGridScreen });
  });

  document.getElementById("filterChipsRow")?.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-remove-chip]");
    if (!chip) return;
    removeFilterChip(chip.dataset.removeChip);
  });

  document.getElementById("compareFab")?.addEventListener("click", openCompareDrawer);
  document.getElementById("closeCompare")?.addEventListener("click", closeCompareDrawer);
  document.getElementById("openComparePage")?.addEventListener("click", openComparePage);
  document.getElementById("clearCompare")?.addEventListener("click", () => { clearCompare(); syncCompareUi(); renderComparePage(state.compareProducts, t); });
  document.getElementById("compareDrawerContent")?.addEventListener("click", (e) => {
    const rm = e.target.closest("[data-remove-compare]");
    if (rm) { removeCompareId(rm.dataset.removeCompare); syncCompareUi(); }
  });

  document.getElementById("closePdpFullscreen")?.addEventListener("click", closePdpFullscreen);
  document.getElementById("pdpFullscreen")?.addEventListener("click", (e) => { if (e.target.id === "pdpFullscreen") closePdpFullscreen(); });

  document.getElementById("cartExtras")?.addEventListener("click", handleCartExtrasClick);
}

function bindFilterEvents(container) {
  if (!container) return;
  container.addEventListener("click", (e) => {
    if (e.target.closest("[data-clear-filters]")) {
      clearAllFilters(state);
      renderFilterSidebar(state, t, categoryLabel);
      renderFilterChips(state, t);
      applyAndRenderGrid(state.sourceProducts.length ? state.sourceProducts : state.products, t("home.noProducts"), { screen: state.currentGridScreen });
      return;
    }
    const toggle = e.target.closest(".filter-group-toggle");
    if (toggle) toggle.closest(".filter-group")?.classList.toggle("collapsed");
  });
  container.addEventListener("change", (e) => {
    const f = state.filters;
    if (e.target.matches("[data-filter-brand]")) {
      const val = e.target.dataset.filterBrand;
      f.brands = e.target.checked ? [...new Set([...f.brands, val])] : f.brands.filter((b) => b !== val);
    }
    if (e.target.matches("[data-filter-color]")) {
      const val = e.target.dataset.filterColor;
      f.colors = e.target.checked ? [...new Set([...f.colors, val])] : f.colors.filter((c) => c !== val);
    }
    if (e.target.matches("[data-filter-size]")) {
      const val = e.target.dataset.filterSize;
      f.sizes = e.target.checked ? [...new Set([...f.sizes, val])] : f.sizes.filter((s) => s !== val);
    }
    if (e.target.matches("[data-filter-origin]")) {
      const val = e.target.dataset.filterOrigin;
      f.origin = e.target.checked ? [...new Set([...f.origin, val])] : f.origin.filter((o) => o !== val);
    }
    if (e.target.matches("[data-filter-seller]")) {
      const val = e.target.dataset.filterSeller;
      f.seller = e.target.checked ? [...new Set([...f.seller, val])] : f.seller.filter((s) => s !== val);
    }
    if (e.target.matches("[data-filter-toggle]")) {
      f[e.target.dataset.filterToggle] = e.target.checked;
    }
    if (e.target.matches("[data-filter-rating]")) {
      f.minRating = Number(e.target.value);
    }
    if (e.target.matches("[data-filter-price]")) {
      f.maxPrice = Number(e.target.value);
    }
    persistFilters(state);
    renderFilterChips(state, t);
    if (container.id !== "filterSheetContent") {
      applyAndRenderGrid(state.sourceProducts.length ? state.sourceProducts : state.products, t("home.noProducts"), { screen: state.currentGridScreen });
    }
  });
}

function removeFilterChip(key) {
  const f = state.filters;
  if (key === "onSale") f.onSale = false;
  else if (key === "inStock") f.inStock = false;
  else if (key === "rating") f.minRating = 0;
  else if (key.startsWith("brand:")) f.brands = f.brands.filter((b) => b !== key.slice(6));
  else if (key.startsWith("color:")) f.colors = f.colors.filter((c) => c !== key.slice(6));
  else if (key.startsWith("size:")) f.sizes = f.sizes.filter((s) => s !== key.slice(5));
  persistFilters(state);
  renderFilterSidebar(state, t, categoryLabel);
  renderFilterChips(state, t);
  applyAndRenderGrid(state.sourceProducts.length ? state.sourceProducts : state.products, t("home.noProducts"), { screen: state.currentGridScreen });
}

async function toggleCompareProduct(productId) {
  const result = toggleCompareId(productId);
  if (result.full) {
    showToast(t("compare.full", { max: MAX_COMPARE }), "warning");
    return;
  }
  state.compareIds = result.ids;
  await syncCompareUi();
  showToast(result.added ? t("compare.added") : t("compare.removed"), "success");
}

async function syncCompareUi() {
  state.compareIds = getCompareIds();
  renderCompareFab(state.compareIds.length);
  if (!state.compareIds.length) {
    state.compareProducts = [];
    renderCompareDrawer([], t);
    return;
  }
  const known = state.compareIds.map((id) => findKnownProduct(id)).filter(Boolean);
  const missing = state.compareIds.filter((id) => !known.find((p) => String(p.id) === String(id)));
  if (missing.length) {
    const response = await apiFetch("/api/products/by-ids", {
      method: "POST",
      body: JSON.stringify(missing.map(Number).filter(Boolean)),
      showError: false,
    });
    const fetched = getPageContent(response).map(normalizeProduct);
    state.compareProducts = [...known, ...fetched].slice(0, MAX_COMPARE);
  } else {
    state.compareProducts = known.slice(0, MAX_COMPARE);
  }
  renderCompareDrawer(state.compareProducts, t);
}

function openCompareDrawer() {
  document.getElementById("compareDrawer")?.classList.add("open");
  document.getElementById("compareDrawer")?.setAttribute("aria-hidden", "false");
  lockBody();
}

function closeCompareDrawer() {
  document.getElementById("compareDrawer")?.classList.remove("open");
  document.getElementById("compareDrawer")?.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

function openComparePage() {
  renderComparePage(state.compareProducts, t);
  document.getElementById("compareDialog")?.showModal();
  lockBody();
}

function openBottomSheet(id) {
  const sheet = document.getElementById(id);
  sheet?.classList.add("open");
  sheet?.setAttribute("aria-hidden", "false");
}

function closeBottomSheet(id) {
  document.getElementById(id)?.classList.remove("open");
  document.getElementById(id)?.setAttribute("aria-hidden", "true");
}

function openPdpFullscreen(src) {
  const img = document.getElementById("pdpFullscreenImg");
  const el = document.getElementById("pdpFullscreen");
  if (img && el && src) {
    img.src = src;
    el.classList.add("open");
    el.setAttribute("aria-hidden", "false");
  }
}

function closePdpFullscreen() {
  document.getElementById("pdpFullscreen")?.classList.remove("open");
  document.getElementById("pdpFullscreen")?.setAttribute("aria-hidden", "true");
}

function startFlashCountdown() {
  const tick = () => {
    const el = document.querySelector("#todayDeals .flash-countdown-wrap");
    if (el && state.flashSaleEnd) el.innerHTML = renderFlashCountdown(state.flashSaleEnd);
  };
  tick();
  window.setInterval(tick, 1000);
}

function handleCartExtrasClick(event) {
  if (event.target.closest("[data-apply-coupon]")) {
    const input = document.getElementById("cartCouponInput");
    const code = (input?.value || "").trim().toUpperCase();
    if (code === "BEAUTY10") {
      state.cartCoupon = code;
      state.cartCouponDiscount = Math.round(state.cartTotal * 0.1);
      showToast(t("cart.couponApplied"), "success");
    } else if (code) {
      showToast(t("cart.couponInvalid"), "warning");
    }
    renderCart();
    return;
  }
  const restore = event.target.closest("[data-restore-saved]");
  if (restore) {
    removeSavedForLater(restore.dataset.restoreSaved);
    showToast(t("cart.restored"), "info");
    renderCart();
    return;
  }
  handleProductGridClick(event);
}

async function loadBrandPage(brand) {
  state.selectedBrand = brand;
  const products = state.sourceProducts.length
    ? state.sourceProducts.filter((p) => p.brand === brand)
    : state.products.filter((p) => p.brand === brand);
  let list = products;
  if (!list.length) {
    const response = await apiFetch("/api/products/search", { query: { q: brand, page: 0, size: 24 }, showError: false });
    list = getPageContent(response).map(normalizeProduct).filter((p) => p.brand === brand);
  }
  const content = document.getElementById("brandViewContent");
  if (content) {
    content.innerHTML = renderBrandPage(brand, list, t, list.slice(0, 12).map((p, i) => productCard(p, { screen: "brand", position: i })).join(""));
    initLazyImages(content);
  }
}

function showBrandView() {
  state.currentRoute = "brand";
  els.homeView.hidden = true;
  els.productDetailPage.hidden = true;
  document.getElementById("brandView")?.removeAttribute("hidden");
}

function hideBrandView() {
  document.getElementById("brandView")?.setAttribute("hidden", "");
}

function showHomeView() {
  state.currentRoute = "home";
  els.homeView.hidden = false;
  els.productDetailPage.hidden = true;
  hideBrandView();
  document.title = "BEAUTY SKIN KOREA";
}

function showProductView() {
  state.currentRoute = "product";
  els.homeView.hidden = true;
  els.productDetailPage.hidden = false;
  hideBrandView();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function routeHome() {
  if (window.location.hash && window.location.hash !== "#/" && window.location.hash !== "#") {
    window.location.hash = "#/";
  } else {
    showHomeView();
  }
}

export async function handleRoute() {
  const hash = window.location.hash || "#/";
  const productMatch = hash.match(/^#\/product\/([^/?#]+)/);
  const brandMatch = hash.match(/^#\/brand\/([^/?#]+)/);

  if (productMatch) {
    showProductView();
    await loadProductDetailPage(decodeURIComponent(productMatch[1]));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (brandMatch) {
    showBrandView();
    await loadBrandPage(decodeURIComponent(brandMatch[1]));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  showHomeView();
}

async function renderSearchResults(query) {
  const trimmed = query.trim();
  state.currentSearchQuery = trimmed;
  state.currentGridScreen = trimmed ? "search" : "home";
  if (state.currentRoute === "product") {
    window.location.hash = "#/";
    showHomeView();
  }

  if (!trimmed) {
    state.selectedCategory = "ALL";
    renderCategories();
    els.title.textContent = t("home.popular");
    await loadProducts();
    return;
  }

  els.title.textContent = `"${trimmed}" qidiruvi`;
  els.status.textContent = t("home.loading");
  renderSkeleton(els.grid, 10);
  const response = await apiFetch("/api/products/search", {
    query: { q: trimmed, page: 0, size: CONFIG.defaultPageSize },
    showError: false,
  });
  const products = getPageContent(response).map(normalizeProduct);
  state.products = products;
  syncProductFavorites();
  applyAndRenderGrid(state.products, t("home.noProducts"), { screen: "search" });
  els.status.textContent = "";
}

async function renderCategoryProducts(category) {
  if (state.currentRoute === "product") {
    window.location.hash = "#/";
    showHomeView();
  }
  state.selectedCategory = category;
  state.currentGridScreen = category === "ALL" ? "home" : "category";
  state.currentSearchQuery = "";
  renderCategories();

  if (category === "ALL") {
    els.title.textContent = t("home.popular");
    await loadProducts();
    return;
  }

  els.title.textContent = categoryLabel(category);
  els.status.textContent = t("home.loading");
  renderSkeleton(els.grid, 10);
  const response = await apiFetch("/api/products/category", {
    query: { category, page: 0, size: CONFIG.defaultPageSize },
    showError: false,
  });
  const products = getPageContent(response).map(normalizeProduct);
  state.products = products;
  syncProductFavorites();
  applyAndRenderGrid(state.products, t("home.noProducts"), { screen: "category" });
  els.status.textContent = "";
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

async function openProductDetail(productId) {
  navigateToProduct(productId);
}

async function loadProductDetailPage(productId) {
  showProductView();
  state.currentRoute = "product";
  state.detailLoading = true;
  state.detailError = "";
  state.selectedDetailProduct = null;
  state.recommendedProducts = [];
  state.recommendedSimilar = [];
  state.recommendedOthers = [];
  state.recommendationsError = "";
  renderDetailLoading(true);
  const response = await apiFetch(`/api/products/${productId}`, { showError: true });
  const product = normalizeProduct(response || state.products.find((item) => String(item.id) === String(productId)) || {});
  state.detailLoading = false;

  if (!product.id) {
    state.detailError = state.lastApiError || "Mahsulot topilmadi.";
    renderProductDetailError();
    return;
  }

  product.favorite = state.favoriteIds.has(String(product.id)) || product.favorite;
  state.selectedDetailProduct = product;
  state.selectedVariantId = pickDefaultVariant(product)?.id || null;
  state.selectedQuantity = 1;
  state.pdpGalleryIndex = 0;
  state.pdpActiveTab = "description";
  state.reviewSearchQuery = "";
  state.reviewFilterRating = 0;
  document.title = `${product.name} - BEAUTY SKIN KOREA`;
  addRecentProduct(product.id);
  sendProductView(product.id);
  renderProductDetail(product);
  loadProductReviews(product.id);
  loadRecommendedProducts(product);
}

function renderDetailLoading(pageMode = false) {
  const target = pageMode ? els.productDetailPageContent : els.detailContent;
  target.innerHTML = `
    ${pageMode ? "<div class=\"breadcrumbs\"><button data-route-home type=\"button\">Home</button><span>/</span><span>Loading</span></div>" : `
      <div class="drawer-head">
        <h2>Mahsulot yuklanmoqda</h2>
        <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `}
    <div class="detail-layout">
      <div class="skeleton-card"></div>
      <div>
        <div class="skeleton-card"></div>
      </div>
    </div>
  `;
}

function renderProductDetailError() {
  els.productDetailPageContent.innerHTML = `
    <div class="detail-error-page">
      <strong>${escapeHtml(t("product.notFound"))}</strong>
      <p>${escapeHtml(state.detailError || "Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${escapeHtml(t("product.backToShopping"))}</button>
    </div>
  `;
}

function renderProductDetail(product) {
  const selectedVariant = product.variants.find((variant) => String(variant.id) === String(state.selectedVariantId)) || null;
  const gallery = [...new Set([product.image, ...product.images, ...product.detailImages].filter(Boolean))];
  const galleryIndex = Math.min(state.pdpGalleryIndex || 0, Math.max(0, gallery.length - 1));
  const currentImage = gallery[galleryIndex] || product.image;
  const currentPrice = selectedVariant?.discountPrice ?? selectedVariant?.price ?? product.finalPrice;
  const originalPrice = selectedVariant?.price ?? product.originalPrice;
  const variantStock = selectedVariant?.stock ?? product.stock;
  const isFavorite = state.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
  const isCompared = getCompareIds().includes(String(product.id));
  const pageMode = state.currentRoute === "product";
  const target = pageMode ? els.productDetailPageContent : els.detailContent;
  const lowStock = numberOrZero(variantStock) > 0 && numberOrZero(variantStock) <= 5;
  const deliveryDate = new Date(Date.now() + 3 * 86400000).toLocaleDateString(getCurrentLanguage(), { weekday: "short", month: "short", day: "numeric" });

  target.innerHTML = `
    ${pageMode ? `
      <div class="breadcrumbs">
        <button data-route-home type="button">${escapeHtml(t("product.home") || t("home.all"))}</button>
        <span>/</span>
        <button data-brand="${escapeHtml(product.brand || "")}" type="button">${escapeHtml(product.brand || t("header.catalog"))}</button>
        <span>/</span>
        <button data-category="${escapeHtml(product.category || "ALL")}" type="button">${escapeHtml(product.category ? categoryLabel(product.category) : t("header.catalog"))}</button>
        <span>/</span>
        <span>${escapeHtml(shortText(product.name, 42))}</span>
      </div>
    ` : `
      <div class="drawer-head">
        <h2>${escapeHtml(t("product.viewDetails"))}</h2>
        <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `}
    <div class="pdp-layout">
      <div class="pdp-gallery-wrap">
        <div class="pdp-main-image" data-pdp-zoom>
          <img src="${escapeHtml(currentImage)}" alt="${escapeHtml(product.name)}" id="pdpMainImage" />
        </div>
        ${gallery.length > 1 ? `
          <div class="pdp-thumbs" role="tablist">
            ${gallery.slice(0, 10).map((image, index) => `
              <button class="pdp-thumb ${index === galleryIndex ? "active" : ""}" type="button" data-pdp-thumb="${index}" role="tab" aria-selected="${index === galleryIndex}">
                <img src="${escapeHtml(image)}" alt="" loading="lazy" />
              </button>
            `).join("")}
          </div>
        ` : ""}
        <button class="ghost-button full" type="button" data-pdp-fullscreen style="margin-top:8px">${escapeHtml(t("product.fullscreen"))}</button>
        <div class="media-placeholder">${escapeHtml(t("product.video360Placeholder"))}</div>
      </div>
      <div class="pdp-purchase-card">
        <div class="pdp-badges">
          <span class="pdp-badge pdp-badge--auth">✓ ${escapeHtml(t("product.authentic"))}</span>
          <span class="pdp-badge pdp-badge--official">★ ${escapeHtml(t("product.officialStore"))}</span>
          ${lowStock ? `<span class="pdp-badge pdp-badge--stock-low">${escapeHtml(t("product.lowStock"))}</span>` : ""}
        </div>
        <p class="hint brand-name">${escapeHtml(product.brand || product.category)}</p>
        <h2 class="detail-title">${escapeHtml(product.name)}</h2>
        <div class="pdp-price-block">
          <h3>${formatPrice(currentPrice)}</h3>
          ${originalPrice > currentPrice ? `<p class="old-price">${formatPrice(originalPrice)}</p>` : ""}
        </div>
        <div class="pdp-price-breakdown">
          <div><span>${escapeHtml(t("product.listPrice"))}</span><span>${formatPrice(originalPrice)}</span></div>
          ${product.discountPercent ? `<div><span>${escapeHtml(t("product.discount"))}</span><span>-${product.discountPercent}%</span></div>` : ""}
          <div><strong>${escapeHtml(t("cart.subtotal"))}</strong><strong>${formatPrice(currentPrice)}</strong></div>
          <p class="hint">${escapeHtml(t("product.installmentPlaceholder"))}</p>
        </div>
        <p class="hint">${renderStars(product.ratingAvg)} ${product.ratingAvg.toFixed(1)} (${product.reviewCount}) · ${escapeHtml(t("product.sold", { count: product.soldCount }))}</p>
        <div class="pdp-actions-row" style="margin:12px 0">
          <button class="secondary-button detail-favorite ${isFavorite ? "active" : ""}" data-detail-favorite="${escapeHtml(product.id)}" type="button">${escapeHtml(isFavorite ? t("product.saved") : t("product.save"))}</button>
          <button class="secondary-button ${isCompared ? "active" : ""}" data-compare="${escapeHtml(product.id)}" type="button">${escapeHtml(t("product.compare"))}</button>
        </div>
        ${product.variants.length ? renderVariantSelectors(product) : `<p class="hint">${escapeHtml(t("product.variantUnavailable"))}</p>`}
        <p class="hint">${numberOrZero(variantStock) > 0 ? escapeHtml(t("product.stock", { count: variantStock })) : escapeHtml(t("product.outOfStock"))}</p>
        <div class="quantity-row">
          <button class="secondary-button" data-qty="minus" type="button" aria-label="Decrease">-</button>
          <input id="quantityInput" value="${state.selectedQuantity}" inputmode="numeric" aria-label="${escapeHtml(t("product.quantity"))}" />
          <button class="secondary-button" data-qty="plus" type="button" aria-label="Increase">+</button>
        </div>
        <div class="pdp-shipping-estimate">
          <strong>${escapeHtml(t("product.estimatedDelivery"))}</strong>
          <p class="pdp-delivery-countdown">🚚 ${escapeHtml(deliveryDate)}</p>
          <p class="hint">${escapeHtml(t("product.delivery"))}</p>
        </div>
        <div class="cart-coupon" style="margin-top:12px">
          <input type="text" placeholder="${escapeHtml(t("cart.couponPlaceholder"))}" data-pdp-coupon />
          <button class="secondary-button" type="button" data-pdp-apply-coupon>${escapeHtml(t("cart.applyCoupon"))}</button>
        </div>
        <div class="pdp-actions">
          <button class="primary-button full" data-detail-add type="button">${escapeHtml(t("product.addToCartFull"))}</button>
        </div>
        <div class="delivery-info">
          <span>${escapeHtml(t("product.secure"))}</span>
          <span>${escapeHtml(t("product.original"))}</span>
        </div>
      </div>
    </div>
    <div class="pdp-tabs">
      <nav class="pdp-tab-nav" role="tablist">
        <button class="pdp-tab-btn ${state.pdpActiveTab === "description" ? "active" : ""}" data-pdp-tab="description" type="button" role="tab">${escapeHtml(t("product.description"))}</button>
        <button class="pdp-tab-btn ${state.pdpActiveTab === "details" ? "active" : ""}" data-pdp-tab="details" type="button" role="tab">${escapeHtml(t("product.details"))}</button>
        <button class="pdp-tab-btn ${state.pdpActiveTab === "reviews" ? "active" : ""}" data-pdp-tab="reviews" type="button" role="tab">${escapeHtml(t("product.reviews"))}</button>
      </nav>
      <div class="pdp-tab-panel" ${state.pdpActiveTab === "description" ? "" : "hidden"} data-pdp-panel="description">
        <p class="hint">${escapeHtml(product.description || t("common.unavailable"))}</p>
        ${product.detailImages.length ? `<div class="detail-image-stack">${product.detailImages.map((image) => `<img src="${escapeHtml(image)}" alt="" loading="lazy" class="img-loading" />`).join("")}</div>` : ""}
      </div>
      <div class="pdp-tab-panel" ${state.pdpActiveTab === "details" ? "" : "hidden"} data-pdp-panel="details">
        <p class="hint">${escapeHtml(t("home.categories"))}: ${escapeHtml(product.category ? categoryLabel(product.category) : "-")}</p>
        <p class="hint">${escapeHtml(t("filter.brand"))}: ${escapeHtml(product.brand || "-")}</p>
      </div>
      <div class="pdp-tab-panel reviews-premium" ${state.pdpActiveTab === "reviews" ? "" : "hidden"} data-pdp-panel="reviews">
        ${renderProductReviews(product.id)}
      </div>
    </div>
    ${pageMode ? renderRecommendations() : ""}
    ${pageMode ? renderFrequentlyBought(product) : ""}
    ${pageMode ? renderRecentlyViewedStrip() : ""}
    ${pageMode ? `
      <div class="mobile-buy-bar">
        <strong>${formatPrice(currentPrice)}</strong>
        <button class="primary-button" data-detail-add type="button">${escapeHtml(t("product.addToCart"))}</button>
      </div>
    ` : ""}
  `;
  observeProductImpressions(target);
  initLazyImages(target);
  initPdpGallerySwipe(target);
}

function renderVariantSelectors(product) {
  const colors = [];
  const sizes = [];
  product.variants.forEach((v) => {
    const label = String(v.label || "");
    const parts = label.split(/[\/,\-]/).map((p) => p.trim()).filter(Boolean);
    if (parts[0]) colors.push(parts[0]);
    if (parts[1]) sizes.push(parts[1]);
  });
  const uniqueColors = [...new Set(colors)];
  const uniqueSizes = [...new Set(sizes)];

  if (uniqueColors.length > 1 || uniqueSizes.length > 1) {
    return `
      ${uniqueColors.length ? `<div class="pdp-variant-section"><p class="pdp-variant-label">${escapeHtml(t("filter.color"))}</p><div class="color-swatches">${uniqueColors.map((c) => `<button class="color-swatch" type="button" data-variant-color="${escapeHtml(c)}">${escapeHtml(c)}</button>`).join("")}</div></div>` : ""}
      ${uniqueSizes.length ? `<div class="pdp-variant-section"><p class="pdp-variant-label">${escapeHtml(t("filter.size"))}</p><div class="size-options">${product.variants.map((v) => {
        const active = String(v.id) === String(state.selectedVariantId);
        const disabled = Number(v.stock || 0) <= 0;
        return `<button class="size-option ${active ? "active" : ""}" data-variant="${escapeHtml(v.id)}" type="button" ${disabled ? "disabled" : ""}>${escapeHtml(v.label || v.id)}</button>`;
      }).join("")}</div></div>` : ""}
    `;
  }
  return renderVariantButtons(product);
}

function renderPdpProductStrip(title, products, screen) {
  if (!products.length) return "";
  return `
    <section class="recommended-section app-feed-block app-feed-rail">
      <div class="app-section-head">
        <h2>${escapeHtml(title)}</h2>
      </div>
      <div class="product-grid app-rail-grid">
        ${products.map((product, index) => productCard(product, { screen, position: index })).join("")}
      </div>
    </section>
  `;
}

function renderFrequentlyBought(product) {
  const others = (state.recommendedOthers || state.recommendedProducts || []).slice(0, 3);
  if (!others.length) return "";
  return renderPdpProductStrip(t("product.frequentlyBought"), others, "fbt");
}

function renderRecentlyViewedStrip() {
  const ids = getRecentProductIds().filter((id) => String(id) !== String(state.selectedDetailProduct?.id));
  if (!ids.length || !state.recentlyViewed.length) return "";
  return renderPdpProductStrip(
    t("home.recentlyViewed"),
    state.recentlyViewed.slice(0, 6),
    "recent",
  );
}

function initPdpGallerySwipe(container) {
  const main = container.querySelector(".pdp-main-image");
  if (!main || !("ontouchstart" in window)) return;
  let startX = 0;
  main.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  main.addEventListener("touchend", (e) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) < 40) return;
    const gallery = [...new Set([state.selectedDetailProduct?.image, ...(state.selectedDetailProduct?.images || []), ...(state.selectedDetailProduct?.detailImages || [])].filter(Boolean))];
    state.pdpGalleryIndex = Math.max(0, Math.min(gallery.length - 1, (state.pdpGalleryIndex || 0) + (diff < 0 ? 1 : -1)));
    renderProductDetail(state.selectedDetailProduct);
  }, { passive: true });
}

async function loadRecommendedProducts(product) {
  state.recommendationsLoading = true;
  state.recommendationsError = "";
  renderProductDetail(product);

  const recommendResponse = await apiFetch(`/api/products/${product.id}/recommend`, {
    query: { similar: 12, others: 24, seed: state.sessionId },
    showError: false,
  });

  const similar = getPageContent(recommendResponse?.similar || [])
    .map(normalizeProduct)
    .filter((item) => String(item.id) !== String(product.id));
  const others = getPageContent(recommendResponse?.others || [])
    .map(normalizeProduct)
    .filter((item) => String(item.id) !== String(product.id));

  if (similar.length || others.length) {
    state.recommendationsLoading = false;
    state.recommendedProducts = [];
    state.recommendedSimilar = similar.slice(0, 12);
    state.recommendedOthers = others.slice(0, 12);
    renderProductDetail(state.selectedDetailProduct);
    return;
  }

  let response = null;
  if (product.category) {
    response = await apiFetch("/api/products/category", {
      query: { category: product.category, page: 0, size: 12 },
      showError: false,
    });
  }

  let products = getPageContent(response).map(normalizeProduct).filter((item) => String(item.id) !== String(product.id));

  if (!products.length) {
    response = await apiFetch("/api/products", {
      query: { page: 0, size: 12 },
      showError: false,
    });
    products = getPageContent(response).map(normalizeProduct).filter((item) => String(item.id) !== String(product.id));
  }

  state.recommendationsLoading = false;
  if (!products.length && response === null) {
    state.recommendationsError = state.lastApiError || "Recommendations could not be loaded.";
  }
  state.recommendedProducts = products.slice(0, 12).map((item) => ({
    ...item,
    favorite: state.favoriteIds.has(String(item.id)) || item.favorite,
  }));
  state.recommendedSimilar = [];
  state.recommendedOthers = [];
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === String(product.id)) {
    renderProductDetail(state.selectedDetailProduct);
  }
}

function renderRecommendations() {
  if (state.recommendationsLoading) {
    return `
      <section class="recommended-section app-feed-block app-feed-rail">
        <div class="app-section-head">
          <h2>${escapeHtml(t("home.recommended"))}</h2>
        </div>
        <div class="product-grid app-rail-grid">
          <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
        </div>
      </section>
    `;
  }

  if (state.recommendationsError) {
    return `
      <section class="recommended-section app-feed-block app-feed-rail">
        <div class="detail-error-page compact">
          <strong>Recommendations unavailable</strong>
          <p>${escapeHtml(state.recommendationsError)}</p>
        </div>
      </section>
    `;
  }

  const apiSections = [
    [t("home.similar"), state.recommendedSimilar || [], "recommendations-similar"],
    [t("home.others"), state.recommendedOthers || [], "recommendations-others"],
  ].filter(([, products]) => products.length);

  if (apiSections.length) {
    return apiSections.map(([title, products, screen]) => renderPdpProductStrip(title, products, screen)).join("");
  }

  if (!state.recommendedProducts.length) return "";

  return renderPdpProductStrip(t("home.recommended"), state.recommendedProducts, "recommendations");
}

async function loadProductReviews(productId) {
  if (!productId) return;
  const key = String(productId);
  state.productReviewsLoading[key] = true;
  state.productReviewsError[key] = "";
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === key) {
    renderProductDetail(state.selectedDetailProduct);
  }

  const response = await apiFetch(`/api/reviews/product/${productId}`, { showError: false });
  state.productReviewsLoading[key] = false;

  if (response === null) {
    state.productReviewsError[key] = state.lastApiError || "Reviews could not be loaded.";
  } else {
    state.productReviewsByProductId[key] = getPageContent(response).map(normalizeReview);
  }

  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === key) {
    renderProductDetail(state.selectedDetailProduct);
  }
}

function renderProductReviews(productId) {
  const key = String(productId);
  let reviews = [...(state.productReviewsByProductId[key] || [])];
  const loading = state.productReviewsLoading[key];
  const error = state.productReviewsError[key];

  if (loading) {
    return "<div class=\"reviews-loading\"><div class=\"skeleton-card\"></div><div class=\"skeleton-card\"></div></div>";
  }

  if (error) {
    return `
      <div class="reviews-inline-error">
        <p>${escapeHtml(error)}</p>
        <button class="secondary-button" data-reviews-retry="${escapeHtml(productId)}" type="button">${escapeHtml(t("common.tryAgain"))}</button>
      </div>
    `;
  }

  if (state.reviewSearchQuery) {
    const q = state.reviewSearchQuery.toLowerCase();
    reviews = reviews.filter((r) => String(r.content || "").toLowerCase().includes(q));
  }
  if (state.reviewFilterRating > 0) {
    reviews = reviews.filter((r) => numberOrZero(r.rating) >= state.reviewFilterRating);
  }
  if (state.reviewSort === "helpful") {
    reviews.sort((a, b) => (state.reviewHelpfulIds.has(String(b.id)) ? 1 : 0) - (state.reviewHelpfulIds.has(String(a.id)) ? 1 : 0));
  } else if (state.reviewSort === "rating-high") {
    reviews.sort((a, b) => numberOrZero(b.rating) - numberOrZero(a.rating));
  } else if (state.reviewSort === "rating-low") {
    reviews.sort((a, b) => numberOrZero(a.rating) - numberOrZero(b.rating));
  }

  if (!reviews.length && !state.productReviewsByProductId[key]?.length) {
    return `<div class="reviews-empty"><strong>${escapeHtml(t("reviews.none"))}</strong></div>`;
  }

  const allReviews = state.productReviewsByProductId[key] || [];
  const stats = reviewStats(allReviews);
  const distribution = [5, 4, 3, 2, 1].map((star) => {
    const count = allReviews.filter((r) => Math.round(numberOrZero(r.rating)) === star).length;
    return { star, count, pct: allReviews.length ? (count / allReviews.length) * 100 : 0 };
  });

  return `
    <div class="reviews-summary-grid">
      <div class="reviews-avg">
        <strong>${stats.average.toFixed(1)}</strong>
        ${renderStars(stats.average)}
        <p class="hint">${stats.count} ${escapeHtml(t("product.reviews"))}</p>
      </div>
      <div class="rating-bars">
        ${distribution.map((d) => `
          <div class="rating-bar-row">
            <span>${d.star}★</span>
            <div class="rating-bar-track"><div class="rating-bar-fill" style="width:${d.pct}%"></div></div>
            <span>${d.count}</span>
          </div>
        `).join("")}
      </div>
    </div>
    <div class="reviews-toolbar">
      <input type="search" placeholder="${escapeHtml(t("reviews.search"))}" value="${escapeHtml(state.reviewSearchQuery || "")}" data-review-search />
      <select data-review-sort>
        <option value="newest" ${state.reviewSort === "newest" ? "selected" : ""}>${escapeHtml(t("reviews.sortNewest"))}</option>
        <option value="rating-high" ${state.reviewSort === "rating-high" ? "selected" : ""}>${escapeHtml(t("reviews.sortRatingHigh"))}</option>
        <option value="rating-low" ${state.reviewSort === "rating-low" ? "selected" : ""}>${escapeHtml(t("reviews.sortRatingLow"))}</option>
        <option value="helpful" ${state.reviewSort === "helpful" ? "selected" : ""}>${escapeHtml(t("reviews.sortHelpful"))}</option>
      </select>
      <select data-review-filter-rating>
        <option value="0">${escapeHtml(t("reviews.allRatings"))}</option>
        ${[5, 4, 3, 2, 1].map((r) => `<option value="${r}" ${state.reviewFilterRating === r ? "selected" : ""}>${r}★+</option>`).join("")}
      </select>
    </div>
    <div class="review-list">
      ${reviews.length ? reviews.map(renderReviewCard).join("") : `<p class="hint">${escapeHtml(t("search.noResults"))}</p>`}
    </div>
  `;
}

function renderReviewCard(review) {
  const helpful = state.reviewHelpfulIds.has(String(review.id));
  const verified = Boolean(review.orderId);
  return `
    <article class="review-card-premium">
      <div class="review-head">
        <div>
          <strong>${escapeHtml(review.userName)}</strong>
          ${verified ? `<span class="review-verified">✓ ${escapeHtml(t("reviews.verified"))}</span>` : ""}
          <p class="hint">${formatDateTime(review.createdAt)}</p>
        </div>
        ${renderStars(review.rating)}
      </div>
      <p>${escapeHtml(review.content || t("reviews.noText"))}</p>
      ${review.imageUrls.length ? `<div class="review-media-grid">${review.imageUrls.slice(0, 5).map((url) => `<img src="${escapeHtml(url)}" alt="" loading="lazy" />`).join("")}</div>` : ""}
      <button class="review-helpful ${helpful ? "active" : ""}" data-review-helpful="${escapeHtml(review.id)}" type="button">
        👍 ${escapeHtml(t("reviews.helpful"))}${helpful ? " ✓" : ""}
      </button>
    </article>
  `;
}

function renderVariantButtons(product) {
  return `
    <div class="variant-options">
      ${product.variants.map((variant) => {
        const active = String(variant.id) === String(state.selectedVariantId);
        const disabled = Number(variant.stock || 0) <= 0;
        return `
          <button class="variant-option ${active ? "active" : ""}" data-variant="${escapeHtml(variant.id)}" ${disabled ? "disabled" : ""} type="button">
            ${escapeHtml(variant.label || `Variant #${variant.id}`)}
            ${variant.price ? ` · ${escapeHtml(formatPrice(variant.discountPrice ?? variant.price))}` : ""}
          </button>
        `;
      }).join("")}
    </div>
  `;
}

function pickDefaultVariant(product) {
  return product.variants.find((variant) => Number(variant.stock || 0) > 0) || product.variants[0] || null;
}

/* ================= CART / ORDER RENDERERS ================= */

async function addToCart(productId, variantId, quantity) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  let selectedVariantId = variantId;
  const safeQuantity = Math.max(1, Number(quantity || 1));

  if (!selectedVariantId) {
    const response = await apiFetch(`/api/products/${productId}`, { showError: true });
    const product = normalizeProduct(response || {});
    const inStockVariants = product.variants.filter((variant) => Number(variant.stock || 0) > 0);
    if (inStockVariants.length === 1) {
      selectedVariantId = inStockVariants[0].id;
    } else if (product.variants.length > 1) {
      navigateToProduct(product.id);
      return;
    } else {
      selectedVariantId = pickDefaultVariant(product)?.id;
    }
  }

  if (!selectedVariantId) {
    showToast(t("product.variantUnavailable"), "warning");
    return;
  }

  state.addingProductIds.add(String(productId));
  renderAddToCartLoading(true);
  const result = await apiFetch("/api/cart", {
    method: "POST",
    body: JSON.stringify({ variantId: Number(selectedVariantId), quantity: safeQuantity }),
    requireAuth: true,
  });
  state.addingProductIds.delete(String(productId));
  renderAddToCartLoading(false);

  if (result !== null) {
    const card = document.querySelector(`[data-product="${productId}"] .product-image`);
    if (card) flyToCart(card.src, card.getBoundingClientRect());
    showToast(t("cart.added"), "success");
    await loadCart();
  }
}

function renderAddToCartLoading() {
  const detailButtons = document.querySelectorAll("[data-detail-add]");
  detailButtons.forEach((detailButton) => {
    const loading = state.addingProductIds.has(String(state.selectedDetailProduct?.id));
    detailButton.disabled = loading;
    detailButton.textContent = loading ? t("product.adding") : (detailButton.closest(".mobile-buy-bar") ? t("product.addToCart") : t("product.addToCartFull"));
  });
  if (state.products.length) {
    renderProductList(els.grid, state.products, t("home.noProducts"), { screen: state.currentGridScreen });
  }
}

async function loadCart() {
  if (!isLoggedIn()) {
    clearCartState();
    renderCart();
    return;
  }

  state.cartLoading = true;
  state.cartError = "";
  renderCart();
  const response = await apiFetch("/api/cart", { requireAuth: true, showError: false });
  state.cartLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired") || state.lastApiError === "Please login to continue") {
      clearCartState();
      return;
    }
    state.cartError = state.lastApiError || "Cart could not be loaded.";
    renderCart();
    return;
  }

  setCartItems(getPageContent(response).map(normalizeCartItem));
  renderCart();
}

function getCartSelectedIds() {
  if (!state.cartSelectedIds) state.cartSelectedIds = new Set();
  return state.cartSelectedIds;
}

function syncCartSelection() {
  const ids = getCartSelectedIds();
  const itemIds = state.cartItems.map((item) => String(item.id));
  const known = state.cartKnownItemIds || new Set();

  [...ids].forEach((id) => {
    if (!itemIds.includes(id)) ids.delete(id);
  });

  itemIds.forEach((id) => {
    if (!known.has(id)) ids.add(id);
  });

  if (itemIds.length && !ids.size && !known.size) {
    itemIds.forEach((id) => ids.add(id));
  }

  state.cartKnownItemIds = new Set(itemIds);
}

function applyCartCheckboxUi() {
  const selectAll = els.cartItems?.querySelector("[data-cart-select-all]");
  if (!selectAll) return;

  const selectedCount = getSelectedCartItems().length;
  const totalCount = state.cartItems.length;
  const allSelected = totalCount > 0 && selectedCount === totalCount;
  const someSelected = selectedCount > 0 && selectedCount < totalCount;

  selectAll.checked = allSelected;
  selectAll.indeterminate = someSelected;

  const ui = selectAll.closest(".app-cart-check")?.querySelector(".app-cart-check-ui")
    || selectAll.nextElementSibling;
  if (ui?.classList.contains("app-cart-check-ui")) {
    ui.classList.toggle("is-indeterminate", someSelected);
    ui.classList.toggle("is-checked", allSelected);
  }
}

function getSelectedCartItems() {
  syncCartSelection();
  const ids = getCartSelectedIds();
  return state.cartItems.filter((item) => ids.has(String(item.id)));
}

function getCartTotals() {
  const items = getSelectedCartItems();
  const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
  const discount = items.reduce((sum, item) => {
    const original = numberOrZero(item.product?.originalPrice);
    if (original > item.unitPrice) return sum + (original - item.unitPrice) * item.quantity;
    return sum;
  }, 0);
  const deliveryFee = !items.length || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  const couponDiscount = state.cartCouponDiscount || 0;
  const total = Math.max(0, subtotal + deliveryFee - couponDiscount);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { items, subtotal, discount, deliveryFee, couponDiscount, total, itemCount, uniqueCount: items.length };
}

function renderCartItemRow(item) {
  const selected = getCartSelectedIds().has(String(item.id));
  const product = item.product || {};
  const image = item.image || product.image || CONFIG.placeholderImage;
  const originalLine = numberOrZero(product.originalPrice) * item.quantity;
  const hasDiscount = product.originalPrice > item.unitPrice;
  const variantText = [item.variantLabel, product.brand ? `(${product.brand})` : ""].filter(Boolean).join(" ");
  const loading = state.cartUpdatingIds.has(String(item.id));

  return `
    <article class="app-cart-item ${loading ? "loading" : ""}">
      <label class="app-cart-check" title="${escapeHtml(t("cart.selectItem"))}">
        <input
          type="checkbox"
          data-cart-item-check="${escapeHtml(item.id)}"
          ${selected ? "checked" : ""}
          aria-label="${escapeHtml(t("cart.selectItem"))}: ${escapeHtml(item.name)}"
        />
        <span class="app-cart-check-ui ${selected ? "is-checked" : ""}" aria-hidden="true"></span>
      </label>
      <div class="app-cart-item-body">
        <button class="app-cart-item-remove" data-remove="${escapeHtml(item.id)}" type="button" aria-label="${escapeHtml(t("cart.remove"))}">×</button>
        <div class="app-cart-item-main">
          <img src="${escapeHtml(image)}" alt="${escapeHtml(item.name)}" loading="eager" decoding="async" class="app-cart-item-image" />
          <div class="app-cart-item-info">
            <h3>${escapeHtml(item.name)}</h3>
            ${variantText ? `<p class="app-cart-variant">${escapeHtml(variantText)}</p>` : ""}
            <p class="app-cart-ship">${escapeHtml(t("cart.shipsToday"))}</p>
          </div>
        </div>
        <div class="app-cart-item-foot">
          <div class="cart-stepper app-cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${escapeHtml(item.id)}" ${item.quantity <= 1 ? "disabled" : ""} type="button" aria-label="Decrease">-</button>
            <span aria-live="polite">${item.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${escapeHtml(item.id)}" type="button" aria-label="Increase">+</button>
          </div>
          <div class="app-cart-prices">
            ${hasDiscount ? `<span class="old-price">${formatPrice(originalLine)}</span>` : ""}
            <strong>${formatPrice(item.lineTotal)}</strong>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderCartStickyProgress(subtotal) {
  const progressEl = document.getElementById("cartStickyProgress");
  if (!progressEl) return;
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  progressEl.innerHTML = subtotal >= FREE_SHIPPING_THRESHOLD ? "" : `
    <div class="app-cart-free-banner">
      <span>${escapeHtml(t("cart.freeToHome"))}</span>
      <div class="app-cart-free-bar"><div style="width:${progress}%"></div></div>
      <span class="hint">${escapeHtml(t("cart.freeShippingRemaining", { amount: formatPrice(remaining) }))}</span>
    </div>
  `;
}

function renderCart() {
  syncCartSelection();
  const totals = getCartTotals();
  els.cartCount.textContent = state.cartCount;
  els.cartSummary.textContent = t("orders.items", { count: totals.itemCount });
  els.cartTotal.textContent = formatPrice(totals.subtotal);

  if (state.cartLoading) {
    els.cartItems.innerHTML = "<div class=\"cart-loading app-cart-loading\"><div class=\"skeleton-card\"></div><div class=\"skeleton-card\"></div></div>";
    els.checkoutButton.disabled = true;
    document.getElementById("cartExtras").innerHTML = "";
    renderCartStickyProgress(0);
    return;
  }

  if (state.cartError) {
    els.cartItems.innerHTML = `
      <div class="cart-empty app-cart-empty">
        <strong>${escapeHtml(t("cart.unavailable"))}</strong>
        <p>${escapeHtml(state.cartError)}</p>
        <button class="secondary-button" data-cart-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
      </div>
    `;
    els.checkoutButton.disabled = true;
    document.getElementById("cartExtras").innerHTML = "";
    renderCartStickyProgress(0);
    return;
  }

  els.checkoutButton.disabled = !totals.items.length;

  const recommendedHtml = state.products.slice(0, 8).map((product, index) => productCard(product, { screen: "cart-cross", position: index })).join("");
  const recentHtml = (state.recentlyViewed || []).slice(0, 6).map((product, index) => productCard(product, { screen: "cart-recent", position: index })).join("");
  renderCartExtras(state, t, { recommendedHtml, recentHtml, subtotal: totals.subtotal });

  if (!state.cartItems.length) {
    els.cartItems.innerHTML = `
      <div class="cart-empty app-cart-empty">
        <strong>${escapeHtml(t("cart.empty"))}</strong>
        <p>${escapeHtml(t("cart.emptyHint"))}</p>
        <button class="primary-button" data-start-shopping type="button">${escapeHtml(t("home.startShopping"))}</button>
      </div>
    `;
    renderCartStickyProgress(0);
    return;
  }

  const selectedCount = totals.uniqueCount;
  const totalCount = state.cartItems.length;
  const allSelected = totalCount > 0 && selectedCount === totalCount;
  const someSelected = selectedCount > 0 && selectedCount < totalCount;

  els.cartItems.innerHTML = `
    <div class="app-cart-delivery-card">
      <strong>${escapeHtml(t("cart.deliveryCourier"))}</strong>
      <span>${escapeHtml(t("cart.deliveryEta"))}</span>
    </div>
    <div class="app-cart-toolbar">
      <label class="app-cart-select-all">
        <span class="app-cart-check app-cart-check--toolbar">
          <input
            type="checkbox"
            data-cart-select-all
            ${allSelected ? "checked" : ""}
            aria-label="${escapeHtml(t("cart.selectAll", { selected: selectedCount, total: totalCount }))}"
          />
          <span class="app-cart-check-ui ${allSelected ? "is-checked" : ""} ${someSelected ? "is-indeterminate" : ""}" aria-hidden="true"></span>
        </span>
        <span class="app-cart-select-all-text">${escapeHtml(t("cart.selectAll", { selected: selectedCount, total: totalCount }))}</span>
      </label>
      <button class="app-cart-delete-selected" data-cart-delete-selected type="button" ${selectedCount ? "" : "disabled"}>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        ${escapeHtml(t("cart.deleteSelected"))}
      </button>
    </div>
    <div class="app-cart-items">
      ${state.cartItems.map((item) => renderCartItemRow(item)).join("")}
    </div>
    <div class="app-cart-order-card">
      <h3>${escapeHtml(t("cart.yourOrder"))}</h3>
      <div class="app-cart-order-lines">
        <div class="app-cart-order-line">
          <span>${escapeHtml(t("cart.goodsCount", { count: totals.itemCount }))}</span>
        </div>
        ${totals.discount > 0 ? `
          <div class="app-cart-order-line app-cart-order-discount">
            <span>${escapeHtml(t("cart.discount"))}</span>
            <span>-${formatPrice(totals.discount)}</span>
          </div>
        ` : ""}
        <div class="app-cart-order-line">
          <span>${escapeHtml(t("cart.deliveryCost"))}</span>
          <span>${totals.deliveryFee ? formatPrice(totals.deliveryFee) : escapeHtml(t("cart.freeDelivery"))}</span>
        </div>
        <div class="app-cart-order-line">
          <span>${escapeHtml(t("cart.products"))}</span>
          <strong>${formatPrice(totals.subtotal)}</strong>
        </div>
      </div>
      <div class="app-cart-order-total">
        <span>${escapeHtml(t("common.total"))}</span>
        <strong>${formatPrice(totals.total)}</strong>
      </div>
    </div>
  `;

  applyCartCheckboxUi();
  renderCartStickyProgress(totals.subtotal);
  initLazyImages(els.cartItems);
  initLazyImages(document.getElementById("cartExtras"));
}

async function removeSelectedCartItems() {
  const items = getSelectedCartItems();
  if (!items.length) return;
  items.forEach((item) => state.cartUpdatingIds.add(String(item.id)));
  renderCart();
  for (const item of items) {
    await apiFetch(`/api/cart/${item.id}`, { method: "DELETE", requireAuth: true });
    state.cartUpdatingIds.delete(String(item.id));
    getCartSelectedIds().delete(String(item.id));
  }
  showToast(t("cart.itemRemoved"), "success");
  await loadCart();
}

async function removeCartItem(cartItemId) {
  state.cartUpdatingIds.add(String(cartItemId));
  renderCart();
  const result = await apiFetch(`/api/cart/${cartItemId}`, {
    method: "DELETE",
    requireAuth: true,
  });
  state.cartUpdatingIds.delete(String(cartItemId));

  if (result !== null) {
    showToast(t("cart.itemRemoved"), "success");
    await loadCart();
  } else {
    renderCart();
  }
}

async function updateCartQuantity(cartItemId, quantity) {
  const nextQuantity = Math.max(1, Number(quantity || 1));
  state.cartUpdatingIds.add(String(cartItemId));
  renderCart();
  const result = await apiFetch(`/api/cart/${cartItemId}`, {
    method: "PUT",
    requireAuth: true,
    body: JSON.stringify({ quantity: nextQuantity }),
  });
  state.cartUpdatingIds.delete(String(cartItemId));

  if (result !== null) {
    showToast(t("cart.quantityUpdated"), "success");
    await loadCart();
  } else {
    renderCart();
  }
}

async function prepareCheckout() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  await loadCart();
  if (!state.cartItems.length) {
    showToast("Your cart is empty", "warning");
    return;
  }

  state.orderSuccess = null;
  state.checkoutError = "";
  state.checkoutStep = 1;
  state.checkoutLoading = true;
  renderCheckout();
  els.checkoutDialog.showModal();
  lockBody();
  await Promise.all([loadReceivers(), loadAddresses()]);
  state.checkoutLoading = false;
  renderCheckout();
}

async function submitCheckout(event) {
  event.preventDefault();
  await placeOrder();
}

async function loadReceivers(selectId) {
  const response = await apiFetch("/api/receivers", { requireAuth: true, showError: false });
  if (response === null) {
    state.checkoutError = state.lastApiError || "Receivers could not be loaded.";
    return;
  }
  state.receivers = getPageContent(response);
  state.selectedReceiverId = selectId || state.selectedReceiverId || state.receivers[0]?.id || null;
  if (!state.receivers.some((receiver) => String(receiver.id) === String(state.selectedReceiverId))) {
    state.selectedReceiverId = state.receivers[0]?.id || null;
  }
}

async function loadAddresses(selectId) {
  const response = await apiFetch("/api/addresses", { requireAuth: true, showError: false });
  if (response === null) {
    state.checkoutError = state.lastApiError || "Addresses could not be loaded.";
    return;
  }
  state.addresses = getPageContent(response);
  state.selectedAddressId = selectId || state.selectedAddressId || state.addresses[0]?.id || null;
  if (!state.addresses.some((address) => String(address.id) === String(state.selectedAddressId))) {
    state.selectedAddressId = state.addresses[0]?.id || null;
  }
}

function renderCheckout() {
  if (state.checkoutLoading) {
    els.checkoutContent.innerHTML = `
      <div class="checkout-layout">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.orderSuccess) {
    renderOrderSuccess();
    return;
  }

  const selectedReceiver = state.receivers.find((receiver) => String(receiver.id) === String(state.selectedReceiverId));
  const selectedAddress = state.addresses.find((address) => String(address.id) === String(state.selectedAddressId));

  const discount = state.cartCouponDiscount || 0;
  const total = Math.max(0, state.cartTotal - discount);

  els.checkoutContent.innerHTML = `
    ${renderCheckoutStepper(state.checkoutStep, t)}
    <div class="checkout-layout checkout-step-panel">
      ${state.checkoutError ? `<div class="checkout-error">${escapeHtml(state.checkoutError)}</div>` : ""}
      ${state.checkoutStep === 1 ? `
        <section class="checkout-step">
          <h3>${escapeHtml(t("checkout.stepShipping"))}</h3>
          ${renderReceiverList()}
          ${renderReceiverForm()}
        </section>
      ` : ""}
      ${state.checkoutStep === 2 ? `
        <section class="checkout-step">
          <h3>${escapeHtml(t("checkout.stepAddress"))}</h3>
          ${renderAddressList()}
          ${renderAddressForm()}
        </section>
      ` : ""}
      ${state.checkoutStep === 3 ? `
        <section class="checkout-step">
          <h3>${escapeHtml(t("checkout.stepPayment"))}</h3>
          <p class="hint">${escapeHtml(t("trust.secure"))}</p>
          <div class="delivery-info"><span>💳 ${escapeHtml(t("checkout.paymentPlaceholder"))}</span></div>
        </section>
      ` : ""}
      ${state.checkoutStep === 4 ? `
        <section class="checkout-step">
          <h3>${escapeHtml(t("checkout.stepReview"))}</h3>
          ${renderOrderSummary(selectedReceiver, selectedAddress)}
        </section>
      ` : ""}
      <aside class="order-summary">
        <h3>${escapeHtml(t("checkout.orderSummary"))}</h3>
        ${renderOrderSummary(selectedReceiver, selectedAddress)}
        ${discount ? `<p class="hint">${escapeHtml(t("cart.couponApplied"))}: -${formatPrice(discount)}</p>` : ""}
      </aside>
    </div>
    <div class="checkout-nav">
      ${state.checkoutStep > 1 ? `<button class="secondary-button" type="button" data-checkout-prev>${escapeHtml(t("checkout.back"))}</button>` : "<span></span>"}
      ${state.checkoutStep < 4
    ? `<button class="primary-button" type="button" data-checkout-next>${escapeHtml(t("checkout.continue"))}</button>`
    : `<button class="primary-button" type="button" data-place-order ${state.orderSubmitting ? "disabled" : ""}>${escapeHtml(state.orderSubmitting ? t("checkout.placing") : t("checkout.placeOrder"))}</button>`}
    </div>
  `;
}

function renderReceiverList() {
  if (!state.receivers.length) {
    return "<div class=\"checkout-empty\">No receivers yet. Add one below.</div>";
  }

  return `<div class="selectable-list">${state.receivers.map((receiver) => `
    <article class="selectable-card ${String(receiver.id) === String(state.selectedReceiverId) ? "selected" : ""}" data-select-receiver="${escapeHtml(receiver.id)}">
      <div>
        <strong>${escapeHtml(receiver.fullName || "")}</strong>
        <p class="hint">${escapeHtml(receiver.phone || "")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${escapeHtml(receiver.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`;
}

function renderReceiverForm() {
  return `
    <form class="checkout-add-form" data-add-receiver-form>
      <h4>Add receiver</h4>
      <div class="form-grid">
        <label>First name<input id="receiverFirstName" required /></label>
        <label>Last name<input id="receiverLastName" required /></label>
        <label>Phone<input id="receiverPhone" required placeholder="+998901234567" /></label>
      </div>
      <button class="secondary-button" type="submit">Add receiver</button>
      <p class="field-error" id="receiverFormError"></p>
    </form>
  `;
}

function renderAddressList() {
  if (!state.addresses.length) {
    return "<div class=\"checkout-empty\">No addresses yet. Add one below.</div>";
  }

  return `<div class="selectable-list">${state.addresses.map((address) => `
    <article class="selectable-card ${String(address.id) === String(state.selectedAddressId) ? "selected" : ""}" data-select-address="${escapeHtml(address.id)}">
      <div>
        <strong>${escapeHtml(address.title || "Address")}</strong>
        <p class="hint">${escapeHtml(address.address || "")}</p>
      </div>
      <button class="icon-button" data-delete-address="${escapeHtml(address.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`;
}

function renderAddressForm() {
  return `
    <form class="checkout-add-form" data-add-address-form>
      <h4>Add address</h4>
      <div class="form-grid">
        <label>Title<input id="addressTitle" required placeholder="Uy" /></label>
        <label>Address<input id="addressText" required placeholder="Toshkent shahar..." /></label>
        <label>Latitude<input id="addressLatitude" required value="41.311151" inputmode="decimal" /></label>
        <label>Longitude<input id="addressLongitude" required value="69.279737" inputmode="decimal" /></label>
      </div>
      <button class="secondary-button" type="submit">Add address</button>
      <p class="field-error" id="addressFormError"></p>
    </form>
  `;
}

function renderOrderSummary(receiver, address) {
  const canSubmit = receiver && address && state.cartItems.length && !state.orderSubmitting;
  return `
    <div class="summary-items">
      ${state.cartItems.map((item) => `
        <div class="summary-item">
          <span>${escapeHtml(item.name)} ${item.variantLabel ? `· ${escapeHtml(item.variantLabel)}` : ""} x ${item.quantity}</span>
          <strong>${formatPrice(item.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${formatPrice(state.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${receiver ? `${escapeHtml(receiver.fullName || "")} · ${escapeHtml(receiver.phone || "")}` : "Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${address ? `${escapeHtml(address.title || "")} · ${escapeHtml(address.address || "")}` : "Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${canSubmit ? "" : "disabled"}>
      ${state.orderSubmitting ? "Submitting..." : "Place Order"}
    </button>
  `;
}

function renderOrderSuccess() {
  const order = state.orderSuccess;
  els.checkoutContent.innerHTML = `
    <div class="order-success-animation">
      <div class="order-success-icon">✓</div>
      <h3>${escapeHtml(t("checkout.orderCreated"))}</h3>
      <p>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)} · ${escapeHtml(order.status || "NEW")}</p>
      <strong>${formatPrice(order.totalAmount)}</strong>
      <p class="hint">${escapeHtml(order.fullName || "")} ${order.phone ? `· ${escapeHtml(order.phone)}` : ""}</p>
      <p class="hint">${escapeHtml(order.address || "")}</p>
      <div class="hero-actions">
        <button class="secondary-button" data-success-orders type="button">${escapeHtml(t("checkout.viewOrders"))}</button>
        <button class="primary-button" data-success-continue type="button">${escapeHtml(t("checkout.continueShopping"))}</button>
      </div>
    </div>
  `;
}

async function showOrders() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.ordersDialog.showModal();
  lockBody();
  await loadOrders();
}

async function loadOrders() {
  state.ordersLoading = true;
  state.ordersError = "";
  state.selectedOrder = null;
  state.selectedOrderHistory = [];
  state.orderHistoryWarning = "";
  renderOrders();

  const response = await apiFetch("/api/orders", { requireAuth: true, showError: false });
  state.ordersLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      els.ordersDialog.close();
      return;
    }
    state.ordersError = state.lastApiError || "Orders could not be loaded.";
    renderOrders();
    return;
  }

  state.orders = getPageContent(response);
  renderOrders();
}

function renderOrders() {
  if (state.ordersLoading) {
    els.ordersContent.innerHTML = `
      <div class="orders-layout">
        <div class="orders-list"><div class="skeleton-card"></div><div class="skeleton-card"></div></div>
        <div class="order-detail-panel"><div class="skeleton-card"></div></div>
      </div>
    `;
    return;
  }

  if (state.ordersError) {
    els.ordersContent.innerHTML = `
      <div class="orders-empty">
        <strong>Orders unavailable</strong>
        <p>${escapeHtml(state.ordersError)}</p>
        <button class="secondary-button" data-orders-retry type="button">Retry</button>
      </div>
    `;
    return;
  }

  if (!state.orders.length) {
    els.ordersContent.innerHTML = `
      <div class="orders-empty">
        <strong>${escapeHtml(t("orders.none"))}</strong>
        <p>Your completed purchases will appear here.</p>
        <button class="primary-button" data-orders-start-shopping type="button">${escapeHtml(t("home.startShopping"))}</button>
      </div>
    `;
    return;
  }

  els.ordersContent.innerHTML = `
    <div class="orders-layout">
      <div class="orders-list">
        ${state.orders.map(renderOrderCard).join("")}
      </div>
      <div class="order-detail-panel">
        ${renderOrderDetailPanel()}
      </div>
    </div>
  `;
}

function renderOrderCard(order) {
  const items = Array.isArray(order.items) ? order.items : [];
  return `
    <article class="order-card ${state.selectedOrder?.id === order.id ? "selected" : ""}">
      <div>
        <h3>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)}</h3>
        <p class="hint">${formatDateTime(order.createdAt)}</p>
        <p class="hint">${escapeHtml(order.fullName || "")}</p>
        <p class="hint">${escapeHtml(shortText(order.address || "", 72))}</p>
      </div>
      <div class="order-card-side">
        <span class="status-badge status-${escapeHtml(String(order.status || "").toLowerCase())}">${escapeHtml(statusLabel(order.status))}</span>
        <strong>${formatMoney(order.totalAmount)}</strong>
        <span class="hint">${escapeHtml(t("orders.items", { count: items.length }))}</span>
        <button class="secondary-button" data-order-detail="${escapeHtml(order.id)}" type="button">${escapeHtml(t("orders.viewDetails"))}</button>
      </div>
    </article>
  `;
}

function renderOrderDetailPanel() {
  if (state.orderDetailLoading) {
    return "<div class=\"skeleton-card\"></div>";
  }

  if (state.orderDetailError) {
    return `<div class="orders-empty"><strong>Detail unavailable</strong><p>${escapeHtml(state.orderDetailError)}</p></div>`;
  }

  if (!state.selectedOrder) {
    return "<div class=\"orders-empty\"><strong>Select an order</strong><p>Choose an order to see details and timeline.</p></div>";
  }

  const order = state.selectedOrder;
  const items = Array.isArray(order.items) ? order.items.map((item) => normalizeOrderItem({ ...item, orderId: order.id })) : [];
  return `
    <section class="order-detail">
      <div class="order-detail-head">
        <div>
          <h3>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)}</h3>
          <p class="hint">${formatDateTime(order.createdAt)}</p>
        </div>
        <span class="status-badge status-${escapeHtml(String(order.status || "").toLowerCase())}">${escapeHtml(statusLabel(order.status))}</span>
      </div>
      <div class="summary-box">
        <strong>${escapeHtml(t("checkout.receiver"))}</strong>
        <p class="hint">${escapeHtml(order.fullName || "")} ${order.phone ? `· ${escapeHtml(order.phone)}` : ""}</p>
      </div>
      <div class="summary-box">
        <strong>${escapeHtml(t("checkout.address"))}</strong>
        <p class="hint">${escapeHtml(order.address || "")}</p>
      </div>
      <div class="summary-total"><span>${escapeHtml(t("common.total"))}</span><strong>${formatMoney(order.totalAmount)}</strong></div>
      <div class="order-items">
        <h4>Items</h4>
        ${items.length ? items.map((item) => renderOrderItem(item, order)).join("") : "<p class=\"hint\">No items in response.</p>"}
      </div>
      <div class="order-timeline">
        <h4>Status history</h4>
        ${state.orderHistoryWarning ? `<p class="checkout-error">${escapeHtml(state.orderHistoryWarning)}</p>` : ""}
        ${renderOrderTimeline(order)}
      </div>
    </section>
  `;
}

function renderOrderItem(item, order = {}) {
  const delivered = String(order.status || "").toUpperCase() === "DELIVERED";
  const canReview = delivered && item.productId && order.id;
  return `
    <article class="order-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="hint">${item.variantLabel ? escapeHtml(item.variantLabel) : "Variant"} · x${item.quantity}</p>
        ${canReview ? `
          <button class="secondary-button order-review-button" data-order-write-review="${escapeHtml(item.productId)}" data-review-order="${escapeHtml(order.id)}" data-review-name="${escapeHtml(item.name)}" type="button">Write review</button>
        ` : item.productId ? "<p class=\"hint\">Available after delivery</p>" : ""}
      </div>
      <strong>${formatMoney(item.lineTotal || item.unitPrice * item.quantity)}</strong>
    </article>
  `;
}

function renderOrderTimeline(order) {
  const history = state.selectedOrderHistory.length
    ? state.selectedOrderHistory
    : [{ status: order.status, createdAt: order.createdAt, note: "Current order status" }];

  return history.map((item) => `
    <div class="timeline-item">
      <span></span>
      <div>
        <strong>${escapeHtml(statusLabel(item.status))}</strong>
        <p class="hint">${formatDateTime(item.createdAt)}</p>
        ${item.note ? `<p class="hint">${escapeHtml(item.note)}</p>` : ""}
      </div>
    </div>
  `).join("");
}

function shortText(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

async function openOrderDetail(orderId) {
  state.orderDetailLoading = true;
  state.orderDetailError = "";
  state.orderHistoryWarning = "";
  renderOrders();

  const [detail, history] = await Promise.all([
    apiFetch(`/api/orders/${orderId}`, { requireAuth: true, showError: false }),
    apiFetch(`/api/orders/${orderId}/history`, { requireAuth: true, showError: false }),
  ]);

  state.orderDetailLoading = false;
  if (detail === null) {
    state.orderDetailError = state.lastApiError || "Order detail could not be loaded.";
    renderOrders();
    return;
  }

  state.selectedOrder = detail;
  state.selectedOrderHistory = history === null ? [] : getPageContent(history);
  if (history === null) {
    state.orderHistoryWarning = "Status history could not be loaded.";
  }
  renderOrders();
}

/* ================= FAVORITES RENDERERS ================= */

async function openFavorites() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.favoritesDialog.showModal();
  lockBody();
  await loadFavorites({ render: true });
}

async function loadFavorites(options = {}) {
  const { render = false } = options;
  if (!isLoggedIn()) {
    clearFavoritesState();
    return;
  }

  state.favoritesLoading = true;
  state.favoritesError = "";
  if (render) renderFavorites();

  try {
    const response = await apiFetch("/api/favorites", { requireAuth: true, showError: false });
    state.favoritesLoading = false;

    if (response === null) {
      if (state.lastApiError.includes("Session expired") || state.lastApiError === "Please login to continue") {
        clearFavoritesState();
        if (els.favoritesDialog.open) els.favoritesDialog.close();
        return;
      }
      state.favoritesError = state.lastApiError || "Favorites could not be loaded.";
      updateFavoritesUi();
      if (render) renderFavorites();
      return;
    }

    setFavoriteProducts(getPageContent(response).map(normalizeFavoriteItem));
    if (state.products.length) renderProductList(els.grid, state.products, "Mahsulot topilmadi.");
    if (state.todayDeals.length) renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), "Bugungi takliflar topilmadi.");
    if (render || els.favoritesDialog.open) renderFavorites();
  } catch (error) {
    console.error("[LOAD FAVORITES FAILED]", error);
    state.favoritesLoading = false;
    state.favoritesError = "Favorites could not be loaded.";
    updateFavoritesUi();
    if (render || els.favoritesDialog.open) renderFavorites();
  }
}

function updateFavoritesUi() {
  els.favoritesCount.textContent = state.favoritesCount;
  els.favoritesSummary.textContent = `${state.favoritesCount} product${state.favoritesCount === 1 ? "" : "s"}`;
}

function renderFavorites() {
  updateFavoritesUi();

  if (state.favoritesLoading) {
    els.favoritesContent.innerHTML = `
      <div class="favorites-grid">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.favoritesError) {
    els.favoritesContent.innerHTML = `
      <div class="favorites-empty">
        <strong>Favorites unavailable</strong>
        <p>${escapeHtml(state.favoritesError)}</p>
        <button class="secondary-button" data-favorites-retry type="button">Retry</button>
      </div>
    `;
    return;
  }

  if (!state.favoriteProducts.length) {
    els.favoritesContent.innerHTML = `
      <div class="favorites-empty">
        <strong>No favorite products yet</strong>
        <p>Save products with the heart button and they will appear here.</p>
        <button class="primary-button" data-favorites-start type="button">Start shopping</button>
      </div>
    `;
    return;
  }

  els.favoritesContent.innerHTML = `
    <div class="favorites-grid product-grid">
      ${state.favoriteProducts.map((product) => productCard({ ...product, favorite: true })).join("")}
    </div>
  `;
}

function closeFavorites() {
  els.favoritesDialog.close();
  unlockBodyIfNoOverlay();
}

function handleFavoritesClick(event) {
  const retry = event.target.closest("[data-favorites-retry]");
  const start = event.target.closest("[data-favorites-start]");

  if (retry) {
    loadFavorites({ render: true });
    return;
  }

  if (start) {
    closeFavorites();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  handleProductGridClick(event);
}

/* ================= NOTIFICATIONS RENDERERS ================= */

function clearNotificationsState() {
  state.notifications = [];
  state.notificationsLoading = false;
  state.notificationsError = "";
  state.unreadCount = 0;
  state.unreadCountLoading = false;
  state.notificationUpdatingIds = new Set();
  updateNotificationsBadge();
  if (els.notificationsDrawer?.classList.contains("open")) {
    closeNotifications();
  }
}

async function loadUnreadCount() {
  if (!isLoggedIn()) {
    clearNotificationsState();
    return;
  }

  state.unreadCountLoading = true;
  const response = await apiFetch("/api/notifications/unread-count", { requireAuth: true, showError: false });
  state.unreadCountLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      clearNotificationsState();
      return;
    }
    updateNotificationsBadge();
    return;
  }

  state.unreadCount = normalizeUnreadCount(response);
  updateNotificationsBadge();
}

async function openNotifications() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.notificationsDrawer.classList.add("open");
  els.notificationsDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  await Promise.all([loadNotifications(), loadUnreadCount()]);
}

function closeNotifications() {
  els.notificationsDrawer.classList.remove("open");
  els.notificationsDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

async function loadNotifications() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  state.notificationsLoading = true;
  state.notificationsError = "";
  renderNotifications();

  const response = await apiFetch("/api/notifications", { requireAuth: true, showError: false });
  state.notificationsLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      clearNotificationsState();
      return;
    }
    state.notificationsError = state.lastApiError || "Notifications could not be loaded.";
    renderNotifications();
    return;
  }

  state.notifications = getNotificationsContent(response).map(normalizeNotification).filter((item) => item.id !== undefined);
  renderNotifications();
}

function updateNotificationsBadge() {
  els.notificationsCount.textContent = state.unreadCount;
  els.notificationsCount.hidden = state.unreadCount <= 0;
  els.notificationsSummary.textContent = `${state.unreadCount} ${t("notifications.unread")}`;
}

function renderNotifications() {
  updateNotificationsBadge();

  if (state.notificationsLoading) {
    els.notificationsContent.innerHTML = `
      <div class="notifications-loading">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.notificationsError) {
    els.notificationsContent.innerHTML = `
      <div class="notifications-empty">
        <strong>${escapeHtml(t("notifications.title"))}</strong>
        <p>${escapeHtml(state.notificationsError)}</p>
        <button class="secondary-button" data-notifications-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
      </div>
    `;
    return;
  }

  if (!state.notifications.length) {
    els.notificationsContent.innerHTML = `
      <div class="notifications-empty">
        <strong>${escapeHtml(t("notifications.none"))}</strong>
        <p>Order, promo and system updates will appear here.</p>
      </div>
    `;
    return;
  }

  els.notificationsContent.innerHTML = `
    <div class="notifications-list">
      ${state.notifications.map(renderNotificationCard).join("")}
    </div>
  `;
}

function renderNotificationCard(notification) {
  const updating = state.notificationUpdatingIds.has(String(notification.id));
  return `
    <article class="notification-card ${notification.read ? "read" : "unread"} ${updating ? "loading" : ""}" data-notification-card="${escapeHtml(notification.id)}">
      <div class="notification-icon type-${escapeHtml(notification.type.toLowerCase())}" aria-hidden="true">${notificationTypeIcon(notification.type)}</div>
      <div>
        <div class="notification-head">
          <strong>${escapeHtml(notification.title)}</strong>
          ${notification.read ? "" : `<span class="unread-dot" aria-label="${escapeHtml(t("notifications.unread"))}"></span>`}
        </div>
        <p>${escapeHtml(notification.message)}</p>
        <div class="notification-meta">
          <span>${escapeHtml(notificationTypeLabel(notification.type))}</span>
          <span>${formatDateTime(notification.createdAt)}</span>
        </div>
      </div>
      <button class="secondary-button notification-read-button" data-notification-read="${escapeHtml(notification.id)}" ${notification.read || updating ? "disabled" : ""} type="button">
        ${notification.read ? escapeHtml(t("notifications.read")) : updating ? escapeHtml(t("common.saving")) : escapeHtml(t("notifications.markRead"))}
      </button>
    </article>
  `;
}

function notificationTypeIcon(type) {
  const icons = { ORDER: "O", PROMO: "%", SYSTEM: "i" };
  return icons[type] || "i";
}

async function markNotificationRead(notificationId, options = {}) {
  const notification = state.notifications.find((item) => String(item.id) === String(notificationId));
  if (!notification || notification.read) return true;

  state.notificationUpdatingIds.add(String(notificationId));
  renderNotifications();
  const response = await apiFetch(`/api/notifications/${notificationId}/read`, {
    method: "POST",
    requireAuth: true,
    showError: false,
  });
  state.notificationUpdatingIds.delete(String(notificationId));

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      clearNotificationsState();
      return false;
    }
    showToast(state.lastApiError || "Notification could not be updated.");
    renderNotifications();
    return false;
  }

  notification.read = true;
  state.notifications = state.notifications.map((item) => String(item.id) === String(notificationId) ? { ...item, read: true } : item);
  state.unreadCount = Math.max(0, state.unreadCount - 1);
  renderNotifications();
  await loadUnreadCount();
  if (!options.silent) showToast("Marked as read");
  return true;
}

async function handleNotificationCardClick(notificationId) {
  const notification = state.notifications.find((item) => String(item.id) === String(notificationId));
  if (!notification) return;

  if (!notification.read) {
    await markNotificationRead(notificationId, { silent: true });
  }

  if (notification.type === "ORDER" && notification.refId) {
    closeNotifications();
    await showOrders();
    await openOrderDetail(notification.refId);
  }
}

async function saveNotificationToken(token) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return null;
  }

  const cleanToken = String(token || "").trim();
  if (!cleanToken) {
    showToast("Notification token is empty.");
    return null;
  }

  return apiFetch("/api/notifications/token", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({ token: cleanToken }),
  });
}

window.saveNotificationToken = saveNotificationToken;

async function checkServerHealth() {
  return apiFetch("/api/health", { showError: false });
}

window.checkServerHealth = checkServerHealth;

function handleNotificationsClick(event) {
  const retry = event.target.closest("[data-notifications-retry]");
  const readButton = event.target.closest("[data-notification-read]");
  const card = event.target.closest("[data-notification-card]");

  if (retry) {
    loadNotifications();
    loadUnreadCount();
    return;
  }

  if (readButton) {
    event.stopPropagation();
    markNotificationRead(readButton.dataset.notificationRead);
    return;
  }

  if (card) {
    handleNotificationCardClick(card.dataset.notificationCard);
  }
}

/* ================= REVIEWS RENDERERS ================= */

async function openMyReviews() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.myReviewsDialog.showModal();
  lockBody();
  await loadMyReviews();
}

async function loadMyReviews() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  state.myReviewsLoading = true;
  state.myReviewsError = "";
  renderMyReviews();

  const response = await apiFetch("/api/reviews/my", { requireAuth: true, showError: false });
  state.myReviewsLoading = false;

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      closeMyReviews();
      closeWriteReview();
      return;
    }
    state.myReviewsError = state.lastApiError || "Reviews could not be loaded.";
    renderMyReviews();
    return;
  }

  state.myReviews = getMyReviewsContent(response).map(normalizeMyReviewItem);
  renderMyReviews();
}

function renderMyReviews() {
  els.myReviewsSummary.textContent = state.myReviews.length
    ? `${state.myReviews.length} item${state.myReviews.length === 1 ? "" : "s"}`
    : "Purchased products and written reviews";

  if (state.myReviewsLoading) {
    els.myReviewsContent.innerHTML = `
      <div class="my-reviews-list">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.myReviewsError) {
    els.myReviewsContent.innerHTML = `
      <div class="reviews-empty-state">
        <strong>Reviews unavailable</strong>
        <p>${escapeHtml(state.myReviewsError)}</p>
        <button class="secondary-button" data-my-reviews-retry type="button">Retry</button>
      </div>
    `;
    return;
  }

  if (!state.myReviews.length) {
    els.myReviewsContent.innerHTML = `
      <div class="reviews-empty-state">
        <strong>No review items yet</strong>
        <p>Your written reviews and reviewable purchases will appear here.</p>
      </div>
    `;
    return;
  }

  els.myReviewsContent.innerHTML = `
    <div class="my-reviews-list">
      ${state.myReviews.map(renderMyReviewItem).join("")}
    </div>
  `;
}

function renderMyReviewItem(item) {
  const review = item.review;
  return `
    <article class="my-review-item">
      <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
      <div>
        <strong>${escapeHtml(item.name)}</strong>
        <p class="hint">${escapeHtml(item.brand || "BEAUTY SKIN KOREA")} ${item.orderId ? `· Order #${escapeHtml(item.orderId)}` : ""}</p>
        ${review?.rating || review?.content ? `
          <div class="written-review">
            ${renderStars(review.rating)}
            <p>${escapeHtml(review.content || "No text review.")}</p>
            <p class="hint">${formatDateTime(review.createdAt)}</p>
          </div>
        ` : "<p class=\"hint\">Review not written yet.</p>"}
      </div>
      <div class="review-action-cell">
        ${item.reviewable ? `
          <button class="secondary-button" data-write-review="${escapeHtml(item.productId)}" data-review-order="${escapeHtml(item.orderId)}" data-review-name="${escapeHtml(item.name)}" type="button">Write review</button>
        ` : review?.content || review?.rating ? "<span class=\"status-badge status-delivered\">Reviewed</span>" : "<span class=\"hint\">Not reviewable</span>"}
      </div>
    </article>
  `;
}

function openWriteReview(options = {}) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  const productId = options.productId;
  const orderId = options.orderId;
  if (!productId || !orderId) {
    showToast("Product and order are required for review.");
    return;
  }

  state.reviewDraft = {
    productId,
    orderId,
    productName: options.productName || "Product",
  };
  state.reviewRating = 5;
  els.writeReviewProduct.textContent = `${state.reviewDraft.productName} · Order #${orderId}`;
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
      <button class="rating-choice ${rating <= state.reviewRating ? "active" : ""}" data-review-rating="${rating}" type="button" aria-label="Rating ${rating} out of 5">
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

function parseReviewImageUrls(value) {
  return String(value || "")
    .split(/[\n,]+/)
    .map((url) => url.trim())
    .filter(Boolean)
    .slice(0, 5);
}

function validateReviewFiles(files) {
  const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
  const selected = Array.from(files || []);
  if (selected.length > 5) return { error: "Maximum 5 image files allowed.", files: [] };
  const invalid = selected.find((file) => !allowed.has(file.type));
  if (invalid) return { error: "Only JPG, PNG and WEBP images are allowed.", files: [] };
  const oversized = selected.find((file) => file.size > 10 * 1024 * 1024);
  if (oversized) return { error: "Each image must be 10MB or smaller.", files: [] };
  return { files: selected };
}

async function uploadReviewImages(files) {
  const uploadedUrls = [];
  for (let index = 0; index < files.length; index += 1) {
    const file = files[index];
    els.reviewUploadStatus.textContent = `Uploading image ${index + 1} of ${files.length}...`;
    const presign = await apiFetch("/api/uploads/presign", {
      method: "POST",
      requireAuth: true,
      showError: false,
      body: JSON.stringify({
        fileName: file.name,
        contentType: file.type,
        folder: "reviews",
        fileSizeBytes: file.size,
      }),
    });

    if (!presign?.uploadUrl || !presign?.publicUrl) {
      throw new Error(state.lastApiError || "Image upload could not be prepared.");
    }

    const uploadResponse = await fetch(presign.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type },
      body: file,
    });

    if (!uploadResponse.ok) {
      throw new Error(`Image upload failed: HTTP ${uploadResponse.status}`);
    }

    uploadedUrls.push(presign.publicUrl);
  }
  els.reviewUploadStatus.textContent = uploadedUrls.length ? "Images uploaded." : "";
  return uploadedUrls;
}

async function submitReview(event) {
  event.preventDefault();
  if (state.reviewSubmitting) return;

  const draft = state.reviewDraft || {};
  const content = els.reviewContent.value.trim();
  const manualImageUrls = parseReviewImageUrls(els.reviewImages.value);
  const fileValidation = validateReviewFiles(els.reviewImageFiles.files);

  if (!draft.productId || !draft.orderId) {
    setReviewFormMessage("Product and order are required.", "error");
    return;
  }
  if (state.reviewRating < 1 || state.reviewRating > 5) {
    setReviewFormMessage("Choose a rating from 1 to 5.", "error");
    return;
  }
  if (!content) {
    setReviewFormMessage("Review text is required.", "error");
    return;
  }
  if (fileValidation.error) {
    setReviewFormMessage(fileValidation.error, "error");
    return;
  }
  if (String(els.reviewImages.value || "").split(/[\n,]+/).filter((url) => url.trim()).length > 5) {
    setReviewFormMessage("Maximum 5 image URLs allowed.", "error");
    return;
  }
  if (manualImageUrls.length + fileValidation.files.length > 5) {
    setReviewFormMessage("Maximum 5 review images allowed.", "error");
    return;
  }

  state.reviewSubmitting = true;
  state.uploadingReviewImages = Boolean(fileValidation.files.length);
  els.submitReviewButton.disabled = true;
  els.submitReviewButton.textContent = "Submitting...";
  setReviewFormMessage("");

  let uploadedImageUrls = [];
  try {
    uploadedImageUrls = fileValidation.files.length ? await uploadReviewImages(fileValidation.files) : [];
  } catch (error) {
    state.reviewSubmitting = false;
    state.uploadingReviewImages = false;
    els.submitReviewButton.disabled = false;
    els.submitReviewButton.textContent = "Submit review";
    setReviewFormMessage(error.message || "Image upload failed.", "error");
    return;
  }

  const imageUrls = [...uploadedImageUrls, ...manualImageUrls].slice(0, 5);

  const response = await apiFetch("/api/reviews", {
    method: "POST",
    requireAuth: true,
    showError: false,
    body: JSON.stringify({
      productId: Number(draft.productId),
      orderId: Number(draft.orderId),
      rating: Number(state.reviewRating),
      content,
      imageUrls,
    }),
  });

  state.reviewSubmitting = false;
  state.uploadingReviewImages = false;
  els.submitReviewButton.disabled = false;
  els.submitReviewButton.textContent = "Submit review";
  els.reviewUploadStatus.textContent = "";

  if (response === null) {
    if (state.lastApiError.includes("Session expired")) {
      closeMyReviews();
      closeWriteReview();
      return;
    }
    setReviewFormMessage(state.lastApiError || "Review could not be submitted.", "error");
    return;
  }

  showToast("Review submitted");
  closeWriteReview();
  await loadMyReviews();
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === String(draft.productId)) {
    await loadProductReviews(draft.productId);
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
  state.reviewRating = Number(button.dataset.reviewRating);
  renderRatingSelector();
}

/* ================= AUTH / PROFILE RENDERERS ================= */

function openAuthDialog(mode = "login") {
  setAuthMode(mode);
  clearAuthErrors();
  els.authDialog.showModal();
  lockBody();
}

function setAuthMode(mode) {
  state.authMode = mode;
  const isLogin = mode === "login";
  els.authTitle.textContent = isLogin ? t("auth.login") : t("auth.register");
  els.loginFields.hidden = !isLogin;
  els.registerFields.hidden = isLogin;
  els.authSubmit.textContent = isLogin ? t("auth.signIn") : t("auth.createAccount");
  els.loginTab.classList.toggle("active", isLogin);
  els.registerTab.classList.toggle("active", !isLogin);
  els.loginTab.setAttribute("aria-selected", String(isLogin));
  els.registerTab.setAttribute("aria-selected", String(!isLogin));
  clearAuthErrors();
}

function clearAuthErrors() {
  document.querySelectorAll(".field-error").forEach((item) => {
    item.textContent = "";
  });
  els.authMessage.textContent = "";
  els.authMessage.className = "form-message";
}

function setFieldError(id, message) {
  const error = document.getElementById(`${id}Error`);
  if (error) error.textContent = message;
}

function setAuthLoading(loading) {
  state.authLoading = loading;
  els.authSubmit.disabled = loading;
  if (els.googleLoginButton) els.googleLoginButton.disabled = loading;
  els.authSubmit.textContent = loading ? t("home.loading") : (state.authMode === "login" ? t("auth.signIn") : t("auth.createAccount"));
}

function setFirebaseLoading(loading) {
  state.authLoading = loading;
  els.authSubmit.disabled = loading;
  if (els.googleLoginButton) {
    els.googleLoginButton.disabled = loading;
    els.googleLoginButton.classList.toggle("loading", loading);
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateLoginForm() {
  clearAuthErrors();
  let valid = true;
  const email = els.loginEmail.value.trim();
  const password = els.loginPassword.value;

  if (!email || !isValidEmail(email)) {
    setFieldError("loginEmail", t("auth.emailRequired"));
    valid = false;
  }
  if (!password || password.length < 6) {
    setFieldError("loginPassword", t("auth.passwordMin"));
    valid = false;
  }

  return valid;
}

function validateRegisterForm() {
  clearAuthErrors();
  let valid = true;
  const fullName = els.registerFullName.value.trim();
  const email = els.registerEmail.value.trim();
  const phone = els.registerPhone.value.trim();
  const password = els.registerPassword.value;
  const confirmPassword = els.registerConfirmPassword.value;

  if (!fullName) {
    setFieldError("registerFullName", t("auth.fullNameRequired"));
    valid = false;
  }
  if (!email || !isValidEmail(email)) {
    setFieldError("registerEmail", t("auth.emailRequired"));
    valid = false;
  }
  if (!phone) {
    setFieldError("registerPhone", t("auth.phoneRequired"));
    valid = false;
  }
  if (!password || password.length < 6) {
    setFieldError("registerPassword", t("auth.passwordMin"));
    valid = false;
  }
  if (password !== confirmPassword) {
    setFieldError("registerConfirmPassword", t("auth.passwordMismatch"));
    valid = false;
  }

  return valid;
}

async function submitAuth(event) {
  event.preventDefault();
  if (state.authLoading) return;

  if (state.authMode === "login") {
    await submitLogin();
  } else {
    await submitRegister();
  }
}

async function submitLogin() {
  if (!validateLoginForm()) return;
  setAuthLoading(true);

  const response = await apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: els.loginEmail.value.trim(),
      password: els.loginPassword.value,
    }),
    showError: false,
  });

  setAuthLoading(false);
  if (!response?.token) {
    els.authMessage.textContent = state.lastApiError || "Email yoki parol noto‘g‘ri.";
    els.authMessage.className = "form-message error";
    return;
  }

  await finishLogin(response);
}

async function finishLogin(response) {
  saveAuth(response);
  await validateAuthOnStartup();
  els.authDialog.close();
  showToast(`Welcome, ${firstName(response.fullName) || "User"}.`);
  await loadCart();
  await loadFavorites();
  await loadUnreadCount();
}

async function submitFirebaseLogin() {
  if (state.authLoading) return;
  clearAuthErrors();
  setFirebaseLoading(true);

  let idToken;
  try {
    idToken = await signInWithGoogleIdToken();
  } catch (error) {
    setFirebaseLoading(false);
    // User closing the popup is not an error worth surfacing loudly.
    const code = error?.code || "";
    if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") return;
    els.authMessage.textContent = code === "auth/popup-blocked"
      ? "Popup bloklandi. Brauzerda popup'ga ruxsat bering."
      : "Google bilan kirishda xatolik yuz berdi.";
    els.authMessage.className = "form-message error";
    return;
  }

  const response = await apiFetch("/api/auth/firebase", {
    method: "POST",
    body: JSON.stringify({ idToken }),
    showError: false,
  });

  setFirebaseLoading(false);
  if (!response?.token) {
    els.authMessage.textContent = state.lastApiError || "Server Google hisobini qabul qilmadi.";
    els.authMessage.className = "form-message error";
    return;
  }

  await finishLogin(response);
}

async function submitRegister() {
  if (!validateRegisterForm()) return;
  setAuthLoading(true);

  const response = await apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      fullName: els.registerFullName.value.trim(),
      email: els.registerEmail.value.trim(),
      phone: els.registerPhone.value.trim(),
      password: els.registerPassword.value,
    }),
    showError: false,
  });

  setAuthLoading(false);
  if (response === null) {
    els.authMessage.textContent = state.lastApiError || "Email allaqachon mavjud yoki server javob bermadi.";
    els.authMessage.className = "form-message error";
    return;
  }

  els.authMessage.textContent = "Registered. Endi login qiling.";
  els.authMessage.className = "form-message success";
  setAuthMode("login");
  els.loginEmail.value = els.registerEmail.value.trim();
}

function getLanguageLabel(lang = getCurrentLanguage()) {
  const labels = {
    uz: "O'zbek",
    en: "English",
    ru: "Русский",
    ko: "한국어",
  };
  return labels[lang] || labels.en;
}

function profileOrderStatusLabel(status = "") {
  const key = String(status || "").toUpperCase();
  if (key === "NEW" || key === "CONFIRMED" || key === "PACKED") return t("status.PENDING");
  return statusLabel(status);
}

function renderProfileStatCard(action, icon, label, value) {
  const valueHtml = value !== "" && value !== null && value !== undefined
    ? `<strong class="app-profile-stat-value">${escapeHtml(String(value))}</strong>`
    : "";
  return `
    <button class="app-profile-stat" type="button" data-profile-action="${escapeHtml(action)}">
      <span class="app-profile-stat-icon app-profile-stat-icon--${escapeHtml(action)}">${icon}</span>
      <span class="app-profile-stat-label">${escapeHtml(label)}</span>
      ${valueHtml}
    </button>
  `;
}

function renderProfileOrderPreviewCard(order) {
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

function renderProfileMenuRow(action, icon, label, trailing = "") {
  return `
    <button class="app-profile-menu-row" type="button" data-profile-action="${escapeHtml(action)}">
      <span class="app-profile-menu-icon" aria-hidden="true">${icon}</span>
      <span class="app-profile-menu-label">${escapeHtml(label)}</span>
      ${trailing ? `<span class="app-profile-menu-trailing">${trailing}</span>` : ""}
      <svg class="app-profile-menu-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
    </button>
  `;
}

async function enrichProfileOrders(orders = []) {
  const previewOrders = orders.slice(0, 2);
  if (!previewOrders.length) return orders;

  const enriched = await Promise.all(previewOrders.map(async (order) => {
    if (Array.isArray(order.items) && order.items.length) return order;
    const detail = await apiFetch(`/api/orders/${order.id}`, { requireAuth: true, showError: false });
    return detail && typeof detail === "object" ? detail : order;
  }));

  return [...enriched, ...orders.slice(2)];
}

async function loadProfileSnapshot() {
  if (!isLoggedIn()) return;

  const loadId = ++state.profileLoadSeq;
  state.profileLoading = true;
  state.profileSnapshotError = "";
  renderProfile();

  try {
    const [userResponse, ordersResponse, reviewsResponse] = await Promise.all([
      apiFetch("/api/users/me", { requireAuth: true, showError: false }),
      apiFetch("/api/orders", { requireAuth: true, showError: false }),
      apiFetch("/api/reviews/my", { requireAuth: true, showError: false }),
      loadUnreadCount(),
      ensureRecentlyViewedState(),
    ]);

    if (loadId !== state.profileLoadSeq || !els.profileDrawer.classList.contains("open")) return;

    const errors = [];

    if (userResponse) {
      state.user = userResponse;
      localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(userResponse));
      updateAuthUi();
    } else {
      errors.push(t("profile.loadUserFailed"));
    }

    if (ordersResponse !== null) {
      const orders = getPageContent(ordersResponse);
      state.orders = await enrichProfileOrders(orders);
      if (loadId !== state.profileLoadSeq || !els.profileDrawer.classList.contains("open")) return;
    } else {
      errors.push(t("profile.loadOrdersFailed"));
    }

    if (reviewsResponse !== null) {
      state.myReviews = getMyReviewsContent(reviewsResponse).map(normalizeMyReviewItem);
    } else {
      errors.push(t("profile.loadReviewsFailed"));
    }

    state.profileSnapshotError = errors.join(" · ");
  } finally {
    if (loadId === state.profileLoadSeq) {
      state.profileLoading = false;
      if (els.profileDrawer.classList.contains("open")) renderProfile();
    }
  }
}

function openProfile() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }
  state.profileEditing = false;
  state.profileMenuOpen = false;
  els.profileDrawer.classList.add("open");
  els.profileDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  renderProfile();
  loadProfileSnapshot();
}

function closeProfile() {
  state.profileMenuOpen = false;
  state.profileLoadSeq += 1;
  els.profileDrawer.classList.remove("open");
  els.profileDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

function renderProfile() {
  const user = state.user || {};
  const avatar = user.profileImage
    ? `<img class="app-profile-avatar" src="${escapeHtml(user.profileImage)}" alt="${escapeHtml(user.fullName || "Profile")}" loading="eager" decoding="async" />`
    : `<div class="app-profile-avatar app-profile-avatar--placeholder" aria-hidden="true">
        <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
      </div>`;

  const ordersCount = state.orders?.length || 0;
  const reviewsCount = state.myReviews?.length || 0;
  const couponsCount = state.cartCoupon ? 1 : 0;
  const recentProducts = (state.recentlyViewed || []).slice(0, 6);
  const recentHtml = recentProducts.map((product, index) => productCard(product, { screen: "profile-recent", position: index })).join("");
  const orderPreview = (state.orders || []).slice(0, 2);
  const unreadBadge = state.unreadCount > 0
    ? `<span class="app-profile-notify-badge">${state.unreadCount > 99 ? "99+" : state.unreadCount}</span>`
    : "";

  const statIcons = {
    orders: `<svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>`,
    reviews: `<svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    coupons: `<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>`,
    feedback: `<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
  };

  const menuIcons = {
    promotions: `<svg viewBox="0 0 24 24"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M12 3 20 8v4H4V8z"/></svg>`,
    help: `<svg viewBox="0 0 24 24"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3z"/><path d="M14 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3z"/><path d="M8.5 11V7a3.5 3.5 0 1 1 7 0v4"/></svg>`,
    news: `<svg viewBox="0 0 24 24"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11 6v12"/></svg>`,
    language: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    privacy: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>`,
    terms: `<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`,
    licenses: `<svg viewBox="0 0 24 24"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  };

  els.profileContent.innerHTML = `
    <div class="app-profile-page ${state.profileLoading ? "is-loading" : ""}">
      ${state.profileSnapshotError ? `<div class="app-profile-error" role="status">${escapeHtml(state.profileSnapshotError)}</div>` : ""}
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
        ${renderProfileStatCard("orders", statIcons.orders, t("profile.ordersStat"), ordersCount)}
        ${renderProfileStatCard("reviews", statIcons.reviews, t("profile.reviewsStat"), reviewsCount)}
        ${renderProfileStatCard("promotions", statIcons.coupons, t("profile.couponsStat"), couponsCount)}
        ${renderProfileStatCard("help", statIcons.feedback, t("profile.feedbackStat"), "")}
      </section>

      <section class="app-profile-section">
        <div class="app-profile-section-head">
          <h3>${escapeHtml(t("profile.myOrders"))}</h3>
          <button class="app-profile-see-all" type="button" data-profile-action="orders">${escapeHtml(t("profile.seeAll"))} ›</button>
        </div>
        <div class="app-profile-orders-rail">
          ${state.profileLoading
    ? `<div class="app-profile-order-card skeleton-card"></div><div class="app-profile-order-card skeleton-card"></div>`
    : orderPreview.length
      ? orderPreview.map((order) => renderProfileOrderPreviewCard(order)).join("")
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
        ${renderProfileMenuRow("promotions", menuIcons.promotions, t("profile.promotions"))}
        ${renderProfileMenuRow("help", menuIcons.help, t("profile.help"))}
        ${renderProfileMenuRow("news", menuIcons.news, t("profile.news"))}
        ${renderProfileMenuRow("language", menuIcons.language, t("profile.language"), `<span>${escapeHtml(getLanguageLabel())}</span>`)}
        ${renderProfileMenuRow("privacy", menuIcons.privacy, t("profile.privacy"))}
        ${renderProfileMenuRow("terms", menuIcons.terms, t("profile.terms"))}
        ${renderProfileMenuRow("licenses", menuIcons.licenses, t("profile.licenses"))}
      </nav>

      ${state.profileEditing ? renderProfileEditForm(user) : ""}
      ${state.profileMenuOpen ? `
        <div class="app-profile-menu-sheet open" id="profileMenuSheet">
          <button class="app-profile-menu-row" type="button" data-profile-action="edit">${escapeHtml(t("profile.edit"))}</button>
          <button class="app-profile-menu-row app-profile-menu-row--danger" type="button" data-profile-action="logout">${escapeHtml(t("profile.logout"))}</button>
        </div>
      ` : ""}
    </div>
  `;

  initLazyImages(els.profileContent);
}

function renderProfileEditForm(user) {
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

async function handleProfileAction(event) {
  const orderPreview = event.target.closest("[data-profile-order]");
  if (orderPreview) {
    closeProfile();
    await showOrders();
    await openOrderDetail(orderPreview.dataset.profileOrder);
    return;
  }

  const button = event.target.closest("[data-profile-action]");
  if (!button) return;
  const action = button.dataset.profileAction;

  if (action === "menu") {
    state.profileMenuOpen = !state.profileMenuOpen;
    renderProfile();
    return;
  }

  if (action === "edit") {
    state.profileMenuOpen = false;
    state.profileEditing = !state.profileEditing;
    renderProfile();
    return;
  }

  if (action === "logout") {
    state.profileMenuOpen = false;
    clearAuth();
    closeProfile();
    showToast(t("profile.loggedOut"));
    return;
  }

  if (action === "orders") {
    closeProfile();
    await showOrders();
    return;
  }

  if (action === "favorites") {
    closeProfile();
    await openFavorites();
    return;
  }

  if (action === "reviews") {
    closeProfile();
    await openMyReviews();
    return;
  }

  if (action === "notifications") {
    closeProfile();
    await openNotifications();
    return;
  }

  if (action === "language") {
    const langs = SUPPORTED_LANGUAGES;
    const idx = langs.indexOf(getCurrentLanguage());
    const next = langs[(idx + 1) % langs.length];
    setLanguage(next);
    if (els.languageSelect) els.languageSelect.value = next;
    applyTranslations(state);
    renderProfile();
    return;
  }

  if (action === "promotions" || action === "news" || action === "privacy" || action === "terms" || action === "licenses") {
    showToast(t("profile.comingSoon"), "info");
    return;
  }

  if (action === "help") {
    showToast(t("profile.helpMessage"), "info");
    return;
  }

  if (action === "addresses" || action === "receivers") {
    closeProfile();
    await prepareCheckout();
    return;
  }

  showToast(t("profile.comingSoon"), "info");
}

async function handleCheckoutClick(event) {
  const receiver = event.target.closest("[data-select-receiver]");
  const address = event.target.closest("[data-select-address]");
  const deleteReceiver = event.target.closest("[data-delete-receiver]");
  const deleteAddress = event.target.closest("[data-delete-address]");
  const placeOrderButton = event.target.closest("[data-place-order]");
  const nextStep = event.target.closest("[data-checkout-next]");
  const prevStep = event.target.closest("[data-checkout-prev]");
  const viewOrdersButton = event.target.closest("[data-success-orders]");
  const continueButton = event.target.closest("[data-success-continue]");

  if (deleteReceiver) {
    event.stopPropagation();
    await deleteReceiverById(deleteReceiver.dataset.deleteReceiver);
    return;
  }

  if (deleteAddress) {
    event.stopPropagation();
    await deleteAddressById(deleteAddress.dataset.deleteAddress);
    return;
  }

  if (receiver) {
    state.selectedReceiverId = receiver.dataset.selectReceiver;
    renderCheckout();
    return;
  }

  if (address) {
    state.selectedAddressId = address.dataset.selectAddress;
    renderCheckout();
    return;
  }

  if (nextStep) {
    if (state.checkoutStep === 1 && !state.selectedReceiverId) {
      state.checkoutError = t("checkout.receiverRequired");
      renderCheckout();
      return;
    }
    if (state.checkoutStep === 2 && !state.selectedAddressId) {
      state.checkoutError = t("checkout.addressRequired");
      renderCheckout();
      return;
    }
    state.checkoutError = "";
    state.checkoutStep = Math.min(4, state.checkoutStep + 1);
    renderCheckout();
    return;
  }

  if (prevStep) {
    state.checkoutError = "";
    state.checkoutStep = Math.max(1, state.checkoutStep - 1);
    renderCheckout();
    return;
  }

  if (placeOrderButton) {
    await placeOrder();
    return;
  }

  if (viewOrdersButton) {
    els.checkoutDialog.close();
    await showOrders();
    return;
  }

  if (continueButton) {
    els.checkoutDialog.close();
    closeCart();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function handleOrdersClick(event) {
  const detail = event.target.closest("[data-order-detail]");
  const retry = event.target.closest("[data-orders-retry]");
  const startShopping = event.target.closest("[data-orders-start-shopping]");
  const writeReview = event.target.closest("[data-order-write-review]");

  if (writeReview) {
    openWriteReview({
      productId: writeReview.dataset.orderWriteReview,
      orderId: writeReview.dataset.reviewOrder,
      productName: writeReview.dataset.reviewName,
    });
    return;
  }

  if (detail) {
    openOrderDetail(detail.dataset.orderDetail);
    return;
  }

  if (retry) {
    loadOrders();
    return;
  }

  if (startShopping) {
    els.ordersDialog.close();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

async function handleCheckoutSubmit(event) {
  const receiverForm = event.target.closest("[data-add-receiver-form]");
  const addressForm = event.target.closest("[data-add-address-form]");
  if (!receiverForm && !addressForm) return;
  event.preventDefault();

  if (receiverForm) await createReceiver();
  if (addressForm) await createAddress();
}

async function createReceiver() {
  const firstName = document.getElementById("receiverFirstName")?.value.trim();
  const lastName = document.getElementById("receiverLastName")?.value.trim();
  const phone = document.getElementById("receiverPhone")?.value.trim();
  const error = document.getElementById("receiverFormError");

  if (!firstName || !lastName || !phone) {
    if (error) error.textContent = "First name, last name va phone majburiy.";
    return;
  }

  const response = await apiFetch("/api/receivers", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({ firstName, lastName, phone }),
  });
  if (response !== null) {
    await loadReceivers(response.id);
    renderCheckout();
    showToast("Receiver added");
  }
}

async function createAddress() {
  const title = document.getElementById("addressTitle")?.value.trim();
  const address = document.getElementById("addressText")?.value.trim();
  const latitude = Number(document.getElementById("addressLatitude")?.value);
  const longitude = Number(document.getElementById("addressLongitude")?.value);
  const error = document.getElementById("addressFormError");

  if (!title || !address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    if (error) error.textContent = "Title, address, latitude va longitude majburiy.";
    return;
  }

  const response = await apiFetch("/api/addresses", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({ title, address, latitude, longitude }),
  });
  if (response !== null) {
    await loadAddresses(response.id);
    renderCheckout();
    showToast("Address added");
  }
}

async function deleteReceiverById(id) {
  const response = await apiFetch(`/api/receivers/${id}`, { method: "DELETE", requireAuth: true });
  if (response !== null) {
    if (String(state.selectedReceiverId) === String(id)) state.selectedReceiverId = null;
    await loadReceivers();
    renderCheckout();
  }
}

async function deleteAddressById(id) {
  const response = await apiFetch(`/api/addresses/${id}`, { method: "DELETE", requireAuth: true });
  if (response !== null) {
    if (String(state.selectedAddressId) === String(id)) state.selectedAddressId = null;
    await loadAddresses();
    renderCheckout();
  }
}

async function placeOrder() {
  if (!state.selectedReceiverId || !state.selectedAddressId || !state.cartItems.length) return;

  state.orderSubmitting = true;
  renderCheckout();
  const response = await apiFetch("/api/orders", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({
      receiverId: Number(state.selectedReceiverId),
      addressId: Number(state.selectedAddressId),
      cartItemIds: state.cartItems.map((item) => Number(item.id)),
    }),
    showError: false,
  });
  state.orderSubmitting = false;

  if (response === null) {
    state.checkoutError = state.lastApiError || "Order could not be created.";
    renderCheckout();
    showToast(state.checkoutError, "error");
    return;
  }

  state.orderSuccess = response;
  await loadCart();
  await loadUnreadCount();
  closeCart();
  renderCheckout();
  showToast("Order created", "success");
}

async function submitProfileEdit(event) {
  event.preventDefault();
  const user = state.user || {};
  const body = {
    id: user.id,
    email: user.email,
    fullName: document.getElementById("profileFullName")?.value.trim(),
    phone: document.getElementById("profilePhone")?.value.trim(),
    profileImage: document.getElementById("profileImage")?.value.trim(),
  };

  const message = document.getElementById("profileMessage");
  if (!body.fullName || !body.phone) {
    if (message) {
      message.textContent = "Full name va phone majburiy.";
      message.className = "form-message error";
    }
    return;
  }

  const response = await apiFetch("/api/users/me", {
    method: "PUT",
    requireAuth: true,
    body: JSON.stringify(body),
    showError: false,
  });

  if (response === null) {
    if (message) {
      message.textContent = state.lastApiError || "Profile yangilanmadi.";
      message.className = "form-message error";
    }
    return;
  }

  const fresh = await apiFetch("/api/users/me", { requireAuth: true, showError: false });
  if (fresh) {
    state.user = fresh;
    localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(fresh));
  }
  state.profileEditing = false;
  updateAuthUi();
  renderProfile();
  showToast("Profile updated.");
}

/* ================= EVENT HANDLERS ================= */

export function bindEvents() {
  els.languageSelect?.addEventListener("change", (event) => setLanguage(event.target.value));
  els.searchForm.addEventListener("submit", (event) => event.preventDefault());
  els.searchInput.addEventListener("input", handleSearchInput);
  els.categoryToolbar.addEventListener("click", handleCategoryClick);
  els.quickCategoryGrid.addEventListener("click", handleCategoryClick);
  els.catalogList.addEventListener("click", handleCategoryClick);
  els.banners.addEventListener("click", handleBannerClick);
  els.homeView?.addEventListener("click", handleProductGridClick);
  els.homeView?.addEventListener("keydown", handleProductCardKeydown);
  document.getElementById("brandViewContent")?.addEventListener("click", handleProductGridClick);
  els.detailContent.addEventListener("click", handleDetailClick);
  els.productDetailPageContent.addEventListener("click", (event) => {
    if (!handleDetailClick(event)) {
      handleProductGridClick(event);
    }
  });
  els.productDetailPageContent.addEventListener("input", (event) => {
    if (event.target.matches("[data-review-search]")) {
      state.reviewSearchQuery = event.target.value;
      renderProductDetail(state.selectedDetailProduct);
    }
  });
  els.productDetailPageContent.addEventListener("change", (event) => {
    if (event.target.matches("[data-review-sort]")) {
      state.reviewSort = event.target.value;
      renderProductDetail(state.selectedDetailProduct);
    }
    if (event.target.matches("[data-review-filter-rating]")) {
      state.reviewFilterRating = Number(event.target.value);
      renderProductDetail(state.selectedDetailProduct);
    }
  });
  els.cartItems.addEventListener("click", handleCartClick);
  els.cartItems.addEventListener("change", handleCartChange);
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
  els.googleLoginButton?.addEventListener("click", submitFirebaseLogin);
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
  els.closeProfile?.addEventListener("click", closeProfile);
  els.profileContent.addEventListener("click", (event) => {
    if (!handleProductGridClick(event)) handleProfileAction(event);
  });
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

function handleSearchInput(event) {
  clearTimeout(state.searchTimer);
  state.searchTimer = setTimeout(() => {
    const query = event.target.value;
    renderSearchResults(query).catch(() => {
      renderEmpty(els.grid, "Qidiruv vaqtida xatolik yuz berdi.");
      els.status.textContent = "";
    });
    if (query.trim().length >= 2) {
      saveSearchHistory(query);
    }
  }, CONFIG.searchDebounceMs);
}

function handleCategoryClick(event) {
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

function handleProductCardKeydown(event) {
  if (event.key !== "Enter" && event.key !== " ") return;
  const card = event.target.closest("[data-product]");
  if (!card) return;
  event.preventDefault();
  const productId = card.dataset.product;
  if (!productId) return;
  sendProductClick(productId);
  openProductDetail(productId);
}

function handleProductGridClick(event) {
  const showAll = event.target.closest("[data-show-all]");
  const favorite = event.target.closest("[data-favorite]");
  const add = event.target.closest("[data-add]");
  const detail = event.target.closest("[data-detail]");
  const quickView = event.target.closest("[data-quick-view]");
  const compare = event.target.closest("[data-compare]");
  const card = event.target.closest("[data-product]");

  if (showAll) {
    event.stopPropagation();
    loadHome();
    return;
  }

  if (compare) {
    event.stopPropagation();
    toggleCompareProduct(compare.dataset.compare);
    return;
  }

  if (quickView) {
    event.stopPropagation();
    sendProductClick(quickView.dataset.quickView);
    navigateToProduct(quickView.dataset.quickView);
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

  if (detail) {
    event.stopPropagation();
    const productId = detail.dataset.detail;
    if (!productId) return;
    sendProductClick(productId);
    openProductDetail(productId);
    return;
  }

  if (card && !event.target.closest("button, a")) {
    event.preventDefault();
    event.stopPropagation();
    const productId = card.dataset.product;
    if (!productId) return;
    sendProductClick(productId);
    openProductDetail(productId);
  }
}

function handleBannerClick(event) {
  const dot = event.target.closest("[data-banner-dot]");
  if (dot) {
    scrollToBanner(Number(dot.dataset.bannerDot));
    resetBannerAutoSlide();
    return;
  }

  const nav = event.target.closest("[data-banner-nav]");
  if (nav) {
    if (nav.dataset.bannerNav === "next") nextBanner();
    else prevBanner();
    resetBannerAutoSlide();
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
      showToast("Category banner is not available yet.", "info");
    }
  }
}

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
  const reviewSearch = event.target.closest("[data-review-search]");
  const reviewSort = event.target.closest("[data-review-sort]");
  const reviewFilter = event.target.closest("[data-review-filter-rating]");

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
    renderCategoryProducts(categoryButton.dataset.category);
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
    state.pdpGalleryIndex = Number(pdpThumb.dataset.pdpThumb);
    renderProductDetail(state.selectedDetailProduct);
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
    state.pdpActiveTab = pdpTab.dataset.pdpTab;
    renderProductDetail(state.selectedDetailProduct);
    return true;
  }

  if (compare) {
    event.stopPropagation();
    toggleCompareProduct(compare.dataset.compare);
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

  if (reviewHelpful) {
    event.stopPropagation();
    const id = reviewHelpful.dataset.reviewHelpful;
    if (state.reviewHelpfulIds.has(id)) state.reviewHelpfulIds.delete(id);
    else state.reviewHelpfulIds.add(id);
    renderProductDetail(state.selectedDetailProduct);
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

function handleCartChange(event) {
  const target = event.target;
  if (!target.matches("[data-cart-select-all], [data-cart-item-check]")) return;

  if (target.matches("[data-cart-select-all]")) {
    const ids = getCartSelectedIds();
    if (target.checked) {
      state.cartItems.forEach((item) => ids.add(String(item.id)));
    } else {
      ids.clear();
    }
    renderCart();
    return;
  }

  const id = String(target.dataset.cartItemCheck || "");
  if (!id) return;
  if (target.checked) getCartSelectedIds().add(id);
  else getCartSelectedIds().delete(id);
  renderCart();
}

function handleCartClick(event) {
  const retry = event.target.closest("[data-cart-retry]");
  const startShopping = event.target.closest("[data-start-shopping]");
  const qty = event.target.closest("[data-cart-qty]");
  const remove = event.target.closest("[data-remove]");
  const saveLater = event.target.closest("[data-save-later]");
  const deleteSelected = event.target.closest("[data-cart-delete-selected]");
  if (retry) loadCart();
  if (startShopping) {
    closeCart();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (deleteSelected && !deleteSelected.disabled) {
    removeSelectedCartItems();
    return;
  }
  if (saveLater) {
    const item = state.cartItems.find((i) => String(i.id) === String(saveLater.dataset.saveLater));
    if (item) {
      saveForLaterItem(item);
      removeCartItem(item.id);
    }
    return;
  }
  if (qty) {
    const item = state.cartItems.find((cartItem) => String(cartItem.id) === String(qty.dataset.cartId));
    if (item) updateCartQuantity(item.id, item.quantity + (qty.dataset.cartQty === "plus" ? 1 : -1));
  }
  if (remove) removeCartItem(remove.dataset.remove);
}

function openCart() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }
  els.cartDrawer.classList.add("open");
  els.cartDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  loadCart();
}

function closeCart() {
  els.cartDrawer.classList.remove("open");
  els.cartDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

function openCatalog() {
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

function closeCatalog() {
  const megaMenu = document.getElementById("megaMenu");
  megaMenu?.classList.remove("open");
  megaMenu?.setAttribute("aria-hidden", "true");
  els.catalogDrawer.classList.remove("open");
  els.catalogDrawer.setAttribute("aria-hidden", "true");
  els.catalogButton.setAttribute("aria-expanded", "false");
  unlockBodyIfNoOverlay();
}

function lockBody() {
  document.body.classList.add("locked");
}

function unlockBodyIfNoOverlay() {
  const compareOpen = document.getElementById("compareDrawer")?.classList.contains("open");
  const hasOpenDrawer = els.cartDrawer.classList.contains("open") || els.catalogDrawer.classList.contains("open") || els.profileDrawer.classList.contains("open") || els.notificationsDrawer.classList.contains("open") || compareOpen;
  const hasOpenDialog = [els.detailDialog, els.authDialog, els.apiDialog, els.checkoutDialog, els.ordersDialog, els.favoritesDialog, els.myReviewsDialog, els.writeReviewDialog, document.getElementById("compareDialog")].some((dialog) => dialog?.open);
  if (!hasOpenDrawer && !hasOpenDialog) {
    document.body.classList.remove("locked");
  }
}

function openApiDialog() {
  els.baseUrl.value = state.baseUrl;
  els.apiDialog.showModal();
  lockBody();
}

function saveApiBaseUrl(event) {
  event.preventDefault();
  state.baseUrl = normalizeSavedBaseUrl(els.baseUrl.value || "");
  localStorage.setItem(CONFIG.storageKeys.baseUrl, state.baseUrl);
  els.apiDialog.close();
  loadHome();
}

async function toggleFavorite(productId) {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  const wasFavorite = state.favoriteIds.has(String(productId));
  const response = await apiFetch(`/api/favorites/${productId}/toggle`, {
    method: "POST",
    requireAuth: true,
  });

  if (response === null) return;

  const isFavorite = typeof response === "object" && "favorite" in response ? Boolean(response.favorite) : !wasFavorite;
  const existingProduct = findKnownProduct(productId);

  if (isFavorite) {
    const product = existingProduct ? { ...existingProduct, favorite: true } : null;
    if (product && !state.favoriteProducts.some((item) => String(item.id) === String(productId))) {
      state.favoriteProducts = [product, ...state.favoriteProducts];
    }
  } else {
    state.favoriteProducts = state.favoriteProducts.filter((product) => String(product.id) !== String(productId));
  }

  state.favoriteIds = new Set(state.favoriteProducts.map((product) => String(product.id)));
  state.favoritesCount = state.favoriteProducts.length;
  syncProductFavorites();
  updateFavoritesUi();
  if (state.products.length) renderProductList(els.grid, state.products, "Mahsulot topilmadi.");
  if (state.todayDeals.length) renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), "Bugungi takliflar topilmadi.");
  if (state.selectedDetailProduct?.id !== undefined && String(state.selectedDetailProduct.id) === String(productId)) {
    renderProductDetail(state.selectedDetailProduct);
  }
  if (els.favoritesDialog.open) renderFavorites();
  const favBtn = document.querySelector(`[data-favorite="${productId}"]`);
  if (favBtn && isFavorite) favoritePop(favBtn);
  showToast(isFavorite ? t("favorites.added") : t("favorites.removed"), "success");
  if (isFavorite && !existingProduct) await loadFavorites({ render: els.favoritesDialog.open });
}

function findKnownProduct(productId) {
  return [...state.products, ...state.todayDeals, ...state.favoriteProducts, state.selectedDetailProduct]
    .filter(Boolean)
    .find((product) => String(product.id) === String(productId));
}

function rerenderLanguageSensitiveUi() {
  applyTranslations(state);
  renderCategories();
  syncModeBadges();
  if (state.currentRoute === "product" && state.selectedDetailProduct) {
    renderProductDetail(state.selectedDetailProduct);
  } else {
    renderProductList(els.grid, state.products, t("home.noProducts"), { screen: state.currentGridScreen });
    renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), t("home.noProducts"));
    if (state.homeApiSections) renderHomeApiSections(state.homeApiSections);
  }
  if (els.cartDrawer.classList.contains("open")) renderCart();
  if (els.profileDrawer.classList.contains("open")) renderProfile();
  if (els.favoritesDialog.open) renderFavorites();
  if (els.ordersDialog.open) renderOrders();
  if (els.notificationsDrawer.classList.contains("open")) renderNotifications();
  if (els.myReviewsDialog.open) renderMyReviews();
  updateAuthUi();
}

setLanguageChangeHandler(rerenderLanguageSensitiveUi);

export async function init() {
  configureApiClient({
    onUnauthorized: () => {
      clearAuth();
      openAuthDialog("login");
      showToast(t("auth.sessionExpired"));
    },
    onLoginRequired: showLoginRequired,
    showToast: (message, type = "error") => showToast(message, type),
  });

  try {
    bindEvents();
    initPremiumUi();
    applyTranslations(state);
  } catch (error) {
    console.error("Init event binding failed:", error);
    els.status.textContent = `UI ishga tushishda xatolik yuz berdi: ${error.message}`;
    showToast("UI ishga tushishda xatolik yuz berdi.");
    return;
  }

  updateAuthUi();
  validateAuthOnStartup().catch((error) => {
    console.error("Auth startup failed:", error);
  });
  loadHome()
    .then(() => handleRoute())
    .catch((error) => {
      console.error("Home loading failed:", error);
      state.demoProducts = false;
      state.demoDeals = false;
      els.status.textContent = "";
      els.dealsStatus.textContent = "";
      renderEmpty(els.grid, t("common.serverFailed"), t("common.tryAgain"));
      syncModeBadges();
      handleRoute();
    });
}

export {
  productCard,
  renderProductList,
  renderSkeleton,
  renderEmpty,
  renderCart,
  renderBanners,
  renderCategories,
  renderProductDetail,
  renderFavorites,
  renderOrders,
  renderCheckout,
  renderNotifications,
  openAuthDialog,
  openCart,
  closeCart,
  loadCart,
  addToCart,
  toggleFavorite,
  renderSearchResults,
  renderCategoryProducts,
  loadProductDetailPage,
  routeHome,
  showHomeView,
  showProductView,
  prepareCheckout,
  placeOrder
};
