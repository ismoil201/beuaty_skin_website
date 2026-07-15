import { escapeHtml } from "./html.js";

/**
 * Lightweight, XSS-safe markdown renderer for assistant messages.
 * Escapes HTML first, then applies a limited set of markdown transforms.
 */
export function renderSafeMarkdown(raw) {
  if (!raw) return "";
  const text = String(raw);
  const fences = [];

  // Extract fenced code blocks before escaping
  let withPlaceholders = text.replace(/```([a-zA-Z0-9_-]*)\n?([\s\S]*?)```/g, (_, lang, code) => {
    const index = fences.length;
    fences.push({ lang: lang || "", code: code.replace(/\n$/, "") });
    return `\u0000CODE${index}\u0000`;
  });

  withPlaceholders = escapeHtml(withPlaceholders);

  // Restore code blocks with escaped content
  withPlaceholders = withPlaceholders.replace(/\u0000CODE(\d+)\u0000/g, (_, idx) => {
    const fence = fences[Number(idx)];
    if (!fence) return "";
    const langClass = fence.lang ? ` class="language-${escapeHtml(fence.lang)}"` : "";
    return `<pre class="assistant-code"><code${langClass}>${escapeHtml(fence.code)}</code></pre>`;
  });

  // Inline code
  withPlaceholders = withPlaceholders.replace(
    /`([^`\n]+)`/g,
    "<code class=\"assistant-inline-code\">$1</code>"
  );

  // Headings
  withPlaceholders = withPlaceholders.replace(/^######\s+(.+)$/gm, "<h6>$1</h6>");
  withPlaceholders = withPlaceholders.replace(/^#####\s+(.+)$/gm, "<h5>$1</h5>");
  withPlaceholders = withPlaceholders.replace(/^####\s+(.+)$/gm, "<h4>$1</h4>");
  withPlaceholders = withPlaceholders.replace(/^###\s+(.+)$/gm, "<h3>$1</h3>");
  withPlaceholders = withPlaceholders.replace(/^##\s+(.+)$/gm, "<h2>$1</h2>");
  withPlaceholders = withPlaceholders.replace(/^#\s+(.+)$/gm, "<h1>$1</h1>");

  // Bold / italic
  withPlaceholders = withPlaceholders.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  withPlaceholders = withPlaceholders.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, "<em>$1</em>");

  // Links — only allow http(s)
  withPlaceholders = withPlaceholders.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Unordered lists
  withPlaceholders = withPlaceholders.replace(
    /(?:^|\n)((?:[-*]\s+.+(?:\n|$))+)/g,
    (block) => {
      const items = block
        .trim()
        .split("\n")
        .filter((line) => /^[-*]\s+/.test(line))
        .map((line) => `<li>${line.replace(/^[-*]\s+/, "")}</li>`)
        .join("");
      return items ? `\n<ul>${items}</ul>\n` : block;
    }
  );

  // Ordered lists
  withPlaceholders = withPlaceholders.replace(
    /(?:^|\n)((?:\d+\.\s+.+(?:\n|$))+)/g,
    (block) => {
      const items = block
        .trim()
        .split("\n")
        .filter((line) => /^\d+\.\s+/.test(line))
        .map((line) => `<li>${line.replace(/^\d+\.\s+/, "")}</li>`)
        .join("");
      return items ? `\n<ol>${items}</ol>\n` : block;
    }
  );

  // Paragraphs / line breaks (skip block elements)
  const blocks = withPlaceholders.split(/\n{2,}/);
  return blocks
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (/^<(?:h[1-6]|ul|ol|pre|blockquote)/i.test(trimmed)) return trimmed;
      return `<p>${trimmed.replace(/\n/g, "<br>")}</p>`;
    })
    .join("");
}
