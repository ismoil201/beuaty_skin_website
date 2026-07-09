import { getProductReviews, getMyReviews, submitReview as submitReviewApi } from "../api/reviewApi.js";
import { presignUpload } from "../api/uploadApi.js";
import { getPageContent, getMyReviewsContent, normalizeReview, normalizeMyReviewItem, numberOrZero } from "../utils/productMapper.js";
import { appStore } from "../stores/appStore.js";
import { createApiFailure } from "./serviceHelpers.js";

export const ReviewService = {
  reviewStats(reviews) {
    const count = reviews.length;
    const average = count
      ? reviews.reduce((sum, review) => sum + numberOrZero(review.rating), 0) / count
      : 0;
    return { count, average };
  },

  async loadProductReviews(productId) {
    const response = await getProductReviews(productId);
    if (response === null) {
      return { reviews: null, error: appStore.lastApiError || "Reviews could not be loaded." };
    }
    return { reviews: getPageContent(response).map(normalizeReview) };
  },

  async loadMyReviews() {
    const response = await getMyReviews();
    if (response === null) {
      return createApiFailure("Reviews could not be loaded.");
    }    return {
      success: true,
      items: getMyReviewsContent(response).map(normalizeMyReviewItem),
    };
  },

  parseReviewImageUrls(value) {
    return String(value || "")
      .split(/[\n,]+/)
      .map((url) => url.trim())
      .filter(Boolean)
      .slice(0, 5);
  },

  validateReviewFiles(files) {
    const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
    const selected = Array.from(files || []);
    if (selected.length > 5) return { error: "Maximum 5 image files allowed.", files: [] };
    const invalid = selected.find((file) => !allowed.has(file.type));
    if (invalid) return { error: "Only JPG, PNG and WEBP images are allowed.", files: [] };
    const oversized = selected.find((file) => file.size > 10 * 1024 * 1024);
    if (oversized) return { error: "Each image must be 10MB or smaller.", files: [] };
    return { files: selected };
  },

  validateSubmitReview({
    productId,
    orderId,
    rating,
    content,
    manualImageUrlsText,
    files,
  }) {
    const errors = [];
    if (!productId || !orderId) {
      errors.push("Product and order are required.");
    }
    if (rating < 1 || rating > 5) {
      errors.push("Choose a rating from 1 to 5.");
    }
    if (!content) {
      errors.push("Review text is required.");
    }

    const manualImageUrls = this.parseReviewImageUrls(manualImageUrlsText);
    const fileValidation = this.validateReviewFiles(files);

    if (fileValidation.error) {
      errors.push(fileValidation.error);
    }
    if (String(manualImageUrlsText || "").split(/[\n,]+/).filter((url) => url.trim()).length > 5) {
      errors.push("Maximum 5 image URLs allowed.");
    }
    if (manualImageUrls.length + fileValidation.files.length > 5) {
      errors.push("Maximum 5 review images allowed.");
    }

    return {
      valid: errors.length === 0,
      errors,
      manualImageUrls,
      fileValidation,
    };
  },

  async uploadReviewImages(files, { onProgress } = {}) {
    const uploadedUrls = [];
    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      onProgress?.(`Uploading image ${index + 1} of ${files.length}...`, { index, total: files.length });

      const presign = await presignUpload({
        fileName: file.name,
        contentType: file.type,
        folder: "reviews",
        fileSizeBytes: file.size,
      });

      if (!presign?.uploadUrl || !presign?.publicUrl) {
        throw new Error(appStore.lastApiError || "Image upload could not be prepared.");
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

    onProgress?.(uploadedUrls.length ? "Images uploaded." : "", { done: true });
    return uploadedUrls;
  },

  async submitReview({ productId, orderId, rating, content, imageUrls }) {
    const response = await submitReviewApi({
      productId: Number(productId),
      orderId: Number(orderId),
      rating: Number(rating),
      content,
      imageUrls,
    });

    if (response === null) {
      return createApiFailure("Review could not be submitted.");
    }
    return { success: true, response };
  },
};
