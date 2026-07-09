import { CONFIG } from "../../config/config.js";
import { cartStore, checkoutStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { t, getCurrentLanguage } from "../../i18n/index.js";
import { formatPrice } from "../../utils/format.js";
import { CheckoutService } from "../../services/CheckoutService.js";
import { initLazyImages } from "../../utils/imageLoader.js";
import { CartPage } from "../cart/CartPage.js";

function getCheckoutTotals() {
  CartPage.syncCartSelection();
  return CheckoutService.calculateCheckoutTotals(
    cartStore.cartItems,
    cartStore.cartSelectedIds,
    cartStore.cartCouponDiscount || 0,
  );
}

function formatCheckoutDeliveryRange() {
  const lang = getCurrentLanguage();
  const start = new Date(Date.now() + 3 * 86400000);
  const end = new Date(Date.now() + 5 * 86400000);
  const fmt = (date) => date.toLocaleDateString(lang, { day: "numeric", month: "long" });
  return `${fmt(start)} – ${fmt(end)}`;
}

function renderCheckoutCartThumbs() {
  return CartPage.getSelectedCartItems().slice(0, 6).map((item) => {
    const image = item.image || item.product?.image || CONFIG.placeholderImage;
    return `<img src="${escapeHtml(image)}" alt="" class="app-checkout-item-thumb" loading="eager" decoding="async" />`;
  }).join("");
}

function renderReceiverList() {
  if (!checkoutStore.receivers.length) {
    return "<div class=\"checkout-empty\">No receivers yet. Add one below.</div>";
  }

  return `<div class="selectable-list">${checkoutStore.receivers.map((receiver) => `
    <article class="selectable-card ${String(receiver.id) === String(checkoutStore.selectedReceiverId) ? "selected" : ""}" data-select-receiver="${escapeHtml(receiver.id)}">
      <div>
        <strong>${escapeHtml(receiver.fullName || "")}</strong>
        <p class="hint">${escapeHtml(receiver.phone || "")}</p>
      </div>
      <button class="icon-button" data-delete-receiver="${escapeHtml(receiver.id)}" type="button" aria-label="Delete receiver">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`;
}

function renderReceiverForm() {
  return `
    <form class="checkout-add-form" data-add-receiver-form>
      <h4>Add receiver</h4>
      <div class="form-grid">
        <label>First name<input id="receiverFirstName" required /></label>
        <label>Last name<input id="receiverLastName" required /></label>
        <label>Phone<input id="receiverPhone" required placeholder="+998901234567" /></label>
      </div>
      <button class="secondary-button" type="submit">Add receiver</button>
      <p class="field-error" id="receiverFormError"></p>
    </form>
  `;
}

function renderAddressList() {
  if (!checkoutStore.addresses.length) {
    return "<div class=\"checkout-empty\">No addresses yet. Add one below.</div>";
  }

  return `<div class="selectable-list">${checkoutStore.addresses.map((address) => `
    <article class="selectable-card ${String(address.id) === String(checkoutStore.selectedAddressId) ? "selected" : ""}" data-select-address="${escapeHtml(address.id)}">
      <div>
        <strong>${escapeHtml(address.title || "Address")}</strong>
        <p class="hint">${escapeHtml(address.address || "")}</p>
      </div>
      <button class="icon-button" data-delete-address="${escapeHtml(address.id)}" type="button" aria-label="Delete address">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-1 5v6m-6-6v6m-2-11 1 16h8l1-16"/></svg>
      </button>
    </article>
  `).join("")}</div>`;
}

function renderAddressForm() {
  return `
    <form class="checkout-add-form" data-add-address-form>
      <h4>Add address</h4>
      <div class="form-grid">
        <label>Title<input id="addressTitle" required placeholder="Uy" /></label>
        <label>Address<input id="addressText" required placeholder="Toshkent shahar..." /></label>
        <label>Latitude<input id="addressLatitude" required value="41.311151" inputmode="decimal" /></label>
        <label>Longitude<input id="addressLongitude" required value="69.279737" inputmode="decimal" /></label>
      </div>
      <button class="secondary-button" type="submit">Add address</button>
      <p class="field-error" id="addressFormError"></p>
    </form>
  `;
}

function renderCheckoutPickerList(type) {
  if (type === "address") {
    return `
      <div class="app-checkout-picker">
        ${renderAddressList()}
        ${renderAddressForm()}
      </div>
    `;
  }
  return `
    <div class="app-checkout-picker">
      ${renderReceiverList()}
      ${renderReceiverForm()}
    </div>
  `;
}

function renderCheckoutConfirmIllustration() {
  return `
    <div class="app-checkout-modal-art app-checkout-modal-art--confirm" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="52" fill="#E8F4FF"/>
        <path d="M38 72c0-8 6-14 14-14h16c8 0 14 6 14 14v6H38v-6Z" fill="#D4A574"/>
        <path d="M36 78h48v8H36v-8Z" fill="#C49563"/>
        <path d="M44 58h32l4 8H40l4-8Z" fill="#E8C9A0"/>
        <path d="M28 64c6-10 16-16 32-16s26 6 32 16" stroke="#F4B8A8" stroke-width="6" stroke-linecap="round"/>
        <path d="M24 68c8-12 20-18 36-18s28 6 36 18" stroke="#F4B8A8" stroke-width="6" stroke-linecap="round"/>
      </svg>
    </div>
  `;
}

function renderCheckoutSuccessIllustration() {
  return `
    <div class="app-checkout-modal-art app-checkout-modal-art--success" aria-hidden="true">
      <svg viewBox="0 0 120 120" fill="none">
        <rect x="34" y="44" width="52" height="40" rx="4" fill="#D4A574"/>
        <path d="M34 52h52" stroke="#C49563" stroke-width="2"/>
        <path d="M48 44V36h24v8" stroke="#C49563" stroke-width="3"/>
        <path d="M60 24v28" stroke="#22C55E" stroke-width="4" stroke-linecap="round"/>
        <path d="M52 36l8-8 8 8" stroke="#22C55E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  `;
}

function renderCheckoutConfirmModal(receiver, address) {
  const name = receiver?.fullName || "—";
  const addressText = address?.address || "—";
  return `
    <div class="app-checkout-overlay" role="dialog" aria-modal="true" aria-labelledby="checkoutConfirmTitle">
      <div class="app-checkout-modal">
        ${renderCheckoutConfirmIllustration()}
        <h3 id="checkoutConfirmTitle">${escapeHtml(t("checkout.confirmTitle"))}</h3>
        <p class="app-checkout-modal-sub">${escapeHtml(t("checkout.confirmQuestion"))}</p>
        <div class="app-checkout-modal-details">
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
            <span>${escapeHtml(t("checkout.confirmName", { name }))}</span>
          </p>
          <p>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>${escapeHtml(t("checkout.confirmAddress", { address: addressText }))}</span>
          </p>
        </div>
        <p class="app-checkout-modal-disclaimer">${escapeHtml(t("checkout.confirmDisclaimer"))}</p>
        ${checkoutStore.checkoutError ? `<div class="app-checkout-modal-error">${escapeHtml(checkoutStore.checkoutError)}</div>` : ""}
        <div class="app-checkout-modal-actions">
          <button class="app-checkout-modal-cancel" type="button" data-checkout-confirm-cancel>${escapeHtml(t("checkout.cancel"))}</button>
          <button class="app-checkout-modal-confirm" type="button" data-checkout-confirm-submit ${checkoutStore.orderSubmitting ? "disabled" : ""}>
            ${escapeHtml(checkoutStore.orderSubmitting ? t("checkout.placing") : t("checkout.confirm"))}
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCheckoutSuccessModal() {
  return `
    <div class="app-checkout-overlay app-checkout-overlay--success" role="dialog" aria-modal="true" aria-labelledby="checkoutSuccessTitle" data-checkout-success-dismiss>
      <div class="app-checkout-modal app-checkout-modal--success" data-checkout-success-card>
        ${renderCheckoutSuccessIllustration()}
        <h3 id="checkoutSuccessTitle">${escapeHtml(t("checkout.successTitle"))}</h3>
        <p class="app-checkout-modal-sub">${escapeHtml(t("checkout.successSubtitle"))}</p>
      </div>
    </div>
  `;
}

function renderOrderSummary(receiver, address) {
  const canSubmit = receiver && address && cartStore.cartItems.length && !checkoutStore.orderSubmitting;
  return `
    <div class="summary-items">
      ${cartStore.cartItems.map((item) => `
        <div class="summary-item">
          <span>${escapeHtml(item.name)} ${item.variantLabel ? `· ${escapeHtml(item.variantLabel)}` : ""} x ${item.quantity}</span>
          <strong>${formatPrice(item.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${formatPrice(cartStore.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${receiver ? `${escapeHtml(receiver.fullName || "")} · ${escapeHtml(receiver.phone || "")}` : "Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${address ? `${escapeHtml(address.title || "")} · ${escapeHtml(address.address || "")}` : "Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${canSubmit ? "" : "disabled"}>
      ${checkoutStore.orderSubmitting ? "Submitting..." : "Place Order"}
    </button>
  `;
}

function renderOrderSuccess() {
  const order = checkoutStore.orderSuccess;
  els.checkoutContent.innerHTML = `
    <div class="app-checkout-page app-checkout-success">
      <header class="app-checkout-header">
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
        <h2>${escapeHtml(t("checkout.orderCreated"))}</h2>
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
      </header>
      <div class="app-checkout-scroll app-checkout-success-body">
        <div class="order-success-icon">✓</div>
        <p>${escapeHtml(t("orders.order"))} #${escapeHtml(order.id)} · ${escapeHtml(order.status || "NEW")}</p>
        <strong class="app-checkout-success-total">${formatPrice(order.totalAmount)}</strong>
        <p class="hint">${escapeHtml(order.fullName || "")} ${order.phone ? `· ${escapeHtml(order.phone)}` : ""}</p>
        <p class="hint">${escapeHtml(order.address || "")}</p>
        <div class="app-checkout-success-actions">
          <button class="app-checkout-secondary-btn" data-success-orders type="button">${escapeHtml(t("checkout.viewOrders"))}</button>
          <button class="app-checkout-primary-btn" data-success-continue type="button">${escapeHtml(t("checkout.continueShopping"))}</button>
        </div>
      </div>
    </div>
  `;
}

function renderCheckout() {
  if (checkoutStore.checkoutLoading) {
    els.checkoutContent.innerHTML = `
      <div class="app-checkout-page">
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
        <div class="app-checkout-skeleton skeleton-card"></div>
      </div>
    `;
    return;
  }

  const selectedReceiver = checkoutStore.receivers.find((receiver) => String(receiver.id) === String(checkoutStore.selectedReceiverId));
  const selectedAddress = checkoutStore.addresses.find((address) => String(address.id) === String(checkoutStore.selectedAddressId));
  const totals = getCheckoutTotals();
  const addressLabel = selectedAddress
    ? `${escapeHtml(selectedAddress.title || "")} · ${escapeHtml(selectedAddress.address || "")}`
    : escapeHtml(t("checkout.addressNotSelected"));
  const receiverLabel = selectedReceiver
    ? `${escapeHtml(selectedReceiver.fullName || "")} · ${escapeHtml(selectedReceiver.phone || "")}`
    : escapeHtml(t("checkout.receiverNotSelected"));

  els.checkoutContent.innerHTML = `
    <div class="app-checkout-page">
      <header class="app-checkout-header">
        <button class="app-checkout-back" type="button" data-checkout-close aria-label="${escapeHtml(t("checkout.back"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
        </button>
        <h2>${escapeHtml(t("checkout.title"))}</h2>
        <span class="app-checkout-header-spacer" aria-hidden="true"></span>
      </header>

      <div class="app-checkout-scroll">
        ${checkoutStore.checkoutError ? `<div class="app-checkout-error">${escapeHtml(checkoutStore.checkoutError)}</div>` : ""}

        <section class="app-checkout-card">
          <h3>${escapeHtml(t("checkout.deliveryTitle"))}</h3>
          <p class="app-checkout-muted">${escapeHtml(t("checkout.deliveryEta"))}</p>
          <div class="app-checkout-address-box">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></svg>
            <span>${addressLabel}</span>
          </div>
          <button class="app-checkout-primary-btn" type="button" data-checkout-toggle-address>
            ${escapeHtml(t("checkout.selectAddress"))}
          </button>
          ${checkoutStore.checkoutAddressPickerOpen ? renderCheckoutPickerList("address") : ""}
          <button class="app-checkout-receiver-row" type="button" data-checkout-toggle-receiver>
            <span class="app-checkout-receiver-avatar" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
            </span>
            <span class="app-checkout-receiver-copy">
              <strong>${escapeHtml(t("checkout.receiver"))}</strong>
              <span>${receiverLabel}</span>
            </span>
            <svg class="app-checkout-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          ${checkoutStore.checkoutReceiverPickerOpen ? renderCheckoutPickerList("receiver") : ""}
        </section>

        <section class="app-checkout-card app-checkout-delivery-items">
          <h3>${escapeHtml(t("checkout.deliveryOn", { dates: formatCheckoutDeliveryRange() }))}</h3>
          <div class="app-checkout-item-thumbs">${renderCheckoutCartThumbs()}</div>
        </section>

        <section class="app-checkout-card">
          <h3>${escapeHtml(t("checkout.paymentMethod"))}</h3>
          <div class="app-checkout-payment">
            <span class="app-checkout-payment-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
            </span>
            <div>
              <strong>${escapeHtml(t("checkout.paymentCod"))}</strong>
              <p>${escapeHtml(t("checkout.paymentCodHint"))}</p>
            </div>
          </div>
        </section>

        <div class="app-checkout-info">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
          <p>${escapeHtml(t("checkout.deliveryInfo"))}</p>
        </div>

        <section class="app-checkout-card app-checkout-coupon-card">
          <h3>${escapeHtml(t("checkout.couponTitle"))}</h3>
          <button class="app-checkout-coupon-row" type="button" data-checkout-toggle-coupon>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4H4z"/><path d="M12 8v8"/></svg>
            <span>${cartStore.cartCoupon ? escapeHtml(cartStore.cartCoupon) : escapeHtml(t("checkout.applyCoupon"))}</span>
            <svg class="app-checkout-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          ${checkoutStore.checkoutCouponOpen ? `
            <div class="app-checkout-coupon-form">
              <input type="text" id="checkoutCouponInput" value="${escapeHtml(cartStore.cartCoupon || "")}" placeholder="${escapeHtml(t("cart.couponPlaceholder"))}" />
              <button type="button" class="app-checkout-secondary-btn" data-apply-coupon>${escapeHtml(t("cart.applyCoupon"))}</button>
            </div>
          ` : ""}
        </section>

        <section class="app-checkout-card app-checkout-summary-card">
          <h3>${escapeHtml(t("checkout.yourOrder"))}</h3>
          <div class="app-checkout-summary-line">
            <span>${escapeHtml(t("checkout.itemsCount", { count: totals.itemCount }))}</span>
            <strong>${formatPrice(totals.subtotal)}</strong>
          </div>
          <div class="app-checkout-summary-line app-checkout-summary-delivery">
            <span>${escapeHtml(t("checkout.deliveryFee"))}</span>
            <strong>${totals.deliveryFee ? formatPrice(totals.deliveryFee) : escapeHtml(t("cart.freeDelivery"))}</strong>
          </div>
          ${totals.discount > 0 ? `
            <div class="app-checkout-summary-line app-checkout-summary-discount">
              <span>${escapeHtml(t("cart.discount"))}</span>
              <strong>- ${formatPrice(totals.discount)}</strong>
            </div>
          ` : ""}
          <div class="app-checkout-summary-total">
            <span>${escapeHtml(t("checkout.totalToPay"))}</span>
            <strong>${formatPrice(totals.total)}</strong>
          </div>
          <p class="app-checkout-legal">${escapeHtml(t("checkout.legalNotice"))}</p>
        </section>
      </div>

      <div class="app-checkout-sticky">
        <div class="app-checkout-sticky-total">
          <strong>${formatPrice(totals.total)}</strong>
          <span>${escapeHtml(t("checkout.itemsCount", { count: totals.itemCount }))}</span>
        </div>
        <button class="app-checkout-confirm" type="button" data-place-order ${checkoutStore.orderSubmitting ? "disabled" : ""}>
          ${escapeHtml(checkoutStore.orderSubmitting ? t("checkout.placing") : t("checkout.confirm"))}
        </button>
      </div>
      ${checkoutStore.checkoutConfirmOpen ? renderCheckoutConfirmModal(selectedReceiver, selectedAddress) : ""}
      ${checkoutStore.orderSuccess ? renderCheckoutSuccessModal() : ""}
    </div>
  `;

  initLazyImages(els.checkoutContent);
}

export const CheckoutPage = {
  render: renderCheckout,
  renderCheckout,
  renderCheckoutCartThumbs,
  renderCheckoutPickerList,
  renderCheckoutConfirmIllustration,
  renderCheckoutSuccessIllustration,
  renderCheckoutConfirmModal,
  renderCheckoutSuccessModal,
  renderReceiverList,
  renderReceiverForm,
  renderAddressList,
  renderAddressForm,
  renderOrderSummary,
  renderOrderSuccess,
};
