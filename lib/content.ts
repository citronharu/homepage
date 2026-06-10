export const SITE = {
  name: "Ottorino",
  nameJa: "オットリーノ",
  tagline: "Webサイト・社内システムの設計・開発",
  representative: "松尾春希",
  owner: "代表　松尾春希",
  description:
    "Web制作から業務システム開発まで。ヒアリングから設計・開発・公開・運用まで、一人で責任を持って伴走します。",
  email: "citron.haru0502@gmail.com",
  phone: "07016551028",
  phoneDisplay: "070-1655-1028",
  ctaContact: "お問い合わせ",
} as const;

export const HERO = {
  jp: "ビジネスを加速させる伴走者",
  en: "Be an Accompanist",
  sub: "マーケティング視点 × デジタル技術 × クリエイティブ思考で、お客様のビジネスをさらに加速させ、新たな価値を共創する伴走者。",
  ctaPrimary: "ご相談はこちら",
  ctaSecondary: "導入事例を見る",
} as const;

export const NAV = [
  { label: "サービス", href: "#services" },
  { label: "事例", href: "#works" },
  { label: "流れ", href: "#process" },
  { label: "料金", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const SERVICES = [
  {
    num: "01",
    title: "Webサイト制作",
    desc: "コーポレートサイト・LP・採用サイトなど。ブランドと成果の両方を意識した設計・実装。",
    tags: ["レスポンシブ", "SEO", "CMS"],
  },
  {
    num: "02",
    title: "社内システム開発",
    desc: "管理画面・業務ツール・ダッシュボード。Excel 代替や API 連携など、現場の課題をコードで解決。",
    tags: ["業務効率化", "API", "セキュリティ"],
  },
  {
    num: "03",
    title: "リニューアル",
    desc: "古くなったサイトやシステムを、現代の UX・技術スタックへ刷新。データ移行もサポート。",
    tags: ["UX改善", "移行", "パフォーマンス"],
  },
  {
    num: "04",
    title: "既存ツール導入サポート",
    desc: "ChatGPT・Claude・Notion・Slack など、業務に合った既存ツール（特に AI）の選定から導入・設定・社内定着までサポート。",
    tags: ["AI導入", "ツール選定", "運用定着"],
  },
] as const;

export const CASE_FILTERS = ["すべて", "導入事例", "試作・設計"] as const;

export type CaseFilter = (typeof CASE_FILTERS)[number];
export type CaseType = "導入事例" | "試作・設計";

export const CASE_STUDIES = [
  {
    id: "insou-recruitment",
    type: "導入事例" as const,
    title: "採用業務効率化システム",
    client: "INSOU様",
    period: "1ヶ月（実稼働16日間）",
    role: "アジャイルMVP開発・上駐支援",
    summary:
      "複数求人媒体から届く応募情報の手作業処理を、AIメール解析とSlack連携で自動化。現場のシャドーイングから本番定着まで一気通貫で支援。",
    results: [
      "応募メールのAI自動解析により、氏名・連絡先・希望店舗を抽出",
      "Googleスプレッドシートへの一元登録と重複応募の照合",
      "Slackリアルタイム通知と30分以内初回対応のアラート",
      "夜間帯の通知抑制など、現場運用に合わせたチューニング",
    ],
    details: [
      {
        title: "Phase 0 — 要件定義",
        body: "採用担当者の実業務を現場でシャドーイング。LINE公式API・各媒体のCSV仕様を調査し、共通データフォーマットとMVPスコープを合意。",
      },
      {
        title: "Phase 1 — データ一元化",
        body: "求人媒体の応募通知メールをAIで解析し、スプレッドシートへ自動登録。Slackへのリアルタイム通知を構築。",
      },
      {
        title: "Phase 2 — 初回対応支援",
        body: "未対応アラート、不足情報のAI判別、確認メッセージの半自動生成機能を実装。",
      },
      {
        title: "Phase 3 — 本番定着",
        body: "権限設定・操作ログ管理の徹底、通知ノイズの抑制など運用フェーズまで伴走。",
      },
    ],
    tags: ["AIメール解析", "Slack連携", "採用DX", "アジャイルMVP"],
    gradient: "from-[#7ECAE3] to-[#2A7A9B]",
  },
  {
    id: "bcg-interview",
    type: "試作・設計" as const,
    title: "面接予約管理システム",
    client: "BCG Holdings様",
    period: "仕様策定〜テスト環境版（2026年6月）",
    role: "フルスタック設計・仕様書作成",
    summary:
      "店舗面接の予約・出欠・評価を一元管理するシステムを、3層権限分離・SMS認証・風営法対応を含めて設計。不正予約防止と運用ミス削減を両立。",
    results: [
      "応募者・店舗管理者・本部管理者の3層権限分離",
      "ログイン・登録・電話番号変更すべてにSMS認証（6桁・5分有効）",
      "風営法第36条対応（18歳未満不可・親権者同意チェック）",
      "二重予約防止・不正検知フラグ・スロット削除時のSMS自動通知",
    ],
    details: [
      {
        title: "応募者向け機能",
        body: "マイページでの予約履歴確認、日程変更（旧予約の自動キャンセル＋新予約確定）、プロフィール管理。",
      },
      {
        title: "店舗管理者向け機能",
        body: "スロット管理（朝の部・夜の部）、出欠管理（来場済・遅刻・欠席）、面接評価（A/B/C）の記録。",
      },
      {
        title: "本部管理者向け機能",
        body: "全店舗スロット管理、店舗の追加・削除、CMS（バナー・注意事項）、スロット追加申請の承認・拒否。",
      },
    ],
    tags: ["権限分離", "SMS認証", "風営法対応", "仕様設計"],
    gradient: "from-[#FFD54F] to-[#7ECAE3]",
  },
  {
    id: "wantedly-pr",
    type: "導入事例" as const,
    title: "Wantedlyストーリー PR戦略",
    client: "Vexum（自社）",
    period: "2026年〜",
    role: "PR戦略プロジェクトマネージャー",
    summary:
      "採用と営業信頼獲得の二重目的が混在する広報活動を整理。評価指標の明確化と記事戦略を経営層・上位役職者と協議し、実行フェーズへ推進。",
    results: [
      "採用目的とクライアント向け信頼獲得目的の切り分けを提案",
      "記事の対象読者と訴求メッセージの言語化",
      "採用数・記事品質など評価指標の明確化",
      "経営層への直談判から戦略会議・実行まで主導",
    ],
    details: [
      {
        title: "背景",
        body: "求人募集要項の文章に課題を感じ、自らライティング業務の担当を経営層に提案。",
      },
      {
        title: "アプローチ",
        body: "Wantedlyストーリーを単なる記事制作ではなく、採用と営業の両面で機能する広報チャネルとして再設計。",
      },
    ],
    tags: ["採用広報", "コンテンツ戦略", "PM"],
    gradient: "from-[#D4EFF9] to-[#7ECAE3]",
  },
] as const;

export const STEPS = [
  { num: "01", title: "ヒアリング", desc: "課題・目的・予算・期限を整理" },
  { num: "02", title: "提案・見積", desc: "要件定義とお見積りを提示" },
  { num: "03", title: "設計", desc: "ワイヤー・UI・技術構成を確定" },
  { num: "04", title: "開発", desc: "デザインを実装し、動作確認" },
  { num: "05", title: "公開・運用", desc: "リリース後も改善を継続" },
] as const;

export const PLANS = [
  {
    name: "ライト",
    price: "50,000",
    features: ["1ページ構成", "レスポンシブ", "お問い合わせフォーム", "納期 2週間"],
    highlight: false,
  },
  {
    name: "スタンダード",
    price: "150,000",
    features: ["5ページまで", "オリジナルデザイン", "SEO 基本設定", "納期 1ヶ月"],
    highlight: true,
  },
  {
    name: "システム",
    price: "要相談",
    features: ["社内ツール開発", "API 連携", "管理画面", "要件に応じた見積"],
    highlight: false,
  },
] as const;

export const FAQS = [
  {
    q: "Web 以外の開発も依頼できますか？",
    a: "はい。社内管理ツール、ダッシュボード、業務自動化なども対応しています。",
  },
  {
    q: "制作期間の目安は？",
    a: "LP で約 2 週間、コーポレートサイトで約 1 ヶ月、システム開発は要件により異なります。",
  },
  {
    q: "デザインの知識がなくても大丈夫？",
    a: "ヒアリングをもとにこちらで提案します。参考サイトがあれば共有ください。",
  },
  {
    q: "公開後のサポートは？",
    a: "保守プランをご用意しています。更新や軽微な修正に対応します。",
  },
] as const;
