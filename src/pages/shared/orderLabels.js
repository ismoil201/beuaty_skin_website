import { t } from "../../i18n/index.js";

export function statusLabel(status = "") {
  return t(`status.${status}`) || status || t("common.unknown");
}

export function profileOrderStatusLabel(status = "") {
  const key = String(status || "").toUpperCase();
  if (key === "NEW" || key === "CONFIRMED" || key === "PACKED") return t("status.PENDING");
  return statusLabel(status);
}
