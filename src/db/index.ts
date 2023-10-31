import { Pool } from "pg";

export const db = new Pool({
  user: "docker",
  host: "localhost",
  database: "docker",
  password: "docker",
  port: 5432,
});
