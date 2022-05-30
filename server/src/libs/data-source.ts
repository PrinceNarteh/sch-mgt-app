import path from "path";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "sch_mgt",
  entities: [path.join(__dirname, "..", "entities", "**/*.ts")],
});
