"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  CASE_FILTERS,
  CASE_STUDIES,
  FAQS,
  HERO,
  NAV,
  PLANS,
  SERVICES,
  SITE,
  STEPS,
  type CaseFilter,
} from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ en, ja }: { en: string; ja: string }) {
  return (
    <div className="section-heading">
      <span className="section-title-en">{en}</span>
      <h2 className="section-title-ja">{ja}</h2>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:h-[72px] lg:px-10">
        <a href="#" className="font-display text-base font-bold text-[var(--color-charcoal)] sm:text-lg lg:text-xl">
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="link-hover">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary text-sm">
            {SITE.ctaContact}
          </a>
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
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-[var(--color-charcoal)]"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-fit text-sm">
              {SITE.ctaContact}
            </a>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-bg relative flex min-h-[100svh] items-center pt-16 lg:pt-[72px]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-5xl"
        >
          <p className="font-mono-accent text-xs tracking-[0.35em] text-[var(--color-deep)] uppercase sm:text-sm">
            {SITE.nameShort}
          </p>
          <h1 className="hero-brand font-display mt-4 font-bold text-[var(--color-charcoal)]">
            {SITE.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-[color-mix(in_srgb,var(--color-charcoal)_60%,white)] sm:text-xl">
            {SITE.nameJa}
          </p>
          <h2 className="font-display mt-10 text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-snug tracking-tight text-[var(--color-charcoal)]">
            {HERO.jp}
          </h2>
          <p className="mt-6 max-w-[640px] text-base leading-[1.9] text-[color-mix(in_srgb,var(--color-charcoal)_72%,white)]">
            {HERO.sub}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">
              {HERO.ctaPrimary}
            </a>
            <a href="#works" className="btn-secondary">
              {HERO.ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Site() {
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [caseFilter, setCaseFilter] = useState<CaseFilter>("すべて");
  const [expandedCase, setExpandedCase] = useState<string | null>(CASE_STUDIES[0]?.id ?? null);

  const filteredCases =
    caseFilter === "すべて"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.type === caseFilter);

  return (
    <>
      <Header />
      <main>
        <Hero />

        <section id="services" className="section-padding bg-[var(--color-surface)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Service" ja="提供サービス" />
            </Reveal>
            <div className="grid gap-5 md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.06}>
                  <article className="card-gp p-8 lg:p-9">
                    <span className="font-mono-accent text-sm font-medium text-accent">{s.num}</span>
                    <h3 className="font-display mt-3 text-lg font-bold text-[var(--color-charcoal)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                      {s.desc}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {s.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] text-brown"
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

        <section id="works" className="section-padding bg-surface-alt">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Cases" ja="導入事例・試作" />
              <p className="-mt-6 mb-8 max-w-2xl text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_65%,white)]">
                クライアントへの導入支援と、仕様策定・MVP開発などの試作・設計実績をまとめています。
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mb-10 flex flex-wrap gap-2">
                {CASE_FILTERS.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setCaseFilter(filter)}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium transition ${
                      caseFilter === filter
                        ? "bg-[var(--color-yellow)] text-[var(--color-text)]"
                        : "border border-[var(--color-border)] bg-white text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)] hover:border-[var(--color-sky)]"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="space-y-6">
              {filteredCases.map((c, i) => (
                <Reveal key={c.id} delay={i * 0.06}>
                  <article className="card-gp overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${c.gradient}`} />
                    <div className="p-6 lg:p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span
                              className={`rounded px-2 py-0.5 text-[10px] font-medium ${
                                c.type === "導入事例"
                                  ? "bg-[color-mix(in_srgb,var(--color-sky)_35%,white)] text-[var(--color-deep)]"
                                  : "bg-[color-mix(in_srgb,var(--color-yellow)_40%,white)] text-[var(--color-text)]"
                              }`}
                            >
                              {c.type}
                            </span>
                            <span className="font-mono-accent text-[10px] text-[color-mix(in_srgb,var(--color-charcoal)_50%,white)]">
                              {c.period}
                            </span>
                          </div>
                          <h3 className="font-display mt-3 text-xl font-bold text-[var(--color-charcoal)] lg:text-2xl">
                            {c.client} — {c.title}
                          </h3>
                          <p className="mt-1 text-xs text-brown">{c.role}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setExpandedCase(expandedCase === c.id ? null : c.id)}
                          className="btn-secondary shrink-0 text-xs"
                        >
                          {expandedCase === c.id ? "閉じる" : "詳細を見る"}
                        </button>
                      </div>

                      <p className="mt-5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_72%,white)]">
                        {c.summary}
                      </p>

                      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                        {c.results.map((r) => (
                          <li
                            key={r}
                            className="flex gap-2 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_75%,white)]"
                          >
                            <span className="shrink-0 text-[var(--color-deep)]">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>

                      <ul className="mt-5 flex flex-wrap gap-2">
                        {c.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded border border-[var(--color-border)] px-2.5 py-0.5 text-[11px] text-brown"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>

                      {expandedCase === c.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-6 space-y-4 border-t border-[var(--color-border)] pt-6"
                        >
                          {c.details.map((d) => (
                            <div
                              key={d.title}
                              className="rounded-lg bg-[color-mix(in_srgb,var(--color-sky-pale)_80%,white)] p-4"
                            >
                              <h4 className="text-sm font-bold text-[var(--color-charcoal)]">
                                {d.title}
                              </h4>
                              <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                                {d.body}
                              </p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-padding bg-process text-white">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <div className="section-heading">
                <span className="section-title-en text-[var(--color-yellow)]">Process</span>
                <h2 className="section-title-ja text-white">制作の流れ</h2>
              </div>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/20 bg-white/10 lg:grid-cols-5">
              {STEPS.map((step, i) => (
                <Reveal key={step.num} delay={i * 0.05}>
                  <div className="bg-[color-mix(in_srgb,var(--color-deep)_90%,black)] p-6 transition-colors hover:bg-[color-mix(in_srgb,var(--color-sky)_30%,var(--color-deep))] lg:p-7">
                    <span className="font-mono-accent text-lg font-bold text-[var(--color-yellow)]">{step.num}</span>
                    <h3 className="font-display mt-3 text-sm font-bold">{step.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">{step.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="section-padding bg-[var(--color-surface)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Pricing" ja="料金プラン" />
              <p className="-mt-6 mb-10 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
                すべて税込目安。内容に応じて柔軟にカスタマイズします。
              </p>
            </Reveal>
            <div className="grid gap-5 lg:grid-cols-3">
              {PLANS.map((plan, i) => (
                <Reveal key={plan.name} delay={i * 0.06}>
                  <div
                    className={`card-gp p-8 ${
                      plan.highlight
                        ? "border-[var(--color-yellow)] bg-[color-mix(in_srgb,var(--color-yellow)_12%,white)] ring-1 ring-[var(--color-yellow)]/30"
                        : ""
                    }`}
                  >
                    {plan.highlight && (
                      <span className="mb-3 inline-block rounded bg-[var(--color-yellow)] px-2 py-0.5 text-[10px] font-medium text-[var(--color-text)]">
                        人気
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold">{plan.name}</h3>
                    <p className="mt-3">
                      {plan.price === "要相談" ? (
                        <span className="text-2xl font-bold">要相談</span>
                      ) : (
                        <>
                          <span className="font-mono-accent text-3xl font-bold">¥{plan.price}</span>
                          <span className="text-sm text-[color-mix(in_srgb,var(--color-charcoal)_50%,white)]">
                            〜
                          </span>
                        </>
                      )}
                    </p>
                    <ul className="mt-6 space-y-2 border-t border-[var(--color-border)] pt-6">
                      {plan.features.map((f) => (
                        <li
                          key={f}
                          className="flex gap-2 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_75%,white)]"
                        >
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

        <section id="faq" className="section-padding bg-surface-alt">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="FAQ" ja="よくある質問" />
            </Reveal>
            <div className="space-y-3">
              {FAQS.map((faq, i) => (
                <Reveal key={faq.q} delay={i * 0.04}>
                  <div className="card-gp overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                      className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-[var(--color-charcoal)] transition hover:bg-[var(--color-surface-alt)]"
                    >
                      {faq.q}
                      <span
                        className={`ml-4 shrink-0 text-accent transition-transform ${faqOpen === i ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </button>
                    {faqOpen === i && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="border-t border-[var(--color-border)] px-5 py-4 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]"
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

        <section id="contact" className="section-padding bg-[var(--color-surface)]">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal>
                <SectionLabel en="Contact" ja="お問い合わせ" />
                <p className="-mt-6 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                  ご質問・ご相談はお気軽にどうぞ。
                  <br />
                  2 営業日以内にご返信します。
                </p>
                <dl className="mt-8 space-y-5 text-sm">
                  <div>
                    <dt className="section-title-en text-[10px]">Office</dt>
                    <dd className="mt-1 font-medium text-[var(--color-charcoal)]">{SITE.name}</dd>
                  </div>
                  <div>
                    <dt className="section-title-en text-[10px]">Representative</dt>
                    <dd className="mt-1 font-medium text-[var(--color-charcoal)]">
                      代表　{SITE.representative}
                    </dd>
                  </div>
                  <div>
                    <dt className="section-title-en text-[10px]">Email</dt>
                    <dd className="mt-1">
                      <a
                        href={`mailto:${SITE.email}`}
                        className="link-hover text-[var(--color-deep)] underline-offset-2 hover:underline"
                      >
                        {SITE.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="section-title-en text-[10px]">Tel</dt>
                    <dd className="mt-1">
                      <a
                        href={`tel:${SITE.phone}`}
                        className="link-hover text-[var(--color-deep)] underline-offset-2 hover:underline"
                      >
                        {SITE.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>

              <Reveal delay={0.08}>
                {submitted ? (
                  <div className="card-gp flex min-h-[300px] flex-col items-center justify-center text-center">
                    <span className="text-3xl text-accent">✓</span>
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
                    className="card-gp space-y-4 p-8"
                  >
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-brown">お名前</label>
                      <input required className="input-field" placeholder="山田 太郎" />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-brown">
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        required
                        className="input-field"
                        placeholder="example@email.com"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-brown">
                        お問い合わせ内容
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="input-field resize-none"
                        placeholder="ご要望やご質問をお書きください"
                      />
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

      <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display font-bold text-[var(--color-charcoal)]">{SITE.name}</p>
            <p className="mt-0.5 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
              {SITE.nameJa}
            </p>
            <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
              {SITE.tagline}
            </p>
            <p className="mt-2 text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
              {SITE.owner}
            </p>
            <p className="mt-1 text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--color-deep)]">
                {SITE.email}
              </a>
              {" · "}
              <a href={`tel:${SITE.phone}`} className="hover:text-[var(--color-deep)]">
                {SITE.phoneDisplay}
              </a>
            </p>
          </div>
          <p className="text-xs text-[color-mix(in_srgb,var(--color-charcoal)_40%,white)]">
            © {new Date().getFullYear()} {SITE.name}
          </p>
        </div>
      </footer>
    </>
  );
}
