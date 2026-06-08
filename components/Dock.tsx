"use client";

import { useCallback, useRef, useState } from "react";
import { getDockIconScale } from "@/lib/dock-magnification";
import { WINDOWS, type WindowId } from "@/lib/windows";
import DockIcon from "./DockIcon";

interface DockProps {
  openWindows: Set<WindowId>;
  onOpenWindow: (id: WindowId) => void;
  onCloseFocused?: () => void;
}

export default function Dock({
  openWindows,
  onOpenWindow,
  onCloseFocused,
}: DockProps) {
  const dockRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dockRef.current) return;
    const rect = dockRef.current.getBoundingClientRect();
    setMouseX(e.clientX - rect.left);
  }, []);

  const getScale = (index: number): number => {
    if (!isHovering || mouseX === null) return 1;
    const iconEl = iconRefs.current[index];
    if (!iconEl || !dockRef.current) return 1;
    const dockRect = dockRef.current.getBoundingClientRect();
    const iconRect = iconEl.getBoundingClientRect();
    const iconCenterX = iconRect.left + iconRect.width / 2 - dockRect.left;
    return getDockIconScale(mouseX, iconCenterX);
  };

  return (
    <div className="fixed bottom-3 left-1/2 z-50 -translate-x-1/2 md:bottom-4">
      <div
        ref={dockRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setMouseX(null);
        }}
        className="flex items-end gap-1 rounded-2xl px-3 py-2 glass shadow-2xl md:gap-2 md:rounded-[22px] md:px-4 md:py-2.5"
      >
        {WINDOWS.map((win, i) => (
          <DockIcon
            key={win.id}
            ref={(el) => {
              iconRefs.current[i] = el;
            }}
            icon={win.icon}
            label={win.dockLabel}
            scale={getScale(i)}
            isOpen={openWindows.has(win.id)}
            onClick={() => onOpenWindow(win.id)}
          />
        ))}
        <div className="mx-1 hidden h-10 w-px bg-white/20 md:block" />
        <DockIcon
          ref={(el) => {
            iconRefs.current[WINDOWS.length] = el;
          }}
          icon="🗑️"
          label="閉じる"
          scale={getScale(WINDOWS.length)}
          isOpen={false}
          onClick={() => onCloseFocused?.()}
        />
      </div>
    </div>
  );
}
