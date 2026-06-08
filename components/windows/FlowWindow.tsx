const STEPS = [
  { num: "01", title: "ヒアリング", desc: "ご要望・目的・予算をお伺いします" },
  { num: "02", title: "お見積り", desc: "内容に応じたお見積りをご提示" },
  { num: "03", title: "デザイン", desc: "ワイヤーフレーム→デザイン案を作成" },
  { num: "04", title: "コーディング", desc: "デザインをもとにサイトを構築" },
  { num: "05", title: "納品・公開", desc: "最終確認後、公開・引き渡し" },
];

export default function FlowWindow() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-gray-900">制作の流れ</h2>
      <div className="space-y-0">
        {STEPS.map((step, i) => (
          <div key={step.num} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {step.num}
              </div>
              {i < STEPS.length - 1 && (
                <div className="my-1 h-full w-px bg-gray-200" />
              )}
            </div>
            <div className="pb-6">
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-0.5 text-sm text-gray-600">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
