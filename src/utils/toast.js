const TOAST_DURATION_MS = 4200;
const MAX_VISIBLE_TOASTS = 4;

let toastHost = null;

function getToastHost() {
  if (toastHost) return toastHost;

  toastHost = document.getElementById("toast");
  if (!toastHost) {
    toastHost = document.createElement("div");
    toastHost.id = "toast";
    toastHost.className = "toast-host";
    toastHost.setAttribute("role", "status");
    toastHost.setAttribute("aria-live", "polite");
    toastHost.setAttribute("aria-relevant", "additions");
    document.body.appendChild(toastHost);
  } else {
    toastHost.classList.add("toast-host");
    toastHost.setAttribute("aria-relevant", "additions");
  }

  return toastHost;
}

const TOAST_ICONS = {
  success: "✓",
  error: "✕",
  warning: "!",
  info: "i",
};

/**
 * Show a toast notification.
 * @param {string} message
 * @param {"success"|"error"|"warning"|"info"} [type="info"]
 */
export function showToast(message, type = "info") {
  const text = String(message || "").trim();
  if (!text) return;

  const host = getToastHost();
  const variant = TOAST_ICONS[type] ? type : "info";
  const item = document.createElement("div");
  item.className = `toast-item toast-${variant}`;
  item.setAttribute("role", "status");

  const icon = document.createElement("span");
  icon.className = "toast-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = TOAST_ICONS[variant];

  const body = document.createElement("span");
  body.className = "toast-message";
  body.textContent = text;

  const close = document.createElement("button");
  close.type = "button";
  close.className = "toast-close";
  close.setAttribute("aria-label", "Close");
  close.textContent = "×";

  item.append(icon, body, close);
  host.appendChild(item);

  while (host.children.length > MAX_VISIBLE_TOASTS) {
    host.firstElementChild?.remove();
  }

  let hideTimer = 0;

  const dismiss = () => {
    clearTimeout(hideTimer);
    item.classList.remove("show");
    window.setTimeout(() => item.remove(), 220);
  };

  close.addEventListener("click", dismiss);
  hideTimer = window.setTimeout(dismiss, TOAST_DURATION_MS);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => item.classList.add("show"));
  });
}
