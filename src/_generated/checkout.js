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

export async function prepareCheckout() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }

  await loadCart();
  if (!state.cartItems.length) {
    showToast("Your cart is empty");
    return;
  }

  state.orderSuccess = null;
  state.checkoutError = "";
  state.checkoutLoading = true;
  renderCheckout();
  els.checkoutDialog.showModal();
  lockBody();
  await Promise.all([loadReceivers(), loadAddresses()]);
  state.checkoutLoading = false;
  renderCheckout();
}


export async function submitCheckout(event) {
  event.preventDefault();
  await placeOrder();
}


export async function loadReceivers(selectId) {
  const response = await apiFetch("/api/receivers", { requireAuth: true, showError: false });
  if (response === null) {
    state.checkoutError = state.lastApiError || "Receivers could not be loaded.";
    return;
  }
  state.receivers = getPageContent(response);
  state.selectedReceiverId = selectId || state.selectedReceiverId || state.receivers[0]?.id || null;
  if (!state.receivers.some((receiver) => String(receiver.id) === String(state.selectedReceiverId))) {
    state.selectedReceiverId = state.receivers[0]?.id || null;
  }
}


export async function loadAddresses(selectId) {
  const response = await apiFetch("/api/addresses", { requireAuth: true, showError: false });
  if (response === null) {
    state.checkoutError = state.lastApiError || "Addresses could not be loaded.";
    return;
  }
  state.addresses = getPageContent(response);
  state.selectedAddressId = selectId || state.selectedAddressId || state.addresses[0]?.id || null;
  if (!state.addresses.some((address) => String(address.id) === String(state.selectedAddressId))) {
    state.selectedAddressId = state.addresses[0]?.id || null;
  }
}


export function renderCheckout() {
  if (state.checkoutLoading) {
    els.checkoutContent.innerHTML = `
      <div class="checkout-layout">
        <div class="skeleton-card"></div>
        <div class="skeleton-card"></div>
      </div>
    `;
    return;
  }

  if (state.orderSuccess) {
    renderOrderSuccess();
    return;
  }

  const selectedReceiver = state.receivers.find((receiver) => String(receiver.id) === String(state.selectedReceiverId));
  const selectedAddress = state.addresses.find((address) => String(address.id) === String(state.selectedAddressId));

  els.checkoutContent.innerHTML = `
    <div class="checkout-layout">
      <div class="checkout-steps">
        ${state.checkoutError ? `<div class="checkout-error">${escapeHtml(state.checkoutError)}</div>` : ""}
        <section class="checkout-step">
          <div class="step-head"><span>1</span><h3>Receiver</h3></div>
          ${renderReceiverList()}
          ${renderReceiverForm()}
        </section>
        <section class="checkout-step">
          <div class="step-head"><span>2</span><h3>Delivery Address</h3></div>
          ${renderAddressList()}
          ${renderAddressForm()}
        </section>
      </div>
      <aside class="order-summary">
        <div class="step-head"><span>3</span><h3>Order Summary</h3></div>
        ${renderOrderSummary(selectedReceiver, selectedAddress)}
      </aside>
    </div>
  `;
}


