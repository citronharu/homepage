"use client";

import { WINDOWS, type WindowId } from "@/lib/windows";

interface MenuBarProps {
  onOpenWindow: (id: WindowId) => void;
  activeMenu: string | null;
  onMenuHover: (menu: string | null) => void;
}

const MENU_ITEMS = [
  { label: "サイト", items: WINDOWS.map((w) => ({ label: w.dockLabel, id: w.id })) },
  {
    label: "ヘルプ",
    items: [
      { label: "よくある質問", id: "faq" as WindowId },
      { label: "お問い合わせ", id: "contact" as WindowId },
    ],
  },
];

export default function MenuBar({
  onOpenWindow,
  activeMenu,
  onMenuHover,
}: MenuBarProps) {
  const now = new Date();
  const dateStr = now.toLocaleDateString("ja-JP", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timeStr = now.toLocaleTimeString("ja-JP", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-7 items-center justify-between px-4 text-xs text-white/90 glass-dark">
      <nav className="flex items-center gap-1">
        <span className="mr-2 text-sm">&#63743;</span>
        <span className="hidden font-semibold sm:inline">Web制作代行</span>
        {MENU_ITEMS.map((menu) => (
          <div
            key={menu.label}
            className="relative hidden md:block"
            onMouseEnter={() => onMenuHover(menu.label)}
            onMouseLeave={() => onMenuHover(null)}
          >
            <button
              className={`rounded px-2 py-0.5 transition-all duration-200 ${
                activeMenu === menu.label
                  ? "bg-white/20"
                  : "hover:bg-white/15 hover:-translate-y-px"
              }`}
            >
              {menu.label}
            </button>
            {activeMenu === menu.label && (
              <div className="absolute left-0 top-full mt-0.5 min-w-[140px] overflow-hidden rounded-lg glass py-1 shadow-xl">
                {menu.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onOpenWindow(item.id)}
                    className="block w-full px-3 py-1.5 text-left transition-all duration-200 hover:bg-white/20 hover:pl-4"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="flex items-center gap-3 text-white/80">
        <span className="hidden sm:inline">&#128267; 100%</span>
        <span className="hidden sm:inline">&#128246;</span>
        <span>
          {dateStr} {timeStr}
        </span>
      </div>
    </header>
  );
}
