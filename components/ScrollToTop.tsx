"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToTopUnlessHash() {
  if (window.location.hash) return;
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function forceScrollToTopUnlessHash() {
  scrollToTopUnlessHash();
  requestAnimationFrame(() => {
    scrollToTopUnlessHash();
    requestAnimationFrame(scrollToTopUnlessHash);
  });
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    forceScrollToTopUnlessHash();

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        forceScrollToTopUnlessHash();
      }
    };

    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  useLayoutEffect(() => {
    forceScrollToTopUnlessHash();
  }, [pathname]);

  return null;
}
