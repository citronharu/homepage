export const SITE = {
  name: "Ottorino",
  nameJa: "オットリーノ",
  tagline: "Webサイト・社内システムの設計・開発",
  owner: "個人事業主",
  description:
    "Web制作から業務システム開発まで。ヒアリングから設計・開発・公開・運用まで、一人で責任を持って伴走します。",
  email: "hello@example.com",
  ctaContact: "お問い合わせ",
} as const;

export const HERO = {
  jp: "ビジネスを加速させる伴走者",
  en: "Be an Accompanist",
  sub: "マーケティング視点 × デジタル技術 × クリエイティブ思考で、お客様のビジネスをさらに加速させ、新たな価値を共創する伴走者。",
  ctaPrimary: "ご相談はこちら",
  ctaSecondary: "制作実績を見る",
} as const;

export const NAV = [
  { label: "サービス", href: "#services" },
  { label: "実績", href: "#works" },
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
    title: "保守・運用",
    desc: "公開後の更新・軽微な改修・障害対応。小さな相談から継続的なパートナーとして対応。",
    tags: ["更新", "監視", "改善"],
  },
] as const;

export const WORKS = [
  {
    title: "カフェ LP",
    category: "Webサイト",
    desc: "地域密着カフェの集客用LP。モバイルファーストで CV を改善。",
    gradient: "from-[#B8937E] to-[#7D4429]",
  },
  {
    title: "在庫管理システム",
    category: "社内システム",
    desc: "Excel 管理から Web アプリへ移行。入力工数を 60% 削減。",
    gradient: "from-[#B9CCD3] to-[#7D4429]",
  },
  {
    title: "士業コーポレート",
    category: "Webサイト",
    desc: "信頼感のあるデザインで問い合わせ数 30% 向上。",
    gradient: "from-[#F18210] to-[#7D4429]",
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
