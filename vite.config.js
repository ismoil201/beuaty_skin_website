import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  server: {
    port: 4173,
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
