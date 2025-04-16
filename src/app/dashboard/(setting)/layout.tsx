import type { Metadata } from "next";
// 설정용 사이드바 추가해야함

export const metadata: Metadata = {
  title: "설정 | 메이드액트",
  description: "메이드액트",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // setting layout
  return <>{children}</>;
}
