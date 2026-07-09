import { escapeHtml } from "../../utils/html.js";

export function ProfileHeader({ title, unreadBadgeHtml = "", menuLabel = "Menu", notificationsLabel = "Notifications" }) {
  return `
    <header class="app-profile-header">
      <h2>${escapeHtml(title)}</h2>
      <div class="app-profile-header-actions">
        <button class="app-profile-icon-btn" type="button" data-profile-action="notifications" aria-label="${escapeHtml(notificationsLabel)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          ${unreadBadgeHtml}
        </button>
        <button class="app-profile-icon-btn" type="button" data-profile-action="menu" aria-label="${escapeHtml(menuLabel)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
        </button>
      </div>
    </header>
  `;
}

export function ProfileUserSection({ avatarHtml, fullName, email, tierLabel }) {
  return `
    <section class="app-profile-user">
      ${avatarHtml}
      <div class="app-profile-user-meta">
        <div class="app-profile-user-top">
          <h3>${escapeHtml(fullName)}</h3>
          <span class="app-profile-tier">${escapeHtml(tierLabel)}</span>
        </div>
        <p class="app-profile-email">${escapeHtml(email)}</p>
      </div>
    </section>
  `;
}

export function ProfileAvatar({ imageUrl = "", name = "Profile" }) {
  if (imageUrl) {
    return `<img class="app-profile-avatar" src="${escapeHtml(imageUrl)}" alt="${escapeHtml(name)}" loading="eager" decoding="async" />`;
  }
  return `
    <div class="app-profile-avatar app-profile-avatar--placeholder" aria-hidden="true">
      <svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 1 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/></svg>
    </div>
  `;
}
