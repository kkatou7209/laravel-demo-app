<script setup lang="ts">
import ThemeSwith from "@/components/ThemeSwitch.vue";
</script>

<template>
    <v-layout>
            <!-- サイドナビゲーション -->
            <v-navigation-drawer color="primary" elevation="4">
                <div class="pa-5">
                    <h1 class="font-weight-bold text-subtitle-2">Laravel Demo App</h1>
                </div>
                <v-divider/>
                    <v-list density="compact">
                        <v-list-subheader>一覧</v-list-subheader>
                        <v-list-item link title="商品"/>
                        <v-list-item link title="売上" />
                        <v-list-item link title="ユーザー"/>
                        <v-list-item link title="通知"/>
                    </v-list>
                    <v-divider/>
                    <v-list density="compact">
                        <v-list-subheader>管理</v-list-subheader>
                        <v-list-item link title="アカウント設定"/>
                        <v-list-item link title="管理ユーザー"/>
                    </v-list>
                    <v-divider/>
                    <v-list>
                        <v-list-item link title="設定"/>
                        <v-list-item style="display: flex; justify-content: end;" class="pr-3 pl-3">
                            <theme-swith/>
                        </v-list-item>
                    </v-list>
            </v-navigation-drawer>

            <v-main style="overflow: scroll;" height="100vh">
                <v-container fluid max-width="1200">
                    <slot></slot>
                </v-container>
            </v-main>
        </v-layout>
</template>
