import { apiFetch } from "./apiClient.js";

export const presignUpload = (body) =>
  apiFetch("/api/uploads/presign", {
    method: "POST",
    requireAuth: true,
    showError: false,
    body: JSON.stringify(body),
  });
