import { appStore } from "../../stores/index.js";
import { els } from "../../utils/dom.js";
import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";

const SUPPORT_CONTACT = {
  email: "ismoiljoraxonov1@gmail.com",
  phone: "+821065110757",
  phoneDisplay: "+82 10 6511 0757",
};

const SUPPORT_FAQ_KEYS = ["delivery", "cancel", "return"];

function renderFaqItem(key, index) {
  const isOpen = appStore.supportFaqOpen === index;
  return `
    <div class="app-support-faq ${isOpen ? "is-open" : ""}">
      <button class="app-support-faq-q" type="button" data-support-faq="${index}">
        <span>${escapeHtml(t(`support.faq.${key}.q`))}</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>
      </button>
      ${isOpen ? `<div class="app-support-faq-a">${escapeHtml(t(`support.faq.${key}.a`))}</div>` : ""}
    </div>
  `;
}

function renderPrivacyBullets(keys) {
  return `<ul class="app-support-doc-list">${keys
    .map((key) => `<li>${escapeHtml(t(key))}</li>`)
    .join("")}</ul>`;
}

export const SupportPage = {
  render() {
    els.supportContent.innerHTML = `
      <div class="app-support-page">
        <header class="app-support-header">
          <button class="app-support-back" type="button" data-support-close aria-label="${escapeHtml(t("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${escapeHtml(t("support.title"))}</h2>
          <span aria-hidden="true"></span>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-intro">${escapeHtml(t("support.intro"))}</p>

          <section class="app-support-card">
            <h3>${escapeHtml(t("support.faqTitle"))}</h3>
            ${SUPPORT_FAQ_KEYS.map((key, index) => renderFaqItem(key, index)).join("")}
          </section>

          <section class="app-support-card">
            <h3>${escapeHtml(t("support.originalTitle"))}</h3>
            <p class="app-support-text">${escapeHtml(t("support.originalText"))}</p>
            <p class="app-support-subtitle">${escapeHtml(t("support.whyTitle"))}</p>
            <ul class="app-support-list">
              <li>${escapeHtml(t("support.why1"))}</li>
              <li>${escapeHtml(t("support.why2"))}</li>
              <li>${escapeHtml(t("support.why3"))}</li>
              <li>${escapeHtml(t("support.why4"))}</li>
              <li>${escapeHtml(t("support.why5"))}</li>
            </ul>
            <p class="app-support-guarantee">${escapeHtml(t("support.guarantee"))}</p>
          </section>

          <section class="app-support-card">
            <h3>${escapeHtml(t("support.contactTitle"))}</h3>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">✉️</span>
              <span>Email: <a href="mailto:${escapeHtml(SUPPORT_CONTACT.email)}">${escapeHtml(SUPPORT_CONTACT.email)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">📞</span>
              <span>${escapeHtml(t("support.phoneLabel"))} <a href="tel:${escapeHtml(SUPPORT_CONTACT.phone)}">${escapeHtml(SUPPORT_CONTACT.phoneDisplay)}</a></span>
            </div>
            <div class="app-support-contact-row">
              <span class="app-support-contact-icon" aria-hidden="true">🕘</span>
              <span>${escapeHtml(t("support.hoursLabel"))} ${escapeHtml(t("support.hoursValue"))}</span>
            </div>
            <p class="app-support-contact-note">${escapeHtml(t("support.contactNote"))}</p>
          </section>
        </div>
      </div>
    `;
  },

  renderPrivacy() {
    els.privacyContent.innerHTML = `
      <div class="app-support-page">
        <header class="app-support-header app-support-header--doc">
          <button class="app-support-back" type="button" data-privacy-close aria-label="${escapeHtml(t("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${escapeHtml(t("privacy.title"))}</h2>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-doc-updated">${escapeHtml(t("privacy.updated"))}</p>
          <p class="app-support-doc-intro">${escapeHtml(t("privacy.intro"))}</p>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("privacy.s1title"))}</h3>
            ${renderPrivacyBullets(["privacy.s1a", "privacy.s1b", "privacy.s1c", "privacy.s1d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("privacy.s2title"))}</h3>
            <p>${escapeHtml(t("privacy.s2intro"))}</p>
            ${renderPrivacyBullets(["privacy.s2a", "privacy.s2b", "privacy.s2c", "privacy.s2d"])}
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("privacy.s3title"))}</h3>
            <p>${escapeHtml(t("privacy.s3text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("privacy.s4title"))}</h3>
            <p>${escapeHtml(t("privacy.s4text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("privacy.s5title"))}</h3>
            <p>${escapeHtml(t("privacy.s5text"))}</p>
            <p class="app-support-doc-contact">✉️ <a href="mailto:${escapeHtml(SUPPORT_CONTACT.email)}">${escapeHtml(SUPPORT_CONTACT.email)}</a></p>
          </section>
        </div>
      </div>
    `;
  },

  renderTerms() {
    els.termsContent.innerHTML = `
      <div class="app-support-page">
        <header class="app-support-header app-support-header--doc">
          <button class="app-support-back" type="button" data-terms-close aria-label="${escapeHtml(t("checkout.back"))}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 6-6 6 6 6"/></svg>
          </button>
          <h2>${escapeHtml(t("terms.title"))}</h2>
        </header>
        <div class="app-support-scroll">
          <p class="app-support-doc-updated">${escapeHtml(t("terms.updated"))}</p>
          <p class="app-support-doc-intro">${escapeHtml(t("terms.intro"))}</p>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s1title"))}</h3>
            <p>${escapeHtml(t("terms.s1text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s2title"))}</h3>
            <p>${escapeHtml(t("terms.s2text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s3title"))}</h3>
            <p>${escapeHtml(t("terms.s3text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s4title"))}</h3>
            <p>${escapeHtml(t("terms.s4text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s5title"))}</h3>
            <p>${escapeHtml(t("terms.s5text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s6title"))}</h3>
            <p>${escapeHtml(t("terms.s6text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <h3>${escapeHtml(t("terms.s7title"))}</h3>
            <p>${escapeHtml(t("terms.s7text"))}</p>
          </section>

          <section class="app-support-doc-section">
            <p class="app-support-doc-contact">✉️ <a href="mailto:${escapeHtml(SUPPORT_CONTACT.email)}">${escapeHtml(SUPPORT_CONTACT.email)}</a></p>
          </section>
        </div>
      </div>
    `;
  },

  handleClick(event, { close } = {}) {
    const faq = event.target.closest("[data-support-faq]");
    if (event.target.closest("[data-support-close]")) {
      close?.();
      return;
    }
    if (faq) {
      const index = Number(faq.dataset.supportFaq);
      appStore.supportFaqOpen = appStore.supportFaqOpen === index ? -1 : index;
      SupportPage.render();
    }
  },

  handlePrivacyClick(event, { close } = {}) {
    if (event.target.closest("[data-privacy-close]")) close?.();
  },

  handleTermsClick(event, { close } = {}) {
    if (event.target.closest("[data-terms-close]")) close?.();
  },
};

export const renderSupport = SupportPage.render;
export const renderPrivacy = SupportPage.renderPrivacy;
export const renderTerms = SupportPage.renderTerms;
