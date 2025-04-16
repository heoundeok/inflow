// next
import type { Metadata } from "next";
// components
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers";

export const metadata: Metadata = {
  title: "대시보드 | 메이드액트",
  description: "메이드액트",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // setting layout
  return (
    <main>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </main>
  );
}
