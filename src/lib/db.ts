import knex, { type Knex } from "knex";

let instance: Knex | null = null;

export function getDb(): Knex {
  if (!instance) {
    instance = knex({
      client: "mysql2",
      connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT ?? 3306),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        charset: "utf8mb4",
      },
      pool: { min: 0, max: 5 },
    });
  }
  return instance;
}
