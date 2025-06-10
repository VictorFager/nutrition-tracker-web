"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { House, NotebookPen, Soup, Carrot } from "lucide-react";
import compStyles from "./components.module.css";

const pages = [
  { href: "/", icon: House },
  { href: "/log", icon: NotebookPen },
  { href: "/meals", icon: Soup },
  { href: "/ingredients", icon: Carrot },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className={`${compStyles.bottomNav}`}>
      <ul>
        {pages.map((page) => {
          const PageIcon = page.icon;
          return (
            <li key={page.href}>
              <Link
                href={page.href}
                className={clsx(
                  `${compStyles.iconLink}`,
                  pathname === page.href && `${compStyles.active}`
                )}
              >
                <PageIcon className="icon" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
