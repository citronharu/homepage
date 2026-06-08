const PROJECTS = [
  {
    title: "カフェ LP",
    category: "ランディングページ",
    desc: "地域密着カフェの集客用LP。モバイルファーストで制作。",
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "士業コーポレート",
    category: "コーポレートサイト",
    desc: "信頼感のあるデザインで、問い合わせ数を30%向上。",
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "ECショップリニューアル",
    category: "リニューアル",
    desc: "UI/UX改善により、カート離脱率を大幅に改善。",
    color: "from-pink-400 to-rose-600",
  },
];

export default function PortfolioWindow() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">制作実績</h2>
      <div className="space-y-3">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="hover-lift flex gap-4 overflow-hidden rounded-xl border border-gray-100"
          >
            <div
              className={`h-24 w-24 shrink-0 bg-gradient-to-br ${p.color}`}
            />
            <div className="py-3 pr-3">
              <p className="text-xs font-medium text-blue-600">{p.category}</p>
              <h3 className="font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-400">
        ※ 実績はプレースホルダーです。実際の案件に差し替え可能です。
      </p>
    </div>
  );
}
