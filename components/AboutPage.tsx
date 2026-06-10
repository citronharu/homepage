"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Reveal, SectionLabel } from "@/components/Reveal";
import {
  ABOUT_BACKGROUND,
  ABOUT_CONTACT,
  ABOUT_EXPERTISE,
  ABOUT_GREETING,
  ABOUT_PHILOSOPHY,
  ABOUT_PROFILE,
} from "@/lib/about";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--color-surface)] pt-16 lg:pt-[72px]">
        <section className="section-padding">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <SectionLabel en="Profile" ja="代表プロフィール" />
              <p className="-mt-4 font-display text-xl font-bold text-[var(--color-charcoal)] sm:text-2xl">
                {ABOUT_PROFILE.role}　{ABOUT_PROFILE.nameJa}
                <span className="mt-1 block text-sm font-normal text-[color-mix(in_srgb,var(--color-charcoal)_55%,white)]">
                  {ABOUT_PROFILE.nameEn}
                </span>
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10 space-y-4">
                <h3 className="text-sm font-bold text-[var(--color-charcoal)]">ご挨拶</h3>
                {ABOUT_GREETING.map((p) => (
                  <p
                    key={p.slice(0, 20)}
                    className="text-sm leading-[1.9] text-[color-mix(in_srgb,var(--color-charcoal)_72%,white)]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-10 space-y-4">
                <h3 className="text-sm font-bold text-[var(--color-charcoal)]">経歴 / バックグラウンド</h3>
                {ABOUT_BACKGROUND.map((p) => (
                  <p
                    key={p.slice(0, 24)}
                    className="text-sm leading-[1.9] text-[color-mix(in_srgb,var(--color-charcoal)_72%,white)]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section-padding bg-surface-alt">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)]">
                得意な技術領域・提供可能な価値
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_65%,white)]">
                お客様の課題やご予算に合わせ、以下のような領域で柔軟にカスタマイズした解決策をご提案します。
              </p>
            </Reveal>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {ABOUT_EXPERTISE.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="card-gp h-full p-6 lg:p-7">
                    <h4 className="font-display text-base font-bold text-[var(--color-charcoal)]">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)]">
                仕事に対するスタンスと哲学
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {ABOUT_PHILOSOPHY.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <article className="card-gp h-full border-[var(--color-sky)]/30 p-6">
                    <h4 className="text-sm font-bold text-[var(--color-deep)]">{item.title}</h4>
                    <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_68%,white)]">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding border-t border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-sky-pale)_50%,white)]">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <Reveal>
              <h3 className="font-display text-lg font-bold text-[var(--color-charcoal)]">
                お問い合わせについて
              </h3>
              <p className="mt-4 text-sm leading-[1.9] text-[color-mix(in_srgb,var(--color-charcoal)_72%,white)]">
                {ABOUT_CONTACT}
              </p>
              <Link href="/#contact" className="btn-primary mt-8 inline-flex">
                お問い合わせはこちら
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
