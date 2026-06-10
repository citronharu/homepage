"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import type { WindowConfig } from "@/lib/windows";

interface DesktopWindowProps {
  config: WindowConfig;
  isOpen: boolean;
  isFocused: boolean;
  isMobile: boolean;
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  children: React.ReactNode;
}

export default function DesktopWindow({
  config,
  isOpen,
  isFocused,
  isMobile,
  zIndex,
  onClose,
  onFocus,
  children,
}: DesktopWindowProps) {
  const [position, setPosition] = useState(config.defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      setPosition(config.defaultPosition);
    }
  }, [isOpen, config.defaultPosition]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (isMobile) return;
      onFocus();
      setIsDragging(true);
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
    },
    [isMobile, onFocus, position.x, position.y]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: Math.max(0, e.clientX - dragOffset.current.x),
        y: Math.max(28, e.clientY - dragOffset.current.y),
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onMouseDown={onFocus}
          className={`fixed flex flex-col overflow-hidden shadow-2xl ${
            isMobile
              ? "inset-7 bottom-16 rounded-xl"
              : "rounded-xl"
          } ${isFocused ? "ring-1 ring-[color-mix(in_srgb,var(--color-orange)_40%,white)]" : ""}`}
          style={{
            left: isMobile ? undefined : position.x,
            top: isMobile ? undefined : position.y,
            width: isMobile ? undefined : config.defaultSize.width,
            height: isMobile ? undefined : config.defaultSize.height,
            zIndex,
          }}
        >
          <div
            onMouseDown={handleMouseDown}
            className={`flex h-9 shrink-0 cursor-default items-center gap-2 glass-dark px-3 ${
              isMobile ? "" : "cursor-grab active:cursor-grabbing"
            }`}
          >
            <div className="flex gap-1.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57] transition hover:brightness-110"
                aria-label="閉じる"
              >
                <span className="hidden text-[8px] text-black/60 group-hover:inline">
                  ×
                </span>
              </button>
              <button
                className="h-3 w-3 rounded-full bg-[#febc2e] transition hover:brightness-110"
                aria-label="最小化"
              />
              <button
                className="h-3 w-3 rounded-full bg-[#28c840] transition hover:brightness-110"
                aria-label="最大化"
              />
            </div>
            <span className="flex-1 text-center text-xs font-medium text-white/80">
              {config.title}
            </span>
            <div className="w-12" />
          </div>
          <div className="window-content flex-1 overflow-y-auto bg-[var(--color-surface)] p-5 backdrop-blur-sm">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
