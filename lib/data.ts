// import { Ingredient } from "./definitions";

import { neon } from "@neondatabase/serverless";
const sql = neon(`${process.env.DATABASE_URL}`);

// import postgres from "postgres";
// const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

export async function fetchIngredients() {
  try {
    const data = await sql`SELECT * FROM ingredients`;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch ingredients.");
  }
}
