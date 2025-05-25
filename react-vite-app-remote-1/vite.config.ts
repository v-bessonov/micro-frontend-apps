import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        federation({
            name: 'react-vite-app-remote-1',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactButtonRemoteApp1': './src/components/ReactButtonRemoteApp1.tsx',
            },
            shared: ['react', 'react-dom'],
        })],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
})
