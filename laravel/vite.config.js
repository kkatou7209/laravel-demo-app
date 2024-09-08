import { defineConfig } from 'vite';
// Viteプラグイン
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { fileURLToPath, URL } from 'url';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/ts/index.ts'],
            refresh: [
                "resources/ts/**",
                "resources/view/**"
            ],
        }),
        vue({
            template: { transformAssetUrls}
        }),
        vuetify({ autoImport: true })
    ],
    resolve: {
        alias: [
            { find: "@", replacement: fileURLToPath(new URL("./resources/ts/src", import.meta.url))}
        ],
        extensions: [
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.ts',
            '.tsx',
            '.vue',
        ],
    },
    server: {
        host: true,
        hmr: true
    }
});
