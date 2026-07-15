import { escapeHtml } from "../../utils/html.js";

export function SuggestionChips({ questions = [] }) {
  const list = (questions || []).filter((q) => typeof q === "string" && q.trim());
  if (!list.length) return "";
  return `
    <div class="assistant-suggestions" role="list">
      ${list
        .map(
          (question) => `
        <button class="assistant-chip" type="button" role="listitem" data-assistant-suggest="${escapeHtml(question)}">
          ${escapeHtml(question)}
        </button>`
        )
        .join("")}
    </div>
  `;
}
