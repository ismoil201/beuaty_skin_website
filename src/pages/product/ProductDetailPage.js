import { appStore, productStore, favoriteStore, cartStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import {
  categoryLabel,
  numberOrZero,
  normalizeVariantTiers,
  resolveVariantTierPricing,
} from "../../utils/productMapper.js";
import { t, getCurrentLanguage } from "../../i18n/index.js";
import { formatPrice } from "../../utils/format.js";
import { getCompareIds } from "../../store/compareStore.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { renderStars } from "../../utils/rating.js";
import { ReviewSummary } from "../../components/review/ReviewSummary.js";
import { ReviewCard as ReviewCardView } from "../../components/review/ReviewCard.js";
import { ReviewService } from "../../services/ReviewService.js";
import { HomeService } from "../../services/HomeService.js";
import { PdpFeatureAdapter } from "../../services/PdpFeatureAdapter.js";
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
      ${pageMode ? `<div class="breadcrumbs"><button data-route-home type="button">${escapeHtml(t("product.home"))}</button><span>/</span><span>${escapeHtml(t("product.loading"))}</span></div>` : `
        <div class="drawer-head">
          <h2>${escapeHtml(t("product.loadingTitle"))}</h2>
          <button class="icon-button" data-close-detail type="button" aria-label="${escapeHtml(t("product.close"))}">
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

  renderProductDetailError({ notFound = false, networkError = false } = {}) {
    const title = notFound
      ? t("product.notFound")
      : networkError
        ? t("common.serverFailed")
        : t("common.tryAgain");
    const message = productStore.detailError
      || (notFound ? t("product.notFound") : networkError ? t("common.serverFailed") : t("product.renderFailed"));
    els.productDetailPageContent.innerHTML = `
      <div class="detail-error-page">
        <strong>${escapeHtml(title)}</strong>
        <p>${escapeHtml(message)}</p>
        <button class="primary-button" data-route-home type="button">${escapeHtml(t("product.backToShopping"))}</button>
      </div>
    `;
  },

  renderProductDetail(product) {
    try {
    if (!product || typeof product !== "object") return;
    const safeProduct = {
      ...product,
      variants: Array.isArray(product.variants) ? product.variants : [],
      images: Array.isArray(product.images) ? product.images : [],
      detailImages: Array.isArray(product.detailImages) ? product.detailImages : [],
      name: product.name || t("product.fallbackName"),
    };
    const selectedVariant = safeProduct.variants.find((variant) => String(variant?.id) === String(productStore.selectedVariantId)) || null;
    const gallery = [...new Set([safeProduct.image, ...safeProduct.images, ...safeProduct.detailImages].filter(Boolean))];
    const galleryIndex = Math.min(productStore.pdpGalleryIndex || 0, Math.max(0, gallery.length - 1));
    const currentImage = gallery[galleryIndex] || safeProduct.image;
    const qty = Math.max(1, numberOrZero(productStore.selectedQuantity) || 1);
    const tierPricing = resolveVariantTierPricing(selectedVariant, qty);
    const currentPrice = tierPricing.tier
      ? tierPricing.unitPrice
      : (selectedVariant?.discountPrice ?? selectedVariant?.price ?? safeProduct.finalPrice);
    const originalPrice = selectedVariant?.price ?? safeProduct.originalPrice;
    const lineTotal = tierPricing.lineTotal || numberOrZero(currentPrice) * qty;
    const variantStock = selectedVariant?.stock ?? safeProduct.stock;
    const isFavorite = favoriteStore.favoriteIds.has(String(safeProduct.id)) || Boolean(safeProduct.favorite);
    const isCompared = getCompareIds().includes(String(safeProduct.id));
    const pageMode = appStore.currentRoute === "product";
    const target = pageMode ? els.productDetailPageContent : els.detailContent;
    const lowStock = numberOrZero(variantStock) > 0 && numberOrZero(variantStock) <= 5;
    const deliveryDate = new Date(Date.now() + 3 * 86400000).toLocaleDateString(getCurrentLanguage(), { weekday: "short", month: "short", day: "numeric" });
    const socialProof = productStore.pdpSocialProof || { viewingNow: 0, recentlySold: 0, trendingScore: 0 };
    const seller = productStore.sellerProfile;
    const productMeta = PdpFeatureAdapter.resolveProductMeta(safeProduct);
    const deliveryMeta = PdpFeatureAdapter.resolveDeliveryMeta(safeProduct);
    const inventoryMessage = productStore.inventoryError || (numberOrZero(variantStock) > 0 ? t("product.stock", { count: variantStock }) : t("product.outOfStock"));
    const savings = Math.max(0, originalPrice - currentPrice);
    const isOutOfStock = numberOrZero(variantStock) <= 0;

    const discountPct = numberOrZero(safeProduct.discountPercent)
      || (originalPrice > currentPrice && originalPrice > 0
        ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
        : 0);
    const reviewCount = numberOrZero(safeProduct.reviewCount);
    const activeTab = productStore.pdpActiveTab || "description";

    target.innerHTML = `
      ${pageMode ? `
        <nav class="breadcrumbs pdp-breadcrumb" aria-label="Breadcrumb">
          <button data-route-home type="button">${escapeHtml(t("product.home"))}</button>
          <span aria-hidden="true">›</span>
          <button data-category="${escapeHtml(safeProduct.category || "ALL")}" type="button">${escapeHtml(safeProduct.category ? categoryLabel(safeProduct.category) : t("header.catalog"))}</button>
          ${safeProduct.brand ? `<span aria-hidden="true">›</span><button data-brand="${escapeHtml(safeProduct.brand)}" type="button">${escapeHtml(safeProduct.brand)}</button>` : ""}
          <span aria-hidden="true">›</span>
          <span>${escapeHtml(shortText(safeProduct.name, 48))}</span>
        </nav>
      ` : `
        <div class="drawer-head">
          <h2>${escapeHtml(t("product.viewDetails"))}</h2>
          <button class="icon-button" data-close-detail type="button" aria-label="${escapeHtml(t("product.close"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
        </div>
      `}

      <div class="pdp-layout pdp-layout--coupang">
        <div class="pdp-gallery-wrap">
          <div class="pdp-gallery-row">
            ${gallery.length > 1 ? `
              <div class="pdp-thumbs pdp-thumbs--vertical" role="tablist">
                ${gallery.slice(0, 10).map((image, index) => `
                  <button class="pdp-thumb ${index === galleryIndex ? "active" : ""}" type="button" data-pdp-thumb="${index}" role="tab" aria-selected="${index === galleryIndex}">
                    <img src="${escapeHtml(image)}" alt="" loading="lazy" />
                  </button>
                `).join("")}
              </div>
            ` : ""}
            <div class="pdp-main-image" data-pdp-zoom>
              <img src="${escapeHtml(currentImage)}" alt="${escapeHtml(safeProduct.name)}" id="pdpMainImage" decoding="async" fetchpriority="high" />
              <div class="pdp-main-controls">
                <button class="icon-button" type="button" data-pdp-prev aria-label="${escapeHtml(t("product.prevMedia"))}">‹</button>
                <button class="icon-button" type="button" data-pdp-next aria-label="${escapeHtml(t("product.nextMedia"))}">›</button>
                <button class="icon-button" type="button" data-pdp-fullscreen aria-label="${escapeHtml(t("product.fullscreen"))}">⛶</button>
              </div>
            </div>
          </div>
        </div>

        <div class="pdp-purchase-card">
          <div class="pdp-brand-row">
            <button class="pdp-brand-link" type="button" data-brand="${escapeHtml(safeProduct.brand || "")}">${escapeHtml(safeProduct.brand || t("header.catalog"))}</button>
            <div class="pdp-icon-actions">
              <button class="icon-button detail-favorite ${isFavorite ? "active" : ""}" data-detail-favorite="${escapeHtml(safeProduct.id)}" type="button" aria-label="${escapeHtml(t("product.wishlist"))}" title="${escapeHtml(isFavorite ? t("product.saved") : t("product.save"))}">♡</button>
              <button class="icon-button" data-pdp-share="${escapeHtml(safeProduct.id)}" type="button" aria-label="${escapeHtml(t("product.share"))}" title="${escapeHtml(t("product.share"))}">↗</button>
              <button class="icon-button ${isCompared ? "active" : ""}" data-compare="${escapeHtml(safeProduct.id)}" type="button" aria-label="${escapeHtml(t("product.compare"))}" title="${escapeHtml(t("product.compare"))}">⇄</button>
            </div>
          </div>

          <h1 class="detail-title pdp-title">${escapeHtml(safeProduct.name)}</h1>

          <button class="pdp-rating-link" type="button" data-pdp-tab="reviews">
            ${renderStars(numberOrZero(safeProduct.ratingAvg))}
            <span>${numberOrZero(safeProduct.ratingAvg).toFixed(1)}</span>
            <span class="pdp-review-count">${escapeHtml(t("product.reviewCountLink", { count: reviewCount }))}</span>
          </button>

          <div class="pdp-price-hero">
            ${discountPct > 0 ? `<span class="pdp-discount-pct">${discountPct}%</span>` : ""}
            <strong class="pdp-price-now">${formatPrice(currentPrice)}</strong>
            ${originalPrice > currentPrice ? `<span class="old-price">${formatPrice(originalPrice)}</span>` : ""}
          </div>
          ${originalPrice > currentPrice ? `<p class="pdp-savings">${escapeHtml(t("product.saveAmount", { amount: formatPrice(savings), percent: discountPct }))}</p>` : ""}
          ${lowStock ? `<span class="pdp-badge pdp-badge--stock-low">${escapeHtml(t("product.lowStock"))}</span>` : ""}
          ${isOutOfStock ? `<span class="pdp-badge pdp-badge--soldout">${escapeHtml(t("product.soldOut") || t("product.outOfStockCta"))}</span>` : ""}

          ${productStore.pdpSocialProofEnabled ? `
            <div class="pdp-social-proof">
              <span>${escapeHtml(t("product.nowViewing", { count: socialProof.viewingNow }))}</span>
              <span>${escapeHtml(t("product.soldToday", { count: socialProof.recentlySold }))}</span>
            </div>
          ` : ""}
          <div class="pdp-trust-row">
            <span class="pdp-badge pdp-badge--auth">✓ ${escapeHtml(t("product.authentic"))}</span>
            <span class="pdp-badge pdp-badge--official">${escapeHtml(t("product.verifiedSeller"))}</span>
            <span class="pdp-badge pdp-badge--ship">${escapeHtml(deliveryMeta.shippingCost > 0 ? formatPrice(deliveryMeta.shippingCost) : t("product.freeShipping"))}</span>
          </div>

          ${safeProduct.variants.length ? ProductDetailPage.renderVariantSelectors(safeProduct) : ""}
          ${ProductDetailPage.renderVariantTiers(selectedVariant, qty)}

          <div class="pdp-ship-line">
            <strong>${escapeHtml(deliveryMeta.shippingCost > 0 ? t("product.shipping") : t("product.freeShipping"))}</strong>
            <span>${escapeHtml(t("product.eta", { date: deliveryDate }))}</span>
            <span class="hint">${escapeHtml(t("product.delivery"))}</span>
          </div>

          <p class="hint pdp-stock-line">${escapeHtml(inventoryMessage)}</p>

          <div class="pdp-buy-row">
            <div class="quantity-row pdp-qty">
              <button class="secondary-button" data-qty="minus" type="button" aria-label="${escapeHtml(t("product.decreaseQty"))}">−</button>
              <input id="quantityInput" value="${qty}" inputmode="numeric" aria-label="${escapeHtml(t("product.quantity"))}" />
              <button class="secondary-button" data-qty="plus" type="button" aria-label="${escapeHtml(t("product.increaseQty"))}">+</button>
            </div>
            <div class="pdp-cta-pair">
              <button class="secondary-button cta-animate" data-detail-add type="button" ${isOutOfStock ? "disabled" : ""}>${escapeHtml(isOutOfStock ? t("product.outOfStockCta") : t("product.addToCartFull"))}</button>
              <button class="primary-button cta-animate" data-detail-buy type="button" ${isOutOfStock ? "disabled" : ""}>${escapeHtml(isOutOfStock ? t("product.unavailable") : t("product.buyNow"))}</button>
            </div>
          </div>
          ${isOutOfStock ? `<button class="ghost-button full" data-pdp-notify type="button">${escapeHtml(t("product.notifyMe"))}</button>` : ""}

          <ul class="pdp-spec-list">
            <li><span>${escapeHtml(t("product.sku"))}</span><strong>${escapeHtml(productMeta.sku)}</strong></li>
            <li><span>${escapeHtml(t("product.categoryLabel"))}</span><strong>${escapeHtml(categoryLabel(productMeta.category || safeProduct.category || ""))}</strong></li>
            <li><span>${escapeHtml(t("product.madeIn"))}</span><strong>${escapeHtml(productMeta.madeIn)}</strong></li>
            <li><span>${escapeHtml(t("product.returnInDays", { days: deliveryMeta.returnDays }))}</span><strong>${escapeHtml(t("product.secure"))}</strong></li>
          </ul>

          <div class="delivery-info">
            <span>${escapeHtml(t("product.secure"))}</span>
            <span>${escapeHtml(t("product.original"))}</span>
            <span>${escapeHtml(t("product.priceGuarantee"))}</span>
          </div>
        </div>
      </div>

      ${pageMode ? ProductDetailPage.renderFrequentlyBought(safeProduct) : ""}
      ${pageMode ? ProductDetailPage.renderTrendingInKorea() : ""}

      <div class="pdp-tabs pdp-tabs--sticky">
        <nav class="pdp-tab-nav" role="tablist">
          <button class="pdp-tab-btn ${activeTab === "description" ? "active" : ""}" data-pdp-tab="description" type="button" role="tab">${escapeHtml(t("product.tabDetail"))}</button>
          <button class="pdp-tab-btn ${activeTab === "reviews" ? "active" : ""}" data-pdp-tab="reviews" type="button" role="tab">${escapeHtml(t("product.tabReviews", { count: reviewCount }))}</button>
          <button class="pdp-tab-btn ${activeTab === "qna" ? "active" : ""}" data-pdp-tab="qna" type="button" role="tab">${escapeHtml(t("product.tabQna"))}</button>
          <button class="pdp-tab-btn ${activeTab === "shipping" ? "active" : ""}" data-pdp-tab="shipping" type="button" role="tab">${escapeHtml(t("product.tabShipping"))}</button>
        </nav>

        <div class="pdp-tab-panel" ${activeTab === "description" ? "" : "hidden"} data-pdp-panel="description">
          ${ProductDetailPage.renderEssentialInfo(safeProduct, productMeta)}
          <div class="pdp-safety-banner">
            <span aria-hidden="true">!</span>
            <p>${escapeHtml(t("product.safetyNotice"))}</p>
          </div>
          ${safeProduct.brand ? `<div class="pdp-brand-banner"><strong>${escapeHtml(safeProduct.brand)}</strong></div>` : ""}
          <div class="pdp-long-desc">
            <p>${escapeHtml(safeProduct.description || t("common.unavailable"))}</p>
            <p class="hint"><strong>${escapeHtml(t("product.howToUse"))}</strong> ${escapeHtml(t("product.howToUseBody"))}</p>
            <p class="hint"><strong>${escapeHtml(t("product.warnings"))}</strong> ${escapeHtml(t("product.warningsBody"))}</p>
          </div>
          ${safeProduct.detailImages.length ? `<div class="detail-image-stack">${safeProduct.detailImages.map((image) => `<img src="${escapeHtml(image)}" alt="" loading="lazy" class="img-loading" />`).join("")}</div>` : ""}
        </div>

        <div class="pdp-tab-panel reviews-premium" ${activeTab === "reviews" ? "" : "hidden"} data-pdp-panel="reviews">
          ${ProductDetailPage.renderProductReviews(safeProduct.id)}
        </div>

        <div class="pdp-tab-panel" ${activeTab === "qna" ? "" : "hidden"} data-pdp-panel="qna">
          ${ProductDetailPage.renderQnaSection()}
        </div>

        <div class="pdp-tab-panel" ${activeTab === "shipping" ? "" : "hidden"} data-pdp-panel="shipping">
          ${ProductDetailPage.renderShippingReturns(deliveryMeta, seller)}
        </div>
      </div>

      ${pageMode ? ProductDetailPage.renderRecommendations() : ""}
      ${pageMode ? ProductDetailPage.renderBrandOthers(safeProduct) : ""}
      ${pageMode ? ProductDetailPage.renderRecentlyViewedStrip() : ""}
      ${pageMode ? ProductDetailPage.renderRelatedCategories(safeProduct) : ""}

      ${pageMode ? `
        <div class="mobile-buy-bar">
          <button class="icon-button detail-favorite ${isFavorite ? "active" : ""}" data-detail-favorite="${escapeHtml(safeProduct.id)}" type="button" aria-label="${escapeHtml(t("product.wishlist"))}">♡</button>
          <strong>${formatPrice(lineTotal)}</strong>
          <button class="secondary-button" data-detail-add type="button" ${isOutOfStock ? "disabled" : ""}>${escapeHtml(t("product.addToCart"))}</button>
          <button class="primary-button" data-detail-buy type="button" ${isOutOfStock ? "disabled" : ""}>${escapeHtml(t("product.buyNow"))}</button>
        </div>
      ` : ""}
    `;
    observeProductImpressions(target);
    initLazyImages(target);
    ProductDetailPage.initPdpGallerySwipe(target);
    } catch (error) {
      console.error("[PDP] renderProductDetail failed", error);
      // Do not convert a successful product fetch into "not found" / network failure.
      // Prefer keeping whatever product payload we already have.
      if (productStore.selectedDetailProduct?.id) {
        productStore.detailError = error?.message || t("product.renderFailed");
        return;
      }
      productStore.detailError = error?.message || t("product.renderFailed");
      ProductDetailPage.renderProductDetailError({ notFound: false, networkError: false });
    }
  },

  renderEssentialInfo(product, meta) {
    const rows = [
      [t("filter.brand"), product.brand || "—"],
      [t("product.categoryLabel"), product.category ? categoryLabel(product.category) : "—"],
      [t("product.madeIn"), meta.madeIn || "—"],
      [t("product.country"), meta.country || "—"],
      [t("product.sku"), meta.sku || "—"],
      [t("product.skinTypeLabel"), t("product.skinTypeValue")],
      [t("product.textureLabel"), t("product.textureValue")],
      [t("product.storageLabel"), t("product.storageValue")],
    ];
    return `
      <section class="pdp-info-block">
        <h3>${escapeHtml(t("product.essentialInfo"))}</h3>
        <table class="pdp-info-table">
          <tbody>
            ${rows.map(([label, value]) => `
              <tr>
                <th scope="row">${escapeHtml(label)}</th>
                <td>${escapeHtml(value)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </section>
    `;
  },

  renderQnaSection() {
    return `
      <section class="pdp-qna">
        <div class="pdp-qna-head">
          <h3>${escapeHtml(t("product.tabQna"))}</h3>
          <button class="secondary-button" type="button" disabled title="${escapeHtml(t("product.qnaPlaceholder"))}">${escapeHtml(t("product.askQuestion"))}</button>
        </div>
        <ul class="pdp-qna-rules">
          <li>${escapeHtml(t("product.qnaRule1"))}</li>
          <li>${escapeHtml(t("product.qnaRule2"))}</li>
        </ul>
        <div class="pdp-empty-block">
          <p>${escapeHtml(t("product.qnaEmpty"))}</p>
        </div>
      </section>
    `;
  },

  renderShippingReturns(deliveryMeta, seller) {
    return `
      <section class="pdp-info-block">
        <h3>${escapeHtml(t("product.shippingInfo"))}</h3>
        <table class="pdp-info-table">
          <tbody>
            <tr><th scope="row">${escapeHtml(t("product.shipping"))}</th><td>${deliveryMeta.shippingCost > 0 ? formatPrice(deliveryMeta.shippingCost) : escapeHtml(t("product.free"))}</td></tr>
            <tr><th scope="row">${escapeHtml(t("product.freeOver"))}</th><td>${formatPrice(deliveryMeta.freeShippingThreshold)}</td></tr>
            <tr><th scope="row">${escapeHtml(t("product.courier"))}</th><td>${escapeHtml(deliveryMeta.courier)}</td></tr>
            <tr><th scope="row">${escapeHtml(t("product.warehouse"))}</th><td>${escapeHtml(deliveryMeta.warehouse)}</td></tr>
            <tr><th scope="row">${escapeHtml(t("product.cod"))}</th><td>${escapeHtml(deliveryMeta.codAvailable ? t("product.available") : t("product.unavailable"))}</td></tr>
            <tr><th scope="row">${escapeHtml(t("product.pickup"))}</th><td>${escapeHtml(deliveryMeta.pickupAvailable ? t("product.available") : t("product.unavailable"))}</td></tr>
          </tbody>
        </table>
      </section>
      <section class="pdp-info-block">
        <h3>${escapeHtml(t("product.returnGuide"))}</h3>
        <table class="pdp-info-table">
          <tbody>
            <tr><th scope="row">${escapeHtml(t("product.returnPeriod"))}</th><td>${escapeHtml(t("product.returnInDays", { days: deliveryMeta.returnDays }))}</td></tr>
            <tr><th scope="row">${escapeHtml(t("product.returnFee"))}</th><td>${escapeHtml(t("product.returnFeeBody"))}</td></tr>
          </tbody>
        </table>
        <ul class="pdp-policy-list">
          <li>${escapeHtml(t("product.returnRule1"))}</li>
          <li>${escapeHtml(t("product.returnRule2"))}</li>
          <li>${escapeHtml(t("product.returnRule3"))}</li>
        </ul>
      </section>
      <section class="pdp-info-block">
        <h3>${escapeHtml(t("product.sellerInfo"))}</h3>
        ${seller ? `
          <table class="pdp-info-table">
            <tbody>
              <tr><th scope="row">${escapeHtml(t("product.sellerName"))}</th><td>${escapeHtml(seller.storeName || seller.name || t("product.sellerDefault"))}</td></tr>
              <tr><th scope="row">${escapeHtml(t("product.sellerRatingLabel"))}</th><td>${escapeHtml(t("product.sellerRating", { rating: Number(seller.rating || seller.averageRating || 0).toFixed(1), followers: Number(seller.followers || seller.followerCount || 0) }))}</td></tr>
              <tr><th scope="row">${escapeHtml(t("product.sellerStatsLabel"))}</th><td>${escapeHtml(t("product.sellerStats", { count: Number(seller.productCount || seller.productsCount || 0) }))}</td></tr>
            </tbody>
          </table>
        ` : `<p class="hint">${escapeHtml(t("product.sellerDefault"))}</p>`}
      </section>
    `;
  },

  renderBrandOthers(product) {
    if (!product?.brand) return "";
    const items = (productStore.recommendedOthers || productStore.recommendedProducts || [])
      .filter((p) => String(p.brand || "").toLowerCase() === String(product.brand).toLowerCase())
      .slice(0, 8);
    if (!items.length) return "";
    return `
      <section class="recommended-section app-feed-block app-feed-rail">
        <div class="app-section-head">
          <h2>${escapeHtml(t("product.brandOthers", { brand: product.brand }))}</h2>
          <button class="ghost-button" type="button" data-brand="${escapeHtml(product.brand)}">${escapeHtml(t("product.visitBrandShop"))}</button>
        </div>
        <div class="product-grid app-rail-grid">
          ${items.map((item, index) => productCard(item, { screen: "brand-others", position: index })).join("")}
        </div>
      </section>
    `;
  },

  renderRelatedCategories(product) {
    if (!product?.category) return "";
    return `
      <section class="pdp-related-cats">
        <h3>${escapeHtml(t("product.relatedCategories"))}</h3>
        <div class="pdp-related-cats-list">
          <button type="button" data-category="${escapeHtml(product.category)}">${escapeHtml(categoryLabel(product.category))}</button>
          ${product.brand ? `<button type="button" data-brand="${escapeHtml(product.brand)}">${escapeHtml(product.brand)}</button>` : ""}
        </div>
      </section>
    `;
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
        ${uniqueColors.length ? `<div class="pdp-variant-section"><p class="pdp-variant-label">${escapeHtml(t("filter.color"))}</p><div class="color-swatches">${uniqueColors.map((c) => {
          const active = product.variants.some((v) => String(v.id) === String(productStore.selectedVariantId) && String(v.label || "").toLowerCase().includes(String(c).toLowerCase()));
          return `<button class="color-swatch ${active ? "active" : ""}" type="button" data-variant-color="${escapeHtml(c)}">${escapeHtml(c)}</button>`;
        }).join("")}</div></div>` : ""}
        ${uniqueSizes.length ? `<div class="pdp-variant-section"><p class="pdp-variant-label">${escapeHtml(t("filter.size"))}</p><div class="size-options">${product.variants.map((v) => {
          const active = String(v.id) === String(productStore.selectedVariantId);
          const disabled = Number(v.stock || 0) <= 0;
          return `<button class="size-option ${active ? "active" : ""}" data-variant="${escapeHtml(v.id)}" type="button" ${disabled ? "disabled" : ""}>${escapeHtml(v.label || v.id)}</button>`;
        }).join("")}</div></div>` : ""}
      `;
    }
    return ProductDetailPage.renderVariantButtons(product);
  },

  renderVariantTiers(variant, quantity = 1) {
    const tiers = normalizeVariantTiers(variant?.tiers);
    if (!tiers.length) return "";
    const qty = Math.max(1, numberOrZero(quantity) || 1);
    const baseUnit = numberOrZero(
      variant?.discountPrice != null && variant.discountPrice !== ""
        ? variant.discountPrice
        : variant?.price
    );
    return `
      <div class="pdp-variant-section pdp-tier-section">
        <p class="pdp-variant-label">${escapeHtml(t("product.bulkTiers"))}</p>
        <p class="hint">${escapeHtml(t("product.bulkTiersHint"))}</p>
        <div class="pdp-tier-options" role="list">
          ${tiers.map((tier) => {
            const unit = tier.totalPrice / tier.minQty;
            const active = qty >= tier.minQty
              && !tiers.some((other) => other.minQty > tier.minQty && qty >= other.minQty);
            const savePct = baseUnit > 0
              ? Math.max(0, Math.round(((baseUnit - unit) / baseUnit) * 100))
              : 0;
            return `
              <button
                class="pdp-tier-option ${active ? "active" : ""}"
                type="button"
                role="listitem"
                data-variant-tier="${tier.minQty}"
                aria-pressed="${active ? "true" : "false"}"
              >
                <strong>${escapeHtml(t("product.tierQty", { count: tier.minQty }))}</strong>
                <span>${formatPrice(tier.totalPrice)}</span>
                <span class="hint">${formatPrice(unit)} / ${escapeHtml(t("product.unitShort"))}</span>
                ${savePct > 0 ? `<span class="pdp-tier-save">-${savePct}%</span>` : ""}
              </button>
            `;
          }).join("")}
        </div>
      </div>
    `;
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
    const others = (productStore.recommendedOthers || productStore.recommendedProducts || []).slice(0, 8);
    if (!others.length) return "";
    return ProductDetailPage.renderPdpProductStrip(t("product.compareTogether"), others, "fbt");
  },

  renderTrendingInKorea() {
    const items = (productStore.recommendedSimilar || productStore.recommendedProducts || []).slice(0, 8);
    if (!items.length) return "";
    return ProductDetailPage.renderPdpProductStrip(t("product.customersAlsoViewed"), items, "trending-korea");
  },

  renderSellerBlock(seller) {
    const name = seller.storeName || seller.name || t("product.sellerDefault");
    const rating = Number(seller.rating || seller.averageRating || 0).toFixed(1);
    const followers = Number(seller.followers || seller.followerCount || 0);
    const products = Number(seller.productCount || seller.productsCount || 0);
    return `
      <section class="pdp-seller-card">
        <h4>${escapeHtml(name)}</h4>
        <p class="hint">${escapeHtml(t("product.sellerRating", { rating, followers }))}</p>
        <p class="hint">${escapeHtml(t("product.sellerStats", { count: products }))}</p>
      </section>
    `;
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

    if (productStore.recommendationsError) return "";

    const apiSections = [
      [t("product.customersAlsoBought"), productStore.recommendedOthers || [], "recommendations-others"],
      [t("product.relatedRecommended"), productStore.recommendedSimilar || [], "recommendations-similar"],
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
    if (productStore.reviewSort === "helpful" || productStore.reviewSort === "best") {
      reviews.sort((a, b) => {
        const hb = Number(b.helpfulCount || 0) + (productStore.reviewHelpfulIds.has(String(b.id)) ? 1 : 0);
        const ha = Number(a.helpfulCount || 0) + (productStore.reviewHelpfulIds.has(String(a.id)) ? 1 : 0);
        if (hb !== ha) return hb - ha;
        return numberOrZero(b.rating) - numberOrZero(a.rating);
      });
    } else if (productStore.reviewSort === "rating-high") {
      reviews.sort((a, b) => numberOrZero(b.rating) - numberOrZero(a.rating));
    } else if (productStore.reviewSort === "rating-low") {
      reviews.sort((a, b) => numberOrZero(a.rating) - numberOrZero(b.rating));
    } else {
      reviews.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
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
    const photoUrls = allReviews.flatMap((r) => (Array.isArray(r.imageUrls) ? r.imageUrls : [])).filter(Boolean);
    const sort = productStore.reviewSort || "newest";

    return `
      <div class="reviews-premium-wrap">
        <h3 class="reviews-section-title">${escapeHtml(t("reviews.sectionTitle", { count: stats.count }))}</h3>
        ${ReviewSummary({
          stats,
          distribution,
          reviewsLabel: t("product.reviews"),
          photoUrls,
        })}
        <div class="reviews-toolbar reviews-toolbar--coupang">
          <div class="reviews-sort-tabs" role="tablist">
            <button class="reviews-sort-tab ${sort === "best" || sort === "helpful" ? "active" : ""}" type="button" data-review-sort-tab="best">${escapeHtml(t("reviews.sortBest"))}</button>
            <button class="reviews-sort-tab ${sort === "newest" ? "active" : ""}" type="button" data-review-sort-tab="newest">${escapeHtml(t("reviews.sortNewest"))}</button>
          </div>
          <div class="reviews-toolbar-right">
            <input type="search" placeholder="${escapeHtml(t("reviews.search"))}" value="${escapeHtml(productStore.reviewSearchQuery || "")}" data-review-search />
            <select data-review-sort>
              <option value="newest" ${sort === "newest" ? "selected" : ""}>${escapeHtml(t("reviews.sortNewest"))}</option>
              <option value="best" ${sort === "best" || sort === "helpful" ? "selected" : ""}>${escapeHtml(t("reviews.sortBest"))}</option>
              <option value="rating-high" ${sort === "rating-high" ? "selected" : ""}>${escapeHtml(t("reviews.sortRatingHigh"))}</option>
              <option value="rating-low" ${sort === "rating-low" ? "selected" : ""}>${escapeHtml(t("reviews.sortRatingLow"))}</option>
            </select>
            <select data-review-filter-rating>
              <option value="0">${escapeHtml(t("reviews.allRatings"))}</option>
              ${[5, 4, 3, 2, 1].map((r) => `<option value="${r}" ${productStore.reviewFilterRating === r ? "selected" : ""}>${r}★+</option>`).join("")}
            </select>
          </div>
        </div>
        <div class="review-list">
          ${reviews.length ? reviews.map(ProductDetailPage.renderReviewCard).join("") : `<p class="hint">${escapeHtml(t("search.noResults"))}</p>`}
        </div>
      </div>
    `;
  },

  renderReviewCard(review) {
    return ReviewCardView({
      review,
      helpful: productStore.reviewHelpfulIds.has(String(review.id)),
      helpfulCount: Number(review.helpfulCount || 0),
      verifiedLabel: t("reviews.verified"),
      noTextLabel: t("reviews.noText"),
      helpfulLabel: t("reviews.helpful"),
      reportLabel: t("reviews.report"),
      expertLabel: t("reviews.expert"),
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
              ${escapeHtml(variant.label || t("product.variantLabel", { id: variant.id }))}
              ${variant.price ? ` · ${escapeHtml(formatPrice(variant.discountPrice ?? variant.price))}` : ""}
            </button>
          `;
        }).join("")}
      </div>
    `;
  },

  renderAddToCartLoading() {
    const loading = cartStore.addingProductIds.has(String(productStore.selectedDetailProduct?.id));
    document.querySelectorAll("[data-detail-add]").forEach((detailButton) => {
      detailButton.disabled = loading;
      detailButton.textContent = loading
        ? t("product.adding")
        : (detailButton.closest(".mobile-buy-bar") ? t("product.addToCart") : t("product.addToCartFull"));
    });
    document.querySelectorAll("[data-detail-buy]").forEach((buyButton) => {
      buyButton.disabled = loading;
      buyButton.textContent = loading ? t("product.adding") : t("product.buyNow");
    });
    if (productStore.products.length) {
      renderProductList(els.grid, productStore.products, t("home.noProducts"), { screen: appStore.currentGridScreen });
    }
  },
};
