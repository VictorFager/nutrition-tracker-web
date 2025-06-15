import { fetchIngredients } from "@/lib/data";
import cStyles from "./components.module.css";

export default async function IngredientTable() {
  const ingredients = await fetchIngredients();
  return (
    <div className={cStyles.tableContainer}>
      <table className={cStyles.table}>
        <thead>
          <tr>
            <th>Beskrivning</th>
            <th>Energi</th>
            <th>Fett</th>
            <th>Kolhyd.</th>
            <th>Protein</th>
            <th>Socker</th>
            <th>Fiber</th>
            <th>Salt</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient) => (
            <tr key={ingredient.id}>
              <td>{ingredient.description}</td>
              <td>{ingredient.calories} kcal</td>
              <td>{ingredient.fat / 1000} g</td>
              <td>{ingredient.carbohydrate / 1000} g</td>
              <td>{ingredient.protein / 1000} g</td>
              <td>{ingredient.sugar / 1000} g</td>
              <td>{ingredient.fiber / 1000} g</td>
              <td>{ingredient.salt / 1000} g</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
