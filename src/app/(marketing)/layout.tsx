// next
import type { Metadata } from "next";
// components
import { TopNav } from "@/features/common/components/layout/topnav";

export const metadata: Metadata = {
  title: "크날 AI",
  description: "CMS like Notion, Component like Imweb for Framer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <TopNav />
      {children}
    </main>
  );
}
