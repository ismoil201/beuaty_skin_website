import { escapeHtml } from "./html.js";
import { formatPrice } from "./format.js";
import { extractFacetOptions, applyProductFilters } from "./productFilters.js";
import { loadFilters, saveFilters, resetFilters, DEFAULT_FILTERS, activeFilterCount } from "../store/filterStore.js";
import { getCompareIds, MAX_COMPARE } from "../store/compareStore.js";
import { getSavedForLater } from "../store/savedForLaterStore.js";
import { numberOrZero } from "./productMapper.js";

const FREE_SHIPPING_THRESHOLD = 500000;
const STANDARD_DELIVERY_FEE = 30000;
const ORIGINS = ["Korea", "Japan", "USA"];
const SELLERS = ["Official Store", "Beauty Skin Korea", "Verified Seller"];

export function initFilterState(state) {
  if (!state.filters) state.filters = loadFilters();
}

export function setSourceProducts(state, products) {
  state.sourceProducts = products;
  state.filterFacets = extractFacetOptions(products);
  if (state.filters.maxPrice === DEFAULT_FILTERS.maxPrice && state.filterFacets.maxPrice) {
    state.filters.maxPrice = Math.ceil(state.filterFacets.maxPrice / 1000) * 1000;
  }
}

export function getFilteredProducts(state) {
  return applyProductFilters(state.sourceProducts, state.filters);
}

export function renderFilterSidebar(state, t, categoryLabel) {
  const sidebar = document.getElementById("filterSidebar");
  const sheet = document.getElementById("filterSheetContent");
  const html = buildFilterHtml(state, t, categoryLabel);
  if (sidebar) sidebar.innerHTML = html;
  if (sheet) sheet.innerHTML = html;
  updateFilterBadge(state);
}

function buildFilterHtml(state, t, categoryLabel) {
  const f = state.filters;
  const facets = state.filterFacets;
  const brandChecks = facets.brands.map((b) => filterCheck("brand", b, f.brands.includes(b))).join("");
  const colorChecks = facets.colors.map((c) => filterCheck("color", c, f.colors.includes(c))).join("");
  const sizeChecks = facets.sizes.map((s) => filterCheck("size", s, f.sizes.includes(s))).join("");

  return `
    <div class="filter-sidebar-header">
      <h3>${escapeHtml(t("filter.title"))}</h3>
      <button class="ghost-button" type="button" data-clear-filters>${escapeHtml(t("filter.clearAll"))}</button>
    </div>
    ${filterGroup(t("filter.brand"), brandChecks || `<p class="hint">${escapeHtml(t("filter.noOptions"))}</p>`)}
    ${filterGroup(t("filter.price"), `
      <div class="price-range">
        <input type="range" data-filter-price min="0" max="${facets.maxPrice || 5000000}" step="10000" value="${f.maxPrice}" />
        <div class="price-range-labels">
          <span>${formatPrice(f.minPrice)}</span>
          <span>${formatPrice(f.maxPrice)}</span>
        </div>
      </div>
    `)}
    ${filterGroup(t("filter.discount"), toggleCheck("onSale", t("filter.onSaleOnly"), f.onSale))}
    ${filterGroup(t("filter.color"), colorChecks || `<p class="hint">—</p>`)}
    ${filterGroup(t("filter.size"), sizeChecks || `<p class="hint">—</p>`)}
    ${filterGroup(t("filter.rating"), `
      ${[4, 3, 2, 1].map((r) => `
        <label class="filter-check">
          <input type="radio" name="minRating" data-filter-rating value="${r}" ${f.minRating === r ? "checked" : ""} />
          ${"★".repeat(r)}+
        </label>
      `).join("")}
    `)}
    ${filterGroup(t("filter.availability"), toggleCheck("inStock", t("filter.inStock"), f.inStock))}
    ${filterGroup(t("filter.fastDelivery"), toggleCheck("fastDelivery", t("filter.fastDelivery"), f.fastDelivery))}
    ${filterGroup(t("filter.origin"), ORIGINS.map((o) => filterCheck("origin", o, f.origin.includes(o))).join(""))}
    ${filterGroup(t("filter.seller"), SELLERS.map((s) => filterCheck("seller", s, f.seller.includes(s))).join(""))}
  `;
}

function filterGroup(title, body) {
  return `
    <div class="filter-group">
      <button class="filter-group-toggle" type="button" aria-expanded="true">
        ${escapeHtml(title)}
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      <div class="filter-group-body">${body}</div>
    </div>
  `;
}

function filterCheck(type, value, checked) {
  return `
    <label class="filter-check">
      <input type="checkbox" data-filter-${type}="${escapeHtml(value)}" ${checked ? "checked" : ""} />
      ${escapeHtml(value)}
    </label>
  `;
}

