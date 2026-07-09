import { appStore, productStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { t } from "../../i18n/index.js";
import { HomeService } from "../../services/HomeService.js";
import { ProductService } from "../../services/ProductService.js";
import { syncProductFavorites } from "../../store/favoriteStore.js";
import { BannerCarousel } from "../../components/product/BannerCarousel.js";
import { AnnouncementBar } from "../../components/product/AnnouncementBar.js";
import {
  renderSkeleton,
  renderEmpty,
  renderProductList,
  applyAndRenderGrid,
  syncModeBadges,
} from "../shared/productGrid.js";
import { CatalogPage } from "../catalog/CatalogPage.js";

const BANNER_AUTO_MS = 5000;
let bannerAutoTimer = null;
let bannerPaused = false;
let bannerScrollListener = null;
let bannerScrollEndTimer = 0;

function getBannerTrack() {
  return els.banners?.querySelector(".banner-track");
}

function getBannerCount() {
  return productStore.banners.length;
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

function setHeroCampaignImage(imageUrl) {
  const hero = document.querySelector(".hero-main");
  if (!hero) return;
  if (!imageUrl) {
    hero.style.removeProperty("--hero-campaign-image");
    return;
  }
  hero.style.setProperty("--hero-campaign-image", `url("${imageUrl}")`);
}

export const HomePage = {
  renderBanners() {
    if (!productStore.banners.length) {
      els.banners.hidden = true;
      els.banners.innerHTML = "";
      setHeroCampaignImage("");
      return;
    }

    els.banners.hidden = false;
    els.banners.innerHTML = BannerCarousel({ banners: productStore.banners });
    setHeroCampaignImage(productStore.banners[0]?.imageUrl || "");
    initBannerSlider();
  },

  renderAnnouncements() {
    if (!productStore.announcements.length) {
      els.announcements.hidden = true;
      els.announcements.innerHTML = "";
      return;
    }

    els.announcements.hidden = false;
    els.announcements.innerHTML = AnnouncementBar({ announcements: productStore.announcements });
  },

  renderHomeApiSections(sections) {
    const hits = sections.hits || [];
    const arrivals = sections.newArrivals || [];

    const forYouSection = document.getElementById("personalizationSection");
    const forYouGrid = document.getElementById("personalizationGrid");
    if (forYouGrid) {
      const picks = hits.length ? hits : productStore.products.slice(0, 10);
      if (forYouSection) forYouSection.hidden = !picks.length;
      if (picks.length) {
        renderProductList(forYouGrid, picks.slice(0, 10), t("home.noProducts"), { screen: "home-for-you" });
      }
    }

    const arrivalsGrid = document.getElementById("newArrivalsGrid");
    if (arrivalsGrid) {
      const items = arrivals.length ? arrivals : productStore.products.slice(0, 10);
      renderProductList(arrivalsGrid, items.slice(0, 10), t("home.noProducts"), { screen: "home-new" });
    }

    els.homeApiSections.hidden = true;
    els.homeApiSections.innerHTML = "";
  },

  renderPersonalizationSections() {
    const section = document.getElementById("personalizationSection");
    const grid = document.getElementById("personalizationGrid");
    if (!section || !grid || grid.children.length) return;
    const picks = productStore.homeApiSections?.hits?.length
      ? productStore.homeApiSections.hits
      : productStore.products.slice(0, 10);
    section.hidden = !picks.length;
    if (!picks.length) return;
    renderProductList(grid, picks.slice(0, 10), t("home.noProducts"), { screen: "home-for-you" });
  },

  async loadCategories() {
    const { categories, demoCategories } = await HomeService.loadCategories();
    productStore.categories = categories;
    productStore.demoCategories = demoCategories;
    syncModeBadges();
    CatalogPage.renderCategories();
  },

  async loadBanners() {
    productStore.banners = await HomeService.loadBanners();
    HomePage.renderBanners();
  },

  async loadAnnouncements() {
    productStore.announcements = await HomeService.loadAnnouncements();
    HomePage.renderAnnouncements();
  },

  async loadRecentlyViewed() {
    const ids = HomeService.getRecentProductIds();
    if (!ids.length) {
      productStore.recentlyViewed = [];
      els.recentlyViewedSection.hidden = true;
      return;
    }

    productStore.recentlyViewed = await HomeService.loadRecentlyViewed();
    const products = productStore.recentlyViewed || [];
    if (!products.length) {
      els.recentlyViewedSection.hidden = true;
      return;
    }

    els.recentlyViewedSection.hidden = false;
    renderProductList(els.recentlyViewedGrid, products, "Recently viewed is empty.", { screen: "recent" });
  },

  async loadProducts() {
    try {
      els.status.textContent = "Yuklanmoqda...";
      renderSkeleton(els.grid, 12);

      const { products, demoProducts, failed } = await ProductService.loadProducts();

      if (products.length) {
        productStore.products = products;
        productStore.demoProducts = demoProducts;
        applyAndRenderGrid(productStore.products, "Mahsulot topilmadi.", { screen: appStore.currentGridScreen || "home" });
      } else {
        productStore.products = [];
        productStore.demoProducts = demoProducts;
        renderEmpty(els.grid, failed ? "API data failed to load." : "Mahsulot topilmadi.");
      }

      syncProductFavorites();
    } catch (error) {
      console.error("[LOAD PRODUCTS FAILED]", error);
      productStore.demoProducts = false;
      renderEmpty(els.grid, "API data failed to load.");
    } finally {
      syncModeBadges();
      els.status.textContent = "";
    }
  },

  async loadTodayDeals() {
    try {
      els.dealsStatus.textContent = "Yuklanmoqda...";
      renderSkeleton(els.dealsGrid, 5);

      const { deals, demoDeals, failed } = await ProductService.loadTodayDeals();

      productStore.todayDeals = deals;
      productStore.demoDeals = demoDeals;

      if (failed) {
        renderEmpty(els.dealsGrid, "API data failed to load.");
      } else {
        renderProductList(els.dealsGrid, productStore.todayDeals.slice(0, 8), "Mahsulot topilmadi.");
      }
      syncProductFavorites();
    } catch (error) {
      console.error("[LOAD TODAY DEALS FAILED]", error);
      productStore.demoDeals = false;
      renderEmpty(els.dealsGrid, "API data failed to load.");
    } finally {
      syncModeBadges();
      els.dealsStatus.textContent = "";
    }
  },

  async loadHomeApi() {
    const result = await HomeService.loadHomeApiData({ limit: 10, page: 0, size: 20 });

    if (!result.loaded) {
      productStore.homeLoadedFromApi = false;
      els.homeApiSections.hidden = true;
      return false;
    }

    const { hits, discounts, newArrivals, products, todayDeals, homeApiSections } = result;

    productStore.homeLoadedFromApi = true;
    productStore.products = products;
    productStore.todayDeals = todayDeals;
    productStore.demoProducts = false;
    productStore.demoDeals = false;
    syncProductFavorites();
    productStore.homeApiSections = homeApiSections;
    HomePage.renderHomeApiSections({ hits, discounts, newArrivals });
    applyAndRenderGrid(productStore.products, t("home.noProducts"), { screen: "home" });
    renderProductList(els.dealsGrid, discounts.slice(0, 8), "Chegirmalar topilmadi.", { screen: "home-discounts" });
    els.status.textContent = "";
    els.dealsStatus.textContent = "";
    syncModeBadges();
    return true;
  },

  async load({ loadCart } = {}) {
    productStore.selectedCategory = "ALL";
    appStore.currentSearchQuery = "";
    appStore.currentGridScreen = "home";
    productStore.feedPage = 0;
    els.title.textContent = t("home.recommended");
    els.status.textContent = t("home.loading");
    renderSkeleton(els.grid, 12);
    renderSkeleton(els.dealsGrid, 6);

    try {
      await Promise.all([HomePage.loadCategories(), HomePage.loadBanners(), HomePage.loadAnnouncements()]);
      const homeLoaded = await HomePage.loadHomeApi();
      if (!homeLoaded) {
        await Promise.all([HomePage.loadProducts(), HomePage.loadTodayDeals()]);
        HomePage.renderHomeApiSections({
          hits: productStore.products.slice(0, 12),
          discounts: productStore.todayDeals.slice(0, 10),
          newArrivals: productStore.products.slice(6, 18),
        });
      }
      await HomePage.loadRecentlyViewed();
      HomePage.renderPersonalizationSections();
      if (loadCart) await loadCart();
    } catch (error) {
      console.error("Home loading failed:", error);
      productStore.demoProducts = false;
      productStore.demoDeals = false;
      renderEmpty(els.grid, t("common.serverFailed"), t("common.tryAgain"));
    } finally {
      if (els.status?.textContent === t("home.loading")) {
        els.status.textContent = "";
      }
      if (els.dealsStatus?.textContent === t("home.loading") || els.dealsStatus?.textContent === "Yuklanmoqda...") {
        els.dealsStatus.textContent = "";
      }
    }
  },

  prevBanner() {
    scrollToBanner(getActiveBannerIndex() - 1);
  },

  nextBanner,
  scrollToBanner,
  resetBannerAutoSlide,
};

export const loadHome = HomePage.load;
export const loadHomeApi = HomePage.loadHomeApi;
