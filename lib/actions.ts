"use server";

import { z } from "zod/v4";
import { neon } from "@neondatabase/serverless";
const sql = neon(`${process.env.DATABASE_URL}`);

// import postgres from "postgres";
// const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

const IngredientFormSchema = z.object({
  description: z.string().nonempty("Ingrediensen måste ha en beskrivning!"),
  calories: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .int("Måste vara ett heltal!"),
  fat: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.1, "Max en decimal! (0.0)"),
  saturatedFat: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.1, "Max en decimal! (0.0)"),
  carbohydrate: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.1, "Max en decimal! (0.0)"),
  sugar: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.1, "Max en decimal! (0.0)"),
  fiber: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.1, "Max en decimal! (0.0)"),
  protein: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.1, "Max en decimal! (0.0)"),
  salt: z.coerce
    .number()
    .gte(0, "Kan inte vara ett negativt tal!")
    .multipleOf(0.001, "Max 3 decimaler! (0.000)"),
});

export type State = {
  errors?: {
    description?: {
      errors: string[] | undefined;
    };
    calories?: {
      errors: string[] | undefined;
    };
    fat?: {
      errors: string[] | undefined;
    };
    saturatedFat?: {
      errors: string[] | undefined;
    };
    carbohydrate?: {
      errors: string[] | undefined;
    };
    sugar?: {
      errors: string[] | undefined;
    };
    fiber?: {
      errors: string[] | undefined;
    };
    protein?: {
      errors: string[] | undefined;
    };
    salt?: {
      errors: string[] | undefined;
    };
  };
  generalErrorMessage?: string;
  success: boolean;
};

export async function createIngredient(
  previousState: State,
  formData: FormData
) {
  console.log(previousState);

  const validatedInput = IngredientFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  console.log(validatedInput);

  if (!validatedInput.success) {
    return {
      errors: z.treeifyError(validatedInput.error).properties,
      generalErrorMessage:
        "Felaktig eller saknad data, ingrediensen lades ej till!",
      success: false,
    };
  } else {
    const data = validatedInput.data;
    await sql`
    INSERT INTO ingredients (description, calories, 
    fat, saturated_fat, carbohydrate, sugar, fiber, 
    protein, salt)
    VALUES (${data.description}, ${data.calories},
    ${data.fat * 1000}, ${data.saturatedFat * 1000},
    ${data.carbohydrate * 1000}, ${data.sugar * 1000},
    ${data.fiber * 1000}, ${data.protein * 1000},
    ${data.salt * 1000})
    `;
  }

  return {
    errors: {},
    generalErrorMessage: "",
    success: true,
  };
}
