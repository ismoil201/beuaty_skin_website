import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(rootDir, "./src"),
    },
  },
  server: {
    port: 5174,
    proxy: {
      "/api": {
        target: "https://cosmetic-server-production.up.railway.app",
        changeOrigin: true,
        secure: true,
      },
      "/events": {
        target: "https://cosmetic-server-production.up.railway.app",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
