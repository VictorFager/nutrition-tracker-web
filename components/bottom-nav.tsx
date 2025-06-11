"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// import { House, NotebookPen, Soup, Carrot } from "lucide-react";
import pages from "@/lib/config";
import cStyles from "./components.module.css";

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className={`${cStyles.bottomNav}`}>
      <ul>
        {pages.map((page) => {
          const PageIcon = page.icon;
          return (
            <li key={page.href}>
              <Link
                href={page.href}
                className={clsx(
                  `${cStyles.iconLink}`,
                  pathname === page.href && `${cStyles.active}`
                )}
              >
                <PageIcon className={cStyles.menuIcon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
