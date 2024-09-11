import { defineConfig } from 'vite';
// Viteプラグイン
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from 'url';
import { watch } from 'fs';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/ts/index.ts',
                'resources/css/app.css'
            ],
            refresh: [
                "resources/ts/**",
                "resources/views/**",
            ],
            postcss: [
                tailwindcss({
                    content: [
                        './resources/views/**/*.blade.php'
                    ]
                }),
                autoprefixer()
            ],
        }),
        vue({
            template: { transformAssetUrls}
        }),
        vuetify({ autoImport: true }),

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
        host: '0.0.0.0',
        hmr: {
            host: '127.0.0.1'
        },
        watch: {
            usePolling: true,
            interval: 1000
        }
    }
});
