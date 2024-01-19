import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/cox-quiz.ts",
      fileName: 'cox-quiz',
      formats: ["es"],
    },
    outDir: "./build",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [/^lit/],
    },
  },
});
