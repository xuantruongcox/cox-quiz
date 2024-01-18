import {defineConfig} from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/cox-quiz.ts',
            formats: ['es']
        },
        rollupOptions:{
            external: [/^lit/]
        }
    }
})