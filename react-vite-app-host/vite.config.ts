import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), federation({
        name: 'react-vite-app-host',
        remotes: {
            "react-vite-app-remote-1": 'http://localhost:9001/assets/remoteEntry.js',
            "react-vite-app-remote-2": 'http://localhost:9002/assets/remoteEntry.js',
        },
        shared: ['react', 'react-dom']
    })],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
})
