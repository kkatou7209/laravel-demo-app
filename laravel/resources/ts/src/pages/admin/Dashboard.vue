<script setup lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { generateFakeNotifications, generateFakeProducts, generateFakeSales, generateFakeUsers } from '@/fake/faker';
import { mdiInformation } from '@mdi/js';
import { BarChart } from 'vue-chart-3';

const products = ref(generateFakeProducts(10));
const users = ref(generateFakeUsers(20));
const notifs = ref(generateFakeNotifications(4));
const salesList = ref(generateFakeSales(500));
</script>

<template>
    <v-row>
        <v-col>
            <v-window show-arrows>
                <v-window-item v-for="notif of notifs">
                    <v-list-item link
                        :prepend-icon="mdiInformation"
                        min-height="60"
                        style="padding: 0px 70px;"
                        base-color="secondary"
                    >
                        {{ notif.title }}
                    </v-list-item>
                </v-window-item>
            </v-window>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
        </v-col>
    </v-row>
    <v-row>
        <v-col>
        </v-col>
    </v-row>
</template>
