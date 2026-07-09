export function FavoriteGrid({ products, renderCard }) {
  return `
    <div class="app-favorites-grid">
      ${products.map((product) => renderCard(product)).join("")}
    </div>
  `;
}

export function FavoriteGridSkeleton({ count = 4 }) {
  return `
    <div class="app-favorites-grid">
      ${Array.from({ length: count }, () => '<div class="app-favorites-skeleton skeleton-card"></div>').join("")}
    </div>
  `;
}
