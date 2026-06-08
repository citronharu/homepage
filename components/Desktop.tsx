"use client";

import { useCallback, useEffect, useState } from "react";
import { WINDOWS, type WindowId } from "@/lib/windows";
import DesktopIcon from "./DesktopIcon";
import DesktopWindow from "./DesktopWindow";
import Dock from "./Dock";
import MenuBar from "./MenuBar";
import ContactWindow from "./windows/ContactWindow";
import FAQWindow from "./windows/FAQWindow";
import FlowWindow from "./windows/FlowWindow";
import HeroWindow from "./windows/HeroWindow";
import PortfolioWindow from "./windows/PortfolioWindow";
import PricingWindow from "./windows/PricingWindow";
import ServicesWindow from "./windows/ServicesWindow";

const WINDOW_CONTENT: Record<WindowId, React.ReactNode> = {
  hero: <HeroWindow />,
  services: <ServicesWindow />,
  portfolio: <PortfolioWindow />,
  pricing: <PricingWindow />,
  flow: <FlowWindow />,
  contact: <ContactWindow />,
  faq: <FAQWindow />,
};

export default function Desktop() {
  const [openWindows, setOpenWindows] = useState<Set<WindowId>>(
    new Set(["hero"])
  );
  const [focusedWindow, setFocusedWindow] = useState<WindowId>("hero");
  const [zOrder, setZOrder] = useState<WindowId[]>(["hero"]);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const openWindow = useCallback((id: WindowId) => {
    setOpenWindows((prev) => {
      if (isMobile) return new Set([id]);
      return new Set([...prev, id]);
    });
    setFocusedWindow(id);
    setZOrder((prev) => [...prev.filter((w) => w !== id), id]);
  }, [isMobile]);

  const closeWindow = useCallback(
    (id: WindowId) => {
      setOpenWindows((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      if (focusedWindow === id) {
        setZOrder((prev) => {
          const remaining = prev.filter((w) => w !== id);
          setFocusedWindow(remaining[remaining.length - 1] ?? "hero");
          return remaining;
        });
      }
    },
    [focusedWindow]
  );

  const focusWindow = useCallback((id: WindowId) => {
    setFocusedWindow(id);
    setZOrder((prev) => [...prev.filter((w) => w !== id), id]);
  }, []);

  const getZIndex = (id: WindowId) => {
    const index = zOrder.indexOf(id);
    return index >= 0 ? 10 + index : 10;
  };

  return (
    <div className="wallpaper relative h-screen w-screen overflow-hidden">
      <MenuBar
        onOpenWindow={openWindow}
        activeMenu={activeMenu}
        onMenuHover={setActiveMenu}
      />

      {/* Desktop icons — right side on desktop */}
      <div className="absolute right-4 top-10 hidden flex-col gap-2 md:flex lg:right-8 lg:top-12">
        {WINDOWS.slice(0, 4).map((win) => (
          <DesktopIcon
            key={win.id}
            icon={win.icon}
            label={win.dockLabel}
            windowId={win.id}
            onOpen={openWindow}
          />
        ))}
      </div>

      {/* Windows */}
      {WINDOWS.map((config) => (
        <DesktopWindow
          key={config.id}
          config={config}
          isOpen={openWindows.has(config.id)}
          isFocused={focusedWindow === config.id}
          isMobile={isMobile}
          zIndex={getZIndex(config.id)}
          onClose={() => closeWindow(config.id)}
          onFocus={() => focusWindow(config.id)}
        >
          {WINDOW_CONTENT[config.id]}
        </DesktopWindow>
      ))}

      <Dock
        openWindows={openWindows}
        onOpenWindow={openWindow}
        onCloseFocused={() => closeWindow(focusedWindow)}
      />
    </div>
  );
}
