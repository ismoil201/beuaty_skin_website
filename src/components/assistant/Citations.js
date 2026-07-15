import { escapeHtml } from "../../utils/html.js";
import { t } from "../../i18n/index.js";

export function CitationsBlock({ citations = [], messageId = "", open = false }) {
  const list = (citations || []).filter(Boolean);
  if (!list.length) return "";

  return `
    <details class="assistant-citations" data-assistant-citations="${escapeHtml(messageId)}" ${open ? "open" : ""}>
      <summary>${escapeHtml(t("assistant.sources"))} (${list.length})</summary>
      <ul>
        ${list
          .map((citation) => {
            if (typeof citation === "string") {
              return `<li>${escapeHtml(citation)}</li>`;
            }
            const title = citation.title || citation.name || citation.source || citation.url || "";
            const url = citation.url || citation.link || "";
            const snippet = citation.snippet || citation.text || "";
            if (url && /^https?:\/\//i.test(String(url))) {
              return `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title || url)}</a>${snippet ? `<p>${escapeHtml(snippet)}</p>` : ""}</li>`;
            }
            return `<li>${escapeHtml(title)}${snippet ? `<p>${escapeHtml(snippet)}</p>` : ""}</li>`;
          })
          .join("")}
      </ul>
    </details>
  `;
}
