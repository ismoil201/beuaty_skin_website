import { CONFIG } from "../config/config.js";
import { getToken } from "../utils/storage.js";
import { login, register, loginWithFirebase, logout, logoutAll } from "../api/authApi.js";
import { refreshAccessToken } from "../api/apiClient.js";
import { scheduleProactiveRefresh, stopProactiveRefresh, bindProactiveRefreshLifecycle } from "../utils/tokenRefreshScheduler.js";
import { isAuthenticationFailure } from "../utils/authHttp.js";
import { getMe } from "../api/userApi.js";
import { getOrders } from "../api/orderApi.js";
import { getPageContent } from "../utils/productMapper.js";
import { ReviewService } from "./ReviewService.js";
import { ProfileService } from "./ProfileService.js";
import { appStore } from "../stores/appStore.js";

/**
 * Login contract (Spring Boot):
 * POST /api/auth/login
 * Request:  { email, password }
 * Response: { role, accessToken, expiresIn }
 */
export const AuthService = {
  /**
   * Read JWT from the documented login response.
   * Primary field: accessToken. Legacy fallbacks kept for older payloads only.
   */
  getAccessToken(loginResponse) {
    if (!loginResponse || typeof loginResponse !== "object") return "";
    const nested =
      loginResponse.data && typeof loginResponse.data === "object" ? loginResponse.data : null;
    return (
      loginResponse.accessToken ||
      nested?.accessToken ||
      loginResponse.token ||
      nested?.token ||
      loginResponse.jwt ||
      nested?.jwt ||
      ""
    );
  },

  extractSession(loginResponse, { email = "" } = {}) {
    const source =
      loginResponse?.data && typeof loginResponse.data === "object"
        ? { ...loginResponse, ...loginResponse.data }
        : loginResponse || {};
    const token = this.getAccessToken(loginResponse);
    const user = {
      id: source.id ?? source.userId ?? source.user?.id ?? null,
      email: source.email || source.user?.email || email || "",
      fullName: source.fullName || source.user?.fullName || source.name || "",
      phone: source.phone || source.user?.phone || "",
      profileImage: source.profileImage || source.user?.profileImage || "",
    };
    const role = source.role || source.user?.role || "";
    const expiresIn = source.expiresIn ?? null;
    return { token, user, role, expiresIn, source };
  },

  persistSession({ token, user, role }) {
    if (token) {
      localStorage.setItem(CONFIG.storageKeys.accessToken, token);
      scheduleProactiveRefresh(token);
    }
    localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(user || {}));
    localStorage.setItem(CONFIG.storageKeys.role, role || "");
  },

  clearSession() {
    localStorage.removeItem(CONFIG.storageKeys.accessToken);
    localStorage.removeItem(CONFIG.storageKeys.legacyAccessToken);
    localStorage.removeItem(CONFIG.storageKeys.user);
    localStorage.removeItem(CONFIG.storageKeys.legacyUser);
    localStorage.removeItem(CONFIG.storageKeys.role);
    stopProactiveRefresh();
  },

  saveAuth(loginResponse, appState, options = {}) {
    const session = this.extractSession(loginResponse, options);
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
      // Cookie session may still exist — attempt refresh once.
      const refreshed = await refreshAccessToken();
      if (!refreshed) {
        return { authenticated: false };
      }
    }

    const profile = await getMe({ silentAuth: true });
    if (profile) {
      localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(profile));
      return { authenticated: true, profile };
    }

    // Reject session when token is explicitly rejected (401 or auth-related 403).
    if (isAuthenticationFailure(appStore.lastApiStatus, null, { hadAuthHeader: true })) {
      const refreshed = await refreshAccessToken();
      if (refreshed) {
        const retryProfile = await getMe({ silentAuth: true });
        if (retryProfile) {
          localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(retryProfile));
          return { authenticated: true, profile: retryProfile };
        }
      }
      return { authenticated: false, invalid: true };
    }

    // Network / transient failure: keep token and continue as logged in.
    return { authenticated: true, profile: null };
  },

  /**
   * Server logout (CSRF + cookie) then clear local session.
   */
  async logoutServer({ allDevices = false } = {}) {
    try {
      if (allDevices) await logoutAll();
      else await logout();
    } catch {
      // Local clear still proceeds.
    }
    return { success: true };
  },

  async preloadProfileData() {
    const [userResponse, ordersResponse, reviewsResult] = await Promise.all([
      getMe({ silentAuth: true }),
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

  /**
   * POST /api/auth/login with { email, password }.
   * Success = HTTP 200 + accessToken present.
   * "Email yoki parol noto'g'ri." only for HTTP 401.
   */
  async submitLogin({ email, password }) {
    const response = await login({ email, password });
    const accessToken = this.getAccessToken(response);

    if (accessToken) {
      return { success: true, response };
    }

    const status = appStore.lastApiStatus;
    if (status === 401) {
      return { success: false, error: "Email yoki parol noto‘g‘ri.", status };
    }

    return {
      success: false,
      error: appStore.lastApiError || "Login muvaffaqiyatsiz. Qayta urinib ko‘ring.",
      status,
    };
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
    const accessToken = this.getAccessToken(response);
    if (!accessToken) {
      return {
        success: false,
        error: appStore.lastApiError || "Server Google hisobini qabul qilmadi.",
      };
    }
    return { success: true, response };
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
