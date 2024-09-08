/**
 * @author kkatou7209
 * @fileoverview
 *  このファイルではルーティング全体の設定を行っています。
 *  ここで設定した内容は`resources/ts/index.ts`で読み込まれます。
 */

import { createRouter, createMemoryHistory } from "vue-router";

import "vue-router";
import { useAuthStore } from "@/store/auth";

/**
 * ルートのメタ情報の設定
 */
declare module "vue-router" {
    interface RouteMeta {
        /** 管理ユーザーのみが閲覧できる画面かどうか */
        isAdmin?: boolean;
        /** ログイン済一般ユーザーのみが閲覧できる画面かどうか */
        isUser?: boolean;
        /** 認証が必要かどうか */
        requiresAuth: boolean;
    }
}

/**
 * Vue Router ルーティング設定
 */
const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import("@/pages/Home.vue"),
            meta: {
                requiresAuth: true,
                isUser: true,
            }
        },
        {
            path: "/login",
            name: "Login",
            component: () => import("@/pages/Login.vue")
        },
        {
            path: "/signup",
            name: "SignUp",
            component: () => import("@/pages/SignUp.vue")
        },
        {
            path: "/admin",
            name: "Admin",
            meta: {
                requiresAuth: true,
                isAdmin: true,
            },
            children: [
                {
                    path: "dashboard",
                    name: "Admin:Dashboard",
                    component: () => import("@/pages/admin/Dashboard.vue"),
                    meta: {
                        requiresAuth: true,
                        isAdmin: true,
                    }
                }
            ]
        }
    ]
})


/**
 * ナビゲーションガードの設定
 *
 * ルーティングする前に挟む処理
 */
router.beforeEach((to, _, next) => {
    // 認証情報確認のためにストアを呼び出し
    // 注意!：beforeEach関数の外側で呼び出すとpiniaがまだ
    //       初期化されていないのでエラーになる
    const authStore = useAuthStore();

    // 認証不要な画面ならそのまま遷移(例えばログイン)
    if (!to.meta.requiresAuth) {
        next();
    }

    // 認証が必要な画面の場合
    else {
        // 管理ユーザーの場合
        if (to.meta.isAdmin && authStore.isAuthenticated && authStore.isAdmin) {
            next();
        }

        // 登録済一般ユーザーの場合
        else if (to.meta.isUser && authStore.isAuthenticated && authStore.isUser) {
            next();
        }

        // その他はログイン画面に遷移
        else {
            next({ name: "Login" });
        }
    }
})


export default router;
