<script setup lang="ts">
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

/** メールアドレス入力欄のヒント */
const mailHint = ref("メールアドレスを入力してください");

/** パスワード入力欄のヒント */
const passHint = ref("パスワードを入力してください");

const authStore = useAuthStore();
const router = useRouter();

const login = async () => {
    await authStore.login();
    router.push({ name: "Admin:Dashboard" });
}
</script>

<template>
    <v-row justify="center" align="center" class="pt-10">
        <v-sheet class="pa-10" elevation="10" rounded="lg" max-width="600" width="100%" >
            <h2>ログイン</h2>
            <v-divider/>
            <br>
            <div>
                <v-form>
                    <v-text-field
                        variant="outlined"
                        label="メールアドレス"
                        type="mail"
                        persistent-hint
                        :hint="mailHint"
                    />
                    <br>
                    <v-text-field
                        variant="outlined"
                        label="パスワード"
                        type="pass"
                        persistent-hint
                        :hint="passHint"
                    />
                    <br>
                    <div style="display: flex; justify-content: end;">
                        <v-btn color="secondary" @click.prevent="login">
                            ログイン
                        </v-btn>
                    </div>
                </v-form>
            </div>
            <br>
            <v-divider/>
            <br>
            <p class="text-caption">
                登録がお済みでない方は<router-link to="/signup">こちら</router-link>
            </p class="text-caption">
        </v-sheet>
    </v-row>
</template>
