"use client";

import type { WindowId } from "@/lib/windows";

interface DesktopIconProps {
  icon: string;
  label: string;
  windowId: WindowId;
  onOpen: (id: WindowId) => void;
}

export default function DesktopIcon({
  icon,
  label,
  windowId,
  onOpen,
}: DesktopIconProps) {
  return (
    <button
      onClick={() => onOpen(windowId)}
      onDoubleClick={() => onOpen(windowId)}
      className="group flex w-20 flex-col items-center gap-1 rounded-lg p-2 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/12 text-3xl shadow-md ring-1 ring-white/25 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(241,130,16,0.2)] group-hover:ring-white/40">
        {icon}
      </div>
      <span className="max-w-full truncate text-center text-[11px] font-medium text-white drop-shadow-md">
        {label}
      </span>
    </button>
  );
}
