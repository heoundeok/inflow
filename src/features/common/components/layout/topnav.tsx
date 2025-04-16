// next
import Image from "next/image";
import Link from "next/link";
// components
import { TopNavItem } from "./topnav-item";

export async function TopNav() {
  return (
    <nav className="w-full py-3 shadow-sm bg-background">
      <div className="w-11/12 h-full flex justify-between items-center m-auto">
        <div className="flex-1">
          <Link href="/">
            <Image src="/images/logo.png" width={30} height={30} alt="logo" />
          </Link>
        </div>
        <div className="flex-1 flex justify-center">
          <TopNavItem />
        </div>
        <div className="flex-1 flex justify-end"></div>
      </div>
    </nav>
  );
}
