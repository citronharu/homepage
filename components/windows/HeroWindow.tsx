export default function HeroWindow() {
  return (
    <div className="space-y-5">
      <div>
        <p className="font-mono-accent text-sm font-medium text-accent">Web制作代行</p>
        <h1 className="font-display mt-1 text-2xl font-bold tracking-tight text-[var(--color-charcoal)] md:text-3xl">
          Web制作を、
          <br />
          もっとシンプルに。
        </h1>
      </div>
      <p className="leading-relaxed text-[color-mix(in_srgb,var(--color-charcoal)_75%,white)]">
        個人事業主として、LP・コーポレートサイト・リニューアルなどのWeb制作を請け負っています。
        デザインからコーディング、公開までワンストップでサポート。初めての方も安心してご相談ください。
      </p>
      <div className="flex flex-wrap gap-3">
        <span className="hover-lift rounded-full bg-mist px-3 py-1 text-xs font-medium text-brown">
          レスポンシブ対応
        </span>
        <span className="hover-lift rounded-full bg-tan-soft px-3 py-1 text-xs font-medium text-brown">
          スピード納品
        </span>
        <span className="hover-lift rounded-full border border-tan bg-white/60 px-3 py-1 text-xs font-medium text-accent">
          丁寧なサポート
        </span>
      </div>
    </div>
  );
}
