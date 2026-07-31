import {
  extractErrorCode,
  getLocalizedErrorMessage,
  type BusinessErrorCode,
} from "@/lib/errors/ErrorCode";
import type { Language } from "@/config";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "@/config";

export type ApiErrorCode = BusinessErrorCode | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "UNKNOWN" | string;

function currentLanguage(): Language {
  try {
    const saved = localStorage.getItem("beauty_skin_language") as Language | null;
    return saved && SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export class ApiError extends Error {
  status: number;
  code?: string;
  friendly: string;

  constructor(status: number, message: string, code?: string) {
    const friendly = getLocalizedErrorMessage(code, currentLanguage(), message);
    super(friendly);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.friendly = friendly;
  }
}

export function sanitizeApiMessage(raw: unknown): string {
  return getLocalizedErrorMessage(undefined, currentLanguage(), String(raw || ""));
}

function getCookie(name: string): string {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : "";
}

let memoryAccessToken = "";

export function setAccessToken(token: string) {
  memoryAccessToken = token || "";
}

export function getAccessToken() {
  return memoryAccessToken;
}

export function clearAccessToken() {
  memoryAccessToken = "";
}

type Query = Record<string, string | number | boolean | undefined | null>;

function buildUrl(path: string, query?: Query) {
  const basePath = path.startsWith("/") ? path : `/${path}`;
  const url = new URL(basePath, window.location.origin);
  if (query) {
    Object.entries(query).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, String(value));
      }
    });
  }
  return url.toString();
}

async function refreshAccessToken(): Promise<string | null> {
  const xsrf = getCookie("XSRF-TOKEN");
  try {
    const response = await fetch(buildUrl("/api/auth/refresh"), {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(xsrf ? { "X-XSRF-TOKEN": xsrf } : {}),
      },
    });
    if (!response.ok) return null;
    const payload = await response.json().catch(() => null);
    const token =
      payload?.accessToken || payload?.token || payload?.data?.accessToken || "";
    if (!token) return null;
    setAccessToken(token);
    return token;
  } catch {
    return null;
  }
}

export type ApiFetchOptions = {
  method?: string;
  body?: unknown;
  query?: Query;
  requireAuth?: boolean;
  silentAuth?: boolean;
  csrf?: boolean;
  signal?: AbortSignal;
};

export async function apiFetch<T = unknown>(
  path: string,
  options: ApiFetchOptions = {},
): Promise<T> {
  const {
    method = "GET",
    body,
    query,
    requireAuth = false,
    silentAuth = false,
    csrf = false,
    signal,
  } = options;

  let token = getAccessToken();
  if (requireAuth && !token) {
    token = (await refreshAccessToken()) || "";
  }
  if (requireAuth && !token) {
    throw new ApiError(401, "Please sign in to continue", "UNAUTHORIZED");
  }

  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  if (body !== undefined) headers["Content-Type"] = "application/json";
  if (token) headers.Authorization = `Bearer ${token}`;
  if (csrf) {
    const xsrf = getCookie("XSRF-TOKEN");
    if (xsrf) headers["X-XSRF-TOKEN"] = xsrf;
  }

  const response = await fetch(buildUrl(path, query), {
    method,
    credentials: "include",
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
    signal,
  });

  if ((response.status === 401 || response.status === 403) && !silentAuth) {
    const refreshed = await refreshAccessToken();
    if (refreshed) {
      return apiFetch(path, { ...options, silentAuth: true });
    }
    clearAccessToken();
  }

  const text = await response.text();
  let payload: unknown = null;
  if (text) {
    try {
      payload = JSON.parse(text);
    } catch {
      payload = text;
    }
  }

  if (!response.ok) {
    const code = extractErrorCode(payload);
    const message =
      (payload as { message?: string; error?: string })?.message ||
      (payload as { error?: string })?.error ||
      response.statusText;
    throw new ApiError(response.status, String(message || "Request failed"), code);
  }

  return payload as T;
}
