<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
import { useRoute, useRouter } from "vue-router";

import AdminRootLayout from '@/layout/AdminRootLayout.vue';
import UserRootLayout from '@/layout/UserRootLayout.vue';

const theme = useTheme();

const isThemeDark = ref(theme.global.name.value === "appDarkTheme");

watch(isThemeDark, () => theme.global.name.value = isThemeDark.value ? "appDarkTheme" : "appLightTheme");

const router = useRouter();

console.log(router.currentRoute.value)

</script>

<template>
    <v-app>
        <template v-if="$route.path.match('/admin')">
            <admin-root-layout>
                <router-view />
            </admin-root-layout>
        </template>
        <template v-else>
            <user-root-layout>
                <router-view />
            </user-root-layout>
        </template>
    </v-app>
</template>
