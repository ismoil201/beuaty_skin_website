/* ================= PAGE RENDERERS ================= */

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

export async function handleRoute() {
  const hash = window.location.hash || "#/";
  const match = hash.match(/^#\/product\/([^/?#]+)/);

  if (match) {
    showProductView();
    await loadProductDetailPage(decodeURIComponent(match[1]));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  showHomeView();
}

export async function renderSearchResults(query) {
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
  renderProductList(els.grid, state.products, t("home.noProducts"), { screen: "search" });
  els.status.textContent = "";
}

export async function renderCategoryProducts(category) {
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
  renderProductList(els.grid, state.products, t("home.noProducts"), { screen: "category" });
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

export async function openProductDetail(productId) {
  navigateToProduct(productId);
}

export async function loadProductDetailPage(productId) {
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
  document.title = `${product.name} - BEAUTY SKIN KOREA`;
  addRecentProduct(product.id);
  sendProductView(product.id);
  renderProductDetail(product);
  loadProductReviews(product.id);
  loadRecommendedProducts(product);
}

export function renderDetailLoading(pageMode = false) {
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

export function renderProductDetailError() {
  els.productDetailPageContent.innerHTML = `
    <div class="detail-error-page">
      <strong>${escapeHtml(t("product.notFound"))}</strong>
      <p>${escapeHtml(state.detailError || "Mahsulot topilmadi.")}</p>
      <button class="primary-button" data-route-home type="button">${escapeHtml(t("product.backToShopping"))}</button>
    </div>
  `;
}

export function renderProductDetail(product) {
  const selectedVariant = product.variants.find((variant) => String(variant.id) === String(state.selectedVariantId)) || null;
  const gallery = [...product.images, ...product.detailImages].filter(Boolean);
  const currentPrice = selectedVariant?.discountPrice ?? selectedVariant?.price ?? product.finalPrice;
  const originalPrice = selectedVariant?.price ?? product.originalPrice;
  const variantStock = selectedVariant?.stock ?? product.stock;
  const isFavorite = state.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
  const pageMode = state.currentRoute === "product";
  const target = pageMode ? els.productDetailPageContent : els.detailContent;

  target.innerHTML = `
    ${pageMode ? `
      <div class="breadcrumbs">
        <button data-route-home type="button">${escapeHtml(t("product.home") || t("home.all"))}</button>
        <span>/</span>
        <button data-category="${escapeHtml(product.category || "ALL")}" type="button">${escapeHtml(product.category ? categoryLabel(product.category) : t("header.catalog"))}</button>
        <span>/</span>
        <span>${escapeHtml(shortText(product.name, 42))}</span>
      </div>
    ` : `
      <div class="drawer-head">
        <h2>Mahsulot tafsiloti</h2>
        <button class="icon-button" data-close-detail type="button" aria-label="Yopish">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
        </button>
      </div>
    `}
    <div class="detail-layout">
      <div class="detail-gallery">
        <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" />
        ${gallery.length > 1 ? `<div class="detail-thumbs">${gallery.slice(0, 8).map((image) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)}" />`).join("")}</div>` : ""}
      </div>
      <div class="detail-info">
        <p class="hint">${escapeHtml(product.brand || product.category)} · ★ ${product.ratingAvg.toFixed(1)} (${product.reviewCount}) · ${product.soldCount} dona sotilgan</p>
        <h2 class="detail-title">${escapeHtml(product.name)}</h2>
        <h3>${formatPrice(currentPrice)}</h3>
        ${originalPrice > currentPrice ? `<p class="old-price">${formatPrice(originalPrice)}</p>` : ""}
        <button class="secondary-button detail-favorite ${isFavorite ? "active" : ""}" data-detail-favorite="${escapeHtml(product.id)}" type="button">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
          ${escapeHtml(isFavorite ? t("product.saved") : t("product.save"))}
        </button>
        ${product.variants.length ? renderVariantButtons(product) : `<p class="hint">${escapeHtml(t("product.variantUnavailable"))}</p>`}
        <p class="hint">${escapeHtml(t("product.stock", { count: variantStock ?? 0 }))}</p>
        <div class="quantity-row">
          <button class="secondary-button" data-qty="minus" type="button">-</button>
          <input id="quantityInput" value="${state.selectedQuantity}" inputmode="numeric" />
          <button class="secondary-button" data-qty="plus" type="button">+</button>
        </div>
        <button class="primary-button full" data-detail-add type="button">${escapeHtml(t("product.addToCartFull"))}</button>
        <div class="delivery-info">
          <span>${escapeHtml(t("product.delivery"))}</span>
          <span>${escapeHtml(t("product.secure"))}</span>
          <span>${escapeHtml(t("product.original"))}</span>
        </div>
        <div class="detail-tabs">
          <section><strong>${escapeHtml(t("product.description"))}</strong><p class="hint">${escapeHtml(product.description || t("common.unavailable"))}</p></section>
          ${product.detailImages.length ? `<section><strong>${escapeHtml(t("product.detailImages"))}</strong><div class="detail-image-stack">${product.detailImages.map((image) => `<img src="${escapeHtml(image)}" alt="${escapeHtml(product.name)} detail" loading="lazy" />`).join("")}</div></section>` : ""}
          <section><strong>${escapeHtml(t("product.details"))}</strong><p class="hint">${escapeHtml(t("home.categories"))}: ${escapeHtml(product.category ? categoryLabel(product.category) : "-")} · Brand: ${escapeHtml(product.brand || "-")}</p></section>
          <section><strong>${escapeHtml(t("product.reviews"))}</strong>${renderProductReviews(product.id)}</section>
        </div>
      </div>
    </div>
    ${pageMode ? renderRecommendations() : ""}
    ${pageMode ? `
      <div class="mobile-buy-bar">
        <strong>${formatPrice(currentPrice)}</strong>
        <button class="primary-button" data-detail-add type="button">${escapeHtml(t("product.addToCart"))}</button>
      </div>
    ` : ""}
  `;
  observeProductImpressions(target);
}

export async function loadRecommendedProducts(product) {
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

export function renderRecommendations() {
  if (state.recommendationsLoading) {
    return `
      <section class="recommended-section">
        <div class="section-head"><div><p class="eyebrow">${escapeHtml(t("home.recommended"))}</p><h2>${escapeHtml(t("home.recommended"))}</h2></div></div>
        <div class="recommended-grid product-grid">
          <div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div><div class="skeleton-card"></div>
        </div>
      </section>
    `;
  }

  if (state.recommendationsError) {
    return `
      <section class="recommended-section">
        <div class="detail-error-page compact">
          <strong>Recommendations unavailable</strong>
          <p>${escapeHtml(state.recommendationsError)}</p>
        </div>
      </section>
    `;
  }

  const apiSections = [
    [t("home.similar"), state.recommendedSimilar || [], "recommendations"],
    [t("home.others"), state.recommendedOthers || [], "recommendations"],
  ].filter(([, products]) => products.length);

  if (apiSections.length) {
    return apiSections.map(([title, products, screen]) => `
      <section class="recommended-section">
        <div class="section-head">
          <div>
          <p class="eyebrow">${escapeHtml(t("home.recommended"))}</p>
            <h2>${escapeHtml(title)}</h2>
          </div>
        </div>
        <div class="recommended-grid product-grid">
          ${products.map((product, index) => productCard(product, { screen, position: index })).join("")}
        </div>
      </section>
    `).join("");
  }

  if (!state.recommendedProducts.length) return "";

  return `
    <section class="recommended-section">
      <div class="section-head">
        <div>
          <p class="eyebrow">${escapeHtml(t("home.recommended"))}</p>
          <h2>${escapeHtml(t("home.recommended"))}</h2>
        </div>
      </div>
      <div class="recommended-grid product-grid">
        ${state.recommendedProducts.map(productCard).join("")}
      </div>
    </section>
  `;
}

export async function loadProductReviews(productId) {
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

export function renderProductReviews(productId) {
  const key = String(productId);
  const reviews = state.productReviewsByProductId[key] || [];
  const loading = state.productReviewsLoading[key];
  const error = state.productReviewsError[key];

  if (loading) {
    return "<div class=\"reviews-loading\"><div class=\"skeleton-card\"></div></div>";
  }

  if (error) {
    return `
      <div class="reviews-inline-error">
        <p>${escapeHtml(error)}</p>
        <button class="secondary-button" data-reviews-retry="${escapeHtml(productId)}" type="button">Retry</button>
      </div>
    `;
  }

  if (!reviews.length) {
    return `<div class="reviews-empty"><strong>${escapeHtml(t("reviews.none"))}</strong><p class="hint">${escapeHtml(t("reviews.none"))}</p></div>`;
  }

  const stats = reviewStats(reviews);
  return `
    <div class="review-summary">
      <div>
        <strong>${stats.average.toFixed(1)}</strong>
        ${renderStars(stats.average, "Average rating")}
      </div>
      <p class="hint">${stats.count} ${escapeHtml(t("product.reviews"))}</p>
    </div>
    <div class="review-list">
      ${reviews.map(renderReviewCard).join("")}
    </div>
  `;
}

export function renderReviewCard(review) {
  return `
    <article class="review-card">
      <div class="review-head">
        <div>
          <strong>${escapeHtml(review.userName)}</strong>
          <p class="hint">${formatDateTime(review.createdAt)}</p>
        </div>
        ${renderStars(review.rating)}
      </div>
      <p>${escapeHtml(review.content || t("reviews.noText"))}</p>
      ${review.imageUrls.length ? `<div class="review-images">${review.imageUrls.slice(0, 5).map((url) => `<img src="${escapeHtml(url)}" alt="Review image" loading="lazy" />`).join("")}</div>` : ""}
    </article>
  `;
}

export function renderVariantButtons(product) {
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

export function pickDefaultVariant(product) {
  return product.variants.find((variant) => Number(variant.stock || 0) > 0) || product.variants[0] || null;
}

/* ================= CART / ORDER RENDERERS ================= */

export async function addToCart(productId, variantId, quantity) {
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
    showToast(t("product.variantUnavailable"));
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
    showToast(t("cart.added"));
    await loadCart();
  }
}

export function renderAddToCartLoading() {
  const detailButtons = document.querySelectorAll("[data-detail-add]");
  detailButtons.forEach((detailButton) => {
    const loading = state.addingProductIds.has(String(state.selectedDetailProduct?.id));
    detailButton.disabled = loading;
    detailButton.textContent = loading ? t("product.adding") : (detailButton.closest(".mobile-buy-bar") ? t("product.addToCart") : t("product.addToCartFull"));
  });
}

export async function loadCart() {
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

export function renderCart() {
  els.cartCount.textContent = state.cartCount;
  els.cartSummary.textContent = t("orders.items", { count: state.cartCount });
  els.cartTotal.textContent = formatPrice(state.cartTotal);

  if (state.cartLoading) {
    els.cartItems.innerHTML = "<div class=\"cart-loading\"><div class=\"skeleton-card\"></div><div class=\"skeleton-card\"></div></div>";
    els.checkoutButton.disabled = true;
    return;
  }

  if (state.cartError) {
    els.cartItems.innerHTML = `
      <div class="cart-empty">
        <strong>${escapeHtml(t("cart.unavailable"))}</strong>
        <p>${escapeHtml(state.cartError)}</p>
        <button class="secondary-button" data-cart-retry type="button">${escapeHtml(t("common.tryAgain"))}</button>
      </div>
    `;
    els.checkoutButton.disabled = true;
    return;
  }

  els.checkoutButton.disabled = !state.cartItems.length;
  els.cartItems.innerHTML = state.cartItems.length
    ? state.cartItems.map((item) => `
      <article class="cart-item ${state.cartUpdatingIds.has(String(item.id)) ? "loading" : ""}">
        <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
        <div>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="hint">${escapeHtml(item.brand || "BEAUTY SKIN KOREA")} ${item.variantLabel ? `· ${escapeHtml(item.variantLabel)}` : ""}</p>
          <p>${formatPrice(item.unitPrice)} · ${escapeHtml(t("common.total"))}: ${formatPrice(item.lineTotal)}</p>
          <div class="cart-stepper">
            <button data-cart-qty="minus" data-cart-id="${escapeHtml(item.id)}" ${item.quantity <= 1 ? "disabled" : ""} type="button">-</button>
            <span>${item.quantity}</span>
            <button data-cart-qty="plus" data-cart-id="${escapeHtml(item.id)}" type="button">+</button>
          </div>
        </div>
        <button class="icon-button" data-remove="${escapeHtml(item.id)}" type="button" aria-label="${escapeHtml(t("cart.remove"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
        </button>
      </article>
    `).join("")
    : `
      <div class="cart-empty">
        <strong>${escapeHtml(t("cart.empty"))}</strong>
        <p>Add products you like and they will appear here.</p>
        <button class="primary-button" data-start-shopping type="button">${escapeHtml(t("home.startShopping"))}</button>
      </div>
    `;
}

export async function removeCartItem(cartItemId) {
  state.cartUpdatingIds.add(String(cartItemId));
  renderCart();
  const result = await apiFetch(`/api/cart/${cartItemId}`, {
    method: "DELETE",
    requireAuth: true,
  });
  state.cartUpdatingIds.delete(String(cartItemId));

  if (result !== null) {
    showToast(t("cart.itemRemoved"));
    await loadCart();
  } else {
    renderCart();
  }
}

export async function updateCartQuantity(cartItemId, quantity) {
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
    await loadCart();
  } else {
    renderCart();
  }
}

export async function prepareCheckout() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  await loadCart();
  if (!state.cartItems.length) {
    showToast("Your cart is empty");
    return;
  }

  state.orderSuccess = null;
  state.checkoutError = "";
  state.checkoutLoading = true;
  renderCheckout();
  els.checkoutDialog.showModal();
  lockBody();
  await Promise.all([loadReceivers(), loadAddresses()]);
  state.checkoutLoading = false;
  renderCheckout();
}

export async function submitCheckout(event) {
  event.preventDefault();
  await placeOrder();
}

export async function loadReceivers(selectId) {
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

export async function loadAddresses(selectId) {
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

export function renderCheckout() {
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

  els.checkoutContent.innerHTML = `
    <div class="checkout-layout">
      <div class="checkout-steps">
        ${state.checkoutError ? `<div class="checkout-error">${escapeHtml(state.checkoutError)}</div>` : ""}
        <section class="checkout-step">
          <div class="step-head"><span>1</span><h3>Receiver</h3></div>
          ${renderReceiverList()}
          ${renderReceiverForm()}
        </section>
        <section class="checkout-step">
          <div class="step-head"><span>2</span><h3>Delivery Address</h3></div>
          ${renderAddressList()}
          ${renderAddressForm()}
        </section>
      </div>
      <aside class="order-summary">
        <div class="step-head"><span>3</span><h3>Order Summary</h3></div>
        ${renderOrderSummary(selectedReceiver, selectedAddress)}
      </aside>
    </div>
  `;
}

export function renderReceiverList() {
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

export function renderReceiverForm() {
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

export function renderAddressList() {
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

export function renderAddressForm() {
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

export function renderOrderSummary(receiver, address) {
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

export function renderOrderSuccess() {
  const order = state.orderSuccess;
  els.checkoutContent.innerHTML = `
    <div class="order-success">
      <div class="success-mark">✓</div>
      <h3>Order created</h3>
      <p>Order #${escapeHtml(order.id)} · ${escapeHtml(order.status || "NEW")}</p>
      <strong>${formatPrice(order.totalAmount)}</strong>
      <p class="hint">${escapeHtml(order.fullName || "")} ${order.phone ? `· ${escapeHtml(order.phone)}` : ""}</p>
      <p class="hint">${escapeHtml(order.address || "")}</p>
      <div class="hero-actions">
        <button class="secondary-button" data-success-orders type="button">View orders</button>
        <button class="primary-button" data-success-continue type="button">Continue shopping</button>
      </div>
    </div>
  `;
}

export async function showOrders() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.ordersDialog.showModal();
  lockBody();
  await loadOrders();
}

export async function loadOrders() {
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

export function renderOrders() {
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

export function renderOrderCard(order) {
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

export function renderOrderDetailPanel() {
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

export function renderOrderItem(item, order = {}) {
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

export function renderOrderTimeline(order) {
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

export function shortText(value, maxLength) {
  const text = String(value || "");
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

export async function openOrderDetail(orderId) {
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

export async function openFavorites() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.favoritesDialog.showModal();
  lockBody();
  await loadFavorites({ render: true });
}

export async function loadFavorites(options = {}) {
  const { render = false } = options;
  if (!isLoggedIn()) {
    clearFavoritesState();
    return;
  }

  state.favoritesLoading = true;
  state.favoritesError = "";
  if (render) renderFavorites();

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
}

export function updateFavoritesUi() {
  els.favoritesCount.textContent = state.favoritesCount;
  els.favoritesSummary.textContent = `${state.favoritesCount} product${state.favoritesCount === 1 ? "" : "s"}`;
}

export function renderFavorites() {
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

export function closeFavorites() {
  els.favoritesDialog.close();
  unlockBodyIfNoOverlay();
}

export function handleFavoritesClick(event) {
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

export function clearNotificationsState() {
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

export async function loadUnreadCount() {
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

export async function openNotifications() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.notificationsDrawer.classList.add("open");
  els.notificationsDrawer.setAttribute("aria-hidden", "false");
  lockBody();
  await Promise.all([loadNotifications(), loadUnreadCount()]);
}

export function closeNotifications() {
  els.notificationsDrawer.classList.remove("open");
  els.notificationsDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

export async function loadNotifications() {
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

export function updateNotificationsBadge() {
  els.notificationsCount.textContent = state.unreadCount;
  els.notificationsCount.hidden = state.unreadCount <= 0;
  els.notificationsSummary.textContent = `${state.unreadCount} ${t("notifications.unread")}`;
}

export function renderNotifications() {
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

export function renderNotificationCard(notification) {
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

export function notificationTypeIcon(type) {
  const icons = { ORDER: "O", PROMO: "%", SYSTEM: "i" };
  return icons[type] || "i";
}

export async function markNotificationRead(notificationId, options = {}) {
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

export async function handleNotificationCardClick(notificationId) {
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

export async function saveNotificationToken(token) {
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

export async function checkServerHealth() {
  return apiFetch("/api/health", { showError: false });
}

window.checkServerHealth = checkServerHealth;

export function handleNotificationsClick(event) {
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

export async function openMyReviews() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  els.myReviewsDialog.showModal();
  lockBody();
  await loadMyReviews();
}

export async function loadMyReviews() {
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

export function renderMyReviews() {
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

export function renderMyReviewItem(item) {
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

export function openWriteReview(options = {}) {
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

export function renderRatingSelector() {
  els.reviewRatingSelector.innerHTML = Array.from({ length: 5 }, (_, index) => {
    const rating = index + 1;
    return `
      <button class="rating-choice ${rating <= state.reviewRating ? "active" : ""}" data-review-rating="${rating}" type="button" aria-label="Rating ${rating} out of 5">
        ★
      </button>
    `;
  }).join("");
}

export function closeMyReviews() {
  if (els.myReviewsDialog.open) els.myReviewsDialog.close();
  unlockBodyIfNoOverlay();
}

export function closeWriteReview() {
  if (els.writeReviewDialog.open) els.writeReviewDialog.close();
  unlockBodyIfNoOverlay();
}

export function setReviewFormMessage(message, type = "") {
  els.reviewFormMessage.textContent = message;
  els.reviewFormMessage.className = `form-message ${type}`.trim();
}

export function parseReviewImageUrls(value) {
  return String(value || "")
    .split(/[\n,]+/)
    .map((url) => url.trim())
    .filter(Boolean)
    .slice(0, 5);
}

export function validateReviewFiles(files) {
  const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
  const selected = Array.from(files || []);
  if (selected.length > 5) return { error: "Maximum 5 image files allowed.", files: [] };
  const invalid = selected.find((file) => !allowed.has(file.type));
  if (invalid) return { error: "Only JPG, PNG and WEBP images are allowed.", files: [] };
  const oversized = selected.find((file) => file.size > 10 * 1024 * 1024);
  if (oversized) return { error: "Each image must be 10MB or smaller.", files: [] };
  return { files: selected };
}

export async function uploadReviewImages(files) {
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

export async function submitReview(event) {
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

export function handleMyReviewsClick(event) {
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

export function handleRatingSelectorClick(event) {
  const button = event.target.closest("[data-review-rating]");
  if (!button) return;
  state.reviewRating = Number(button.dataset.reviewRating);
  renderRatingSelector();
}

/* ================= AUTH / PROFILE RENDERERS ================= */

export function openAuthDialog(mode = "login") {
  setAuthMode(mode);
  clearAuthErrors();
  els.authDialog.showModal();
  lockBody();
}

export function setAuthMode(mode) {
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

export function clearAuthErrors() {
  document.querySelectorAll(".field-error").forEach((item) => {
    item.textContent = "";
  });
  els.authMessage.textContent = "";
  els.authMessage.className = "form-message";
}

export function setFieldError(id, message) {
  const error = document.getElementById(`${id}Error`);
  if (error) error.textContent = message;
}

export function setAuthLoading(loading) {
  state.authLoading = loading;
  els.authSubmit.disabled = loading;
  els.authSubmit.textContent = loading ? t("home.loading") : (state.authMode === "login" ? t("auth.signIn") : t("auth.createAccount"));
}

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateLoginForm() {
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

export function validateRegisterForm() {
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

export async function submitAuth(event) {
  event.preventDefault();
  if (state.authLoading) return;

  if (state.authMode === "login") {
    await submitLogin();
  } else {
    await submitRegister();
  }
}

export async function submitLogin() {
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

  saveAuth(response);
  await validateAuthOnStartup();
  els.authDialog.close();
  showToast(`Welcome, ${firstName(response.fullName) || "User"}.`);
  await loadCart();
  await loadFavorites();
  await loadUnreadCount();
}

export async function submitRegister() {
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

export function openProfile() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }
  state.profileEditing = false;
  renderProfile();
  els.profileDrawer.classList.add("open");
  els.profileDrawer.setAttribute("aria-hidden", "false");
  lockBody();
}

export function closeProfile() {
  els.profileDrawer.classList.remove("open");
  els.profileDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

export function renderProfile() {
  const user = state.user || {};
  const avatar = user.profileImage
    ? `<img class="profile-avatar" src="${escapeHtml(user.profileImage)}" alt="${escapeHtml(user.fullName || "Profile")}" />`
    : `<div class="profile-avatar">${escapeHtml(firstName(user.fullName || user.email || "U").charAt(0) || "U")}</div>`;

  els.profileContent.innerHTML = `
    <div class="profile-card">
      <div class="profile-summary">
        ${avatar}
        <div>
          <h3>${escapeHtml(user.fullName || "Profile")}</h3>
          <p class="hint">${escapeHtml(user.email || "")}</p>
          <p class="hint">${escapeHtml(user.phone || "")}</p>
          <p class="hint">Role: ${escapeHtml(state.role || "USER")}</p>
        </div>
      </div>
      <div class="profile-actions">
        <button class="secondary-button full" data-profile-action="edit" type="button">Edit Profile</button>
        <button class="secondary-button full" data-profile-action="orders" type="button">My Orders</button>
        <button class="secondary-button full" data-profile-action="addresses" type="button">Addresses</button>
        <button class="secondary-button full" data-profile-action="receivers" type="button">Receivers</button>
        <button class="secondary-button full" data-profile-action="favorites" type="button">Favorites</button>
        <button class="secondary-button full" data-profile-action="notifications" type="button">Notifications</button>
        <button class="secondary-button full" data-profile-action="reviews" type="button">My Reviews</button>
        <button class="primary-button full" data-profile-action="logout" type="button">Logout</button>
      </div>
      ${state.profileEditing ? renderProfileEditForm(user) : ""}
    </div>
  `;
}

export function renderProfileEditForm(user) {
  return `
    <form class="profile-edit" id="profileEditForm">
      <label>Email<input value="${escapeHtml(user.email || "")}" readonly /></label>
      <label>Full name<input id="profileFullName" value="${escapeHtml(user.fullName || "")}" required /></label>
      <label>Phone<input id="profilePhone" value="${escapeHtml(user.phone || "")}" required /></label>
      <label>Profile image URL<input id="profileImage" value="${escapeHtml(user.profileImage || "")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">Save profile</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `;
}

export async function handleProfileAction(event) {
  const button = event.target.closest("[data-profile-action]");
  if (!button) return;
  const action = button.dataset.profileAction;

  if (action === "edit") {
    state.profileEditing = !state.profileEditing;
    renderProfile();
    return;
  }

  if (action === "logout") {
    clearAuth();
    closeProfile();
    showToast("Logged out.");
    return;
  }

  if (action === "orders") {
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

  if (action === "addresses" || action === "receivers") {
    closeProfile();
    await prepareCheckout();
    return;
  }

  showToast("Bu bo‘lim keyingi bosqichga tayyor.");
}

export async function handleCheckoutClick(event) {
  const receiver = event.target.closest("[data-select-receiver]");
  const address = event.target.closest("[data-select-address]");
  const deleteReceiver = event.target.closest("[data-delete-receiver]");
  const deleteAddress = event.target.closest("[data-delete-address]");
  const placeOrderButton = event.target.closest("[data-place-order]");
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

export function handleOrdersClick(event) {
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

export async function handleCheckoutSubmit(event) {
  const receiverForm = event.target.closest("[data-add-receiver-form]");
  const addressForm = event.target.closest("[data-add-address-form]");
  if (!receiverForm && !addressForm) return;
  event.preventDefault();

  if (receiverForm) await createReceiver();
  if (addressForm) await createAddress();
}

export async function createReceiver() {
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

export async function createAddress() {
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

export async function deleteReceiverById(id) {
  const response = await apiFetch(`/api/receivers/${id}`, { method: "DELETE", requireAuth: true });
  if (response !== null) {
    if (String(state.selectedReceiverId) === String(id)) state.selectedReceiverId = null;
    await loadReceivers();
    renderCheckout();
  }
}

export async function deleteAddressById(id) {
  const response = await apiFetch(`/api/addresses/${id}`, { method: "DELETE", requireAuth: true });
  if (response !== null) {
    if (String(state.selectedAddressId) === String(id)) state.selectedAddressId = null;
    await loadAddresses();
    renderCheckout();
  }
}

export async function placeOrder() {
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
    return;
  }

  state.orderSuccess = response;
  await loadCart();
  await loadUnreadCount();
  closeCart();
  renderCheckout();
  showToast("Order created");
}

export async function submitProfileEdit(event) {
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
