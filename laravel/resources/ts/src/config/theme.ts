import { ThemeDefinition } from "vuetify/lib/framework.mjs";

/**
 * ライトモード時のテーマ
 */
const appLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        surface: "#FFF",
        background: "#EEE",
        primary: "#2B4EC2",
        secondary: "#2D8FE4",
    },
    variables: {}
}

/**
 * ダークモード時のテーマ
 */
const appDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        surface: "#444",
        background: "#222",
        primary: "#213C96",
        secondary: "#69B1F0",
    },
    variables: {}
}

export { appLightTheme, appDarkTheme };
