# 最終更新：2024/08/29

# コンテナイメージにRockyLinuxを選択
FROM rockylinux:8.9

# Composerのバージョン（2024年8月現在最新バージョン）
ENV COMPOSER_VERSION=2.7.8
ENV NODE_VERSION=22.7.0

RUN dnf -y update && \
    # 必要パッケージのインストール
    dnf -y install \
        # curlインストール（レスポンス確認用）
        curl \
        # gitインストール（git拡張機能を有効化するため）
        git \
        # netcatインストール（接続確認用）
        nmap \
        # zipインストール（composer create-project用）
        zip \
        # unzipインストール（上に同じ)
        unzip

    # remiリポジトリをインストール(RockyLinux8でPHP8.3を使えるようにするため)
RUN dnf -y install https://rpms.remirepo.net/enterprise/remi-release-8.rpm;\
    # PHPモジュールを初期状態に戻す(一応)
    dnf -y module reset php;\
    # PHP8.3をインストールできるようにモジュールを有効化
    dnf -y module enable php:remi-8.3;\
    # PHPをインストール
    dnf -y install php;\
    # Laravelが依存しているPHP拡張機能をインストール https://laravel.com/docs/11.x/deployment
    dnf -y install php-fpm\
                   php-ctype\
                   php-curl\
                   php-dom\
                   php-fileinfo\
                   php-filter\
                   php-hash\
                   php-openssl\
                   php-pcre\
                   php-pdo\
                   php-session\
                   php-tokenizer\
                   php-xml\
                   php-zip;

    # Composerのインストーラを現在のディレクトリにコピー
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');";\
    # コピーしたインストーラのハッシュ値を比較（ファイル壊れてない？）
    php -r "if (hash_file('sha384', 'composer-setup.php') === 'dac665fdc30fdd8ec78b38b9800061b4150413ff2e3b6f88543c636f7cd84f6db9189d43a81e5503cda447da73c7e5b6') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;";\
    # Composerのインストール実行
    php composer-setup.php\
            # /usr/local/bin配下にComposerをインストール
            --install-dir=/usr/local/bin\
            # ファイル名を「composer」に設定
            --filename=composer\
            # Composerのバージョンを指定（上記のバージョン）
            --version=${COMPOSER_VERSION};\
    # もういらないのでインストーラーを削除
    php -r "unlink('composer-setup.php');"

# Nodeバージョン管理ツールのnvmをインストール
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# nvmでNodeとnpmをインストール
RUN . ~/.nvm/nvm.sh\
    && nvm install ${NODE_VERSION}\
    && nvm alias default ${NODE_VERSION}\
    && nvm use default

# Apacheインストール
RUN dnf -y install httpd

# Apacheを有効化
RUN systemctl enable httpd
