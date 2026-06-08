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
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl shadow-lg ring-1 ring-white/20 transition-all group-hover:bg-white/20 group-hover:shadow-xl">
          {icon}
        </div>
        {isOpen && (
          <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-white/80" />
        )}
        <span className="pointer-events-none absolute -top-8 rounded-md bg-black/60 px-2 py-0.5 text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
          {label}
        </span>
      </button>
    );
  }
);

export default DockIcon;
