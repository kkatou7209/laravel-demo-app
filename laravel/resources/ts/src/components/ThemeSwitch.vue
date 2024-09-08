<script setup lang="ts">
import { ref, watch} from "vue";
import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";

import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme();

const isThemeDark = ref(theme.global.name.value === "appDarkTheme");

watch(isThemeDark, () => {
    theme.global.name.value = isThemeDark.value ? "appDarkTheme" : "appLightTheme"}
);
</script>

<template>
    <v-switch
        v-model="isThemeDark"
        :true-icon="mdiWeatherNight"
        :false-icon="mdiWeatherSunny"
        color="secondary"
        :style="{paddingRight: '10px'}"
    ></v-switch>
</template>
