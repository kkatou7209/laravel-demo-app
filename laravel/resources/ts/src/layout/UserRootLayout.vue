<script setup lang="ts">
import ThemeSwitch from '@/components/ThemeSwitch.vue';
import { mdiMenu } from '@mdi/js';
import { ref } from 'vue';

const isDrawerShow = ref(false);
const toggleDrawer = () => {
    isDrawerShow.value = !isDrawerShow.value;
}
</script>

<template>
    <v-layout>
        <v-app-bar>
            <v-app-bar-nav-icon
                v-if="$route.meta.requiresAuth"
                :icon="mdiMenu"
                @click="toggleDrawer"
            />
            <v-app-bar-title class="font-weight-bold text-uppercase">Laravel Demo App</v-app-bar-title>
            <theme-switch/>
        </v-app-bar>

        <v-navigation-drawer v-model="isDrawerShow" color="primary">
            <v-list title="設定">
                <v-list-item>
                    アカウント
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <v-container>
                <router-view/>
            </v-container>
        </v-main>
    </v-layout>

</template>
