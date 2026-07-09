import { postImpression, postProductClick, postProductView } from "../api/eventsApi.js";

export const AnalyticsService = {
  isTrackableProduct(productId) {
    return Boolean(productId) && !String(productId).startsWith("demo-");
  },

  impressionKey(sessionId, screen, productId) {
    return `${sessionId}:${screen}:${productId}`;
  },

  shouldSendImpression(impressionsSent, sessionId, screen, productId) {
    if (!this.isTrackableProduct(productId)) return false;
    const key = this.impressionKey(sessionId, screen, productId);
    if (impressionsSent.has(key)) return false;
    impressionsSent.add(key);
    return true;
  },

  sendImpression({ productId, screen, position, sessionId, queryText }) {
    return postImpression({
      productId: Number(productId),
      screen,
      position,
      queryText: queryText || null,
      sessionId,
    }).catch(() => {});
  },

  sendProductClick(productId) {
    if (!this.isTrackableProduct(productId)) return;
    postProductClick(productId).catch(() => {});
  },

  sendProductView(productId) {
    if (!this.isTrackableProduct(productId)) return;
    postProductView(productId).catch(() => {});
  },
};
