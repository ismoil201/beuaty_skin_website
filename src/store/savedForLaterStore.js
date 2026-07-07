const SAVED_KEY = "beauty_skin_saved_for_later";

export function getSavedForLater() {
  try {
    return JSON.parse(localStorage.getItem(SAVED_KEY) || "[]");
  } catch {
    return [];
  }
}

export function saveForLaterItem(item) {
  const saved = getSavedForLater();
  if (saved.some((s) => String(s.id) === String(item.id))) return saved;
  const next = [...saved, { id: item.id, name: item.name, image: item.image, unitPrice: item.unitPrice, brand: item.brand, variantLabel: item.variantLabel }];
  localStorage.setItem(SAVED_KEY, JSON.stringify(next));
  return next;
}

export function removeSavedForLater(cartItemId) {
  const next = getSavedForLater().filter((s) => String(s.id) !== String(cartItemId));
  localStorage.setItem(SAVED_KEY, JSON.stringify(next));
  return next;
}

export function clearSavedForLater() {
  localStorage.removeItem(SAVED_KEY);
  return [];
}
