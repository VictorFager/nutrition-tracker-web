import styles from "./calculator.module.css";
import { Plus, Trash2 } from "lucide-react";

export default function Calculator() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.searchContainer}>
        <form>
          <input type="text" placeholder="Sök efter ingredienser" />
        </form>
        <div className={styles.listContainer}>
          <ul>
            <li>
              <span>Ingrediens</span>
              <button>
                <Plus />
              </button>
            </li>
            <li>
              <span>Ingrediens</span>
              <button>
                <Plus />
              </button>
            </li>
            <li>
              <span>Ingrediens</span>
              <button>
                <Plus />
              </button>
            </li>
            <li>
              <span>Ingrediens</span>
              <button>
                <Plus />
              </button>
            </li>
            <li>
              <span>Ingrediens</span>
              <button>
                <Plus />
              </button>
            </li>
            <li>
              <span>Ingrediens</span>
              <button>
                <Plus />
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.calculatorContainer}>
        <div className={styles.tableHeaders}>
          <div className={styles.buttonSpacer}></div>
          <h3 className={styles.nameHeader}>Namn</h3>
          <h3 className={styles.dataHeader}>Energi</h3>
          <h3 className={styles.dataHeader}>Fett</h3>
          <h3 className={styles.dataHeader}>Kolhyd.</h3>
          <h3 className={styles.dataHeader}>Protein</h3>
          <h3 className={styles.dataHeader}>Fiber</h3>
          <div className={styles.buttonSpacer}></div>
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
          </div>
        </div>
      </div>
    </main>
  );
}
