import { productStore } from "../stores/index.js";
import { t } from "../i18n/index.js";
import { showToast } from "../utils/toast.js";
import { toggleCompareId, getCompareIds, removeCompareId, clearCompare, MAX_COMPARE } from "../store/compareStore.js";
import { renderCompareFab, renderCompareDrawer, renderComparePage } from "../utils/phase2Ui.js";
import { ProductService } from "../services/ProductService.js";
import { FavoriteController } from "../controllers/FavoriteController.js";
import { lockBody, unlockBodyIfNoOverlay } from "./navigation.js";

export async function syncCompareUi() {
  productStore.compareIds = getCompareIds();
  renderCompareFab(productStore.compareIds.length);
  if (!productStore.compareIds.length) {
    productStore.compareProducts = [];
    renderCompareDrawer([], t);
    return;
  }
  const known = productStore.compareIds.map((id) => FavoriteController.findKnownProduct(id)).filter(Boolean);
  const missing = productStore.compareIds.filter((id) => !known.find((p) => String(p.id) === String(id)));
  if (missing.length) {
    const fetched = await ProductService.loadProductsByIds(missing);
    productStore.compareProducts = [...known, ...fetched].slice(0, MAX_COMPARE);
  } else {
    productStore.compareProducts = known.slice(0, MAX_COMPARE);
  }
  renderCompareDrawer(productStore.compareProducts, t);
}

export async function toggleCompareProduct(productId) {
  const result = toggleCompareId(productId);
  if (result.full) {
    showToast(t("compare.full", { max: MAX_COMPARE }), "warning");
    return;
  }
  productStore.compareIds = result.ids;
  await syncCompareUi();
  showToast(result.added ? t("compare.added") : t("compare.removed"), "success");
}

export function openCompareDrawer() {
  document.getElementById("compareDrawer")?.classList.add("open");
  document.getElementById("compareDrawer")?.setAttribute("aria-hidden", "false");
  lockBody();
}

export function closeCompareDrawer() {
  document.getElementById("compareDrawer")?.classList.remove("open");
  document.getElementById("compareDrawer")?.setAttribute("aria-hidden", "true");
  unlockBodyIfNoOverlay();
}

export function openComparePage() {
  renderComparePage(productStore.compareProducts, t);
  document.getElementById("compareDialog")?.showModal();
  lockBody();
}

export function clearCompareSelection() {
  clearCompare();
  syncCompareUi();
  renderComparePage(productStore.compareProducts, t);
}

export function removeCompareProduct(id) {
  removeCompareId(id);
  syncCompareUi();
}
