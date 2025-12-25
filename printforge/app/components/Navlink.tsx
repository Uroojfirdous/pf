import Link from "next/link"
import type { NavLinkProps } from "@/app/types"

export default function NavLink({ href, children,isActive }: NavLinkProps) {
  return (
   <Link
     href={href}
    className={`px-4 py-2 text-gray-700 transition-colors rounded-md cursor-pointer hover:text-orange-accent ${isActive ? "font-bold text-orange-accent" : "text-gray-700"

    }`}
      >
     {children}</Link>
  );
}