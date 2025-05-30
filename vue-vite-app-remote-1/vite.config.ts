import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), federation({
        name: 'vue-vite-app-remote-1',
        filename: 'remoteEntry.js',
        exposes: {
            './VueButtonRemoteApp1': './src/components/VueButtonRemoteApp1.vue',
        },
        shared: ['vue']
    })],
    build: {
        minify: false,
        target: ["chrome89", "edge89", "firefox89", "safari15"]
    }
})
