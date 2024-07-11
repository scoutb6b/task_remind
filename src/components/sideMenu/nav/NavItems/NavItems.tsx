"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const NavItems: React.FC<NavItemsProps> = ({ label, href, icon }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`flex gap-1 items-center text-xl font-semibold px-6 py-4 hover:bg-sky-200 ${
        pathname === href ? "bg-sky-300 border-r-4 border-r-pink-400" : ""
      }`}
      href={href}
    >
      <div>{icon}</div>
      <div className="pl-3">{label}</div>
    </Link>
  );
};

export default NavItems;
