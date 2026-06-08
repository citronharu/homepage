const PLANS = [
  {
    name: "ライト",
    price: "50,000",
    features: ["1ページ構成", "レスポンシブ対応", "お問い合わせフォーム", "納期 2週間"],
    highlight: false,
  },
  {
    name: "スタンダード",
    price: "150,000",
    features: [
      "5ページまで",
      "オリジナルデザイン",
      "SEO基本設定",
      "納期 1ヶ月",
    ],
    highlight: true,
  },
  {
    name: "プレミアム",
    price: "300,000",
    features: [
      "10ページまで",
      "フルカスタムデザイン",
      "CMS導入",
      "納期 1.5ヶ月",
    ],
    highlight: false,
  },
];

export default function PricingWindow() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">料金プラン</h2>
      <p className="text-sm text-gray-500">
        すべて税込価格。内容に応じて柔軟にカスタマイズ可能です。
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`hover-lift rounded-xl border p-4 ${
              plan.highlight
                ? "border-blue-300 bg-blue-50 ring-2 ring-blue-200"
                : "border-gray-100 bg-gray-50"
            }`}
          >
            {plan.highlight && (
              <span className="mb-2 inline-block rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-medium text-white">
                人気
              </span>
            )}
            <h3 className="font-bold text-gray-900">{plan.name}</h3>
            <p className="mt-1">
              <span className="text-2xl font-bold text-gray-900">
                ¥{plan.price}
              </span>
              <span className="text-xs text-gray-500">〜</span>
            </p>
            <ul className="mt-3 space-y-1.5">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-1.5 text-xs text-gray-600">
                  <span className="text-green-500">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
