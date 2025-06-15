import IngredientTable from "@/components/item-table";
import cStyles from "@/components/components.module.css";

export default function IngredientsPage() {
  return (
    <>
      <div className={`${cStyles.container} ${cStyles.flexNoShrink}`}>
        <p className={cStyles.test}>
          En test container för att se hur saker funkar
        </p>
        <p className={cStyles.test}>En och annan p tagg för att fylla ut</p>
        <p className={cStyles.test}>En och annan p tagg för att fylla ut</p>
        <p className={cStyles.test}>En och annan p tagg för att fylla ut</p>
      </div>
      <div
        className={`${cStyles.container} ${cStyles.flexNoShrink} ${cStyles.fullHeight}`}
      >
        <IngredientTable />
      </div>
    </>
  );
}
