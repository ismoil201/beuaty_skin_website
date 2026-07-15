import { assistantStore } from "../stores/assistantStore.js";
import { favoriteStore } from "../stores/favoriteStore.js";
import { els } from "../utils/dom.js";
import { AssistantService } from "../services/AssistantService.js";
import { createMessageId } from "../utils/assistantIds.js";
import {
  SUPPORTED_ASSISTANT_ACTIONS,
  buildProductNavigationTarget,
  assistantLog,
} from "../utils/assistantHelpers.js";
import { AssistantPage } from "../pages/assistant/AssistantPage.js";
import { CatalogPage } from "../pages/catalog/CatalogPage.js";
import { AuthController } from "./AuthController.js";
import { CartController } from "./CartController.js";
import { FavoriteController } from "./FavoriteController.js";
import {
  lockBody,
  unlockBodyIfNoOverlay,
  navigateToProduct,
  openCart,
  showHomeView,
  syncBottomNav,
} from "../runtime/navigation.js";
import { showToast } from "../utils/toast.js";
import { t } from "../i18n/index.js";

function safeNavigateToProduct(productId) {
  const target = buildProductNavigationTarget(productId);
  if (!target) {
    assistantLog("Navigation id", "missing", { productId });
    return false;
  }
  assistantLog("Navigation id", productId);
  navigateToProduct(productId);
  return true;
}

function scrollMessagesToBottom(root) {
  const scroller = root?.querySelector?.("[data-assistant-messages]");
  if (!scroller) return;
  requestAnimationFrame(() => {
    scroller.scrollTop = scroller.scrollHeight;
  });
}

function renderAll() {
  AssistantPage.render();
  const roots = [els.assistantWidgetContent, els.assistantPageContent].filter(Boolean);
  roots.forEach(scrollMessagesToBottom);
}

