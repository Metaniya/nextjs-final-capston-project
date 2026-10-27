"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Next.js has no <NavLink>; this adds the same "active" class that
// React Router's NavLink did.
export default function NavLink({ href, end = false, className = "", children }) {
  const pathname = usePathname();
  const active = end
    ? pathname === href
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`${className}${active ? " active" : ""}`.trim()}
      aria-current={active ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
