import { CONFIG } from "../config/config.js";
import { authStore, productStore, appStore } from "../stores/index.js";
import { els } from "../utils/dom.js";
import { AuthService } from "../services/AuthService.js";
import { ProfileService } from "../services/ProfileService.js";
import { getMe } from "../api/userApi.js";
import { signInWithGoogleIdToken } from "../config/firebase.js";
import { clearCartState } from "../store/cartStore.js";
import { clearFavoritesState } from "../store/favoriteStore.js";
import { showToast } from "../utils/toast.js";
import { t } from "../i18n/index.js";
import { lockBody } from "../runtime/navigation.js";
import { deps } from "../runtime/deps.js";
import { configureRequireAuth, resetLoginModalGate, cancelPendingAuth } from "../auth/requireAuth.js";
import { executePendingAction } from "../auth/executePendingAction.js";
import { hasPendingAction } from "../auth/pendingActionManager.js";

export const AuthController = {
  isLoggedIn() {
    return AuthService.isLoggedIn();
  },

  saveAuth(loginResponse, options = {}) {
    AuthService.saveAuth(loginResponse, authStore, options);
  },

  clearAuth() {
    cancelPendingAuth();
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

  async logout({ allDevices = false } = {}) {
    await AuthService.logoutServer({ allDevices });
    AuthController.clearAuth();
  },

  /**
   * Open login modal once (deduped). Used by requireAuth for protected actions.
   */
  showLoginRequired({ toast = true } = {}) {
    if (els.authDialog?.open) {
      return;
    }
    AuthController.openDialog("login");
    if (toast && !hasPendingAction()) {
      showToast(t("auth.loginRequired"), "warning");
    } else if (toast && hasPendingAction()) {
      showToast(t("auth.loginToContinue"), "warning");
    }
  },

  async validateOnStartup() {
    const result = await AuthService.validateAuthOnStartup();
    if (!result.authenticated) {
      if (result.invalid) AuthController.clearAuth();
      else AuthController.updateUi();
      return;
    }
    if (result.profile) {
      authStore.user = result.profile;
    }
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
    } else if (AuthService.isLoggedIn()) {
      label.textContent = t("profile.myProfile");
      els.loginButton.setAttribute("aria-label", t("profile.myProfile"));
    } else {
      label.textContent = t("auth.login");
      els.loginButton.setAttribute("aria-label", t("auth.login"));
    }
  },

  openDialog(mode = "login") {
    AuthController.setMode(mode);
    AuthController.clearErrors();
    if (!els.authDialog.open) {
      els.authDialog.showModal();
    }
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
    const email = els.loginEmail.value.trim();
    const password = els.loginPassword.value;
    const result = AuthService.validateLoginForm(email, password);
    result.errors.forEach(({ field, messageKey }) => AuthController.setFieldError(field, t(messageKey)));
    if (!result.valid) return;

    AuthController.setLoading(true);
    const loginResult = await AuthService.submitLogin({ email, password });
    AuthController.setLoading(false);

    if (!loginResult.success) {
      els.authMessage.textContent = loginResult.error;
      els.authMessage.className = "form-message error";
      return;
    }
    await AuthController.finishLogin(loginResult.response, { email });
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

  async finishLogin(response, { email = "" } = {}) {
    // Persist documented login contract: accessToken + role (+ expiresIn ignored locally).
    AuthController.saveAuth(response, { email });
    AuthController.updateUi();
    resetLoginModalGate();
    if (els.authDialog?.open) {
      els.authDialog.close();
    }

    const profile = await getMe({ silentAuth: true, showError: false });
    if (profile) {
      authStore.user = profile;
      localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(profile));
      AuthController.updateUi();
    }

    const hadPending = hasPendingAction();
    const first =
      String(authStore.user?.fullName || "").trim().split(/\s+/)[0] ||
      String(authStore.user?.email || email || "").split("@")[0] ||
      "User";
    if (!hadPending) {
      showToast(`Welcome, ${first}.`);
    }

    await Promise.allSettled([
      deps.cart?.load?.(),
      deps.favorites?.load?.(),
      deps.notifications?.loadUnreadCount?.(),
    ]);

    // Resume the action that triggered login (add to cart, favorite, checkout, …).
    await executePendingAction();

    AuthController.preloadProfileData();
  },
};

configureRequireAuth({
  openLogin: () => AuthController.showLoginRequired({ toast: true }),
});
