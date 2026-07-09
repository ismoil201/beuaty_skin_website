import { appStore } from "../stores/appStore.js";

export function isSessionExpired(message = appStore.lastApiError) {
  return message.includes("Session expired") || message === "Please login to continue";
}

export function createApiFailure(errorFallback) {
  return {
    success: false,
    sessionExpired: isSessionExpired(),
    error: appStore.lastApiError || errorFallback,
  };
}
