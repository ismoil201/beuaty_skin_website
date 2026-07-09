import { CONFIG } from "../config/config.js";
import { authStore, productStore, appStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { AuthService } from "../services/AuthService.js";
import { ProfileService } from "../services/ProfileService.js";
import { signInWithGoogleIdToken } from "../config/firebase.js";
import { clearCartState } from "../store/cartStore.js";
import { clearFavoritesState } from "../store/favoriteStore.js";
import { showToast } from "../utils/toast.js";
import { t } from "../i18n/index.js";
import { lockBody } from "../runtime/navigation.js";
import { deps } from "../runtime/deps.js";

export const AuthController = {
  isLoggedIn() {
    return AuthService.isLoggedIn();
  },

  saveAuth(loginResponse) {
    AuthService.saveAuth(loginResponse, authStore);
  },

  clearAuth() {
    AuthService.clearAuthState(authStore, productStore);
    clearCartState();
    deps.cart?.render?.();
    clearFavoritesState();
    deps.favorites?.updateUi?.();
    deps.notifications?.clearState?.();
    if (els.myReviewsDialog?.open) els.myReviewsDialog.close();
    if (els.writeReviewDialog?.open) els.writeReviewDialog.close();
    AuthController.updateUi();
  },

  showLoginRequired() {
    AuthController.openDialog("login");
    showToast(t("auth.loginRequired"), "warning");
  },

  async validateOnStartup() {
    const result = await AuthService.validateAuthOnStartup();
    if (!result.authenticated) {
      if (result.invalid) AuthController.clearAuth();
      else AuthController.updateUi();
      return;
    }
    authStore.user = result.profile;
    AuthController.updateUi();
    await Promise.allSettled([
      deps.favorites?.load?.(),
      deps.notifications?.loadUnreadCount?.(),
      AuthController.preloadProfileData(),
    ]);
  },

  async preloadProfileData() {
    if (!AuthService.isLoggedIn()) return;

    const { userResponse, orders, reviewsResult } = await AuthService.preloadProfileData();
    await deps.home?.ensureRecentlyViewed?.();

    if (userResponse) {
      authStore.user = userResponse;
      localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(userResponse));
      AuthController.updateUi();
    }

    if (orders !== null) appStore.orders = orders;
    if (reviewsResult.success) productStore.myReviews = reviewsResult.items;
    if (els.profileDrawer?.classList.contains("open")) deps.profile?.render?.();
  },

  updateUi() {
    const label = els.loginButton.querySelector("span");
    if (!label) return;
    if (AuthService.isLoggedIn() && authStore.user) {
      const first = String(authStore.user.fullName || "").trim().split(/\s+/)[0] || "";
      label.textContent = first || t("profile.myProfile");
      els.loginButton.setAttribute("aria-label", t("profile.myProfile"));
    } else {
      label.textContent = t("auth.login");
      els.loginButton.setAttribute("aria-label", t("auth.login"));
    }
  },

  openDialog(mode = "login") {
    AuthController.setMode(mode);
    AuthController.clearErrors();
    els.authDialog.showModal();
    lockBody();
  },

  setMode(mode) {
    authStore.authMode = mode;
    const isLogin = mode === "login";
    els.authTitle.textContent = isLogin ? t("auth.login") : t("auth.register");
    els.loginFields.hidden = !isLogin;
    els.registerFields.hidden = isLogin;
    els.authSubmit.textContent = isLogin ? t("auth.signIn") : t("auth.createAccount");
    els.loginTab.classList.toggle("active", isLogin);
    els.registerTab.classList.toggle("active", !isLogin);
    els.loginTab.setAttribute("aria-selected", String(isLogin));
    els.registerTab.setAttribute("aria-selected", String(!isLogin));
    AuthController.clearErrors();
  },

  clearErrors() {
    document.querySelectorAll(".field-error").forEach((item) => { item.textContent = ""; });
    els.authMessage.textContent = "";
    els.authMessage.className = "form-message";
  },

  setFieldError(id, message) {
    const error = document.getElementById(`${id}Error`);
    if (error) error.textContent = message;
  },

  setLoading(loading) {
    authStore.authLoading = loading;
    els.authSubmit.disabled = loading;
    if (els.googleLoginButton) els.googleLoginButton.disabled = loading;
    els.authSubmit.textContent = loading ? t("home.loading") : (authStore.authMode === "login" ? t("auth.signIn") : t("auth.createAccount"));
  },

  setFirebaseLoading(loading) {
    authStore.authLoading = loading;
    els.authSubmit.disabled = loading;
    if (els.googleLoginButton) {
      els.googleLoginButton.disabled = loading;
      els.googleLoginButton.classList.toggle("loading", loading);
    }
  },

  async submit(event) {
    event.preventDefault();
    if (authStore.authLoading) return;
    if (authStore.authMode === "login") await AuthController.submitLogin();
    else await AuthController.submitRegister();
  },

  async submitLogin() {
    AuthController.clearErrors();
    const result = AuthService.validateLoginForm(
      els.loginEmail.value.trim(),
      els.loginPassword.value,
    );
    result.errors.forEach(({ field, messageKey }) => AuthController.setFieldError(field, t(messageKey)));
    if (!result.valid) return;

    AuthController.setLoading(true);
    const loginResult = await AuthService.submitLogin({
      email: els.loginEmail.value.trim(),
      password: els.loginPassword.value,
    });
    AuthController.setLoading(false);

    if (!loginResult.success) {
      els.authMessage.textContent = loginResult.error;
      els.authMessage.className = "form-message error";
      return;
    }
    await AuthController.finishLogin(loginResult.response);
  },

  async submitRegister() {
    AuthController.clearErrors();
    const result = AuthService.validateRegisterForm({
      fullName: els.registerFullName.value.trim(),
      email: els.registerEmail.value.trim(),
      phone: els.registerPhone.value.trim(),
      password: els.registerPassword.value,
      confirmPassword: els.registerConfirmPassword.value,
    });
    result.errors.forEach(({ field, messageKey }) => AuthController.setFieldError(field, t(messageKey)));
    if (!result.valid) return;

    AuthController.setLoading(true);
    const registerResult = await AuthService.submitRegister({
      fullName: els.registerFullName.value.trim(),
      email: els.registerEmail.value.trim(),
      phone: els.registerPhone.value.trim(),
      password: els.registerPassword.value,
    });
    AuthController.setLoading(false);

    if (!registerResult.success) {
      els.authMessage.textContent = registerResult.error;
      els.authMessage.className = "form-message error";
      return;
    }

    els.authMessage.textContent = "Registered. Endi login qiling.";
    els.authMessage.className = "form-message success";
    AuthController.setMode("login");
    els.loginEmail.value = registerResult.email;
  },

  async submitFirebase() {
    if (authStore.authLoading) return;
    AuthController.clearErrors();
    AuthController.setFirebaseLoading(true);

    let idToken;
    try {
      idToken = await signInWithGoogleIdToken();
    } catch (error) {
      AuthController.setFirebaseLoading(false);
      const mapped = AuthService.mapFirebaseError(error?.code || "");
      if (mapped.cancelled) return;
      els.authMessage.textContent = mapped.message;
      els.authMessage.className = "form-message error";
      return;
    }

    const result = await AuthService.submitFirebaseLogin(idToken);
    AuthController.setFirebaseLoading(false);

    if (!result.success) {
      els.authMessage.textContent = result.error;
      els.authMessage.className = "form-message error";
      return;
    }
    await AuthController.finishLogin(result.response);
  },

  async finishLogin(response) {
    AuthController.saveAuth(response);
    await AuthController.validateOnStartup();
    els.authDialog.close();
    const first = String(response.fullName || "").trim().split(/\s+/)[0] || "User";
    showToast(`Welcome, ${first}.`);
    await deps.cart?.load?.();
    await deps.favorites?.load?.();
    await deps.notifications?.loadUnreadCount?.();
    AuthController.preloadProfileData();
  },
};
