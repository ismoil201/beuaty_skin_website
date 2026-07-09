import { defineConfig } from "vite";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/firebase")) return "firebase";
          if (id.includes("node_modules/@firebase")) return "firebase";
        },
      },
    },
  },
  server: {
    port: 5173,
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
