"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ArrowBigRightDash } from "lucide-react";
import pages from "@/lib/config";
import cStyles from "./components.module.css";
import React from "react";

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <aside className={clsx(`${cStyles.sideNav}`, isOpen && `${cStyles.open}`)}>
      <nav>
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
                  <span>{page.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button
        className={`${cStyles.iconLink} ${cStyles.toggleButton}`}
        onClick={handleClick}
      >
        <ArrowBigRightDash className={cStyles.menuIcon} />
      </button>
    </aside>
  );
}
