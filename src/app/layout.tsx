import "./globals.css";
// next
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// components
import { Provider } from "@/providers/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "크날 AI",
  description: "CMS like Notion, Component like Imweb for Framer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className}`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
