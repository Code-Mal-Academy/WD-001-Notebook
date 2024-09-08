import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login/index.html'),
                register: resolve(__dirname, 'register/index.html'),
                todo: resolve(__dirname, 'todo/index.html')
            },
        },

    }
});