function toggleCheck(key, label, checked) {
  return `
    <label class="filter-check">
      <input type="checkbox" data-filter-toggle="${key}" ${checked ? "checked" : ""} />
      ${escapeHtml(label)}
    </label>
  `;
}

export function renderFilterChips(state, t) {
  const row = document.getElementById("filterChipsRow");
  if (!row) return;
  const chips = [];
  const f = state.filters;

  f.brands.forEach((b) => chips.push(chip(b, `brand:${b}`)));
  f.colors.forEach((c) => chips.push(chip(c, `color:${c}`)));
  f.sizes.forEach((s) => chips.push(chip(s, `size:${s}`)));
  if (f.onSale) chips.push(chip(t("filter.onSaleOnly"), "onSale"));
  if (f.inStock) chips.push(chip(t("filter.inStock"), "inStock"));
  if (f.minRating) chips.push(chip(`${f.minRating}★+`, "rating"));

  row.hidden = !chips.length;
  row.innerHTML = chips.join("");
}

function chip(label, key) {
  return `<span class="filter-chip-active">${escapeHtml(label)}<button type="button" data-remove-chip="${escapeHtml(key)}" aria-label="Remove">×</button></span>`;
}

export function updateFilterBadge(state) {
  const badge = document.getElementById("filterBadgeCount");
  const count = activeFilterCount(state.filters);
  if (badge) {
    badge.textContent = count;
    badge.hidden = count === 0;
  }
}

export function persistFilters(state) {
  saveFilters(state.filters);
}

export function clearAllFilters(state) {
  const maxPrice = state.filterFacets.maxPrice || DEFAULT_FILTERS.maxPrice;
  state.filters = { ...resetFilters(), maxPrice };
  persistFilters(state);
}

export function applyViewMode(gridEl, mode) {
  if (!gridEl) return;
  gridEl.classList.toggle("list-view", mode === "list");
  document.getElementById("gridViewBtn")?.classList.toggle("active", mode === "grid");
  document.getElementById("listViewBtn")?.classList.toggle("active", mode === "list");
  document.getElementById("gridViewBtn")?.setAttribute("aria-pressed", mode === "grid");
  document.getElementById("listViewBtn")?.setAttribute("aria-pressed", mode === "list");
}

export function renderCompareFab(count) {
  const fab = document.getElementById("compareFab");
  const countEl = document.getElementById("compareFabCount");
  if (countEl) countEl.textContent = count;
  fab?.classList.toggle("visible", count > 0);
}

export function renderCompareDrawer(products, t) {
  const el = document.getElementById("compareDrawerContent");
  if (!el) return;
  if (!products.length) {
    el.innerHTML = `<div class="empty-state"><strong>${escapeHtml(t("compare.empty"))}</strong></div>`;
    return;
  }
  el.innerHTML = products.map((p) => `
    <div class="compare-product-cell" style="display:flex;gap:12px;margin-bottom:12px;align-items:center">
      <img src="${escapeHtml(p.image)}" alt="" width="64" height="64" />
      <div style="flex:1">
        <strong>${escapeHtml(p.name)}</strong>
        <p>${formatPrice(p.finalPrice)}</p>
      </div>
      <button class="icon-button" data-remove-compare="${escapeHtml(p.id)}" type="button" aria-label="Remove">×</button>
    </div>
  `).join("");
}

export function renderComparePage(products, t) {
  const el = document.getElementById("comparePageContent");
  if (!el || !products.length) return;

  const rows = [
    ["", ...products.map((p) => `<img src="${escapeHtml(p.image)}" alt="" /><br><strong>${escapeHtml(p.name)}</strong>`)],
    [t("compare.price"), ...products.map((p) => formatPrice(p.finalPrice))],
    [t("compare.brand"), ...products.map((p) => escapeHtml(p.brand || "—"))],
    [t("compare.rating"), ...products.map((p) => `${numberOrZero(p.ratingAvg).toFixed(1)} (${p.reviewCount || 0})`)],
    [t("compare.stock"), ...products.map((p) => String(p.stock ?? "—"))],
    [t("compare.discount"), ...products.map((p) => (p.discountPercent ? `-${p.discountPercent}%` : "—"))],
  ];

  const highlightDiff = (values) => {
    const unique = new Set(values.filter((v) => v !== "—"));
    return unique.size > 1;
  };

  el.innerHTML = `
    <table class="compare-table">
      <tbody>
        ${rows.map(([label, ...cells]) => {
          const isDiff = label && highlightDiff(cells);
          return `<tr class="${isDiff ? "compare-diff" : ""}">
            <th>${escapeHtml(label)}</th>
            ${cells.map((c) => `<td>${c}</td>`).join("")}
          </tr>`;
        }).join("")}
      </tbody>
    </table>
  `;
}

