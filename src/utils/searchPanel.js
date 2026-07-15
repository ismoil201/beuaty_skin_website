import { SearchService } from "../services/SearchService.js";
import { CONFIG } from "../config/config.js";
import { escapeHtml } from "./html.js";
import { formatPrice } from "./format.js";
import { t } from "../i18n/index.js";

const HISTORY_KEY = "beauty_skin_search_history";
const MAX_HISTORY = 8;

const TRENDING = [
  "SNAIL CREAM",
  "COSRX",
  "SUNSCREEN",
  "LIP TINT",
  "VITAMIN C",
  "COLLAGEN",
  "K-BEAUTY SET",
  "MOISTURIZER",
];

let debounceTimer = null;
let onSearchCallback = null;

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]").slice(0, MAX_HISTORY);
  } catch {
    return [];
  }
}

export function saveSearchHistory(query) {
  const trimmed = String(query || "").trim();
  if (!trimmed || trimmed.length < 2) return;
  const history = getHistory().filter((item) => item.toLowerCase() !== trimmed.toLowerCase());
  history.unshift(trimmed);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, MAX_HISTORY)));
}

export function clearSearchHistory() {
  localStorage.removeItem(HISTORY_KEY);
  renderSearchPanel(els?.searchInput?.value || "");
}

function chipHtml(label, type = "query") {
  const icon = type === "history"
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.3-4.3m1.3-5.2a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"/></svg>`;
  return `<button class="search-chip" type="button" data-search-chip="${escapeHtml(label)}" data-chip-type="${type}">${icon}${escapeHtml(label)}</button>`;
}

async function fetchInstantResults(query) {
  if (!query || query.length < 2) return [];
  const result = await SearchService.searchProducts({ q: query, page: 0, size: 6 });
  return result.products || [];
}

async function fetchSuggestBundle(query = "") {
  return SearchService.suggest(query, {
    limit: 8,
    recentSearches: getHistory(),
  });
}

function resultItemHtml(product) {
  return `
    <button class="search-result-item" type="button" data-search-product="${escapeHtml(product.id)}">
      <img src="${escapeHtml(product.image)}" alt="" loading="lazy" />
      <div>
        <strong>${escapeHtml(product.name)}</strong>
        <span>${escapeHtml(formatPrice(product.finalPrice))}</span>
      </div>
    </button>
  `;
}

export async function renderSearchPanel(query = "") {
  const panel = document.getElementById("searchPanel");
  if (!panel) return;

  const trimmed = query.trim();
  const history = getHistory();

  let instantHtml = "";
  if (trimmed.length >= 2) {
    instantHtml = `<div class="search-panel-section"><div class="search-panel-label">${escapeHtml(t("search.results"))}</div><div class="search-results-list">${Array(3).fill('<div class="ds-skeleton" style="height:56px;margin-bottom:8px;border-radius:10px"></div>').join("")}</div></div>`;
    panel.innerHTML = instantHtml;
    panel.classList.add("open");

    const [products, suggest] = await Promise.all([
      fetchInstantResults(trimmed),
      fetchSuggestBundle(trimmed),
    ]);
    const suggestChips = [...new Set([
      ...suggest.autocomplete,
      ...suggest.related,
      ...suggest.trending,
    ])].slice(0, 8);

    const suggestBlock = suggestChips.length
      ? `<div class="search-panel-section"><div class="search-panel-label">${escapeHtml(t("search.trending"))}</div><div class="search-chips">${suggestChips.map((item) => chipHtml(item, "suggest")).join("")}</div></div>`
      : "";

    panel.innerHTML = `
      ${suggestBlock}
      <div class="search-panel-section">
        <div class="search-panel-label">${escapeHtml(t("search.results"))}</div>
        <div class="search-results-list">
          ${products.length
            ? products.map(resultItemHtml).join("")
            : `<p class="hint" style="padding:8px">${escapeHtml(t("search.noResults"))}</p>`}
        </div>
      </div>
    `;
    return;
  }

  const sections = [];
  const suggest = await fetchSuggestBundle("");
  const trending = (suggest.trending.length ? suggest.trending : TRENDING).slice(0, 8);
  const popular = suggest.popular.slice(0, 8);

  sections.push(`
    <div class="search-panel-section">
      <div class="search-ai-hint">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7-6.3-4.6L6 21l2.3-7-6-4.6h7.6Z"/></svg>
        ${escapeHtml(t("search.aiHint"))}
      </div>
    </div>
  `);

  if (history.length) {
    sections.push(`
      <div class="search-panel-section">
        <div class="search-panel-label">
          ${escapeHtml(t("search.recent"))}
          <button class="search-panel-clear" type="button" data-clear-search-history>${escapeHtml(t("search.clear"))}</button>
        </div>
        <div class="search-chips">${history.map((item) => chipHtml(item, "history")).join("")}</div>
      </div>
    `);
  }

  if (popular.length) {
    sections.push(`
      <div class="search-panel-section">
        <div class="search-panel-label">${escapeHtml(t("home.popular"))}</div>
        <div class="search-chips">${popular.map((item) => chipHtml(item, "popular")).join("")}</div>
      </div>
    `);
  }

  sections.push(`
    <div class="search-panel-section">
      <div class="search-panel-label">${escapeHtml(t("search.trending"))}</div>
      <div class="search-chips">${trending.map((item) => chipHtml(item, "trending")).join("")}</div>
    </div>
  `);

  panel.innerHTML = sections.join("");
}

export function openSearchPanel() {
  const panel = document.getElementById("searchPanel");
  if (panel) {
    renderSearchPanel(document.getElementById("searchInput")?.value || "");
    panel.classList.add("open");
  }
}

export function closeSearchPanel() {
  document.getElementById("searchPanel")?.classList.remove("open");
}

export function initSearchPanel({ onSearch, onProductSelect } = {}) {
  onSearchCallback = onSearch;
  const input = document.getElementById("searchInput");
  const panel = document.getElementById("searchPanel");
  const wrap = document.querySelector(".search-wrap");
  if (!input || !panel) return;

  input.addEventListener("focus", () => {
    renderSearchPanel(input.value);
    panel.classList.add("open");
  });

  input.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => renderSearchPanel(input.value), CONFIG.searchDebounceMs);
  });

  panel.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-search-chip]");
    const product = event.target.closest("[data-search-product]");
    const clear = event.target.closest("[data-clear-search-history]");

    if (clear) {
      clearSearchHistory();
      return;
    }

    if (chip) {
      input.value = chip.dataset.searchChip;
      saveSearchHistory(chip.dataset.searchChip);
      closeSearchPanel();
      onSearchCallback?.(chip.dataset.searchChip);
      return;
    }

    if (product) {
      closeSearchPanel();
      onProductSelect?.(product.dataset.searchProduct);
    }
  });

  document.addEventListener("click", (event) => {
    if (!wrap?.contains(event.target)) {
      closeSearchPanel();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearchPanel();
      input.blur();
    }
  });

  document.querySelector(".search-voice")?.addEventListener("click", () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = document.documentElement.lang || "en-US";
    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      input.value = transcript;
      saveSearchHistory(transcript);
      onSearchCallback?.(transcript);
      closeSearchPanel();
    };
    recognition.start();
  });

  document.querySelector(".search-image")?.addEventListener("click", () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.addEventListener("change", () => {
      if (fileInput.files?.[0]) {
        input.placeholder = t("search.imagePlaceholder");
      }
    });
    fileInput.click();
  });
}

// Lazy reference to avoid circular import issues at module load
let els = null;
export function setSearchPanelElements(elements) {
  els = elements;
}