export function renderReceiverList() {
  if (!state.receivers.length) {
    return "<div class=\"checkout-empty\">No receivers yet. Add one below.</div>";
  }

  return `<div class="selectable-list">${state.receivers.map((receiver) => `
    <article class="selectable-card ${String(receiver.id) === String(state.selectedReceiverId) ? "selected" : ""}" data-select-receiver="${escapeHtml(receiver.id)}">
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


export function renderReceiverForm() {
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


export function renderAddressList() {
  if (!state.addresses.length) {
    return "<div class=\"checkout-empty\">No addresses yet. Add one below.</div>";
  }

  return `<div class="selectable-list">${state.addresses.map((address) => `
    <article class="selectable-card ${String(address.id) === String(state.selectedAddressId) ? "selected" : ""}" data-select-address="${escapeHtml(address.id)}">
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


export function renderAddressForm() {
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


export function renderOrderSummary(receiver, address) {
  const canSubmit = receiver && address && state.cartItems.length && !state.orderSubmitting;
  return `
    <div class="summary-items">
      ${state.cartItems.map((item) => `
        <div class="summary-item">
          <span>${escapeHtml(item.name)} ${item.variantLabel ? `· ${escapeHtml(item.variantLabel)}` : ""} x ${item.quantity}</span>
          <strong>${formatPrice(item.lineTotal)}</strong>
        </div>
      `).join("")}
    </div>
    <div class="summary-total"><span>Subtotal</span><strong>${formatPrice(state.cartTotal)}</strong></div>
    <div class="summary-box">
      <strong>Receiver</strong>
      <p class="hint">${receiver ? `${escapeHtml(receiver.fullName || "")} · ${escapeHtml(receiver.phone || "")}` : "Select receiver"}</p>
    </div>
    <div class="summary-box">
      <strong>Address</strong>
      <p class="hint">${address ? `${escapeHtml(address.title || "")} · ${escapeHtml(address.address || "")}` : "Select address"}</p>
    </div>
    <button class="primary-button full" data-place-order type="button" ${canSubmit ? "" : "disabled"}>
      ${state.orderSubmitting ? "Submitting..." : "Place Order"}
    </button>
  `;
}


export function renderOrderSuccess() {
  const order = state.orderSuccess;
  els.checkoutContent.innerHTML = `
    <div class="order-success">
      <div class="success-mark">✓</div>
      <h3>Order created</h3>
      <p>Order #${escapeHtml(order.id)} · ${escapeHtml(order.status || "NEW")}</p>
      <strong>${formatPrice(order.totalAmount)}</strong>
      <p class="hint">${escapeHtml(order.fullName || "")} ${order.phone ? `· ${escapeHtml(order.phone)}` : ""}</p>
      <p class="hint">${escapeHtml(order.address || "")}</p>
      <div class="hero-actions">
        <button class="secondary-button" data-success-orders type="button">View orders</button>
        <button class="primary-button" data-success-continue type="button">Continue shopping</button>
      </div>
    </div>
  `;
}


export async function handleCheckoutClick(event) {
  const receiver = event.target.closest("[data-select-receiver]");
  const address = event.target.closest("[data-select-address]");
  const deleteReceiver = event.target.closest("[data-delete-receiver]");
  const deleteAddress = event.target.closest("[data-delete-address]");
  const placeOrderButton = event.target.closest("[data-place-order]");
  const viewOrdersButton = event.target.closest("[data-success-orders]");
  const continueButton = event.target.closest("[data-success-continue]");

  if (deleteReceiver) {
    event.stopPropagation();
    await deleteReceiverById(deleteReceiver.dataset.deleteReceiver);
    return;
  }

  if (deleteAddress) {
    event.stopPropagation();
    await deleteAddressById(deleteAddress.dataset.deleteAddress);
    return;
  }

  if (receiver) {
    state.selectedReceiverId = receiver.dataset.selectReceiver;
    renderCheckout();
    return;
  }

  if (address) {
    state.selectedAddressId = address.dataset.selectAddress;
    renderCheckout();
    return;
  }

  if (placeOrderButton) {
    await placeOrder();
    return;
  }

  if (viewOrdersButton) {
    els.checkoutDialog.close();
    await showOrders();
    return;
  }

  if (continueButton) {
    els.checkoutDialog.close();
    closeCart();
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


export async function handleCheckoutSubmit(event) {
  const receiverForm = event.target.closest("[data-add-receiver-form]");
  const addressForm = event.target.closest("[data-add-address-form]");
  if (!receiverForm && !addressForm) return;
  event.preventDefault();

  if (receiverForm) await createReceiver();
  if (addressForm) await createAddress();
}


export async function createReceiver() {
  const firstName = document.getElementById("receiverFirstName")?.value.trim();
  const lastName = document.getElementById("receiverLastName")?.value.trim();
  const phone = document.getElementById("receiverPhone")?.value.trim();
  const error = document.getElementById("receiverFormError");

  if (!firstName || !lastName || !phone) {
    if (error) error.textContent = "First name, last name va phone majburiy.";
    return;
  }

  const response = await apiFetch("/api/receivers", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({ firstName, lastName, phone }),
  });
  if (response !== null) {
    await loadReceivers(response.id);
    renderCheckout();
    showToast("Receiver added");
  }
}


export async function createAddress() {
  const title = document.getElementById("addressTitle")?.value.trim();
  const address = document.getElementById("addressText")?.value.trim();
  const latitude = Number(document.getElementById("addressLatitude")?.value);
  const longitude = Number(document.getElementById("addressLongitude")?.value);
  const error = document.getElementById("addressFormError");

  if (!title || !address || !Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    if (error) error.textContent = "Title, address, latitude va longitude majburiy.";
    return;
  }

  const response = await apiFetch("/api/addresses", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({ title, address, latitude, longitude }),
  });
  if (response !== null) {
    await loadAddresses(response.id);
    renderCheckout();
    showToast("Address added");
  }
}


export async function deleteReceiverById(id) {
  const response = await apiFetch(`/api/receivers/${id}`, { method: "DELETE", requireAuth: true });
  if (response !== null) {
    if (String(state.selectedReceiverId) === String(id)) state.selectedReceiverId = null;
    await loadReceivers();
    renderCheckout();
  }
}


export async function deleteAddressById(id) {
  const response = await apiFetch(`/api/addresses/${id}`, { method: "DELETE", requireAuth: true });
  if (response !== null) {
    if (String(state.selectedAddressId) === String(id)) state.selectedAddressId = null;
    await loadAddresses();
    renderCheckout();
  }
}


export async function placeOrder() {
  if (!state.selectedReceiverId || !state.selectedAddressId || !state.cartItems.length) return;

  state.orderSubmitting = true;
  renderCheckout();
  const response = await apiFetch("/api/orders", {
    method: "POST",
    requireAuth: true,
    body: JSON.stringify({
      receiverId: Number(state.selectedReceiverId),
      addressId: Number(state.selectedAddressId),
      cartItemIds: state.cartItems.map((item) => Number(item.id)),
    }),
    showError: false,
  });
  state.orderSubmitting = false;

  if (response === null) {
    state.checkoutError = state.lastApiError || "Order could not be created.";
    renderCheckout();
    return;
  }

  state.orderSuccess = response;
  await loadCart();
  await loadUnreadCount();
  closeCart();
  renderCheckout();
  showToast("Order created");
}

