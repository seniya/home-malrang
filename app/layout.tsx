import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MALRANG.NET — Personal Web Zone",
  description: "말랭의 작은 인터넷 우주에 놀러오세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
