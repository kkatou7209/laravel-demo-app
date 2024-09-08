/**
 * @author kkatou7209
 * @fileoverview
 *  このファイルではVuetifyの設定を行なっています。
 */

import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg"
import { appLightTheme, appDarkTheme } from "./theme";

/**
 * ユーザーのシステムの現在のテーマがダークモードかどうか
 * - ダークモードでなければ`false`
 * - そもそも取得できなければ`false`
 */
const isSystemThemeDark = window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

/**
 * Vuetify設定用オブジェクト
 */
const vuetify = createVuetify({
    components,
    directives,
    // アイコン設定
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: { mdi }
    },
    // アプリのカラーテーマ設定
    theme: {
        // ユーザーがダークモードを使っていればダークモードに設定する
        defaultTheme: isSystemThemeDark ? "appDarkTheme" : "appLightTheme",
        // カスタムテーマを登録
        themes: {
            appLightTheme,
            appDarkTheme
        }
    }
});

export default vuetify;
