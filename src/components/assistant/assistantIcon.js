/** Public path for the AI Shopping Assistant brand icon. */
export const ASSISTANT_ICON_SRC = "/images/assistant-icon.png";

export function assistantIconImg({ className = "", size = "" } = {}) {
  const cls = className ? ` class="${className}"` : "";
  const sizeAttr = size ? ` width="${size}" height="${size}"` : "";
  return `<img src="${ASSISTANT_ICON_SRC}" alt=""${cls}${sizeAttr} decoding="async" draggable="false" />`;
}
