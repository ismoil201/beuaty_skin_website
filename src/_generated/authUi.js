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

export function openAuthDialog(mode = "login") {
  setAuthMode(mode);
  clearAuthErrors();
  els.authDialog.showModal();
  lockBody();
}


export function setAuthMode(mode) {
  state.authMode = mode;
  const isLogin = mode === "login";
  els.authTitle.textContent = isLogin ? t("auth.login") : t("auth.register");
  els.loginFields.hidden = !isLogin;
  els.registerFields.hidden = isLogin;
  els.authSubmit.textContent = isLogin ? t("auth.signIn") : t("auth.createAccount");
  els.loginTab.classList.toggle("active", isLogin);
  els.registerTab.classList.toggle("active", !isLogin);
  els.loginTab.setAttribute("aria-selected", String(isLogin));
  els.registerTab.setAttribute("aria-selected", String(!isLogin));
  clearAuthErrors();
}


export function clearAuthErrors() {
  document.querySelectorAll(".field-error").forEach((item) => {
    item.textContent = "";
  });
  els.authMessage.textContent = "";
  els.authMessage.className = "form-message";
}


export function setFieldError(id, message) {
  const error = document.getElementById(`${id}Error`);
  if (error) error.textContent = message;
}


export function setAuthLoading(loading) {
  state.authLoading = loading;
  els.authSubmit.disabled = loading;
  els.authSubmit.textContent = loading ? t("home.loading") : (state.authMode === "login" ? t("auth.signIn") : t("auth.createAccount"));
}


export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


export function validateLoginForm() {
  clearAuthErrors();
  let valid = true;
  const email = els.loginEmail.value.trim();
  const password = els.loginPassword.value;

  if (!email || !isValidEmail(email)) {
    setFieldError("loginEmail", t("auth.emailRequired"));
    valid = false;
  }
  if (!password || password.length < 6) {
    setFieldError("loginPassword", t("auth.passwordMin"));
    valid = false;
  }

  return valid;
}


export function validateRegisterForm() {
  clearAuthErrors();
  let valid = true;
  const fullName = els.registerFullName.value.trim();
  const email = els.registerEmail.value.trim();
  const phone = els.registerPhone.value.trim();
  const password = els.registerPassword.value;
  const confirmPassword = els.registerConfirmPassword.value;

  if (!fullName) {
    setFieldError("registerFullName", t("auth.fullNameRequired"));
    valid = false;
  }
  if (!email || !isValidEmail(email)) {
    setFieldError("registerEmail", t("auth.emailRequired"));
    valid = false;
  }
  if (!phone) {
    setFieldError("registerPhone", t("auth.phoneRequired"));
    valid = false;
  }
  if (!password || password.length < 6) {
    setFieldError("registerPassword", t("auth.passwordMin"));
    valid = false;
  }
  if (password !== confirmPassword) {
    setFieldError("registerConfirmPassword", t("auth.passwordMismatch"));
    valid = false;
  }

  return valid;
}


export async function submitAuth(event) {
  event.preventDefault();
  if (state.authLoading) return;

  if (state.authMode === "login") {
    await submitLogin();
  } else {
    await submitRegister();
  }
}


export async function submitLogin() {
  if (!validateLoginForm()) return;
  setAuthLoading(true);

  const response = await apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: els.loginEmail.value.trim(),
      password: els.loginPassword.value,
    }),
    showError: false,
  });

  setAuthLoading(false);
  if (!response?.token) {
    els.authMessage.textContent = state.lastApiError || "Email yoki parol noto‘g‘ri.";
    els.authMessage.className = "form-message error";
    return;
  }

  saveAuth(response);
  await validateAuthOnStartup();
  els.authDialog.close();
  showToast(`Welcome, ${firstName(response.fullName) || "User"}.`);
  await loadCart();
  await loadFavorites();
  await loadUnreadCount();
}


export async function submitRegister() {
  if (!validateRegisterForm()) return;
  setAuthLoading(true);

  const response = await apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify({
      fullName: els.registerFullName.value.trim(),
      email: els.registerEmail.value.trim(),
      phone: els.registerPhone.value.trim(),
      password: els.registerPassword.value,
    }),
    showError: false,
  });

  setAuthLoading(false);
  if (response === null) {
    els.authMessage.textContent = state.lastApiError || "Email allaqachon mavjud yoki server javob bermadi.";
    els.authMessage.className = "form-message error";
    return;
  }

  els.authMessage.textContent = "Registered. Endi login qiling.";
  els.authMessage.className = "form-message success";
  setAuthMode("login");
  els.loginEmail.value = els.registerEmail.value.trim();
}


