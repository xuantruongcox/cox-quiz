import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import { defineConfig } from "vite";
import summary from 'rollup-plugin-summary'
export default defineConfig({
  build: {
    lib: {
      entry: "src/cox-quiz.ts",
      fileName: "cox-quiz",
      formats: ["es"],
    },
    outDir: "./build",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
      external: [/^lit/],
      preserveEntrySignatures: "strict",
      plugins: [
        resolve(),
        terser({
          ecma: 2020,
          module: true,
          mangle: {
            properties: {
              regex: /^__/,
            },
          },
        }),
        summary()
      ],
    },
  },
});
