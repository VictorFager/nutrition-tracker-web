"use client";

import { useActionState } from "react";
import Link from "next/link";
import { createIngredient, State } from "@/lib/actions";
import styles from "./create-ingredient-form.module.css";

export default function CreateIngredientForm() {
  const initialState: State = {
    errors: {},
    generalErrorMessage: "",
    success: false,
  };
  const [state, formAction] = useActionState(createIngredient, initialState);

  return (
    <div className={styles.pageContent}>
      <h2>Lägg till ingrediens</h2>
      <form noValidate action={formAction}>
        <div className={styles.inputContainer}>
          <label htmlFor="description-input" className={styles.formLabel}>
            Beskrivning*
          </label>
          <input
            type="text"
            id="description-input"
            name="description"
            placeholder="Fyll i Ingrediensbeskrivning"
          />
          {state.errors?.description?.errors &&
            state.errors.description.errors.map((error: string) => (
              <p className={styles.inputError} key={error}>
                {error}
              </p>
            ))}
        </div>

        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label htmlFor="calories-input">Energi</label>
            <input
              type="number"
              id="calories-input"
              name="calories"
              placeholder="0"
            />
            <span className={styles.inputMeasurement}>kcal</span>
            {state.errors?.calories?.errors &&
              state.errors.calories.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.inputContainer}>
            <label htmlFor="fat-input">Fett</label>
            <input type="number" id="fat-input" name="fat" placeholder="0.0" />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.fat?.errors &&
              state.errors.fat.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label htmlFor="saturated-fat-input">Mättat fett</label>
            <input
              type="number"
              id="saturated-fat-input"
              name="saturatedFat"
              placeholder="0.0"
            />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.saturatedFat?.errors &&
              state.errors.saturatedFat.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.inputContainer}>
            <label htmlFor="carbohydrate-input">Kolhydrater</label>
            <input
              type="number"
              id="carbohydrate-input"
              name="carbohydrate"
              placeholder="0.0"
            />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.carbohydrate?.errors &&
              state.errors.carbohydrate.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label htmlFor="sugar-input">Socker</label>
            <input
              type="number"
              id="sugar-input"
              name="sugar"
              placeholder="0.0"
            />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.sugar?.errors &&
              state.errors.sugar.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.inputContainer}>
            <label htmlFor="fiber-input">Fiber</label>
            <input
              type="number"
              id="fiber-input"
              name="fiber"
              placeholder="0.0"
            />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.fiber?.errors &&
              state.errors.fiber.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className={styles.formGroup}>
          <div className={styles.inputContainer}>
            <label htmlFor="protein-input">Protein</label>
            <input
              type="number"
              id="protein-input"
              name="protein"
              placeholder="0.0"
            />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.protein?.errors &&
              state.errors.protein.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className={styles.spacer}></div>
          <div className={styles.inputContainer}>
            <label htmlFor="salt-input">Salt</label>
            <input
              type="number"
              id="salt-input"
              name="salt"
              placeholder="0.0"
            />
            <span className={styles.inputMeasurement}>g</span>
            {state.errors?.salt?.errors &&
              state.errors.salt.errors.map((error: string) => (
                <p className={styles.inputError} key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        {state?.generalErrorMessage !== "" && (
          <p className={styles.generalError}>{state.generalErrorMessage}</p>
        )}
        {state.success && (
          <p className={styles.generalSuccess}>Ingrediensen lades till!</p>
        )}
        <div className={styles.buttonGroup}>
          <Link href="/dashboard/home" className={styles.cancelButton}>
            Avbryt
          </Link>
          <div className={styles.spacer}></div>
          <button type="submit">Lägg till</button>
        </div>
      </form>
    </div>
  );
}
