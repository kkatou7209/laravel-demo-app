<script setup lang="ts">
import { ref } from 'vue';

const drawerShow = ref(false);

</script>

<template>
    <v-app>
        <v-layout>
            <!-- ヘッダーナビゲーション -->
            <v-app-bar color="secondary">
                <template v-slot:prepend>
                    <v-app-bar-nav-icon @click="drawerShow = !drawerShow"/>
                </template>
                <v-app-bar-title>Laravel Demo App</v-app-bar-title>
            </v-app-bar>

            <!-- サイドナビゲーション -->
            <v-navigation-drawer v-model="drawerShow" width="20rem">
                <v-list>
                    <router-link to="/login">
                        <v-list-item title="Login" />
                    </router-link>
                    <v-list-item title="Menu2" />
                    <v-list-item title="Menu3" />
                </v-list>
            </v-navigation-drawer>

            <!--
                メイン画面
                Vue Router で画面遷移
             -->
            <v-main>
                <router-view />
            </v-main>
        </v-layout>
    </v-app>
</template>
