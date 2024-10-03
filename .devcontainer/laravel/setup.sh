#!/bin/bash

set -o errexit
set -o nounset
set -o xtrace

cd /workspace

composer install

npm i -g pnpm@latest

pnpm i

