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

export async function loadHome() {
  state.selectedCategory = "ALL";
  state.currentSearchQuery = "";
  state.currentGridScreen = "home";
  state.feedPage = 0;
  els.title.textContent = t("home.popular");
  els.status.textContent = t("home.loading");
  renderSkeleton(els.grid, 12);
  renderSkeleton(els.dealsGrid, 6);
  await Promise.all([loadCategories(), loadBanners(), loadAnnouncements()]);
  const homeLoaded = await loadHomeApi();
  if (!homeLoaded) {
    await Promise.all([loadProducts(), loadTodayDeals()]);
  }
  await loadRecentlyViewed();
  await loadCart();
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
  syncProductFavorites();
  renderHomeApiSections({ hits, discounts, newArrivals });
  renderProductList(els.grid, state.products, t("home.noProducts"), { screen: "home" });
  renderProductList(els.dealsGrid, discounts.slice(0, 8), "Chegirmalar topilmadi.", { screen: "home-discounts" });
  els.status.textContent = "";
  els.dealsStatus.textContent = "";
  syncModeBadges();
  return true;
}


export function renderHomeApiSections(sections) {
  const configs = [
    ["Hits", "Best picks", sections.hits, "home-hits"],
    ["Discounts", "Deals", sections.discounts, "home-discounts"],
    ["New Arrivals", "Fresh", sections.newArrivals, "home-new"],
  ];
  const html = configs
    .filter(([, , products]) => products.length)
    .map(([title, eyebrow, products, screen]) => `
      <section class="home-product-strip">
        <div class="section-head">
          <div><p class="eyebrow">${escapeHtml(eyebrow)}</p><h2>${escapeHtml(title)}</h2></div>
        </div>
        <div class="product-grid home-strip-grid">
          ${products.slice(0, 10).map((product, index) => productCard(product, { screen, position: index })).join("")}
        </div>
      </section>
    `).join("");
  els.homeApiSections.hidden = !html;
  els.homeApiSections.innerHTML = html;
  observeProductImpressions(els.homeApiSections);
}


export function uniqueProductById(product, index, list) {
  return product?.id !== undefined && list.findIndex((item) => String(item.id) === String(product.id)) === index;
}


export async function loadCategories() {
  const response = await apiFetch("/api/categories", { showError: false });
  const categories = getPageContent(response).map(normalizeCategory).filter(Boolean);

  if (categories.length) {
    state.categories = categories;
    state.demoCategories = false;
  } else {
    state.categories = ["SKINCARE", "MAKEUP", "COLLAGEN", "HAIR_CARE", "FRAGRANCE"];
    state.demoCategories = true;
  }

  syncModeBadges();
  renderCategories();
}


