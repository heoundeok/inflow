"use client";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// utils
import { cn } from "@/lib/utils";

export function TopNavItem() {
  const path = usePathname();

  // Define the navigation items in an array
  const navItems = [
    { href: "/product", label: "프로덕트" },
    { href: "/pricing", label: "요금제" },
    { href: "/guide", label: "가이드" },
    { href: "/blog", label: "블로그" },
  ];

  return (
    <div className="flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "border-b-2 border-b-transparent hover:text-primary hover:border-b-primary hover:border-b-2",
            path.startsWith(item.href) &&
              "border-b-2 border-b-primary font-bold"
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
