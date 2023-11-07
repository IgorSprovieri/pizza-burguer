import { Pool } from "pg";

export const db = new Pool({
  user: process.env.NEXT_PUBLIC_POSTGRES_USER,
  database: process.env.NEXT_PUBLIC_POSTGRES_DB,
  password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
  host: process.env.NEXT_PUBLIC_POSTGRES_HOST,
  port: Number(process.env.NEXT_PUBLIC_POSTGRES_PORT),
});