export const AssistantController = {
  async init() {
    AssistantService.ensureIds();
    if (assistantStore._bootstrapped) {
      renderAll();
      return;
    }

    assistantStore.historyLoading = true;
    renderAll();

    const result = await AssistantService.loadHistory();
    assistantStore.historyLoading = false;
    assistantStore._bootstrapped = true;

    if (result.success && result.messages?.length) {
      assistantStore.messages = result.messages;
      const lastAssistant = [...result.messages].reverse().find((m) => m.role === "assistant");
      assistantStore.followUpQuestions = lastAssistant?.followUpQuestions || [];
    }

    renderAll();
  },

  openWidget() {
    if (!els.assistantWidget) return;
    assistantStore.widgetOpen = true;
    els.assistantWidget.classList.add("open");
    els.assistantWidget.setAttribute("aria-hidden", "false");
    els.assistantFab?.classList.add("is-open");
    lockBody();
    syncBottomNav();
    renderAll();
    this.focusComposer();
    if (!assistantStore._bootstrapped) {
      this.init();
    }
  },

  closeWidget() {
    if (!els.assistantWidget) return;
    assistantStore.widgetOpen = false;
    els.assistantWidget.classList.remove("open");
    els.assistantWidget.setAttribute("aria-hidden", "true");
    els.assistantFab?.classList.remove("is-open");
    unlockBodyIfNoOverlay();
    syncBottomNav();
  },

  toggleWidget() {
    if (assistantStore.widgetOpen) this.closeWidget();
    else this.openWidget();
  },

  isWidgetOpen() {
    return Boolean(els.assistantWidget?.classList.contains("open"));
  },

  focusComposer() {
    const input =
      document.querySelector("#assistantPageContent [data-assistant-input]") ||
      document.querySelector("#assistantWidgetContent [data-assistant-input]");
    input?.focus();
  },

  async sendMessage(text, { retryMessageId } = {}) {
    const content = String(text || "").trim();
    if (!content || assistantStore.loading) return;

    assistantStore.error = "";
    assistantStore.errorStatus = null;
    assistantStore.followUpQuestions = [];

    let userMessageId = retryMessageId;
    if (retryMessageId) {
      assistantStore.messages = assistantStore.messages.map((msg) =>
        msg.id === retryMessageId
          ? { ...msg, status: "pending", errorMessage: "" }
          : msg
      );
    } else {
      userMessageId = createMessageId();
      assistantStore.messages = [
        ...assistantStore.messages,
        {
          id: userMessageId,
          role: "user",
          content,
          status: "pending",
        },
      ];
    }

    assistantStore.loading = true;
    renderAll();

    const result = await AssistantService.send(content, { clientMessageId: userMessageId });

    assistantStore.loading = false;

    if (!result.success) {
      assistantStore.error = result.error || t("assistant.errorGeneric");
      assistantStore.errorStatus = result.status ?? null;
      assistantStore.messages = assistantStore.messages.map((msg) =>
        msg.id === userMessageId
          ? {
              ...msg,
              status: "error",
              errorMessage: result.error || t("assistant.errorGeneric"),
            }
          : msg
      );
      // Keep conversation intact on error
      renderAll();
      return;
    }

    assistantStore.messages = assistantStore.messages.map((msg) =>
      msg.id === userMessageId ? { ...msg, status: "ok", errorMessage: "" } : msg
    );
    assistantStore.messages = [...assistantStore.messages, result.assistantMessage];
    assistantStore.followUpQuestions = result.assistantMessage.followUpQuestions || [];
    assistantStore.error = "";
    assistantStore.errorStatus = null;
    renderAll();
  },

  retryMessage(messageId) {
    const message = assistantStore.messages.find((m) => m.id === messageId && m.role === "user");
    if (!message) return;
    return this.sendMessage(message.content, { retryMessageId: messageId });
  },

  retryLastFailed() {
    const failed = [...assistantStore.messages].reverse().find((m) => m.status === "error");
    if (failed) return this.retryMessage(failed.id);
  },

  async newChat() {
    if (assistantStore.loading) return;
    await AssistantService.reset();
    renderAll();
    this.focusComposer();
    showToast(t("assistant.newChatStarted"), "success");
  },

  handleSuggest(question) {
    return this.sendMessage(question);
  },

  async handleAction(type, { productId, variantId, category, brand } = {}) {
    const normalized = String(type || "").toLowerCase();

    if (
      normalized === SUPPORTED_ASSISTANT_ACTIONS.view_product ||
      normalized === SUPPORTED_ASSISTANT_ACTIONS.open_product
    ) {
      if (!safeNavigateToProduct(productId)) return;
      this.closeWidget();
      return;
    }
    if (normalized === SUPPORTED_ASSISTANT_ACTIONS.add_to_cart) {
      if (!productId || productId === "undefined" || productId === "null") return;
      await CartController.add(productId, variantId || undefined, 1, {
        showLoginRequired: AuthController.showLoginRequired,
      });
      return;
    }
    if (normalized === SUPPORTED_ASSISTANT_ACTIONS.open_cart) {
      this.closeWidget();
      openCart();
      return;
    }
    if (normalized === SUPPORTED_ASSISTANT_ACTIONS.open_category) {
      if (!category) return;
      this.closeWidget();
      assistantLog("Navigation target", `#/category/${category}`);
      CatalogPage.renderCategoryProducts(category, { showHomeView });
      return;
    }
    if (normalized === SUPPORTED_ASSISTANT_ACTIONS.open_brand) {
      if (!brand) return;
      this.closeWidget();
      const target = `#/brand/${encodeURIComponent(brand)}`;
      assistantLog("Navigation target", target);
      window.location.hash = target;
      return;
    }
  },

  async handleClick(event) {
    const target = event.target;

    if (target.closest("[data-assistant-close]")) {
      this.closeWidget();
      return;
    }
    if (target.closest("[data-assistant-new-chat]")) {
      await this.newChat();
      return;
    }
    if (target.closest("[data-assistant-open-page]")) {
      this.closeWidget();
      window.location.hash = "#/assistant";
      return;
    }

    const suggest = target.closest("[data-assistant-suggest]");
    if (suggest) {
      await this.sendMessage(suggest.dataset.assistantSuggest);
      return;
    }

    const retry = target.closest("[data-assistant-retry]");
    if (retry) {
      await this.retryMessage(retry.dataset.assistantRetry);
      return;
    }
    if (target.closest("[data-assistant-retry-last]")) {
      await this.retryLastFailed();
      return;
    }

    const actionBtn = target.closest("[data-assistant-action]");
    if (actionBtn) {
      await this.handleAction(actionBtn.dataset.assistantAction, {
        productId: actionBtn.dataset.assistantActionProduct,
        variantId: actionBtn.dataset.assistantActionVariant,
        category: actionBtn.dataset.assistantActionCategory,
        brand: actionBtn.dataset.assistantActionBrand,
      });
      return;
    }

    const favoriteBtn = target.closest("[data-favorite]");
    if (favoriteBtn) {
      await FavoriteController.toggle(favoriteBtn.dataset.favorite);
      renderAll();
      return;
    }

    const addBtn = target.closest("[data-add]");
    if (addBtn) {
      await CartController.add(addBtn.dataset.add, undefined, 1, {
        showLoginRequired: AuthController.showLoginRequired,
      });
      return;
    }

    const productBtn = target.closest("[data-product]");
    if (productBtn) {
      if (!safeNavigateToProduct(productBtn.dataset.product)) return;
      this.closeWidget();
    }
  },

  handleKeydown(event) {
    const input = event.target.closest?.("[data-assistant-input]");
    if (!input) return;
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      const form = input.closest("[data-assistant-form]");
      const value = input.value;
      if (!value.trim() || assistantStore.loading) return;
      input.value = "";
      this.sendMessage(value);
      form?.querySelector("[data-assistant-send]")?.setAttribute("disabled", "");
    }
  },

  handleSubmit(event) {
    const form = event.target.closest?.("[data-assistant-form]");
    if (!form) return;
    event.preventDefault();
    const input = form.querySelector("[data-assistant-input]");
    const value = input?.value || "";
    if (!value.trim() || assistantStore.loading) return;
    if (input) input.value = "";
    this.sendMessage(value);
  },

  handleInput(event) {
    const input = event.target.closest?.("[data-assistant-input]");
    if (!input) return;
    const form = input.closest("[data-assistant-form]");
    const sendBtn = form?.querySelector("[data-assistant-send]");
    if (!sendBtn) return;
    const empty = !input.value.trim();
    if (empty || assistantStore.loading) sendBtn.setAttribute("disabled", "");
    else sendBtn.removeAttribute("disabled");

    // Auto-grow textarea
    input.style.height = "auto";
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  },

  render() {
    renderAll();
  },

  getFavoriteIds() {
    return favoriteStore.favoriteIds || new Set();
  },
};
