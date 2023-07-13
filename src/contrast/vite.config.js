import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
  },
  build: {
    lib: {
      entry: "./index.ts",
      name: "add",
    },
  },
  resolve: {
    alias: {
      "@": "./src/",
    },
  },
});
