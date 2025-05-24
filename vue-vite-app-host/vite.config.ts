import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue(), federation({
        name: 'vue-vite-app-host',
        remotes: {
            "vue-vite-app-remote-1": "http://localhost:5001/assets/remoteEntry.js",
            "vue-vite-app-remote-2": "http://localhost:5002/assets/remoteEntry.js",
        },
        shared: ['vue']
    })],
    build: {
        minify: false,
        target: ["chrome89", "edge89", "firefox89", "safari15"]
    }
})
