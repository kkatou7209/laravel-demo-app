import vuetify from "@/config/vuetify";
import router from "@/config/router";
import { createApp } from "vue";

import App from "./App.vue";
import "vuetify/styles";
import { createPinia } from "pinia";

const pinia = createPinia();

const app = createApp(App)
    .use(vuetify)
    .use(router)
    .use(pinia);

app.mount("#app");
