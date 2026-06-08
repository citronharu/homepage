# エージェント向けガイド

## 作業前の必須確認

1. **[remain.md](./remain.md) を必ず読む** — プロジェクト要件と追記された指示を確認してから作業を開始する
2. 新しいプロンプトを受け取ったら、remain.md の「追記ログ」に内容を追記する

## プロジェクト概要

個人事業主向け Web制作代行ホームページ。macOS デスクトップ風 UI（メニューバー + Dock + ウィンドウ）で各セクションを表示する。

## 技術スタック

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## 主要ディレクトリ

- `app/` — ページ・グローバルスタイル
- `components/` — UI コンポーネント
- `components/windows/` — 各セクションのウィンドウコンテンツ
- `lib/` — ユーティリティ（Dock 拡大計算など）
- `public/` — 静的アセット（壁紙など）
