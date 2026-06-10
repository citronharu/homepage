import type { Metadata } from "next";
import { M_PLUS_1_Code, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mplus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ottorino（オットリーノ） | Webサイト・社内システムの設計・開発",
  description:
    "Ottorino（オットリーノ）は、Webサイト制作から社内システム開発まで。個人事業主としてヒアリングから公開・運用まで伴走します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} ${mPlus1Code.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
