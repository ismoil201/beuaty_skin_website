import { CONFIG } from "../config/config.js";
import { CATEGORY_LABELS } from "../config/constants.js";
import { t } from "../i18n/index.js";

export function numberOrZero(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : 0;
}

export function imageValue(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  return value.imageUrl || value.url || "";
}

export function normalizeImages(images) {
  if (!Array.isArray(images)) return [];
  return images.map((item) => imageValue(item)).filter(Boolean);
}

export function getPageContent(response) {
  if (Array.isArray(response?.content)) return response.content;
  if (Array.isArray(response?.items)) return response.items;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response)) return response;
  return [];
}

export function normalizeProduct(product = {}) {
  const variants = Array.isArray(product.variants) ? product.variants : [];
  const selectedVariant =
    variants.find((variant) => Number(variant.stock || 0) > 0) || variants[0] || null;
  const images = normalizeImages(product.images);
  const detailImages = normalizeImages(product.detailImages);
  const mainImage =
    imageValue(product.mainImageUrl) ||
    images[0] ||
    product.imageUrl ||
    CONFIG.placeholderImage;
  const originalPrice = numberOrZero(product.price ?? selectedVariant?.price);
  const finalPrice = numberOrZero(
    selectedVariant?.discountPrice ?? product.discountPrice ?? product.price
  );
  const discountPercent =
    originalPrice > finalPrice && originalPrice > 0
      ? Math.round(((originalPrice - finalPrice) / originalPrice) * 100)
      : 0;

  return {
    id: product.id,
    name: product.name || "Mahsulot",
    description: product.description || "",
    brand: product.brand || "",
    category: product.category || "",
    image: mainImage,
    images: images.length ? images : [mainImage],
    detailImages,
    price: numberOrZero(product.price),
    originalPrice,
    discountPrice: numberOrZero(product.discountPrice),
    finalPrice,
    discountPercent,
    stock: numberOrZero(product.stock),
    ratingAvg: numberOrZero(product.ratingAvg),
    reviewCount: numberOrZero(product.reviewCount),
    soldCount: numberOrZero(product.soldCount),
    todayDeal: Boolean(product.todayDeal),
    favorite: Boolean(product.favorite),
    variants,
    raw: product,
  };
}

export function normalizeCartItem(item = {}) {
  const product = normalizeProduct(item.product || item.variant?.product || item);
  const quantity = numberOrZero(item.quantity) || 1;
  const unitPrice = numberOrZero(item.unitPrice || product.finalPrice);
  const lineTotal = numberOrZero(item.lineTotal || unitPrice * quantity);
  return {
    id: item.id || item.cartItemId,
    productId: product.id,
    product,
    image: imageValue(item.image || item.imageUrl || item.mainImageUrl) || product.image,
    name: product.name,
    brand: product.brand,
    variantId: item.variantId || item.variant?.id,
    variantLabel: item.variantLabel || item.variant?.label || "",
    unitPrice,
    lineTotal,
    quantity,
    stock: numberOrZero(item.stock ?? item.variant?.stock ?? product.stock),
  };
}

export function normalizeFavoriteItem(item = {}) {
  const source = item.product || item;
  const normalized = normalizeProduct(source);
  if (normalized.id === undefined || normalized.id === null) {
    const fallbackId = source.productId ?? item.productId;
    if (fallbackId !== undefined && fallbackId !== null) {
      normalized.id = fallbackId;
    }
  }
  normalized.favorite = true;
  return normalized;
}

export function normalizeCategory(value) {
  if (typeof value === "string") return value;
  return value?.code || value?.name || value?.title || "";
}

export function normalizeOrderItem(item = {}) {
  const product = item.product || {};
  const mainImageUrl = imageValue(item.mainImageUrl || product.mainImageUrl);
  return {
    id: item.id || item.orderItemId,
    productId: item.productId || product.id || item.product?.id,
    orderId: item.orderId,
    name: item.productName || item.name || product.name || "Product",
    image:
      item.imageUrl ||
      mainImageUrl ||
      product.imageUrl ||
      normalizeImages(product.images)[0] ||
      CONFIG.placeholderImage,
    variantLabel: item.variantLabel || item.variant?.label || "",
    quantity: numberOrZero(item.quantity) || 1,
    unitPrice: numberOrZero(item.unitPrice || item.price || product.discountPrice || product.price),
    lineTotal: numberOrZero(item.lineTotal || item.total || item.price || 0),
  };
}

