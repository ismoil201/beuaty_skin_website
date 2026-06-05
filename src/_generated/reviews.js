import { CONFIG, CATEGORY_LABELS, QUICK_CATEGORIES, DEMO_PRODUCTS } from '../config/config.js';
import { CONFIG as _C } from '../config/config.js';
import { state } from '../store/state.js';
import { els } from '../utils/dom.js';
import { apiFetch } from '../api/apiClient.js';
import { getToken, isLoggedIn, saveAuth, clearAuth, showLoginRequired } from '../store/authStore.js';
import { t, applyTranslations, setLanguage, getSavedLanguage } from '../i18n/index.js';
import * as mappers from '../utils/productMapper.js';
import { getPageContent, normalizeProduct, normalizeCartItem, normalizeCategory, normalizeOrderItem, normalizeReview, normalizeNotification, normalizeMyReviewItem, getNotificationsContent, getMyReviewsContent, normalizeImages, imageValue, numberOrZero } from '../utils/productMapper.js';
import { escapeHtml, formatPrice, formatMoney, formatDateTime, statusLabel, showToast, renderSkeleton, renderEmpty, shortText } from '../utils/format.js';
import { categoryLabel } from '../utils/productMapper.js';
import { setCartItems, clearCartState, setFavoriteProducts, clearFavoritesState, syncProductFavorites } from '../store/cartStore.js';

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

