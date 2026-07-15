export const CONFIG = Object.freeze({
  productionApiBaseUrl: "https://cosmetic-server-production.up.railway.app",
  defaultPageSize: 24,
  searchDebounceMs: 300,
  storageKeys: Object.freeze({
    accessToken: "zaven_token",
    legacyAccessToken: "accessToken",
    user: "zaven_user",
    legacyUser: "user",
    role: "role",
    baseUrl: "zaven_base_url",
    sessionId: "zaven_session_id",
    assistantConversationId: "zaven_assistant_conversation_id",
    recentProducts: "zaven_recent_products",
    language: "beauty_skin_language",
  }),
  placeholderImage:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
});
