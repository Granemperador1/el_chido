import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    open: true,
    allowedHosts: [
      "hunting-blah-humanities-wow.trycloudflare.com"
    ],
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
