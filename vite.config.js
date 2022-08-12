import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/social-network-vite/",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});

