"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "../lib/nav";

/**
 * Renders the navigation items as direct children of the surrounding grid, so
 * the caller keeps control over the grid and the logo.
 */
export default function Nav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${item.className} ${
            pathname === item.href ? item.activeClassName : item.inactiveClassName
          }`}
        >
          <div className="lg:mb-3 text-xl lg:text-2xl font-semibold">
            {item.headline}
          </div>
          <div className="text-sm opacity-50">{item.subheadline}</div>
        </Link>
      ))}
    </>
  );
}
