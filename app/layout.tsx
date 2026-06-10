import type { Metadata } from "next";
import { M_PLUS_1_Code, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto",
  display: "swap",
});

const mPlus1Code = M_PLUS_1_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mplus",
  display: "swap",
});

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
    <html lang="ja" className={`${notoSansJP.variable} ${mPlus1Code.variable}`}>
      <body>{children}</body>
    </html>
  );
}
