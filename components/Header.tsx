"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[72px] lg:px-10">
        <Link
          href="/"
          className="font-display text-base font-bold text-[var(--color-charcoal)] sm:text-lg lg:text-xl"
        >
          {SITE.name}
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="link-hover">
              {item.label}
            </Link>
          ))}
          <Link href="/#contact" className="btn-primary text-sm">
            {SITE.ctaContact}
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span
            className={`h-px w-5 bg-[var(--color-charcoal)] transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span className={`h-px w-5 bg-[var(--color-charcoal)] transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-5 bg-[var(--color-charcoal)] transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[var(--color-charcoal)]"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/#contact" onClick={() => setOpen(false)} className="btn-primary w-fit text-sm">
              {SITE.ctaContact}
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}
