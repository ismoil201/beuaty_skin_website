import { appStore } from "../../stores/index.js";
import { escapeHtml } from "../../utils/html.js";
import { normalizeOrderItem } from "../../utils/productMapper.js";
import { formatOrderDetailDate } from "../../utils/format.js";
import { t } from "../../i18n/index.js";
import { OrderService } from "../../services/OrderService.js";
import { OrderProgressStepper } from "../../components/order/OrderTimeline.js";
import { OrderDetailItem } from "../../components/order/OrderItem.js";
import { OrderSummary, OrderDetailStatusPill } from "../../components/order/OrderSummary.js";
import { statusLabel } from "../shared/orderLabels.js";

function getOrderStatusMessage(status = "") {
  const key = String(status || "").toUpperCase();
  const messageKey = `orders.statusMessage.${key}`;
  const translated = t(messageKey);
  if (translated !== messageKey) return translated;
  return t("orders.statusMessage.default");
}

function getOrderMapUrl(order = {}) {
  const lat = Number(order.latitude ?? order.addressLatitude);
  const lng = Number(order.longitude ?? order.addressLongitude);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  }
  const query = encodeURIComponent(order.address || "");
  return query ? `https://www.google.com/maps/search/?api=1&query=${query}` : "";
}

export const OrderDetailPage = {
  render({ renderHeader, renderOrderCard } = {}) {
    if (appStore.orderDetailLoading) {
      return `
        <div class="app-orders-page">
          ${renderHeader(t("orders.details"), "back")}
          <div class="app-orders-scroll">
            <div class="app-orders-skeleton skeleton-card"></div>
            <div class="app-orders-skeleton skeleton-card"></div>
          </div>
        </div>
      `;
    }

    if (appStore.orderDetailError) {
      return `
        <div class="app-orders-page">
          ${renderHeader(t("orders.details"), "back")}
          <div class="app-orders-scroll">
            <div class="app-orders-error">
              <strong>${escapeHtml(t("orders.detailUnavailable"))}</strong>
              <p>${escapeHtml(appStore.orderDetailError)}</p>
            </div>
          </div>
        </div>
      `;
    }

    if (!appStore.selectedOrder) {
      return `
        <div class="app-orders-page">
          ${renderHeader(t("orders.title"), "close")}
          <div class="app-orders-scroll">
            ${appStore.orders.map(renderOrderCard).join("")}
          </div>
        </div>
      `;
    }

    const order = appStore.selectedOrder;
    const shipment = appStore.selectedOrderShipment;
    const payment = appStore.selectedOrderPayment;
    const items = Array.isArray(order.items)
      ? order.items.map((item) => normalizeOrderItem({ ...item, orderId: order.id }))
      : [];
    const lineCount = OrderService.getLineCount(order);
    const itemCount = OrderService.getItemCount(order);
    const mapUrl = getOrderMapUrl(order);
    const tracking =
      shipment?.trackingNumber ||
      shipment?.trackingCode ||
      shipment?.carrierTrackingNumber ||
      "";
    const carrier = shipment?.carrier || shipment?.provider || shipment?.courier || "";
    const paymentMethod = payment?.paymentMethod || payment?.method || "";
    const paymentStatus = payment?.status || "";

    return `
      <div class="app-orders-page">
        ${renderHeader(`${t("orders.order")} #${order.id}`, "back")}
        <div class="app-orders-scroll app-orders-detail">
          <article class="app-orders-detail-hero">
            <div class="app-orders-detail-hero-top">
              <div>
                <h3>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)}</h3>
                <p class="app-orders-detail-date">${escapeHtml(formatOrderDetailDate(order.createdAt))}</p>
              </div>
              ${OrderDetailStatusPill({ status: order.status })}
            </div>
            ${OrderProgressStepper({ status: order.status, statusLabelFor: statusLabel })}
            ${OrderSummary({
              lineCount: t("orders.itemsCount", { count: lineCount || itemCount }),
              itemCount,
              totalAmount: order.totalAmount,
              goodsLabel: t("orders.goodsLabel"),
              totalAmountLabel: t("orders.totalAmount"),
            })}
          </article>

          <section class="app-orders-detail-section">
            <h4>${escapeHtml(t("orders.deliveryInfo"))}</h4>
            <p class="app-orders-detail-name">${escapeHtml(order.fullName || "")}</p>
            <p class="app-orders-detail-muted">${escapeHtml(order.phone || "")}</p>
            <p class="app-orders-detail-muted">${escapeHtml(order.address || "")}</p>
            ${mapUrl ? `
              <a class="app-orders-details-btn" href="${escapeHtml(mapUrl)}" target="_blank" rel="noopener noreferrer">
                ${escapeHtml(t("orders.openOnMap"))}
              </a>
            ` : ""}
          </section>

          ${shipment || payment ? `
            <section class="app-orders-detail-section">
              <h4>${escapeHtml(t("orders.shipment") || "Shipment & payment")}</h4>
              ${carrier ? `<p class="app-orders-detail-muted">${escapeHtml(carrier)}</p>` : ""}
              ${tracking ? `<p class="app-orders-detail-muted">Tracking: ${escapeHtml(tracking)}</p>` : ""}
              ${paymentMethod ? `<p class="app-orders-detail-muted">${escapeHtml(String(paymentMethod))}${paymentStatus ? ` · ${escapeHtml(String(paymentStatus))}` : ""}</p>` : ""}
            </section>
          ` : ""}

          <section class="app-orders-detail-section">
            <h4>${escapeHtml(t("orders.products"))}</h4>
            ${items.length
              ? items.map((item) => OrderDetailItem({ item })).join("")
              : `<p class="app-orders-detail-muted">${escapeHtml(t("orders.noItems"))}</p>`}
          </section>

          <section class="app-orders-detail-section">
            <h4>${escapeHtml(t("orders.orderActions"))}</h4>
            <p class="app-orders-detail-muted">${escapeHtml(getOrderStatusMessage(order.status))}</p>
          </section>

          <button class="app-orders-details-btn app-orders-feedback-btn" type="button" data-order-feedback="${escapeHtml(order.id)}">
            ${escapeHtml(t("orders.feedback"))}
          </button>
        </div>
      </div>
    `;
  },
};
