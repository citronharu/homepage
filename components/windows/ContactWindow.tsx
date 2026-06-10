"use client";

import { useState } from "react";

export default function ContactWindow() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center">
        <span className="text-4xl">✅</span>
        <h2 className="font-display mt-3 text-lg font-bold text-[var(--color-charcoal)]">
          送信ありがとうございます
        </h2>
        <p className="mt-2 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]">
          2営業日以内にご返信いたします。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-lg font-bold text-[var(--color-charcoal)]">お問い合わせ</h2>
      <p className="text-sm text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]">
        ご質問・ご相談はお気軽にどうぞ。無料でお見積りいたします。
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-brown">お名前</label>
          <input
            type="text"
            required
            className="w-full rounded-lg border border-tan bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-[var(--color-orange)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-orange)_25%,transparent)]"
            placeholder="山田 太郎"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-brown">メールアドレス</label>
          <input
            type="email"
            required
            className="w-full rounded-lg border border-tan bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-[var(--color-orange)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-orange)_25%,transparent)]"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs font-medium text-brown">お問い合わせ内容</label>
          <textarea
            required
            rows={4}
            className="w-full resize-none rounded-lg border border-tan bg-white/80 px-3 py-2 text-sm outline-none transition focus:border-[var(--color-orange)] focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-orange)_25%,transparent)]"
            placeholder="ご要望やご質問をお書きください"
          />
        </div>
        <button
          type="submit"
          className="hover-lift w-full rounded-lg bg-accent py-2.5 text-sm font-medium text-white transition hover:brightness-110"
        >
          送信する
        </button>
      </form>
    </div>
  );
}
