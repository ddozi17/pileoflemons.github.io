name: Build

on:
  push:
    branches: [dev]
    paths:
      - 'src/**'
      - 'tools/build.py'
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build dist/index.html
        run: python3 tools/build.py

      - name: Commit to main
        run: |
          git config user.name  "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git fetch origin main
          git checkout main
          mkdir -p dist
          git checkout dev -- dist/index.html
          cp dist/index.html index.html
          git add index.html dist/index.html
          git diff --cached --quiet || git commit -m "build: $(date -u '+%Y-%m-%d %H:%M') [skip ci]"
          git push origin main
