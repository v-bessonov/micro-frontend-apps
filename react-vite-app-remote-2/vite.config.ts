import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(),
        federation({
            name: 'react-vite-app-remote-2',
            filename: 'remoteEntry.js',
            exposes: {
                './ReactButtonRemoteApp2': './src/components/ReactButtonRemoteApp2.tsx',
            },
            shared: ['react', 'react-dom'],
        })],
    build: {
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    }
})
