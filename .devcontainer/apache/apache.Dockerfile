# イメージコンテナに
FROM rockylinux:8.9

RUN dnf -y update &&\
    dnf -y install curl git nmap

RUN dnf -y install httpd

RUN systemctl enable httpd
