import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/cox-quiz.ts",
      formats: ["es"],
    },
    outDir: "./build",
    sourcemap: true,
    emptyOutDir: true,
    minify: "terser",
    terserOptions: {
      ie8: true,
      ecma: 2020,
      module: true,
      format: {
        ecma: 2020,
      },
    },
    rollupOptions: {
      plugins: [resolve()],
      output: {
        entryFileNames: "cox-quiz.js",
        chunkFileNames: "cox-quiz.js",
        assetFileNames: "cox-quiz.[ext]",
      },
      external: [/^lit/],
    },
  },
});
