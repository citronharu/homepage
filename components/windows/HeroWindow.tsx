export default function HeroWindow() {
  return (
    <div className="space-y-5">
      <div>
        <p className="text-sm font-medium text-blue-600">Web制作代行</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Web制作を、
          <br />
          もっとシンプルに。
        </h1>
      </div>
      <p className="leading-relaxed text-gray-600">
        個人事業主として、LP・コーポレートサイト・リニューアルなどのWeb制作を請け負っています。
        デザインからコーディング、公開までワンストップでサポート。初めての方も安心してご相談ください。
      </p>
      <div className="flex flex-wrap gap-3">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          レスポンシブ対応
        </span>
        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700">
          スピード納品
        </span>
        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
          丁寧なサポート
        </span>
      </div>
    </div>
  );
}
