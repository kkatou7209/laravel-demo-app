# Laravelデモアプリケーション

## 環境構築

### Gitリポジトリ
1. リポジトリからプロジェクトをクローン

    ```bash
    git clone https://github.com/kkatou7209/laravel-demo-app.git
    ```

1. プロジェクトへ移動

    ```bash
    cd laravel-demo-app
    ```

1. `dev`ブランチに切り替え

    ```bash
    git checkout dev
    ```
<br>

### コンテナ内の初期化

1. `Ctl + Shift + P` を押し、 `Reopen in Container`を入力
1. コンテナに入ったら以下のコマンドを実行

    ```bash
    cd /workspace

    # Laravel用のパッケージをインストール
    composer install

    # JavaScriptパッケージをインストール
    npm i

    # viteプロジェクトのビルド
    npm run build
    ```

1. `http://localhost:8080`にアクセスしてVueの画面が現れたら完了


## テスト

### テスト用環境変数
`.env.testing` を用意すれば、`php artisan test` 実行時に読み込まれる環境変数を指定できる

### マルチプロセス実行

テスト用のプロセスは既定では1つだが、`brianium/paratest` をインストールすることでマルチプロセスで実行でき、処理速度向上が期待できる

```bash
# paratest をインストール
composer require brianium/paratest --dev

# マルチプロセスでテスト実行
php artisan test --parallel
```

指定なしではできるだけ多くのプロセスを起動しようとするが、オプションで明示的にプロセス数を指定できる

```bash
php artisan test --parallel --processes=4
```

### テスト時のデータベース

テスト実行時、Laravelは自動で`db_name_test_1`のようなテスト用のデータベースを作り、以後のテストでも使い回す

使いまわさず作り直したい場合はオプションで指定できる

```bash
php artisan test --parallel --recreate-databases
```

## トラブルシューティング

### ERR_CONNECTION_REFUSED

- `public/hot`ファイルを削除