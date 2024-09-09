<script setup lang="ts">
import { ref } from 'vue';

const mailHint = ref("有効なメールアドレスを入力してください");
const passHint = ref("有効なパスワードを入力してください");
const passCheckHint = ref("同じパスワードをもう一度入力してください");

const mailInput = ref("");
const passInput = ref("");
const passCheckInput = ref("");
</script>

<template>
    <v-row justify="center" align="center" class="pt-10">
        <v-stepper
            :items="['Step 1', 'Step 2', 'Step 3']"
            prev-text="戻る"
            next-text="次へ"
            min-width="500"
        >
            <template v-slot:item.1>
                <v-card>
                    <v-card-title>メールアドレスを入力してください</v-card-title>
                    <v-card-item>
                        <br>
                        <v-text-field
                            v-model="mailInput"
                            label="メールアドレス"
                            variant="outlined"
                            persistent-hint
                            :hint="mailHint"
                        />
                    </v-card-item>
                </v-card>
            </template>
            <template v-slot:item.2>
                <v-card>
                    <v-card-title>パスワードを入力してください</v-card-title>
                    <v-card-item>
                        <br>
                        <v-text-field
                            v-model="passInput"
                            label="パスワード"
                            variant="outlined"
                            persistent-hint
                            :hint="passHint"
                        />
                        <br>
                        <v-text-field
                            v-model="passCheckInput"
                            label="パスワード(確認用)"
                            variant="outlined"
                            persistent-hint
                            :hint="passCheckHint"
                        />
                    </v-card-item>
                </v-card>
            </template>
            <template v-slot:item.3>
                <v-card>
                    <v-card-title>以下の内容で登録します</v-card-title>
                    <v-card-item>
                        <v-card-subtitle>メールアドレス</v-card-subtitle>
                        <v-card-text>{{ mailInput }}</v-card-text>
                        <v-card-subtitle>パスワード</v-card-subtitle>
                        <v-card-text>{{ passInput }}</v-card-text>
                        <br>
                        <div style="display: flex; justify-content: end;">
                            <v-btn color="secondary">登録</v-btn>
                        </div>
                    </v-card-item>
                </v-card>
            </template>
        </v-stepper>
    </v-row>
</template>
