"use client";

import { forwardRef } from "react";

interface DockIconProps {
  icon: string;
  label: string;
  scale: number;
  isOpen: boolean;
  onClick: () => void;
}

const DockIcon = forwardRef<HTMLButtonElement, DockIconProps>(
  function DockIcon({ icon, label, scale, isOpen, onClick }, ref) {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="group relative flex flex-col items-center justify-end"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "bottom center",
          transition: "transform 0.15s ease-out",
          width: 56,
          height: 56,
        }}
        aria-label={label}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/12 text-2xl shadow-lg ring-1 ring-white/25 transition-all duration-300 group-hover:bg-white/22 group-hover:shadow-[0_8px_28px_rgba(241,130,16,0.22)] group-hover:ring-white/40">
          {icon}
        </div>
        {isOpen && (
          <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[var(--color-orange)] shadow-[0_0_6px_var(--color-orange)]" />
        )}
        <span className="pointer-events-none absolute -top-8 rounded-md bg-black/60 px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </span>
      </button>
    );
  }
);

export default DockIcon;
