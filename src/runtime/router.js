import { productStore } from '../stores/index.js';
import { ProductService } from '../services/ProductService.js';
import { renderBrandPage } from '../utils/phase2Ui.js';
import { productCard } from '../pages/shared/productGrid.js';
import { initLazyImages } from '../utils/imageLoader.js';
import { t } from '../i18n/index.js';
import { ProductController } from '../controllers/ProductController.js';
import { AssistantController } from '../controllers/AssistantController.js';
import { SearchPage } from '../pages/search/SearchPage.js';
import { showHomeView, showProductView, showBrandView, showAssistantView, showSearchView } from './navigation.js';

export async function loadBrandPage(brand) {
  productStore.selectedBrand = brand;
  const list = await ProductService.loadBrandProducts(brand, productStore.sourceProducts, productStore.products);
  const content = document.getElementById("brandViewContent");
  if (content) {
    content.innerHTML = renderBrandPage(brand, list, t, list.slice(0, 12).map((p, i) => productCard(p, { screen: "brand", position: i })).join(""));
    initLazyImages(content);
  }
}

function parseSearchQuery(hash) {
  const raw = String(hash || "");
  const qIndex = raw.indexOf("?");
  if (qIndex === -1) return "";
  const params = new URLSearchParams(raw.slice(qIndex + 1));
  return String(params.get("q") || "").trim();
}

export async function handleRoute() {
  const hash = window.location.hash || "#/";
  const productMatch = hash.match(/^#\/product\/([^/?#]+)/);
  const brandMatch = hash.match(/^#\/brand\/([^/?#]+)/);
  const assistantMatch = hash.match(/^#\/assistant\/?$/);
  const searchMatch = hash.match(/^#\/search(?:\?|$)/);

  if (productMatch) {
    showProductView();
    await ProductController.loadDetailPage(decodeURIComponent(productMatch[1]));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (brandMatch) {
    showBrandView();
    await loadBrandPage(decodeURIComponent(brandMatch[1]));
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  if (assistantMatch) {
    showAssistantView();
    await AssistantController.init();
    AssistantController.render();
    return;
  }

  if (searchMatch) {
    const query = parseSearchQuery(hash);
    if (!query) {
      showHomeView();
      return;
    }
    showSearchView();
    await SearchPage.loadResults(query);
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  showHomeView();
}
