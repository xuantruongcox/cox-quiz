import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    outDir: "./app/",
    sourcemap: true,
    emptyOutDir: true,
    rollupOptions: {
        output: {
            entryFileNames: "[name].js",
            chunkFileNames: "[name].js",
            assetFileNames: "[name].[ext]"
        }
    }
  }  
})