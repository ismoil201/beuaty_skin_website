export function productCard(product, meta = {}) {
  const isFavorite = state.favoriteIds.has(String(product.id)) || Boolean(product.favorite);
  const screen = meta.screen || state.currentGridScreen || "home";
  const position = meta.position ?? 0;
  return `
    <article class="product-card" data-product="${escapeHtml(product.id)}" data-screen="${escapeHtml(screen)}" data-position="${escapeHtml(position)}">
      <div class="badge-row">
        ${product.discountPercent ? `<span class="badge">-${product.discountPercent}%</span>` : ""}
        ${product.todayDeal ? `<span class="badge today">Today deal</span>` : ""}
      </div>
      <button class="icon-button favorite-float ${isFavorite ? "active" : ""}" data-favorite="${escapeHtml(product.id)}" type="button" aria-label="Sevimlilar">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      </button>
      <img class="product-image" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.name)}" loading="lazy" />
      <div class="product-info">
        <div class="product-meta">
          <span class="brand-name">${escapeHtml(product.brand || product.category || "BEAUTY SKIN KOREA")}</span>
          <span class="rating">${product.ratingAvg ? `★ ${product.ratingAvg.toFixed(1)} (${product.reviewCount})` : "★ 0 (0)"}</span>
        </div>
        <h3>${escapeHtml(product.name)}</h3>
        <p>${escapeHtml(product.description || `${product.soldCount} dona sotilgan`)}</p>
        <div class="price-row">
          <span>${formatPrice(product.finalPrice)}</span>
          ${product.discountPercent ? `<span class="old-price">${formatPrice(product.originalPrice)}</span>` : ""}
        </div>
        <p class="hint">${escapeHtml(t("product.sold", { count: product.soldCount }))}</p>
      </div>
      <div class="card-actions">
        <button class="primary-button" data-add="${escapeHtml(product.id)}" type="button">${escapeHtml(t("product.addToCart"))}</button>
        <button class="icon-button" data-detail="${escapeHtml(product.id)}" type="button" aria-label="${escapeHtml(t("product.viewDetails"))}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
        </button>
      </div>
    </article>
  `;
}

export function renderProductList(container, products, emptyMessage, meta = {}) {
  if (!products.length) {
    renderEmpty(container, emptyMessage);
    return;
  }
  container.innerHTML = products.map((product, index) => productCard(product, { ...meta, position: index })).join("");
  observeProductImpressions(container);
}

export function renderSelect(select, items, labelOf) {
  select.innerHTML = items.length
    ? items.map((item) => `<option value="${escapeHtml(item.id)}">${escapeHtml(labelOf(item))}</option>`).join("")
    : "<option value=\"\">Ma’lumot topilmadi</option>";
}

export function renderStars(rating, label = "Rating") {
  const safeRating = Math.min(5, Math.max(0, Math.round(numberOrZero(rating))));
  return `
    <span class="stars" role="img" aria-label="${escapeHtml(label)} ${safeRating} out of 5">
      ${Array.from({ length: 5 }, (_, index) => `<span class="${index < safeRating ? "filled" : ""}">★</span>`).join("")}
    </span>
  `;
}

export function reviewStats(reviews) {
  const count = reviews.length;
  const average = count ? reviews.reduce((sum, review) => sum + numberOrZero(review.rating), 0) / count : 0;
  return { count, average };
}
