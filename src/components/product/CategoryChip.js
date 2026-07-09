import { escapeHtml } from "../../utils/html.js";

export function CategoryChip({ category, label, active = false }) {
  return `
    <button class="chip ${active ? "active" : ""}" data-category="${escapeHtml(category)}" type="button">
      ${escapeHtml(label)}
    </button>
  `;
}

export function CategoryChipRow({ categories, selectedCategory, labelFor }) {
  return categories.map((category) => CategoryChip({
    category,
    label: labelFor(category),
    active: selectedCategory === category,
  })).join("");
}