export async function loadBanners() {
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


export function renderBanners() {
  if (!state.banners.length) {
    els.banners.hidden = true;
    els.banners.innerHTML = "";
    return;
  }

  els.banners.hidden = false;
  els.banners.innerHTML = `
    <button class="banner-arrow prev" data-banner-nav="prev" type="button" aria-label="Oldingi banner">‹</button>
    <div class="banner-track">
      ${state.banners.map((banner) => `
        <article class="banner-card ${banner.imageUrl ? "has-image" : ""}" data-banner-link-type="${escapeHtml(banner.linkType)}" data-banner-link-id="${escapeHtml(banner.linkId ?? "")}">
          <span class="ad-badge">Reklama</span>
          ${banner.imageUrl ? `<img src="${escapeHtml(banner.imageUrl)}" alt="${escapeHtml(banner.title || "Banner")}" />` : ""}
          <div>
            <strong>${escapeHtml(banner.title || "BEAUTY SKIN KOREA")}</strong>
            ${banner.subtitle ? `<p>${escapeHtml(banner.subtitle)}</p>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
    <button class="banner-arrow next" data-banner-nav="next" type="button" aria-label="Keyingi banner">›</button>
    <div class="banner-dots">${state.banners.map((_, index) => `<span class="${index === 0 ? "active" : ""}"></span>`).join("")}</div>
  `;
}


export async function loadAnnouncements() {
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


export function renderAnnouncements() {
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


export async function loadRecentlyViewed() {
  const ids = getRecentProductIds();
  if (!ids.length) {
    els.recentlyViewedSection.hidden = true;
    return;
  }

  const response = await apiFetch("/api/products/by-ids", {
    method: "POST",
    body: JSON.stringify(ids.map(Number).filter(Number.isFinite)),
    showError: false,
  });
  const products = getPageContent(response).map(normalizeProduct).filter((product) => product.id);
  if (!products.length) {
    els.recentlyViewedSection.hidden = true;
    return;
  }

  els.recentlyViewedSection.hidden = false;
  renderProductList(els.recentlyViewedGrid, products, "Recently viewed is empty.", { screen: "recent" });
}


export function getRecentProductIds() {
  try {
    return JSON.parse(localStorage.getItem(CONFIG.storageKeys.recentProducts) || "[]").filter(Boolean);
  } catch {
    return [];
  }
}


export function addRecentProduct(productId) {
  if (!productId || String(productId).startsWith("demo-")) return;
  const ids = [String(productId), ...getRecentProductIds().filter((id) => String(id) !== String(productId))].slice(0, 12);
  localStorage.setItem(CONFIG.storageKeys.recentProducts, JSON.stringify(ids));
}


export async function loadProducts() {
  els.status.textContent = "Yuklanmoqda...";
  renderSkeleton(els.grid, 12);
  const response = await apiFetch("/api/products", {
    query: { page: 0, size: CONFIG.defaultPageSize },
    showError: false,
  });
  const products = getPageContent(response).map(normalizeProduct);

  if (products.length) {
    state.products = products;
    state.demoProducts = false;
  } else {
    state.products = DEMO_PRODUCTS.map(normalizeProduct);
    state.demoProducts = true;
  }

  syncProductFavorites();
  syncModeBadges();
  renderProductList(els.grid, state.products, "Mahsulot topilmadi.");
  els.status.textContent = "";
}


export async function loadMoreProducts() {
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
  renderProductList(els.grid, state.products, "Mahsulot topilmadi.", { screen: state.currentGridScreen || "home" });

  state.feedLoading = false;
  els.loadMore.disabled = false;
  els.loadMore.textContent = nextProducts.length ? "Yana yuklash" : "Boshqa mahsulot topilmadi";
}


export async function loadTodayDeals() {
  els.dealsStatus.textContent = "Yuklanmoqda...";
  renderSkeleton(els.dealsGrid, 5);
  const response = await apiFetch("/api/products/today-deals", { showError: false });
  const products = getPageContent(response).map(normalizeProduct);

  if (products.length) {
    state.todayDeals = products;
    state.demoDeals = false;
  } else {
    state.todayDeals = DEMO_PRODUCTS.map((product) => normalizeProduct({ ...product, todayDeal: true }));
    state.demoDeals = true;
  }

  syncProductFavorites();
  syncModeBadges();
  renderProductList(els.dealsGrid, state.todayDeals.slice(0, 8), t("home.noProducts"));
  els.dealsStatus.textContent = "";
}


export function renderCategories() {
  const buttons = ["ALL", ...state.categories].map((category) => `
    <button class="chip ${state.selectedCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
      ${category === "ALL" ? escapeHtml(t("home.all")) : escapeHtml(categoryLabel(category))}
    </button>
  `);
  els.categoryToolbar.innerHTML = buttons.join("");
  renderCatalogList();
  renderQuickCategories();
}


export function renderCatalogList() {
  const categories = ["ALL", ...state.categories];
  els.catalogList.innerHTML = categories.map((category) => `
    <button class="catalog-item ${state.selectedCategory === category ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
      <span>${category === "ALL" ? escapeHtml(t("home.showAll")) : escapeHtml(categoryLabel(category))}</span>
      <span>${category === "ALL" ? "→" : "›"}</span>
    </button>
  `).join("");
}


export function renderQuickCategories() {
  els.quickCategoryGrid.innerHTML = QUICK_CATEGORIES.map((item) => `
    <button class="quick-card" data-category="${escapeHtml(item.category)}" type="button">
      <span>${escapeHtml(item.icon)}</span>
      ${escapeHtml(categoryLabel(item.category))}
    </button>
  `).join("");
}


export function showHomeView() {
  state.currentRoute = "home";
  els.homeView.hidden = false;
  els.productDetailPage.hidden = true;
  document.title = "BEAUTY SKIN KOREA";
}


export function showProductView() {
  state.currentRoute = "product";
  els.homeView.hidden = true;
  els.productDetailPage.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}


export function routeHome() {
  if (window.location.hash && window.location.hash !== "#/" && window.location.hash !== "#") {
    window.location.hash = "#/";
  } else {
    showHomeView();
  }
}

