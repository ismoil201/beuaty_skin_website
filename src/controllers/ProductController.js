import { appStore, productStore, favoriteStore } from "../stores/index.js";
import { ProductService } from "../services/ProductService.js";
import { ReviewService } from "../services/ReviewService.js";
import { HomeService } from "../services/HomeService.js";
import { PdpFeatureAdapter } from "../services/PdpFeatureAdapter.js";
import { ProductDetailPage } from "../pages/product/ProductDetailPage.js";
import { sendProductView } from "../pages/shared/analytics.js";
import { showProductView } from "../runtime/navigation.js";
import { applyProductSeo } from "../utils/seoProduct.js";

export const ProductController = {
  nextRequestId() {
    productStore.detailRequestId = Number(productStore.detailRequestId || 0) + 1;
    return productStore.detailRequestId;
  },

  isActiveRequest(requestId) {
    return Number(productStore.detailRequestId) === Number(requestId);
  },

  safeRerender() {
    if (!productStore.selectedDetailProduct) return;
    try {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    } catch (error) {
      console.error("[PDP] render failed", error);
      // Keep the previous successful UI on non-critical rerender failures.
    }
  },

  pickDefaultVariant(product) {
    return ProductService.pickDefaultVariant(product);
  },

  async loadDetailPage(productId) {
    const requestId = ProductController.nextRequestId();
    showProductView();
    appStore.currentRoute = "product";
    productStore.detailLoading = true;
    productStore.detailError = "";
    productStore.selectedDetailProduct = null;
    productStore.recommendedProducts = [];
    productStore.recommendedSimilar = [];
    productStore.recommendedOthers = [];
    productStore.recommendationsError = "";
    productStore.sellerProfile = null;
    productStore.inventory = null;
    productStore.inventoryError = "";
    productStore.inventoryLoading = false;
    productStore.pdpSocialProof = { viewingNow: 0, recentlySold: 0, trendingScore: 0 };
    productStore.pdpSocialProofEnabled = false;
    ProductDetailPage.renderDetailLoading(true);

    try {
      const fallbackProduct = productStore.products.find((item) => String(item.id) === String(productId)) || {};
      const product = await ProductService.loadProduct(productId, fallbackProduct);
      if (!ProductController.isActiveRequest(requestId)) return;

      if (!product?.id) {
        const notFound = Number(appStore.lastApiStatus) === 404;
        const networkError = Number(appStore.lastApiStatus) === 0;
        productStore.detailError = notFound
          ? (appStore.lastApiError || "Mahsulot topilmadi.")
          : networkError
            ? (appStore.lastApiError || "Server bilan aloqa bo‘lmadi")
            : (appStore.lastApiError || "Product could not be loaded.");
        ProductDetailPage.renderProductDetailError({ notFound, networkError });
        return;
      }

      product.favorite = favoriteStore.favoriteIds.has(String(product.id)) || product.favorite;
      productStore.selectedDetailProduct = product;
      productStore.selectedVariantId = ProductController.pickDefaultVariant(product)?.id || null;
      productStore.selectedQuantity = 1;
      productStore.pdpGalleryIndex = 0;
      productStore.pdpActiveTab = "description";
      productStore.reviewSearchQuery = "";
      productStore.reviewFilterRating = 0;
      productStore.pdpFeatureFlags = PdpFeatureAdapter.featureFlags();
      productStore.pdpCouponCode = "";
      productStore.pdpCouponStatus = "";
      productStore.pdpCouponDiscount = 0;

      try {
        applyProductSeo(product);
      } catch (error) {
        console.error("[PDP] SEO failed", error);
      }
      try {
        HomeService.addRecentProduct(product.id);
        sendProductView(product.id);
      } catch (error) {
        console.error("[PDP] analytics/recent failed", error);
      }

      ProductController.safeRerender();
      productStore.detailLoading = false;
      void ProductController.loadOptionalModules(product, requestId);
    } catch (error) {
      console.error("[PDP] loadDetailPage failed", error);
      if (!ProductController.isActiveRequest(requestId)) return;
      const notFound = Number(appStore.lastApiStatus) === 404;
      const networkError = Number(appStore.lastApiStatus) === 0;
      productStore.detailError = notFound
        ? (appStore.lastApiError || "Mahsulot topilmadi.")
        : networkError
          ? (appStore.lastApiError || "Server bilan aloqa bo‘lmadi")
          : (error?.message || appStore.lastApiError || "Product load failed.");
      ProductDetailPage.renderProductDetailError({ notFound, networkError });
    } finally {
      if (ProductController.isActiveRequest(requestId)) {
        productStore.detailLoading = false;
      }
    }
  },

  async loadOptionalModules(product, requestId) {
    const tasks = await Promise.allSettled([
      ProductController.loadSellerAndSocialProof(product, requestId),
      ProductController.loadInventory(product.id, requestId),
      ProductController.loadReviews(product.id, requestId),
      ProductController.loadRecommendations(product, requestId),
    ]);
    tasks.forEach((task, idx) => {
      if (task.status === "rejected") {
        console.error("[PDP] optional module failed", { index: idx, reason: task.reason });
      }
    });
  },

  async loadSellerAndSocialProof(product, requestId) {
    const [socialProofResult, sellerResult] = await Promise.allSettled([
      PdpFeatureAdapter.loadSocialProof(product.id),
      PdpFeatureAdapter.loadSellerProfile(product),
    ]);
    if (!ProductController.isActiveRequest(requestId)) return;
    productStore.pdpSocialProof = socialProofResult.status === "fulfilled"
      ? (socialProofResult.value || { viewingNow: 0, recentlySold: 0, trendingScore: 0 })
      : { viewingNow: 0, recentlySold: 0, trendingScore: 0 };
    productStore.pdpSocialProofEnabled = socialProofResult.status === "fulfilled";
    productStore.sellerProfile = sellerResult.status === "fulfilled" ? sellerResult.value : null;
    ProductController.safeRerender();
  },

  async loadInventory(productId, requestId) {
    if (!productId) return;
    productStore.inventoryLoading = true;
    const result = await PdpFeatureAdapter.loadInventory(productId);
    if (!ProductController.isActiveRequest(requestId)) return;
    productStore.inventoryLoading = false;
    productStore.inventory = result.ok ? result.inventory : null;
    productStore.inventoryError = result.ok ? "" : (result.message || "Availability unknown");
    ProductController.safeRerender();
  },

  async loadRecommendations(product, requestId = productStore.detailRequestId) {
    if (!product?.id) return;
    productStore.recommendationsLoading = true;
    productStore.recommendationsError = "";
    ProductController.safeRerender();

    let result;
    try {
      result = await ProductService.loadRecommendations(product, appStore.sessionId);
    } catch (error) {
      console.error("[PDP] recommendations failed", error);
      if (ProductController.isActiveRequest(requestId)) {
        productStore.recommendationsLoading = false;
        productStore.recommendationsError = "Recommendations could not be loaded.";
        ProductController.safeRerender();
      }
      return;
    }
    if (!ProductController.isActiveRequest(requestId)) return;

    if (result.mode === "api") {
      productStore.recommendationsLoading = false;
      productStore.recommendedProducts = [];
      productStore.recommendedSimilar = Array.isArray(result.similar) ? result.similar : [];
      productStore.recommendedOthers = Array.isArray(result.others) ? result.others : [];
      ProductController.safeRerender();
      return;
    }

    productStore.recommendationsLoading = false;
    if (result.failed) {
      productStore.recommendationsError = appStore.lastApiError || "Recommendations could not be loaded.";
    }
    productStore.recommendedProducts = result.fallback.map((item) => ({
      ...item,
      favorite: favoriteStore.favoriteIds.has(String(item.id)) || item.favorite,
    }));
    productStore.recommendedSimilar = [];
    productStore.recommendedOthers = [];
    ProductController.safeRerender();
  },

  async loadReviews(productId, requestId = productStore.detailRequestId) {
    if (!productId) return;
    const key = String(productId);
    productStore.productReviewsLoading[key] = true;
    productStore.productReviewsError[key] = "";
    ProductController.safeRerender();

    let reviewsResult;
    try {
      reviewsResult = await ReviewService.loadProductReviews(productId);
    } catch (error) {
      console.error("[PDP] reviews failed", error);
      if (ProductController.isActiveRequest(requestId)) {
        productStore.productReviewsLoading[key] = false;
        productStore.productReviewsError[key] = "Reviews unavailable.";
        ProductController.safeRerender();
      }
      return;
    }
    if (!ProductController.isActiveRequest(requestId)) return;
    const { reviews, error } = reviewsResult;
    productStore.productReviewsLoading[key] = false;

    if (reviews === null) {
      productStore.productReviewsError[key] = error;
    } else {
      productStore.productReviewsByProductId[key] = reviews;
    }

    ProductController.safeRerender();
  },

  rerender() {
    if (productStore.selectedDetailProduct) {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
  },
};
