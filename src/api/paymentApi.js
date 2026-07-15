import { apiFetch } from "./apiClient.js";

/**
 * @param {{ orderId: number|string, paymentMethod?: string }} body
 * PaymentMethod: TOSS_PAY | KAKAO_PAY | PAYME | CLICK | CASH
 */
export const createPayment = (body) =>
  apiFetch("/api/payments", {
    method: "POST",
    body: JSON.stringify(body),
    requireAuth: true,
    showError: false,
  });

export const getPaymentByOrder = (orderId) =>
  apiFetch(`/api/payments/order/${orderId}`, {
    requireAuth: true,
    showError: false,
  });

/** Test / sandbox helpers (optional). */
export const markPaymentSuccess = (paymentId) =>
  apiFetch(`/api/payments/${paymentId}/success`, {
    method: "POST",
    requireAuth: true,
    showError: false,
  });

export const markPaymentFail = (paymentId) =>
  apiFetch(`/api/payments/${paymentId}/fail`, {
    method: "POST",
    requireAuth: true,
    showError: false,
  });
