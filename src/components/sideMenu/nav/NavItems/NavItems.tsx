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
      className={`flex gap-1 items-center text-xl font-semibold rounded-md px-6 py-4 mt-2 hover:bg-blue-300  ${
        pathname === href ? "bg-sky-200  text-sky-600 " : ""
      }`}
      href={href}
    >
      <div>{icon}</div>
      <div className="pl-3">{label}</div>
    </Link>
  );
};

export default NavItems;
