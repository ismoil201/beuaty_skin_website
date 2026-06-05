/* ================= AUTH HELPERS ================= */

export function saveAuth(loginResponse) {
  const token = loginResponse?.token || loginResponse?.accessToken || loginResponse?.jwt || "";
  const user = {
    id: loginResponse?.id,
    email: loginResponse?.email,
    fullName: loginResponse?.fullName,
    phone: loginResponse?.phone || "",
    profileImage: loginResponse?.profileImage || "",
  };

  if (token) {
    localStorage.setItem(CONFIG.storageKeys.accessToken, token);
  }

  localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(user));
  localStorage.setItem(CONFIG.storageKeys.role, loginResponse?.role || "");
  state.accessToken = token;
  state.user = user;
  state.role = loginResponse?.role || "";
}

export function clearAuth() {
  localStorage.removeItem(CONFIG.storageKeys.accessToken);
  localStorage.removeItem(CONFIG.storageKeys.legacyAccessToken);
  localStorage.removeItem(CONFIG.storageKeys.user);
  localStorage.removeItem(CONFIG.storageKeys.legacyUser);
  localStorage.removeItem(CONFIG.storageKeys.role);
  state.accessToken = "";
  state.user = null;
  state.role = "";
  clearCartState();
  clearFavoritesState();
  clearNotificationsState();
  state.myReviews = [];
  state.myReviewsLoading = false;
  state.myReviewsError = "";
  if (els.myReviewsDialog?.open) els.myReviewsDialog.close();
  if (els.writeReviewDialog?.open) els.writeReviewDialog.close();
  updateAuthUi();
}

export function getToken() {
  return localStorage.getItem(CONFIG.storageKeys.accessToken) || localStorage.getItem(CONFIG.storageKeys.legacyAccessToken) || "";
}

export function isLoggedIn() {
  return Boolean(getToken());
}

export function showLoginRequired() {
  openAuthDialog("login");
  showToast(t("auth.loginRequired"));
}

export function migrateAuthStorage() {
  const oldToken = localStorage.getItem(CONFIG.storageKeys.legacyAccessToken);
  const token = localStorage.getItem(CONFIG.storageKeys.accessToken);
  if (!token && oldToken) {
    localStorage.setItem(CONFIG.storageKeys.accessToken, oldToken);
  }

  const oldUser = localStorage.getItem(CONFIG.storageKeys.legacyUser);
  const user = localStorage.getItem(CONFIG.storageKeys.user);
  if (!user && oldUser) {
    localStorage.setItem(CONFIG.storageKeys.user, oldUser);
  }
}

export function getSessionId() {
  let sessionId = localStorage.getItem(CONFIG.storageKeys.sessionId);
  if (!sessionId) {
    sessionId = `web-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    localStorage.setItem(CONFIG.storageKeys.sessionId, sessionId);
  }
  return sessionId;
}

export async function validateAuthOnStartup() {
  if (!getToken()) {
    updateAuthUi();
    return;
  }

  const profile = await apiFetch("/api/users/me", { requireAuth: true, showError: false });
  if (!profile) {
    clearAuth();
    return;
  }

  state.user = profile;
  localStorage.setItem(CONFIG.storageKeys.user, JSON.stringify(profile));
  updateAuthUi();
  await loadFavorites();
  await loadUnreadCount();
}

export function updateAuthUi() {
  const label = els.loginButton.querySelector("span");
  if (!label) return;
  if (isLoggedIn() && state.user) {
    label.textContent = firstName(state.user.fullName) || t("profile.myProfile");
    els.loginButton.setAttribute("aria-label", t("profile.myProfile"));
  } else {
    label.textContent = t("auth.login");
    els.loginButton.setAttribute("aria-label", t("auth.login"));
  }
}

export function firstName(fullName = "") {
  return String(fullName).trim().split(/\s+/)[0] || "";
}
