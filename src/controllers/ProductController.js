import { appStore, productStore, favoriteStore } from "../stores/index.js";
import { ProductService } from "../services/ProductService.js";
import { ReviewService } from "../services/ReviewService.js";
import { HomeService } from "../services/HomeService.js";
import { ProductDetailPage } from "../pages/product/ProductDetailPage.js";
import { sendProductView } from "../pages/shared/analytics.js";
import { showProductView } from "../runtime/navigation.js";

export const ProductController = {
  pickDefaultVariant(product) {
    return ProductService.pickDefaultVariant(product);
  },

  async loadDetailPage(productId) {
    showProductView();
    appStore.currentRoute = "product";
    productStore.detailLoading = true;
    productStore.detailError = "";
    productStore.selectedDetailProduct = null;
    productStore.recommendedProducts = [];
    productStore.recommendedSimilar = [];
    productStore.recommendedOthers = [];
    productStore.recommendationsError = "";
    ProductDetailPage.renderDetailLoading(true);

    const fallbackProduct = productStore.products.find((item) => String(item.id) === String(productId)) || {};
    const product = await ProductService.loadProduct(productId, fallbackProduct);
    productStore.detailLoading = false;

    if (!product.id) {
      productStore.detailError = appStore.lastApiError || "Mahsulot topilmadi.";
      ProductDetailPage.renderProductDetailError();
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
    document.title = `${product.name} - BEAUTY SKIN KOREA`;
    HomeService.addRecentProduct(product.id);
    sendProductView(product.id);
    ProductDetailPage.renderProductDetail(product);
    await ProductController.loadReviews(product.id);
    await ProductController.loadRecommendations(product);
  },

  async loadRecommendations(product) {
    productStore.recommendationsLoading = true;
    productStore.recommendationsError = "";
    ProductDetailPage.renderProductDetail(product);

    const result = await ProductService.loadRecommendations(product, appStore.sessionId);

    if (result.mode === "api") {
      productStore.recommendationsLoading = false;
      productStore.recommendedProducts = [];
      productStore.recommendedSimilar = result.similar;
      productStore.recommendedOthers = result.others;
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
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
    if (productStore.selectedDetailProduct?.id !== undefined && String(productStore.selectedDetailProduct.id) === String(product.id)) {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
  },

  async loadReviews(productId) {
    if (!productId) return;
    const key = String(productId);
    productStore.productReviewsLoading[key] = true;
    productStore.productReviewsError[key] = "";
    if (productStore.selectedDetailProduct?.id !== undefined && String(productStore.selectedDetailProduct.id) === key) {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }

    const { reviews, error } = await ReviewService.loadProductReviews(productId);
    productStore.productReviewsLoading[key] = false;

    if (reviews === null) {
      productStore.productReviewsError[key] = error;
    } else {
      productStore.productReviewsByProductId[key] = reviews;
    }

    if (productStore.selectedDetailProduct?.id !== undefined && String(productStore.selectedDetailProduct.id) === key) {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
  },

  rerender() {
    if (productStore.selectedDetailProduct) {
      ProductDetailPage.renderProductDetail(productStore.selectedDetailProduct);
    }
  },
};
