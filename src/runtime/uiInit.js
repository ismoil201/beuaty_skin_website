import { appStore, productStore, cartStore } from '../stores/index.js';
import { els } from '../utils/dom.js';
import { escapeHtml } from '../utils/html.js';
import { t } from '../i18n/index.js';
import { categoryLabel } from '../utils/productMapper.js';
import { showToast } from '../utils/toast.js';
import { initTheme } from '../utils/theme.js';
import { initHeaderScroll, initPageTransitions, initOfflineBanner, ripple } from '../utils/motion.js';
import { initSearchPanel, saveSearchHistory, closeSearchPanel } from '../utils/searchPanel.js';
import {
  initFilterState,
  renderFilterSidebar,
  renderFilterChips,
  persistFilters,
  clearAllFilters,
  applyViewMode,
  renderFlashCountdown,
} from '../utils/phase2Ui.js';
import { getCompareIds } from '../store/compareStore.js';
import { removeSavedForLater } from '../store/savedForLaterStore.js';
import { applyAndRenderGrid, renderEmpty } from '../pages/shared/productGrid.js';
import { CartService } from '../services/CartService.js';
import {
  lockBody,
  unlockBodyIfNoOverlay,
  navigateToProduct,
} from './navigation.js';
import { switchMobileTab } from './bottomNav.js';
import { CartPage } from '../pages/cart/CartPage.js';
import { SearchController } from '../controllers/SearchController.js';
import { handleProductGridClick } from './productGridHandlers.js';
import {
  syncCompareUi,
  openCompareDrawer,
  closeCompareDrawer,
  openComparePage,
  clearCompareSelection,
  removeCompareProduct,
} from './compareUi.js';

let flashCountdownIntervalId = null;

