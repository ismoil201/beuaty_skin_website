import { appStore } from "../../stores/index.js";
import { AnalyticsService } from "../../services/AnalyticsService.js";

export function sendImpression(productId, screen, position) {
  if (!AnalyticsService.shouldSendImpression(appStore.impressionsSent, appStore.sessionId, screen || "home", productId)) return;
  AnalyticsService.sendImpression({
    productId,
    screen: screen || "home",
    position,
    sessionId: appStore.sessionId,
    queryText: appStore.currentSearchQuery,
  });
}

export function sendProductClick(productId) {
  AnalyticsService.sendProductClick(productId);
}

export function sendProductView(productId) {
  AnalyticsService.sendProductView(productId);
}

export function observeProductImpressions(container) {
  if (!("IntersectionObserver" in window)) {
    container.querySelectorAll("[data-product]").forEach((card) => {
      sendImpression(card.dataset.product, card.dataset.screen || "home", Number(card.dataset.position || 0));
    });
    return;
  }

  if (!appStore.impressionObserver) {
    appStore.impressionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const card = entry.target;
        sendImpression(card.dataset.product, card.dataset.screen || "home", Number(card.dataset.position || 0));
        appStore.impressionObserver.unobserve(card);
      });
    }, { threshold: 0.35 });
  }

  container.querySelectorAll("[data-product]").forEach((card) => appStore.impressionObserver.observe(card));
}
