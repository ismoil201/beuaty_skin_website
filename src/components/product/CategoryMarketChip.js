import { escapeHtml } from "../../utils/html.js";
import { categoryLabel } from "../../utils/productMapper.js";

const FALLBACK_LETTERS = {
  SKINCARE: "S",
  MAKEUP: "M",
  COLLAGEN: "C",
  HAIR_CARE: "H",
  FRAGRANCE: "F",
  BAG: "B",
  SHOES: "S",
  ACCESSORY: "A",
  TOP: "T",
  OUTER: "O",
  PANTS: "P",
};

/**
 * Uzum-style horizontal category chip (icon circle + label).
 */
export function CategoryMarketChip({
  category,
  label,
  icon = "",
  imageUrl = "",
  active = false,
}) {
  const code = String(category || "");
  const text = label || categoryLabel(code) || code;
  const letter = (icon || FALLBACK_LETTERS[code] || text || code || "?").trim().charAt(0).toUpperCase();

  const media = imageUrl
    ? `<img src="${escapeHtml(imageUrl)}" alt="" loading="lazy" decoding="async" />`
    : `<span class="uzum-cat-letter" aria-hidden="true">${escapeHtml(letter)}</span>`;

  return `
    <button
      class="uzum-cat-chip ${active ? "active" : ""}"
      type="button"
      data-category="${escapeHtml(code)}"
      aria-pressed="${active ? "true" : "false"}"
    >
      <span class="uzum-cat-icon">${media}</span>
      <span class="uzum-cat-label">${escapeHtml(text)}</span>
    </button>
  `;
}

export function CategoryMarketRail({ items = [], selectedCategory = "" }) {
  if (!items.length) return "";
  return items
    .map((item) =>
      CategoryMarketChip({
        category: item.category || item.code || item,
        label: item.label || item.name || item.title,
        icon: item.icon || "",
        imageUrl: item.imageUrl || item.image || item.iconUrl || "",
        active: String(selectedCategory) === String(item.category || item.code || item),
      })
    )
    .join("");
}
