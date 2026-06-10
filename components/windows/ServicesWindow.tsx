const SERVICES = [
  {
    title: "LP制作",
    desc: "コンバージョンを意識したランディングページを制作します。",
    icon: "🎯",
  },
  {
    title: "コーポレートサイト",
    desc: "会社の顔となるWebサイトを、ブランドに合わせて設計・構築します。",
    icon: "🏢",
  },
  {
    title: "サイトリニューアル",
    desc: "古くなったサイトを現代的なデザイン・UXに刷新します。",
    icon: "✨",
  },
  {
    title: "保守・更新",
    desc: "公開後の更新作業や軽微な修正もお任せください。",
    icon: "🔧",
  },
];

export default function ServicesWindow() {
  return (
    <div className="space-y-4">
      <h2 className="font-display text-lg font-bold text-[var(--color-charcoal)]">提供サービス</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="hover-lift rounded-xl border border-tan bg-tan-soft p-4"
          >
            <span className="text-2xl transition-transform duration-300 hover:scale-110 inline-block">
              {s.icon}
            </span>
            <h3 className="mt-2 font-semibold text-[var(--color-charcoal)]">{s.title}</h3>
            <p className="mt-1 text-sm text-[color-mix(in_srgb,var(--color-charcoal)_70%,white)]">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
