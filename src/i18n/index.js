import { CONFIG } from "../config/config.js";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "../config/constants.js";
import uz from "./uz.js";
import en from "./en.js";
import ru from "./ru.js";
import ko from "./ko.js";

const dictionaries = { uz, en, ru, ko };

let currentLanguage = getSavedLanguage();

export function getSavedLanguage() {
  const saved = localStorage.getItem(CONFIG.storageKeys.language);
  return SUPPORTED_LANGUAGES.includes(saved) ? saved : DEFAULT_LANGUAGE;
}

export function getCurrentLanguage() {
  return currentLanguage;
}

export function t(key, params = {}) {
  const dictionary = dictionaries[currentLanguage] || dictionaries[DEFAULT_LANGUAGE];
  const fallback = dictionaries.en || dictionaries[DEFAULT_LANGUAGE];
  const template =
    dictionary?.[key] ?? fallback?.[key] ?? dictionaries[DEFAULT_LANGUAGE]?.[key] ?? key;
  return String(template).replace(/\{(\w+)\}/g, (_, param) => params[param] ?? "");
}

let onLanguageChange = () => {};

export function setLanguageChangeHandler(handler) {
  onLanguageChange = handler;
}

export function setLanguage(lang) {
  const nextLanguage = SUPPORTED_LANGUAGES.includes(lang) ? lang : DEFAULT_LANGUAGE;
  currentLanguage = nextLanguage;
  localStorage.setItem(CONFIG.storageKeys.language, nextLanguage);
  onLanguageChange();
}

export function applyTranslations(stateRef) {
  document.documentElement.lang = currentLanguage;
  document.title =
    stateRef?.currentRoute === "product" && stateRef?.selectedDetailProduct?.name
      ? `${stateRef.selectedDetailProduct.name} - BEAUTY SKIN KOREA`
      : "BEAUTY SKIN KOREA";

  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) languageSelect.value = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute("title", t(element.dataset.i18nTitle));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
}
