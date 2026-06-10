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

## デザイン

- カラーパレット: `#B9CCD3` `#7D4429` `#B8937E` `#F18210` `#332C2B`
- 制作会社風のスクロール型レイアウト（Hero / Services / Works / Process / Pricing / FAQ / Contact）
