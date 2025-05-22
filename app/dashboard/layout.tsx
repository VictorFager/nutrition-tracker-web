import SideNavigation from "@/components/side-navigation";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { LeafyGreen, Search, Pencil, Trash2, Check } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sideNavigation}>
        <div className={styles.menuContent}>
          <LeafyGreen color="#6bd39d" size={72} strokeWidth={1.5} />
          {/* <h2 className={styles.menuTitle}>Menu</h2> */}
          <nav>
            <ul>
              <li className={styles.menuItem}>
                <Link href="/dashboard/home" className={styles.menuLink}>
                  Hem
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/dashboard/log" className={styles.menuLink}>
                  Dagbok
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/dashboard/meals" className={styles.menuLink}>
                  Måltider
                </Link>
              </li>
              <li className={`${styles.menuItem} ${styles.active}`}>
                <Link
                  href="/dashboard/ingredients"
                  className={`${styles.menuLink} ${styles.active}`}
                >
                  Ingredienser
                </Link>
              </li>
            </ul>
          </nav>
          <form>
            <select name="users" id="user-select">
              <option value="victor">Victor</option>
              <option value="linnea">Linnéa</option>
            </select>
          </form>
        </div>
      </div>
      <main className={styles.mainContent}>
        <h2 className={styles.pageTitle}>Ingredienser</h2>
        <div className={styles.pageContainer}>
          <div className={styles.pageContent}>
            <div className={styles.topBar}>
              <div className={styles.formBar}>
                <form>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Sök..."
                  />
                  <Search
                    className={styles.searchIcon}
                    size={20}
                    strokeWidth={2.5}
                  />
                </form>
                <form>
                  <button>Lägg till</button>
                </form>
              </div>
              <div className={styles.tableHeaders}>
                <h3 className={styles.nameHeader}>Namn</h3>
                <h3 className={styles.dataHeader}>Energi</h3>
                <h3 className={styles.dataHeader}>Fett</h3>
                <h3 className={styles.dataHeader}>Kolhyd.</h3>
                <h3 className={styles.dataHeader}>Protein</h3>
                <h3 className={styles.dataHeader}>Fiber</h3>
                <div className={styles.buttonSpacer}></div>
              </div>
            </div>
            <div className={styles.tableContent}>
              <div className={styles.tableItem}>
                <p className={styles.nameData}>
                  Crème fraiche, lätt, naturell (ICA)
                </p>
                <div className={styles.valueData}>
                  <p>150 kcal</p>
                </div>
                <div className={styles.valueData}>
                  <p>13 g</p>
                </div>
                <div className={styles.valueData}>
                  <p>5,1 g</p>
                </div>
                <div className={styles.valueData}>
                  <p>2,9 g</p>
                </div>
                <div className={styles.valueData}>
                  <p>0 g</p>
                </div>
                <button className={styles.deleteButton}>
                  <Trash2 />
                </button>
                <button className={styles.doneButton}>
                  <Check />
                </button>
                <button className={styles.editButton}>
                  <Pencil />
                </button>
              </div>
              <div className={styles.editableTableItem}>
                <p className={styles.nameData}>
                  Crème fraiche, lätt, naturell (ICA)
                </p>
                <div className={styles.valueData}>
                  <p>150 kcal</p>
                </div>
                <div className={styles.valueData}>
                  <p>13 g</p>
                </div>
                <div className={styles.valueData}>
                  <p>5,1 g</p>
                </div>
                <div className={styles.valueData}>
                  <p>2,9 g</p>
                </div>
                <div className={styles.valueData}>
                  <p>0 g</p>
                </div>
                <button className={styles.deleteButton}>
                  <Trash2 />
                </button>
                <button className={styles.doneButton}>
                  <Check />
                </button>
                <button className={styles.editButton}>
                  <Pencil />
                </button>
              </div>
            </div>

            <div>{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
