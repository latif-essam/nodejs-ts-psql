import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const {
  ENV,
  POSTGRES_PORT,
  POSTGRES_HOST,
  POSTGRES_DB_DEV,
  POSTGRES_DB_TEST,
  POSTGRES_DB,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

let db = new Pool({
  host: POSTGRES_HOST,
  user: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB_DEV,
  port: POSTGRES_PORT as unknown as number,
});
if (ENV === "test")
  db = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB_TEST,
    port: POSTGRES_PORT as unknown as number,
  });
if (ENV === "prod")
  db = new Pool({
    host: POSTGRES_HOST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DB,
    port: POSTGRES_PORT as unknown as number,
  });

export default db;
