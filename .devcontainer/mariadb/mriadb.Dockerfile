# Dockerイメージとして"mariadb:10.5"を選択
FROM mariadb:10.5

#### 環境変数を設定

# ルートユーザーパスワード
ENV MARIADB_ROOT_PASSWORD=admin

# データベース名
ENV MARIADB_DATABASE=demo_app

# ユーザー名
ENV MARIDB_USER=mariadb-MARIDB_USER

# パスワード
ENV MARIADB_PASSWORD=mariadb-pass

# タイムゾーン
ENV TZ=Asia/Tokyo

