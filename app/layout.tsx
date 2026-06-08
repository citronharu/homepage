import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Web制作代行 | 個人事業主",
  description:
    "個人事業主としてWeb制作代行を請け負っています。LP・コーポレートサイト・リニューアルなど、お気軽にご相談ください。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