export function normalizeReview(review = {}) {
  return {
    id:
      review.id ||
      review.reviewId ||
      `${review.productId || "product"}-${review.orderId || "order"}-${review.createdAt || ""}`,
    productId: review.productId || review.product?.id || review.orderItem?.productId,
    orderId: review.orderId || review.order?.id || review.orderItem?.orderId,
    rating: Math.min(5, Math.max(0, numberOrZero(review.rating))),
    content: review.content || review.reviewContent || review.comment || "",
    imageUrls: Array.isArray(review.imageUrls)
      ? review.imageUrls.filter(Boolean)
      : normalizeImages(review.images),
    createdAt: review.createdAt || review.createdDate || review.reviewedAt || "",
    userName:
      review.userName ||
      review.fullName ||
      review.user?.fullName ||
      review.user?.name ||
      "Customer",
  };
}

export function normalizeNotification(notification = {}) {
  return {
    id: notification.id || notification.notificationId,
    title: notification.title || notification.subject || "Notification",
    message: notification.message || notification.content || "",
    type: String(notification.type || "SYSTEM").toUpperCase(),
    read: Boolean(notification.read ?? notification.isRead),
    createdAt: notification.createdAt || notification.createdDate || "",
    refId: notification.refId || notification.referenceId || notification.orderId || null,
    raw: notification,
  };
}

export function notificationTypeLabel(type = "") {
  const normalized = String(type || "SYSTEM").toUpperCase();
  return t(`notification.${normalized}`);
}

export function normalizeUnreadCount(response) {
  if (typeof response === "number") return Math.max(0, response);
  if (typeof response === "string" && response.trim() !== "")
    return Math.max(0, Number(response) || 0);
  if (typeof response?.data === "number") return Math.max(0, response.data);
  if (typeof response?.count === "number") return Math.max(0, response.count);
  if (typeof response?.unreadCount === "number") return Math.max(0, response.unreadCount);
  return 0;
}

export function getNotificationsContent(response) {
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.content)) return response.data.content;
  if (Array.isArray(response?.content)) return response.content;
  if (Array.isArray(response)) return response;
  return [];
}

export function normalizeMyReviewItem(item = {}) {
  const review =
    item.review || item.reviewResponse || (item.rating || item.content ? item : null);
  const product = normalizeProduct(
    item.product || item.productCard || item.productResponse || item
  );
  const normalizedReview = review
    ? normalizeReview({
        ...review,
        productId: review.productId || product.id,
        orderId: review.orderId || item.orderId,
      })
    : null;
  const productId = item.productId || normalizedReview?.productId || product.id;
  const orderId = item.orderId || item.order?.id || item.orderResponse?.id || normalizedReview?.orderId;
  const status = item.status || item.orderStatus || item.order?.status || "";
  const hasReview = Boolean(normalizedReview?.content || normalizedReview?.rating);

  return {
    id:
      item.id ||
      item.orderItemId ||
      normalizedReview?.id ||
      `${productId || "product"}-${orderId || "order"}`,
    productId,
    orderId,
    product,
    image: product.image || item.imageUrl || CONFIG.placeholderImage,
    name:
      item.productName ||
      item.name ||
      (product.name && product.name !== "Mahsulot" ? product.name : `Product #${productId || "-"}`),
    brand: product.brand || item.brand || "",
    status,
    review: normalizedReview,
    hasReview,
    reviewable: Boolean(productId && orderId && !hasReview),
    raw: item,
  };
}

export function getMyReviewsContent(response) {
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.content)) return response.data.content;
  if (Array.isArray(response?.data?.items)) return response.data.items;
  if (Array.isArray(response?.data?.reviews)) return response.data.reviews;
  if (Array.isArray(response?.data?.reviewableItems)) return response.data.reviewableItems;
  if (Array.isArray(response?.reviews)) return response.reviews;
  if (Array.isArray(response?.items)) return response.items;
  if (Array.isArray(response?.reviewableItems)) return response.reviewableItems;
  if (Array.isArray(response?.content)) return response.content;
  if (Array.isArray(response)) return response;
  return [];
}

export function categoryLabel(category) {
  if (!category) return "";
  const key = `category.${category}`;
  const translated = t(key);
  if (translated !== key) return translated;
  return (
    CATEGORY_LABELS[category] ||
    category
      .toLowerCase()
      .split("_")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ")
  );
}
