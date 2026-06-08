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
      className="group flex w-20 flex-col items-center gap-1 rounded-lg p-2 transition-colors hover:bg-white/10"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-3xl shadow-md ring-1 ring-white/20 transition-transform group-hover:scale-105">
        {icon}
      </div>
      <span className="max-w-full truncate text-center text-[11px] font-medium text-white drop-shadow-md">
        {label}
      </span>
    </button>
  );
}
