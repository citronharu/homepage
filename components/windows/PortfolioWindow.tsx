const PROJECTS = [
  {
    title: "カフェ LP",
    category: "ランディングページ",
    desc: "地域密着カフェの集客用LP。モバイルファーストで制作。",
    gradient: "from-[#B8937E] to-[#7D4429]",
  },
  {
    title: "士業コーポレート",
    category: "コーポレートサイト",
    desc: "信頼感のあるデザインで、問い合わせ数を30%向上。",
    gradient: "from-[#B9CCD3] to-[#7D4429]",
  },
  {
    title: "ECショップリニューアル",
    category: "リニューアル",
    desc: "UI/UX改善により、カート離脱率を大幅に改善。",
    gradient: "from-[#F18210] to-[#7D4429]",
  },
];

export default function PortfolioWindow() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-lg font-bold text-[var(--color-charcoal)]">制作実績</h2>
      <div className="space-y-3">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="hover-lift flex gap-4 overflow-hidden rounded-xl border border-tan bg-white/50"
          >
            <div
              className={`h-24 w-24 shrink-0 bg-gradient-to-br ${p.gradient} transition-transform duration-300 hover:scale-105`}
            />
            <div className="py-3 pr-3">
              <p className="font-mono-accent text-xs font-medium text-accent">{p.category}</p>
              <h3 className="font-semibold text-[var(--color-charcoal)]">{p.title}</h3>
              <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-[color-mix(in_srgb,var(--color-charcoal)_45%,white)]">
        ※ 実績はプレースホルダーです。実際の案件に差し替え可能です。
      </p>
    </div>
  );
}
