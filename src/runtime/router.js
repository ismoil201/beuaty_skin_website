import { productStore } from '../stores/index.js';
import { ProductService } from '../services/ProductService.js';
import { renderBrandPage } from '../utils/phase2Ui.js';
import { productCard } from '../pages/shared/productGrid.js';
import { initLazyImages } from '../utils/imageLoader.js';
import { t } from '../i18n/index.js';
import { ProductController } from '../controllers/ProductController.js';
import { showHomeView, showProductView, showBrandView } from './navigation.js';

export async function loadBrandPage(brand) {
  productStore.selectedBrand = brand;
  const list = await ProductService.loadBrandProducts(brand, productStore.sourceProducts, productStore.products);
  const content = document.getElementById("brandViewContent");
  if (content) {
    content.innerHTML = renderBrandPage(brand, list, t, list.slice(0, 12).map((p, i) => productCard(p, { screen: "brand", position: i })).join(""));
    initLazyImages(content);
  }
}

export async function handleRoute() {
  const hash = window.location.hash || "#/";
  const productMatch = hash.match(/^#\/product\/([^/?#]+)/);
  const brandMatch = hash.match(/^#\/brand\/([^/?#]+)/);

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

  showHomeView();
}
