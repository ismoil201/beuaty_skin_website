import { createStore } from "./createStore.js";

export const assistantStore = createStore({
  conversationId: "",
  sessionId: "",
  messages: [],
  followUpQuestions: [],
  loading: false,
  historyLoading: false,
  error: "",
  errorStatus: null,
  widgetOpen: false,
  citationsOpen: {},
  pendingRetryId: null,
  _bootstrapped: false,
});
