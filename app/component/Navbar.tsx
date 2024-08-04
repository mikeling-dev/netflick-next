"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  return (
    <div className="bg-indigo-800 h-16 text-xl flex gap-5 text-white p-4">
      <Link href="/" className={path === "/" && "underline"}>
        Home
      </Link>
      <Link href="/about-us" className={path === "/about-us" && "underline"}>
        About us
      </Link>
    </div>
  );
}
