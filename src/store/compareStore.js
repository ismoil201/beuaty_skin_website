const COMPARE_KEY = "beauty_skin_compare";
const MAX_COMPARE = 4;

export function getCompareIds() {
  try {
    return JSON.parse(localStorage.getItem(COMPARE_KEY) || "[]").slice(0, MAX_COMPARE);
  } catch {
    return [];
  }
}

export function setCompareIds(ids) {
  localStorage.setItem(COMPARE_KEY, JSON.stringify(ids.slice(0, MAX_COMPARE)));
}

export function toggleCompareId(productId) {
  const id = String(productId);
  let ids = getCompareIds();
  if (ids.includes(id)) {
    ids = ids.filter((item) => item !== id);
  } else if (ids.length >= MAX_COMPARE) {
    return { ids, added: false, full: true };
  } else {
    ids = [...ids, id];
  }
  setCompareIds(ids);
  return { ids, added: ids.includes(id), full: false };
}

export function removeCompareId(productId) {
  const ids = getCompareIds().filter((id) => id !== String(productId));
  setCompareIds(ids);
  return ids;
}

export function clearCompare() {
  setCompareIds([]);
  return [];
}

export { MAX_COMPARE };
