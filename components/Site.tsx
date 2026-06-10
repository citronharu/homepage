"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  FAQS,
  NAV,
  PLANS,
  SERVICES,
  SITE,
  STEPS,
  WORKS,
} from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[color-mix(in_srgb,var(--color-tan)_25%,transparent)] bg-[color-mix(in_srgb,var(--color-mist)_88%,white)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-20 lg:px-10">
        <a href="#" className="group flex flex-col">
          <span className="font-display text-sm font-bold tracking-[0.12em] text-[var(--color-charcoal)] lg:text-base">
            {SITE.name}
          </span>
          <span className="font-mono-accent hidden text-[10px] text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)] sm:block">
            {SITE.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-hover text-xs font-medium tracking-widest text-[color-mix(in_srgb,var(--color-charcoal)_75%,white)] uppercase"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-xs">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="メニュー"
        >
          <span className={`h-px w-5 bg-[var(--color-charcoal)] transition ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-5 bg-[var(--color-charcoal)] transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-5 bg-[var(--color-charcoal)] transition ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-[color-mix(in_srgb,var(--color-tan)_25%,transparent)] bg-[color-mix(in_srgb,var(--color-mist)_95%,white)] px-6 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest text-[var(--color-charcoal)] uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden pt-16 lg:pt-20">
      <div className="hero-bg absolute inset-0" />
      <div className="grain absolute inset-0 opacity-40" />

      <motion.div style={{ y, opacity }} className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-end px-6 pb-16 lg:min-h-[calc(100svh-5rem)] lg:px-10 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono-accent mb-6 text-xs tracking-[0.3em] text-accent uppercase"
        >
          Design · Develop · Deliver
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--color-charcoal)]"
        >
          ビジネスの課題を、
          <br />
          <span className="text-brown">Web</span> と
          <span className="text-accent"> システム</span>で解く。
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_72%,white)] lg:text-lg"
        >
          {SITE.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#contact" className="btn-primary">
            無料相談する
          </a>
          <a href="#works" className="btn-outline">
            制作実績を見る
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute right-6 bottom-8 hidden flex-col items-center gap-3 lg:flex lg:right-10"
        >
          <span className="font-mono-accent text-[10px] tracking-widest text-[color-mix(in_srgb,var(--color-charcoal)_45%,white)] [writing-mode:vertical-rl]">
            SCROLL
          </span>
          <span className="scroll-line" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="mb-12 lg:mb-16">
      <p className="font-mono-accent text-xs tracking-[0.25em] text-accent uppercase">{en}</p>
      <h2 className="font-display mt-2 text-3xl font-bold tracking-tight text-[var(--color-charcoal)] lg:text-4xl">
        {ja}
      </h2>
    </div>
  );
}

export default function Site() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="services" className="section-padding bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Services" ja="提供サービス" />
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <article className="card-hover group relative overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-tan)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-mist)_18%,white)] p-8 lg:p-10">
                    <span className="font-mono-accent text-5xl font-bold text-[color-mix(in_srgb,var(--color-tan)_55%,white)] transition-colors group-hover:text-accent">
                      {s.num}
                    </span>
                    <h3 className="font-display mt-4 text-xl font-bold text-[var(--color-charcoal)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                      {s.desc}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-[color-mix(in_srgb,var(--color-tan)_40%,transparent)] px-3 py-1 text-[11px] text-brown"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="works" className="section-padding bg-[color-mix(in_srgb,var(--color-mist)_22%,white)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Works" ja="制作実績" />
            </Reveal>
            <div className="grid gap-8 lg:grid-cols-3">
              {WORKS.map((w, i) => (
                <Reveal key={w.title} delay={i * 0.1}>
                  <article className="card-hover group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-[0_4px_40px_rgba(51,44,43,0.06)]">
                    <div
                      className={`aspect-[4/3] bg-gradient-to-br ${w.gradient} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="p-6">
                      <p className="font-mono-accent text-[11px] tracking-widest text-accent uppercase">
                        {w.category}
                      </p>
                      <h3 className="font-display mt-2 text-lg font-bold text-[var(--color-charcoal)]">
                        {w.title}
                      </h3>
                      <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_65%,white)]">
                        {w.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-center text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
              ※ 実績はプレースホルダーです。実案件に差し替え可能です。
            </p>
          </div>
        </section>

        <section id="process" className="section-padding bg-[var(--color-charcoal)] text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <p className="font-mono-accent text-xs tracking-[0.25em] text-accent uppercase">Process</p>
              <h2 className="font-display mt-2 text-3xl font-bold lg:text-4xl">制作の流れ</h2>
            </Reveal>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-5">
              {STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.06}>
                  <div className="group bg-[var(--color-charcoal)] p-6 transition-colors hover:bg-[color-mix(in_srgb,var(--color-brown)_40%,var(--color-charcoal))] lg:p-8">
                    <span className="font-mono-accent text-2xl font-bold text-accent">{step.num}</span>
                    <h3 className="font-display mt-4 font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm text-white/65">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-padding bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Pricing" ja="料金プラン" />
              <p className="-mt-8 mb-12 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
                すべて税込目安。内容に応じて柔軟にカスタマイズします。
              </p>
            </Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {PLANS.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.08}>
                  <div
                    className={`card-hover rounded-2xl border p-8 ${
                      plan.highlight
                        ? "border-accent bg-[color-mix(in_srgb,var(--color-orange)_8%,white)] ring-1 ring-accent/30"
                        : "border-[color-mix(in_srgb,var(--color-tan)_35%,transparent)] bg-[color-mix(in_srgb,var(--color-mist)_15%,white)]"
                    }`}
                  >
                    {plan.highlight && (
                      <span className="mb-4 inline-block rounded-full bg-accent px-3 py-0.5 text-[10px] font-medium text-white">
                        Popular
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                    <p className="mt-3">
                      {plan.price === "要相談" ? (
                        <span className="text-2xl font-bold">要相談</span>
                      ) : (
                        <>
                          <span className="font-mono-accent text-3xl font-bold">¥{plan.price}</span>
                          <span className="text-sm text-[color-mix(in_srgb,var(--color-charcoal)_50%,white)]">〜</span>
                        </>
                      )}
                    </p>
                    <ul className="mt-6 space-y-2">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-2 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_75%,white)]">
                          <span className="text-accent">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section-padding bg-[color-mix(in_srgb,var(--color-mist)_22%,white)]">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="FAQ" ja="よくある質問" />
            </Reveal>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 0.05}>
                  <div className="overflow-hidden rounded-xl border border-[color-mix(in_srgb,var(--color-tan)_30%,transparent)] bg-white">
                    <button
                      type="button"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[color-mix(in_srgb,var(--color-mist)_30%,white)]"
                    >
                      {faq.q}
                      <span className={`text-accent transition-transform ${faqOpen === i ? "rotate-180" : ""}`}>
                        ▼
                      </span>
                    </button>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="border-t border-[color-mix(in_srgb,var(--color-tan)_25%,transparent)] px-6 py-4 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]"
                      >
                        {faq.a}
                      </motion.div>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-padding bg-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <SectionLabel en="Contact" ja="お問い合わせ" />
                <p className="-mt-8 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                  ご質問・ご相談はお気軽にどうぞ。
                  <br />
                  2 営業日以内にご返信します。
                </p>
                <dl className="mt-10 space-y-4 text-sm">
                  <div>
                    <dt className="font-mono-accent text-[10px] tracking-widest text-accent uppercase">Office</dt>
                    <dd className="mt-1 font-medium text-[var(--color-charcoal)]">{SITE.name}</dd>
                  </div>
                  <div>
                    <dt className="font-mono-accent text-[10px] tracking-widest text-accent uppercase">Scope</dt>
                    <dd className="mt-1 text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]">{SITE.tagline}</dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={0.1}>
                {submitted ? (
                  <div className="flex min-h-[320px] flex-col items-center justify-center rounded-2xl border border-[color-mix(in_srgb,var(--color-tan)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-mist)_20%,white)] text-center">
                    <span className="text-4xl">✓</span>
                    <p className="font-display mt-4 text-lg font-bold">送信ありがとうございます</p>
                    <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_65%,white)]">
                      2 営業日以内にご返信いたします。
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4 rounded-2xl border border-[color-mix(in_srgb,var(--color-tan)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-mist)_12%,white)] p-8"
                  >
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-brown">お名前</label>
                      <input required className="input-field" placeholder="山田 太郎" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-brown">メールアドレス</label>
                      <input type="email" required className="input-field" placeholder="example@email.com" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-brown">お問い合わせ内容</label>
                      <textarea required rows={4} className="input-field resize-none" placeholder="ご要望やご質問をお書きください" />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      送信する
                    </button>
                  </form>
                )}
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color-mix(in_srgb,var(--color-tan)_25%,transparent)] bg-[var(--color-charcoal)] px-6 py-12 text-white lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-lg font-bold">{SITE.name}</p>
            <p className="mt-1 text-sm text-white/60">{SITE.tagline}</p>
            <p className="mt-4 text-xs text-white/40">{SITE.owner}</p>
          </div>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} {SITE.name}</p>
        </div>
      </footer>
    </>
  );
}
