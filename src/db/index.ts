import { Pool } from "pg";

const {
  NEXT_PUBLIC_DB_USER,
  NEXT_PUBLIC_DB_HOST,
  NEXT_PUBLIC_DB_DATABASE,
  NEXT_PUBLIC_DB_PASSWORD,
  NEXT_PUBLIC_DB_PORT,
} = process.env;

export const db = new Pool({
  user: NEXT_PUBLIC_DB_USER,
  host: NEXT_PUBLIC_DB_HOST,
  database: NEXT_PUBLIC_DB_DATABASE,
  password: NEXT_PUBLIC_DB_PASSWORD,
  port: Number(NEXT_PUBLIC_DB_PORT),
});
