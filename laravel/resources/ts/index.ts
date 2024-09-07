import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles"

import { createRouter, createMemoryHistory } from "vue-router";

import { createApp } from "vue";

import App from "./App.vue";

import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

/**
 * Vuetify 設定
 */
const vuetify = createVuetify({
    components,
    directives
})

/**
 * Vue Router 設定
 */
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        { path: "/", component: Home},
        { path: "/login", component: Login}
    ]
})

/**
 * Vue アプリケーションインスタンス
 */
const app = createApp(App)
    // Vuetifyを適用する
    .use(vuetify)
    // Vue Routerを適用する
    .use(router);


app.mount("#app")
