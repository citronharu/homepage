export type WindowId =
  | "hero"
  | "services"
  | "portfolio"
  | "pricing"
  | "flow"
  | "contact"
  | "faq";

export interface WindowConfig {
  id: WindowId;
  title: string;
  dockLabel: string;
  icon: string;
  defaultPosition: { x: number; y: number };
  defaultSize: { width: number; height: number };
}

export const WINDOWS: WindowConfig[] = [
  {
    id: "hero",
    title: "トップ — Web制作代行",
    dockLabel: "トップ",
    icon: "🏠",
    defaultPosition: { x: 80, y: 60 },
    defaultSize: { width: 520, height: 380 },
  },
  {
    id: "services",
    title: "サービス",
    dockLabel: "サービス",
    icon: "🛠️",
    defaultPosition: { x: 140, y: 90 },
    defaultSize: { width: 560, height: 420 },
  },
  {
    id: "portfolio",
    title: "制作実績",
    dockLabel: "実績",
    icon: "📁",
    defaultPosition: { x: 200, y: 120 },
    defaultSize: { width: 600, height: 440 },
  },
  {
    id: "pricing",
    title: "料金プラン",
    dockLabel: "料金",
    icon: "💰",
    defaultPosition: { x: 260, y: 150 },
    defaultSize: { width: 580, height: 400 },
  },
  {
    id: "flow",
    title: "制作の流れ",
    dockLabel: "流れ",
    icon: "📋",
    defaultPosition: { x: 320, y: 80 },
    defaultSize: { width: 540, height: 400 },
  },
  {
    id: "contact",
    title: "お問い合わせ",
    dockLabel: "問合せ",
    icon: "✉️",
    defaultPosition: { x: 180, y: 140 },
    defaultSize: { width: 480, height: 460 },
  },
  {
    id: "faq",
    title: "よくある質問",
    dockLabel: "FAQ",
    icon: "❓",
    defaultPosition: { x: 240, y: 110 },
    defaultSize: { width: 500, height: 420 },
  },
];
