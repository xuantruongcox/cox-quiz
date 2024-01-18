import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    outDir: "./app/",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
        output: {
            entryFileNames: "cox-quiz.js",
            chunkFileNames: "cox-quiz.js",
            assetFileNames: "cox-quiz.[ext]"
        }
    }
  }  
})