export function initPremiumUi() {
  initTheme();
  initHeaderScroll();
  initPageTransitions();
  initOfflineBanner();

  initSearchPanel({
    onSearch: (query) => {
      els.searchInput.value = query;
      saveSearchHistory(query);
      closeSearchPanel();
      SearchController.search(query).catch(() => {
        renderEmpty(els.grid, t("common.serverFailed"));
        els.status.textContent = "";
      });
    },
    onProductSelect: (productId) => {
      saveSearchHistory(els.searchInput.value);
      navigateToProduct(productId);
    },
  });

  const megaMenu = els.megaMenu;

  megaMenu?.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-category]");
    if (!btn) return;
    megaMenu.classList.remove("open");
    megaMenu.setAttribute("aria-hidden", "true");
    els.catalogButton?.setAttribute("aria-expanded", "false");
    SearchController.handleCategoryClick(event);
  });

  els.popularSearchesChips?.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-search-chip]");
    if (!chip) return;
    els.searchInput.value = chip.dataset.searchChip;
    saveSearchHistory(chip.dataset.searchChip);
    SearchController.search(chip.dataset.searchChip).catch(() => {});
  });

  document.querySelector(".mobile-bottom-nav")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-mobile-action]");
    if (!button) return;
    event.preventDefault();
    const action = button.dataset.mobileAction;
    void switchMobileTab(action).catch((error) => {
      console.error("[BOTTOM NAV FAILED]", action, error);
    });
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
      SearchController.handleCategoryClick(event);
      return;
    }
    if (action) {
      closeMobileMenu();
      void switchMobileTab(action.dataset.mobileAction).catch((error) => {
        console.error("[BOTTOM NAV FAILED]", action.dataset.mobileAction, error);
      });
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

export function initPhase2Ui() {
  initFilterState();
  productStore.compareIds = getCompareIds();
  syncCompareUi();
  renderFilterSidebar(t, categoryLabel);

  if (!appStore.flashSaleEnd) {
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    appStore.flashSaleEnd = end.getTime();
  }
  startFlashCountdown();

  document.getElementById("sortSelect")?.addEventListener("change", (e) => {
    productStore.filters.sort = e.target.value;
    persistFilters();
    applyAndRenderGrid(productStore.sourceProducts.length ? productStore.sourceProducts : productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
  });

  document.getElementById("gridViewBtn")?.addEventListener("click", () => {
    productStore.filters.viewMode = "grid";
    persistFilters();
    applyViewMode(els.grid, "grid");
  });

  document.getElementById("listViewBtn")?.addEventListener("click", () => {
    productStore.filters.viewMode = "list";
    persistFilters();
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
    applyAndRenderGrid(productStore.sourceProducts.length ? productStore.sourceProducts : productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
  });

  document.getElementById("sortSheetOptions")?.addEventListener("click", (e) => {
    const opt = e.target.closest("[data-sort-option]");
    if (!opt) return;
    productStore.filters.sort = opt.dataset.sortOption;
    const sortSelect = document.getElementById("sortSelect");
    if (sortSelect) sortSelect.value = productStore.filters.sort;
    persistFilters();
    closeBottomSheet("sortSheet");
    applyAndRenderGrid(productStore.sourceProducts.length ? productStore.sourceProducts : productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
  });

  document.getElementById("filterChipsRow")?.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-remove-chip]");
    if (!chip) return;
    removeFilterChip(chip.dataset.removeChip);
  });

  document.getElementById("compareFab")?.addEventListener("click", openCompareDrawer);
  document.getElementById("closeCompare")?.addEventListener("click", closeCompareDrawer);
  document.getElementById("openComparePage")?.addEventListener("click", openComparePage);
  document.getElementById("clearCompare")?.addEventListener("click", clearCompareSelection);
  document.getElementById("compareDrawerContent")?.addEventListener("click", (e) => {
    const rm = e.target.closest("[data-remove-compare]");
    if (rm) removeCompareProduct(rm.dataset.removeCompare);
  });

  document.getElementById("closePdpFullscreen")?.addEventListener("click", closePdpFullscreen);
  document.getElementById("pdpFullscreen")?.addEventListener("click", (e) => { if (e.target.id === "pdpFullscreen") closePdpFullscreen(); });

  els.cartExtras?.addEventListener("click", handleCartExtrasClick);
}

export function bindFilterEvents(container) {
  if (!container) return;
  container.addEventListener("click", (e) => {
    if (e.target.closest("[data-clear-filters]")) {
      clearAllFilters();
      renderFilterSidebar(t, categoryLabel);
      renderFilterChips(t);
      applyAndRenderGrid(productStore.sourceProducts.length ? productStore.sourceProducts : productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
      return;
    }
    const toggle = e.target.closest(".filter-group-toggle");
    if (toggle) toggle.closest(".filter-group")?.classList.toggle("collapsed");
  });
  container.addEventListener("change", (e) => {
    const f = productStore.filters;
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
    persistFilters();
    renderFilterChips(t);
    if (container.id !== "filterSheetContent") {
      applyAndRenderGrid(productStore.sourceProducts.length ? productStore.sourceProducts : productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
    }
  });
}

export function removeFilterChip(key) {
  const f = productStore.filters;
  if (key === "onSale") f.onSale = false;
  else if (key === "inStock") f.inStock = false;
  else if (key === "rating") f.minRating = 0;
  else if (key.startsWith("brand:")) f.brands = f.brands.filter((b) => b !== key.slice(6));
  else if (key.startsWith("color:")) f.colors = f.colors.filter((c) => c !== key.slice(6));
  else if (key.startsWith("size:")) f.sizes = f.sizes.filter((s) => s !== key.slice(5));
  persistFilters();
  renderFilterSidebar(t, categoryLabel);
  renderFilterChips(t);
  applyAndRenderGrid(productStore.sourceProducts.length ? productStore.sourceProducts : productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
}

export function openBottomSheet(id) {
  const sheet = document.getElementById(id);
  sheet?.classList.add("open");
  sheet?.setAttribute("aria-hidden", "false");
}

export function closeBottomSheet(id) {
  document.getElementById(id)?.classList.remove("open");
  document.getElementById(id)?.setAttribute("aria-hidden", "true");
}

export function openPdpFullscreen(src) {
  const img = document.getElementById("pdpFullscreenImg");
  const el = document.getElementById("pdpFullscreen");
  if (img && el && src) {
    img.src = src;
    el.classList.add("open");
    el.setAttribute("aria-hidden", "false");
  }
}

export function closePdpFullscreen() {
  document.getElementById("pdpFullscreen")?.classList.remove("open");
  document.getElementById("pdpFullscreen")?.setAttribute("aria-hidden", "true");
}

export function startFlashCountdown() {
  if (flashCountdownIntervalId !== null) return;
  const tick = () => {
    const el = document.querySelector("#todayDeals .flash-countdown-wrap");
    if (el && appStore.flashSaleEnd) el.innerHTML = renderFlashCountdown(appStore.flashSaleEnd);
  };
  tick();
  flashCountdownIntervalId = window.setInterval(tick, 1000);
}

export function handleCartExtrasClick(event) {
  if (event.target.closest("[data-apply-coupon]")) {
    const input = document.getElementById("cartCouponInput");
    const code = (input?.value || "").trim();
    const result = CartService.applyCoupon(code, CartPage.getCartTotals().subtotal);
    if (result.valid) {
      cartStore.cartCoupon = result.coupon;
      cartStore.cartCouponDiscount = result.discount;
      showToast(t("cart.couponApplied"), "success");
    } else if (result.invalid) {
      showToast(t("cart.couponInvalid"), "warning");
    }
    CartPage.render();
    return;
  }
  const restore = event.target.closest("[data-restore-saved]");
  if (restore) {
    removeSavedForLater(restore.dataset.restoreSaved);
    showToast(t("cart.restored"), "info");
    CartPage.render();
    return;
  }
  handleProductGridClick(event);
}