export function openProfile() {
  if (!isLoggedIn()) {
    showLoginRequired();
    return;
  }
  state.profileEditing = false;
  renderProfile();
  els.profileDrawer.classList.add("open");
  els.profileDrawer.setAttribute("aria-hidden", "false");
  lockBody();
}


export function closeProfile() {
  els.profileDrawer.classList.remove("open");
  els.profileDrawer.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}


export function renderProfile() {
  const user = state.user || {};
  const avatar = user.profileImage
    ? `<img class="profile-avatar" src="${escapeHtml(user.profileImage)}" alt="${escapeHtml(user.fullName || "Profile")}" />`
    : `<div class="profile-avatar">${escapeHtml(firstName(user.fullName || user.email || "U").charAt(0) || "U")}</div>`;

  els.profileContent.innerHTML = `
    <div class="profile-card">
      <div class="profile-summary">
        ${avatar}
        <div>
          <h3>${escapeHtml(user.fullName || "Profile")}</h3>
          <p class="hint">${escapeHtml(user.email || "")}</p>
          <p class="hint">${escapeHtml(user.phone || "")}</p>
          <p class="hint">Role: ${escapeHtml(state.role || "USER")}</p>
        </div>
      </div>
      <div class="profile-actions">
        <button class="secondary-button full" data-profile-action="edit" type="button">Edit Profile</button>
        <button class="secondary-button full" data-profile-action="orders" type="button">My Orders</button>
        <button class="secondary-button full" data-profile-action="addresses" type="button">Addresses</button>
        <button class="secondary-button full" data-profile-action="receivers" type="button">Receivers</button>
        <button class="secondary-button full" data-profile-action="favorites" type="button">Favorites</button>
        <button class="secondary-button full" data-profile-action="notifications" type="button">Notifications</button>
        <button class="secondary-button full" data-profile-action="reviews" type="button">My Reviews</button>
        <button class="primary-button full" data-profile-action="logout" type="button">Logout</button>
      </div>
      ${state.profileEditing ? renderProfileEditForm(user) : ""}
    </div>
  `;
}


export function renderProfileEditForm(user) {
  return `
    <form class="profile-edit" id="profileEditForm">
      <label>Email<input value="${escapeHtml(user.email || "")}" readonly /></label>
      <label>Full name<input id="profileFullName" value="${escapeHtml(user.fullName || "")}" required /></label>
      <label>Phone<input id="profilePhone" value="${escapeHtml(user.phone || "")}" required /></label>
      <label>Profile image URL<input id="profileImage" value="${escapeHtml(user.profileImage || "")}" /></label>
      <button class="primary-button full" id="profileSaveButton" type="submit">Save profile</button>
      <p class="form-message" id="profileMessage"></p>
    </form>
  `;
}


export async function handleProfileAction(event) {
  const button = event.target.closest("[data-profile-action]");
  if (!button) return;
  const action = button.dataset.profileAction;

  if (action === "edit") {
    state.profileEditing = !state.profileEditing;
    renderProfile();
    return;
  }

  if (action === "logout") {
    clearAuth();
    closeProfile();
    showToast("Logged out.");
    return;
  }

  if (action === "orders") {
    await showOrders();
    return;
  }

  if (action === "favorites") {
    closeProfile();
    await openFavorites();
    return;
  }

  if (action === "reviews") {
    closeProfile();
    await openMyReviews();
    return;
  }

  if (action === "notifications") {
    closeProfile();
    await openNotifications();
    return;
  }

  if (action === "addresses" || action === "receivers") {
    closeProfile();
    await prepareCheckout();
    return;
  }

  showToast("Bu bo‘lim keyingi bosqichga tayyor.");
}


export async function submitProfileEdit(event) {
  event.preventDefault();
  const user = state.user || {};
  const body = {
    id: user.id,
    email: user.email,
    fullName: document.getElementById("profileFullName")?.value.trim(),
    phone: document.getElementById("profilePhone")?.value.trim(),
    profileImage: document.getElementById("profileImage")?.value.trim(),
  };

  const message = document.getElementById("profileMessage");
  if (!body.fullName || !body.phone) {
    if (message) {
      message.textContent = "Full name va phone majburiy.";
      message.className = "form-message error";
    }
    return;
  }

  const response = await apiFetch("/api/users/me", {
    method: "PUT",
    requireAuth: true,
    body: JSON.stringify(body),
    showError: false,
  });

  if (response === null) {
    if (message) {
      message.textContent = state.lastApiError || "Profile yangilanmadi.";
      message.className = "form-message error";
    }
    return;
  }

  const fresh = await apiFetch("/api/users/me", { requireAuth: true, showError: false });
  if (fresh) {
    state.user = fresh;
    localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(fresh));
  }
  state.profileEditing = false;
  updateAuthUi();
  renderProfile();
  showToast("Profile updated.");
}

/* ================= EVENT HANDLERS ================= */

