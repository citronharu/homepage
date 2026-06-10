"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { LOCATION_IMAGE, SITE } from "@/lib/content";

type Phase = "checking" | "in" | "hold" | "out" | "done";

const CUT_IN_EASE = [0.22, 1, 0.36, 1] as const;
const CUT_OUT_EASE = [0.4, 0, 0.2, 1] as const;

function scrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function IntroCutIn() {
  const [phase, setPhase] = useState<Phase>("checking");

  useEffect(() => {
    const skip =
      window.location.hash.length > 0 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (skip) {
      setPhase("done");
      return;
    }

    setPhase("in");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "hold") return;
    const timer = window.setTimeout(() => setPhase("out"), 1400);
    return () => window.clearTimeout(timer);
  }, [phase]);

  if (phase === "checking" || phase === "done") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[var(--color-surface)]"
      aria-hidden={phase === "out"}
      role="presentation"
    >
      <motion.div
        className="relative h-full w-full"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={
          phase === "in"
            ? { clipPath: "inset(0 0% 0 0)" }
            : phase === "hold"
              ? { clipPath: "inset(0 0% 0 0)" }
              : { clipPath: "inset(0 0 100% 0)" }
        }
        transition={{
          duration: phase === "hold" ? 0 : phase === "in" ? 0.55 : 0.5,
          ease: phase === "out" ? CUT_OUT_EASE : CUT_IN_EASE,
        }}
        onAnimationComplete={() => {
          if (phase === "in") setPhase("hold");
          if (phase === "out") {
            document.body.style.overflow = "";
            scrollToTop();
            requestAnimationFrame(scrollToTop);
            setPhase("done");
          }
        }}
      >
        <Image
          src={LOCATION_IMAGE}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-deep)_35%,transparent)]" />
        <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-sky-pale)_25%,transparent)]" />
        <div className="absolute inset-0 flex items-end px-6 pb-16 lg:px-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: phase === "hold" ? 1 : 0, y: phase === "hold" ? 0 : 16 }}
            transition={{ duration: 0.45, ease: CUT_IN_EASE }}
            className="max-w-2xl text-white"
          >
            <p className="font-display text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              {SITE.name}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
