# エージェント向けガイド

## 作業前の必須確認

1. **[remain.md](./remain.md) を必ず読む** — プロジェクト要件と追記された指示を確認してから作業を開始する
2. 新しいプロンプトを受け取ったら、remain.md の「追記ログ」に内容を追記する

## プロジェクト概要

個人事業主「Ottorino（オットリーノ）」のホームページ。Webサイト制作・社内システム開発の受注用。

## 技術スタック

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## 主要ディレクトリ

- `app/` — ページ・グローバルスタイル
- `components/Site.tsx` — シングルページ本体
- `lib/content.ts` — 文言・データ
- `lib/biography.ts` — 来歴・プロジェクト実績（松尾春希）

## デザイン

- カラーパレット: 水色 `#7ECAE3` / 黄色 `#FFD54F` / 白 `#FFFFFF`（テキスト `#1A3D52`）
- 制作会社風のスクロール型レイアウト（Hero / Services / Works / Process / Pricing / FAQ / Contact）
