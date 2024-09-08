<script setup lang="ts">
import { ref } from 'vue';

const mailHint = ref("有効なメールアドレスを入力してください");
const passHint = ref("有効なパスワードを入力してください");
const passCheckHint = ref("同じパスワードをもう一度入力してください")
</script>

<template>
    <v-row justify="center" align="center" class="pt-10">
        <v-sheet class="pa-10" elevation="10" rounded="lg" max-width="600" width="100%">
            <h2>アカウント登録</h2>
            <v-divider/>
            <br>
            <div>
                <v-form>
                    <v-text-field label="メールアドレス" variant="outlined" persistent-hint :hint="mailHint"/>
                    <br>
                    <v-text-field label="パスワード" variant="outlined" persistent-hint :hint="passHint"/>
                    <br>
                    <v-text-field label="パスワード(確認用)" variant="outlined" persistent-hint :hint="passCheckHint"/>
                    <br>
                    <div style="display: flex; justify-content: end;">
                        <v-btn color="secondary">
                            登録する
                        </v-btn>
                    </div>
                </v-form>
            </div>
            <br>
            <v-divider/>
            <br>
            <p class="text-caption">
                すでにアカウントはお持ちですか？<br><router-link to="/login">こちら</router-link>からログインしてください
            </p>
        </v-sheet>
    </v-row>
</template>
