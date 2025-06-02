import styles from "./calculator.module.css";
import { Plus } from "lucide-react";

export default function Calculator() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Sök efter ingredienser" />
        <div className={styles.listContainer}>
          <ul>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
            <li>
              <button>
                <Plus />
              </button>
              Ingrediens
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.calculatorContainer}>Då</div>
    </main>
  );
}
