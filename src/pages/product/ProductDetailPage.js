import { appStore, productStore, favoriteStore, cartStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { categoryLabel, numberOrZero } from "../../utils/productMapper.js";
import { t, getCurrentLanguage } from "../../i18n/index.js";
import { formatPrice } from "../../utils/format.js";
import { getCompareIds } from "../../store/compareStore.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { renderStars } from "../../utils/rating.js";
import { ReviewSummary } from "../../components/review/ReviewSummary.js";
import { ReviewCard as ReviewCardView } from "../../components/review/ReviewCard.js";
import { ReviewService } from "../../services/ReviewService.js";
import { HomeService } from "../../services/HomeService.js";
import { productCard, renderProductList } from "../shared/productGrid.js";
import { observeProductImpressions } from "../shared/analytics.js";

/* ================= LOCAL HELPERS ================= */

function reviewStats(reviews) {
  return ReviewService.reviewStats(reviews);
}

function getRecentProductIds() {
  return HomeService.getRecentProductIds();
}

function shortText(value, maxLength) {
  const text = String(value ?? "");
  if (!maxLength || text.length <= maxLength) return text;
  return `${text.slice(0, Math.max(0, maxLength - 1)).trimEnd()}…`;
}

/* ================= PRODUCT DETAIL PAGE ================= */

export const ProductDetailPage = {
  renderDetailLoading(pageMode = false) {
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
  },

  renderProductDetailError() {
    els.productDetailPageContent.innerHTML = `
      <div class="detail-error-page">
        <strong>${escapeHtml(t("product.notFound"))}</strong>
        <p>${escapeHtml(productStore.detailError || "Mahsulot topilmadi.")}</p>
        <button class="primary-button" data-route-home type="button">${escapeHtml(t("product.backToShopping"))}</button>
      </div>
    `;
  },

  renderProductDetail(product) {
    const selectedVariant = product.variants.find((variant) => String(variant.id) === String(productStore.selectedVariantId)) || null;
    const gallery = [...new Set([product.image, ...product.images, ...product.detailImages].filter(Boolean))];
    const galleryIndex = Math.min(productStore.pdpGalleryIndex || 0, Math.max(0, gallery.length - 1));
    const currentImage = gallery[galleryIndex] || product.image;
    const currentPrice = selectedVariant?.discountPrice ?? selectedVariant?.price ?? product.finalPrice;
    const originalPrice = selectedVariant?.price ?? product.originalPrice;
    const variantStock = selectedVariant?.stock ?? product.stock;
    const isFavorite = favoriteStore.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
    const isCompared = getCompareIds().includes(String(product.id));
    const pageMode = appStore.currentRoute === "product";
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
          ${product.variants.length ? ProductDetailPage.renderVariantSelectors(product) : `<p class="hint">${escapeHtml(t("product.variantUnavailable"))}</p>`}
          <p class="hint">${numberOrZero(variantStock) > 0 ? escapeHtml(t("product.stock", { count: variantStock })) : escapeHtml(t("product.outOfStock"))}</p>
          <div class="quantity-row">
            <button class="secondary-button" data-qty="minus" type="button" aria-label="Decrease">-</button>
            <input id="quantityInput" value="${productStore.selectedQuantity}" inputmode="numeric" aria-label="${escapeHtml(t("product.quantity"))}" />
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
          <button class="pdp-tab-btn ${productStore.pdpActiveTab === "description" ? "active" : ""}" data-pdp-tab="description" type="button" role="tab">${escapeHtml(t("product.description"))}</button>
          <button class="pdp-tab-btn ${productStore.pdpActiveTab === "details" ? "active" : ""}" data-pdp-tab="details" type="button" role="tab">${escapeHtml(t("product.details"))}</button>
          <button class="pdp-tab-btn ${productStore.pdpActiveTab === "reviews" ? "active" : ""}" data-pdp-tab="reviews" type="button" role="tab">${escapeHtml(t("product.reviews"))}</button>
        </nav>
        <div class="pdp-tab-panel" ${productStore.pdpActiveTab === "description" ? "" : "hidden"} data-pdp-panel="description">
          <p class="hint">${escapeHtml(product.description || t("common.unavailable"))}</p>
          ${product.detailImages.length ? `<div class="detail-image-stack">${product.detailImages.map((image) => `<img src="${escapeHtml(image)}" alt="" loading="lazy" class="img-loading" />`).join("")}</div>` : ""}
        </div>
        <div class="pdp-tab-panel" ${productStore.pdpActiveTab === "details" ? "" : "hidden"} data-pdp-panel="details">
          <p class="hint">${escapeHtml(t("home.categories"))}: ${escapeHtml(product.category ? categoryLabel(product.category) : "-")}</p>
          <p class="hint">${escapeHtml(t("filter.brand"))}: ${escapeHtml(product.brand || "-")}</p>
        </div>
        <div class="pdp-tab-panel reviews-premium" ${productStore.pdpActiveTab === "reviews" ? "" : "hidden"} data-pdp-panel="reviews">
          ${ProductDetailPage.renderProductReviews(product.id)}
        </div>
      </div>
      ${pageMode ? ProductDetailPage.renderRecommendations() : ""}
      ${pageMode ? ProductDetailPage.renderFrequentlyBought(product) : ""}
      ${pageMode ? ProductDetailPage.renderRecentlyViewedStrip() : ""}
      ${pageMode ? `
        <div class="mobile-buy-bar">
          <strong>${formatPrice(currentPrice)}</strong>
          <button class="primary-button" data-detail-add type="button">${escapeHtml(t("product.addToCart"))}</button>
        </div>
      ` : ""}
    `;
    observeProductImpressions(target);
    initLazyImages(target);
    ProductDetailPage.initPdpGallerySwipe(target);
  },

  renderVariantSelectors(product) {
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
          const active = String(v.id) === String(productStore.selectedVariantId);
          const disabled = Number(v.stock || 0) <= 0;
          return `<button class="size-option ${active ? "active" : ""}" data-variant="${escapeHtml(v.id)}" type="button" ${disabled ? "disabled" : ""}>${escapeHtml(v.label || v.id)}</button>`;
        }).join("")}</div></div>` : ""}
      `;
    }
    return ProductDetailPage.renderVariantButtons(product);
  },

  renderPdpProductStrip(title, products, screen) {
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
  },

  renderFrequentlyBought(product) {
    const others = (productStore.recommendedOthers || productStore.recommendedProducts || []).slice(0, 3);
    if (!others.length) return "";
    return ProductDetailPage.renderPdpProductStrip(t("product.frequentlyBought"), others, "fbt");
  },

  renderRecentlyViewedStrip() {
    const ids = getRecentProductIds().filter((id) => String(id) !== String(productStore.selectedDetailProduct?.id));
    if (!ids.length || !productStore.recentlyViewed.length) return "";
    return ProductDetailPage.renderPdpProductStrip(
      t("home.recentlyViewed"),
      productStore.recentlyViewed.slice(0, 6),
      "recent",
    );
  },

  initPdpGallerySwipe(container) {
    const main = container.querySelector(".pdp-main-image");
    if (!main || !("ontouchstart" in window)) return;
    let startX = 0;
    main.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    main.addEventListener("touchend", (e) => {
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) < 40) return;
      const gallery = [...new Set([productStore.selectedDetailProduct?.image, ...(productStore.selectedDetailProduct?.images || []), ...(productStore.selectedDetailProduct?.detailImages || [])].filter(Boolean))];
      productStore.pdpGalleryIndex = Math.max(0, Math.min(gallery.length - 1, (productStore.pdpGalleryIndex || 0) + (diff < 0 ? 1 : -1)));
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }, { passive: true });
  },

  renderRecommendations() {
    if (productStore.recommendationsLoading) {
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

    if (productStore.recommendationsError) {
      return `
        <section class="recommended-section app-feed-block app-feed-rail">
          <div class="detail-error-page compact">
            <strong>Recommendations unavailable</strong>
            <p>${escapeHtml(productStore.recommendationsError)}</p>
          </div>
        </section>
      `;
    }

    const apiSections = [
      [t("home.similar"), productStore.recommendedSimilar || [], "recommendations-similar"],
      [t("home.others"), productStore.recommendedOthers || [], "recommendations-others"],
    ].filter(([, products]) => products.length);

    if (apiSections.length) {
      return apiSections.map(([title, products, screen]) => ProductDetailPage.renderPdpProductStrip(title, products, screen)).join("");
    }

    if (!productStore.recommendedProducts.length) return "";

    return ProductDetailPage.renderPdpProductStrip(t("home.recommended"), productStore.recommendedProducts, "recommendations");
  },

  renderProductReviews(productId) {
    const key = String(productId);
    let reviews = [...(productStore.productReviewsByProductId[key] || [])];
    const loading = productStore.productReviewsLoading[key];
    const error = productStore.productReviewsError[key];

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

    if (productStore.reviewSearchQuery) {
      const q = productStore.reviewSearchQuery.toLowerCase();
      reviews = reviews.filter((r) => String(r.content || "").toLowerCase().includes(q));
    }
    if (productStore.reviewFilterRating > 0) {
      reviews = reviews.filter((r) => numberOrZero(r.rating) >= productStore.reviewFilterRating);
    }
    if (productStore.reviewSort === "helpful") {
      reviews.sort((a, b) => (productStore.reviewHelpfulIds.has(String(b.id)) ? 1 : 0) - (productStore.reviewHelpfulIds.has(String(a.id)) ? 1 : 0));
    } else if (productStore.reviewSort === "rating-high") {
      reviews.sort((a, b) => numberOrZero(b.rating) - numberOrZero(a.rating));
    } else if (productStore.reviewSort === "rating-low") {
      reviews.sort((a, b) => numberOrZero(a.rating) - numberOrZero(b.rating));
    }

    if (!reviews.length && !productStore.productReviewsByProductId[key]?.length) {
      return `<div class="reviews-empty"><strong>${escapeHtml(t("reviews.none"))}</strong></div>`;
    }

    const allReviews = productStore.productReviewsByProductId[key] || [];
    const stats = reviewStats(allReviews);
    const distribution = [5, 4, 3, 2, 1].map((star) => {
      const count = allReviews.filter((r) => Math.round(numberOrZero(r.rating)) === star).length;
      return { star, count, pct: allReviews.length ? (count / allReviews.length) * 100 : 0 };
    });

    return `
      ${ReviewSummary({ stats, distribution, reviewsLabel: t("product.reviews") })}
      <div class="reviews-toolbar">
        <input type="search" placeholder="${escapeHtml(t("reviews.search"))}" value="${escapeHtml(productStore.reviewSearchQuery || "")}" data-review-search />
        <select data-review-sort>
          <option value="newest" ${productStore.reviewSort === "newest" ? "selected" : ""}>${escapeHtml(t("reviews.sortNewest"))}</option>
          <option value="rating-high" ${productStore.reviewSort === "rating-high" ? "selected" : ""}>${escapeHtml(t("reviews.sortRatingHigh"))}</option>
          <option value="rating-low" ${productStore.reviewSort === "rating-low" ? "selected" : ""}>${escapeHtml(t("reviews.sortRatingLow"))}</option>
          <option value="helpful" ${productStore.reviewSort === "helpful" ? "selected" : ""}>${escapeHtml(t("reviews.sortHelpful"))}</option>
        </select>
        <select data-review-filter-rating>
          <option value="0">${escapeHtml(t("reviews.allRatings"))}</option>
          ${[5, 4, 3, 2, 1].map((r) => `<option value="${r}" ${productStore.reviewFilterRating === r ? "selected" : ""}>${r}★+</option>`).join("")}
        </select>
      </div>
      <div class="review-list">
        ${reviews.length ? reviews.map(ProductDetailPage.renderReviewCard).join("") : `<p class="hint">${escapeHtml(t("search.noResults"))}</p>`}
      </div>
    `;
  },

  renderReviewCard(review) {
    return ReviewCardView({
      review,
      helpful: productStore.reviewHelpfulIds.has(String(review.id)),
      verifiedLabel: t("reviews.verified"),
      noTextLabel: t("reviews.noText"),
      helpfulLabel: t("reviews.helpful"),
    });
  },

  renderVariantButtons(product) {
    return `
      <div class="variant-options">
        ${product.variants.map((variant) => {
          const active = String(variant.id) === String(productStore.selectedVariantId);
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
  },

  renderAddToCartLoading() {
    const detailButtons = document.querySelectorAll("[data-detail-add]");
    detailButtons.forEach((detailButton) => {
      const loading = cartStore.addingProductIds.has(String(productStore.selectedDetailProduct?.id));
      detailButton.disabled = loading;
      detailButton.textContent = loading ? t("product.adding") : (detailButton.closest(".mobile-buy-bar") ? t("product.addToCart") : t("product.addToCartFull"));
    });
    if (productStore.products.length) {
      renderProductList(els.grid, productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
    }
  },
};
