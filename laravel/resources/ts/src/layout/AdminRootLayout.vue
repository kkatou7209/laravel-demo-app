<script setup lang="ts">
import ThemeSwith from "@/components/ThemeSwitch.vue";
</script>

<template>
    <v-layout>
            <!-- サイドナビゲーション -->
            <v-navigation-drawer color="primary" elevation="4">
                <v-list>
                    <v-list-item link title="Login">
                        <router-link to="/login"/>
                    </v-list-item>
                    <v-list-item title="Menu2" />
                    <v-list-item title="Menu3" />
                </v-list>
            </v-navigation-drawer>

            <!-- ヘッダーナビゲーション -->
            <v-app-bar color="background">
                <v-app-bar-title>Laravel Demo App</v-app-bar-title>
                <theme-swith />
            </v-app-bar>

            <v-main>
                <v-container fluid max-width="1200">
                    <slot></slot>
                </v-container>
            </v-main>
        </v-layout>
</template>
