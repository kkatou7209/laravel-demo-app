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

1. `Ctl + P` を押し、 `> Reopen in Container`を入力
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