import { createPayment, getPaymentByOrder } from "../api/paymentApi.js";
import { createApiFailure } from "./serviceHelpers.js";
import { appStore } from "../stores/appStore.js";

export const PaymentService = {
  /** @param {"CASH"|"PAYME"|"CLICK"|"TOSS_PAY"|"KAKAO_PAY"} paymentMethod */
  async startPayment(orderId, paymentMethod = "CASH") {
    if (!orderId) return createApiFailure("Order id required.");
    const payment = await createPayment({ orderId, paymentMethod });
    if (payment === null) {
      return createApiFailure(appStore.lastApiError || "Payment could not be started.");
    }
    return { success: true, payment };
  },

  async getByOrder(orderId) {
    const payment = await getPaymentByOrder(orderId);
    if (payment === null) {
      return createApiFailure(appStore.lastApiError || "Payment not found.");
    }
    return { success: true, payment };
  },
};
