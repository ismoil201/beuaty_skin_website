export function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function formatPrice(value) {
  const currencyLabels = { uz: "so‘m", en: "UZS", ru: "сум", ko: "UZS" };
  return `${new Intl.NumberFormat(currentLanguage === "uz" ? "uz-UZ" : currentLanguage).format(numberOrZero(value))} ${currencyLabels[currentLanguage] || "UZS"}`;
}

export function formatMoney(amount) {
  return formatPrice(amount);
}

export function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return new Intl.DateTimeFormat(currentLanguage, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function statusLabel(status = "") {
  return t(`status.${status}`) || status || t("common.unknown");
}

export function normalizeOrderItem(item = {}) {
  const product = item.product || {};
  const mainImageUrl = imageValue(item.mainImageUrl || product.mainImageUrl);
  return {
    id: item.id || item.orderItemId,
    productId: item.productId || product.id || item.product?.id,
    orderId: item.orderId,
    name: item.productName || item.name || product.name || "Product",
    image: item.imageUrl || mainImageUrl || product.imageUrl || normalizeImages(product.images)[0] || CONFIG.placeholderImage,
    variantLabel: item.variantLabel || item.variant?.label || "",
    quantity: numberOrZero(item.quantity) || 1,
    unitPrice: numberOrZero(item.unitPrice || item.price || product.discountPrice || product.price),
    lineTotal: numberOrZero(item.lineTotal || item.total || item.price || 0),
  };
}

export function normalizeReview(review = {}) {
  return {
    id: review.id || review.reviewId || `${review.productId || "product"}-${review.orderId || "order"}-${review.createdAt || ""}`,
    productId: review.productId || review.product?.id || review.orderItem?.productId,
    orderId: review.orderId || review.order?.id || review.orderItem?.orderId,
    rating: Math.min(5, Math.max(0, numberOrZero(review.rating))),
    content: review.content || review.reviewContent || review.comment || "",
    imageUrls: Array.isArray(review.imageUrls) ? review.imageUrls.filter(Boolean) : normalizeImages(review.images),
    createdAt: review.createdAt || review.createdDate || review.reviewedAt || "",
    userName: review.userName || review.fullName || review.user?.fullName || review.user?.name || "Customer",
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
  if (typeof response === "string" && response.trim() !== "") return Math.max(0, Number(response) || 0);
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
  const review = item.review || item.reviewResponse || (item.rating || item.content ? item : null);
  const product = normalizeProduct(item.product || item.productCard || item.productResponse || item);
  const normalizedReview = review ? normalizeReview({ ...review, productId: review.productId || product.id, orderId: review.orderId || item.orderId }) : null;
  const productId = item.productId || normalizedReview?.productId || product.id;
  const orderId = item.orderId || item.order?.id || item.orderResponse?.id || normalizedReview?.orderId;
  const status = item.status || item.orderStatus || item.order?.status || "";
  const hasReview = Boolean(normalizedReview?.content || normalizedReview?.rating);

  return {
    id: item.id || item.orderItemId || normalizedReview?.id || `${productId || "product"}-${orderId || "order"}`,
    productId,
    orderId,
    product,
    image: product.image || item.imageUrl || CONFIG.placeholderImage,
    name: item.productName || item.name || (product.name && product.name !== "Mahsulot" ? product.name : `Product #${productId || "-"}`),
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
  return CATEGORY_LABELS[category] || category
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2800);
}

export function setModeBadge(element, visible) {
  element.hidden = !visible;
}

export function syncModeBadges() {
  setModeBadge(els.productsMode, state.demoCategories || state.demoProducts);
  setModeBadge(els.dealsMode, state.demoDeals);
}

export function renderSkeleton(container, count = 12) {
  container.innerHTML = Array.from({ length: count }, () => "<div class=\"skeleton-card\"></div>").join("");
}

export function renderEmpty(container, message, actionLabel = t("home.showAll")) {
  container.innerHTML = `
    <div class="empty-state">
      <strong>${escapeHtml(message)}</strong>
      <button class="secondary-button" data-show-all type="button">${escapeHtml(actionLabel)}</button>
    </div>
  `;
}
