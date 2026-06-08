"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "制作期間はどのくらいかかりますか？",
    a: "プランにより異なりますが、LPで約2週間、コーポレートサイトで約1ヶ月が目安です。",
  },
  {
    q: "デザインの知識がなくても依頼できますか？",
    a: "はい。ヒアリングをもとにこちらでデザイン案をご提案しますので、ご安心ください。",
  },
  {
    q: "途中で修正は可能ですか？",
    a: "各工程で確認・修正の機会を設けています。プランに応じた修正回数内で対応いたします。",
  },
  {
    q: "ドメインやサーバーの手配もお願いできますか？",
    a: "はい。ドメイン取得・サーバー契約のサポートも可能です（実費別途）。",
  },
  {
    q: "公開後のサポートはありますか？",
    a: "保守プランをご用意しています。更新作業や軽微な修正に対応いたします。",
  },
];

export default function FAQWindow() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">よくある質問</h2>
      <div className="space-y-2">
        {FAQS.map((faq, i) => (
          <div
            key={faq.q}
            className="overflow-hidden rounded-xl border border-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-900 transition hover:bg-gray-50"
            >
              {faq.q}
              <span
                className={`text-gray-400 transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === i && (
              <div className="border-t border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