function renderCartProductRail(title, productsHtml) {
  if (!productsHtml) return "";
  return `
    <section class="app-feed-block app-feed-rail app-cart-rail">
      <div class="app-section-head">
        <h2>${escapeHtml(title)}</h2>
      </div>
      <div class="product-grid app-rail-grid">${productsHtml}</div>
    </section>
  `;
}

export function renderCartExtras(state, t, options = {}) {
  const el = document.getElementById("cartExtras");
  if (!el) return;

  const subtotal = numberOrZero(options.subtotal ?? state.cartTotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const saved = getSavedForLater();
  const recommendedHtml = options.recommendedHtml || "";
  const recentHtml = options.recentHtml || "";

  el.innerHTML = `
    <div class="app-cart-free-block">
      <div class="app-cart-free-head">
        <strong>${escapeHtml(t("cart.freeToHome"))}</strong>
        ${subtotal >= FREE_SHIPPING_THRESHOLD
    ? `<span class="app-cart-free-done">${escapeHtml(t("cart.freeShippingUnlocked"))}</span>`
    : `<span class="hint">${escapeHtml(t("cart.freeShippingRemaining", { amount: formatPrice(remaining) }))}</span>`}
      </div>
      <div class="app-cart-free-bar"><div style="width:${progress}%"></div></div>
    </div>
    ${renderCartProductRail(t("home.recommended"), recommendedHtml)}
    ${renderCartProductRail(t("home.recentlyViewed"), recentHtml)}
    ${saved.length ? `
      <section class="app-cart-saved">
        <h3>${escapeHtml(t("cart.savedForLater"))}</h3>
        ${saved.map((item) => `
          <div class="app-cart-saved-item">
            <img src="${escapeHtml(item.image)}" alt="" loading="lazy" />
            <div>
              <strong>${escapeHtml(item.name)}</strong>
              <p>${formatPrice(item.unitPrice)}</p>
              <button class="cart-save-later" data-restore-saved="${escapeHtml(item.id)}" type="button">${escapeHtml(t("cart.moveToCart"))}</button>
            </div>
          </div>
        `).join("")}
      </section>
    ` : ""}
    <div class="cart-coupon app-cart-coupon">
      <input type="text" id="cartCouponInput" placeholder="${escapeHtml(t("cart.couponPlaceholder"))}" value="${escapeHtml(state.cartCoupon || "")}" />
      <button class="secondary-button" type="button" data-apply-coupon>${escapeHtml(t("cart.applyCoupon"))}</button>
    </div>
  `;
}

export function renderCheckoutStepper(step, t) {
  const steps = [
    { n: 1, label: t("checkout.stepShipping") },
    { n: 2, label: t("checkout.stepAddress") },
    { n: 3, label: t("checkout.stepPayment") },
    { n: 4, label: t("checkout.stepReview") },
  ];
  return `
    <div class="checkout-stepper" role="list">
      ${steps.map((s, i) => `
        ${i > 0 ? `<div class="checkout-stepper-line ${step > s.n - 1 ? "done" : ""}"></div>` : ""}
        <div class="checkout-stepper-item ${step === s.n ? "active" : ""} ${step > s.n ? "done" : ""}" role="listitem">
          <span class="checkout-stepper-dot">${step > s.n ? "✓" : s.n}</span>
          <span>${escapeHtml(s.label)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

export function renderFlashCountdown(endTime) {
  const now = Date.now();
  const diff = Math.max(0, endTime - now);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const pad = (n) => String(n).padStart(2, "0");
  return `
    <div class="flash-countdown" aria-live="polite">
      <div class="flash-countdown-unit"><strong>${pad(h)}</strong><span>HRS</span></div>
      <div class="flash-countdown-unit"><strong>${pad(m)}</strong><span>MIN</span></div>
      <div class="flash-countdown-unit"><strong>${pad(s)}</strong><span>SEC</span></div>
    </div>
  `;
}

export function renderBrandPage(brand, products, t, productCardHtml) {
  return `
    <div class="brand-hero">
      <p class="eyebrow">${escapeHtml(t("brand.official"))}</p>
      <h1>${escapeHtml(brand)}</h1>
      <p class="hint">${escapeHtml(t("brand.story"))}</p>
    </div>
    <section class="personalization-strip">
      <div class="section-head"><h2>${escapeHtml(t("brand.popular"))}</h2></div>
      <div class="product-grid">${productCardHtml}</div>
    </section>
  `;
}

export { FREE_SHIPPING_THRESHOLD, STANDARD_DELIVERY_FEE, MAX_COMPARE };
