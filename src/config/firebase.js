import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

/**
 * Firebase web app config for project `cosmetic-app-75fb9`.
 * These are publishable client keys (safe to ship in the bundle); access is
 * controlled by Firebase Authorized domains + backend token verification.
 * Values can be overridden via VITE_FIREBASE_* env vars without code changes.
 */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAh668pltxmHVtAi_dN1cLO2faTqRyVbUU",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "cosmetic-app-75fb9.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "cosmetic-app-75fb9",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "cosmetic-app-75fb9.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1075730526246",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1075730526246:web:ac4b809f7353e4bbac36e7",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-KVHDLM71LR",
};

let authInstance = null;

/** Lazily initialise Firebase Auth so the SDK only loads when sign-in is used. */
function getFirebaseAuth() {
  if (!authInstance) {
    const app = initializeApp(firebaseConfig);
    authInstance = getAuth(app);
    authInstance.useDeviceLanguage();
  }
  return authInstance;
}

/**
 * Opens the Google sign-in popup and returns the Firebase ID token (JWT) for
 * the authenticated user. This token is sent to `POST /api/auth/firebase`,
 * where the backend verifies it and issues the app's own session token.
 */
export async function signInWithGoogleIdToken() {
  const auth = getFirebaseAuth();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  const result = await signInWithPopup(auth, provider);
  return result.user.getIdToken();
}
