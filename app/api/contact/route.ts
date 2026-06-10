import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "リクエスト形式が不正です。" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "すべての項目を入力してください。" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "メールアドレスの形式が正しくありません。" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? "citron.haru0502@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "Ottorino <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "メール送信が未設定です。メールアプリから直接ご連絡ください。", code: "NOT_CONFIGURED" },
      { status: 503 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `【Ottorino】お問い合わせ — ${name} 様`,
      text: [
        "Webサイトからお問い合わせがありました。",
        "",
        `お名前: ${name}`,
        `メール: ${email}`,
        "",
        "お問い合わせ内容:",
        message,
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    console.error("Resend API error:", response.status, await response.text());
    return NextResponse.json(
      { error: "送信に失敗しました。時間をおいて再度お試しください。" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
