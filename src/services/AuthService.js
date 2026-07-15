import { CONFIG } from "../config/config.js";
import { getToken } from "../utils/storage.js";
import { login, register, loginWithFirebase } from "../api/authApi.js";
import { getMe } from "../api/userApi.js";
import { getOrders } from "../api/orderApi.js";
import { getPageContent } from "../utils/productMapper.js";
import { ReviewService } from "./ReviewService.js";
import { ProfileService } from "./ProfileService.js";
import { appStore } from "../stores/appStore.js";

export const AuthService = {
  extractSession(loginResponse) {
    const source = loginResponse?.data && typeof loginResponse.data === "object"
      ? { ...loginResponse, ...loginResponse.data }
      : loginResponse;
    const token = source?.token || source?.accessToken || source?.jwt || "";
    const user = {
      id: source?.id ?? source?.userId ?? source?.user?.id,
      email: source?.email || source?.user?.email,
      fullName: source?.fullName || source?.user?.fullName || source?.name || "",
      phone: source?.phone || source?.user?.phone || "",
      profileImage: source?.profileImage || source?.user?.profileImage || "",
    };
    const role = source?.role || source?.user?.role || "";
    return { token, user, role, source };
  },

  hasAuthToken(loginResponse) {
    return Boolean(this.extractSession(loginResponse).token);
  },

  persistSession({ token, user, role }) {
    if (token) {
      localStorage.setItem(CONFIG.storageKeys.accessToken, token);
    }
    localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(user));
    localStorage.setItem(CONFIG.storageKeys.role, role);
  },

  clearSession() {
    localStorage.removeItem(CONFIG.storageKeys.accessToken);
    localStorage.removeItem(CONFIG.storageKeys.legacyAccessToken);
    localStorage.removeItem(CONFIG.storageKeys.user);
    localStorage.removeItem(CONFIG.storageKeys.legacyUser);
    localStorage.removeItem(CONFIG.storageKeys.role);
  },

  saveAuth(loginResponse, appState) {
    const session = this.extractSession(loginResponse);
    this.persistSession(session);
    appState.accessToken = session.token;
    appState.user = session.user;
    appState.role = session.role;
    return session;
  },

  clearAuthState(authState, productState) {
    this.clearSession();
    authState.accessToken = "";
    authState.user = null;
    authState.role = "";
    productState.myReviews = [];
    productState.myReviewsLoading = false;
    productState.myReviewsError = "";
  },

  isLoggedIn() {
    return Boolean(getToken());
  },

  async validateAuthOnStartup() {
    if (!getToken()) {
      return { authenticated: false };
    }

    const profile = await getMe({ silentAuth: true });
    if (!profile) {
      return { authenticated: false, invalid: true };
    }

    localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(profile));
    return { authenticated: true, profile };
  },

  async preloadProfileData() {
    const [userResponse, ordersResponse, reviewsResult] = await Promise.all([
      getMe(),
      getOrders(),
      ReviewService.loadMyReviews(),
    ]);

    let orders = null;
    if (ordersResponse !== null) {
      orders = await ProfileService.enrichProfileOrders(getPageContent(ordersResponse));
    }

    return {
      userResponse,
      orders,
      reviewsResult,
    };
  },

  isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  },

  validateLoginForm(email, password) {
    const errors = [];
    if (!email || !this.isValidEmail(email)) {
      errors.push({ field: "loginEmail", messageKey: "auth.emailRequired" });
    }
    if (!password || password.length < 6) {
      errors.push({ field: "loginPassword", messageKey: "auth.passwordMin" });
    }
    return { valid: errors.length === 0, errors };
  },

  validateRegisterForm({ fullName, email, phone, password, confirmPassword }) {
    const errors = [];
    if (!fullName) {
      errors.push({ field: "registerFullName", messageKey: "auth.fullNameRequired" });
    }
    if (!email || !this.isValidEmail(email)) {
      errors.push({ field: "registerEmail", messageKey: "auth.emailRequired" });
    }
    if (!phone) {
      errors.push({ field: "registerPhone", messageKey: "auth.phoneRequired" });
    }
    if (!password || password.length < 6) {
      errors.push({ field: "registerPassword", messageKey: "auth.passwordMin" });
    }
    if (password !== confirmPassword) {
      errors.push({ field: "registerConfirmPassword", messageKey: "auth.passwordMismatch" });
    }
    return { valid: errors.length === 0, errors };
  },

  async submitLogin({ email, password }) {
    const response = await login({ email, password });
    if (!this.hasAuthToken(response)) {
      return {
        success: false,
        error: appStore.lastApiError || "Email yoki parol noto‘g‘ri.",
      };
    }
    return { success: true, response: this.extractSession(response).source || response };
  },

  async submitRegister({ fullName, email, phone, password }) {
    const response = await register({ fullName, email, phone, password });
    if (response === null) {
      return {
        success: false,
        error: appStore.lastApiError || "Email allaqachon mavjud yoki server javob bermadi.",
      };
    }
    return { success: true, response, email };
  },

  async submitFirebaseLogin(idToken) {
    const response = await loginWithFirebase({ idToken });
    if (!this.hasAuthToken(response)) {
      return {
        success: false,
        error: appStore.lastApiError || "Server Google hisobini qabul qilmadi.",
      };
    }
    return { success: true, response: this.extractSession(response).source || response };
  },

  mapFirebaseError(code) {
    if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
      return { cancelled: true };
    }
    if (code === "auth/popup-blocked") {
      return { cancelled: false, message: "Popup bloklandi. Brauzerda popup'ga ruxsat bering." };
    }
    return { cancelled: false, message: "Google bilan kirishda xatolik yuz berdi." };
  },
};
