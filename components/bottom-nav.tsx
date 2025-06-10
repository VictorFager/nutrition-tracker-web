import Link from "next/link";
import { House, NotebookPen, Soup, Carrot } from "lucide-react";
import compStyles from "./components.module.css";

export default function BottomNav() {
  return (
    <>
      <nav className={`${compStyles.bottomNav}`}>
        <ul>
          <li>
            <Link
              href="/"
              className={`${compStyles.iconLink} ${compStyles.active}`}
            >
              <House className="icon" />
            </Link>
          </li>
          <li>
            <Link href="/log" className={`${compStyles.iconLink}`}>
              <NotebookPen className="icon" />
            </Link>
          </li>
          <li>
            <Link href="/meals" className={`${compStyles.iconLink}`}>
              <Soup className="icon" />
            </Link>
          </li>
          <li>
            <Link href="/ingredients" className={`${compStyles.iconLink}`}>
              <Carrot className="icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
