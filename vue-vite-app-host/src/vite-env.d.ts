/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}

declare module "vue-vite-app-remote-1/*"{}

declare module "vue-vite-app-remote-2/*"{}