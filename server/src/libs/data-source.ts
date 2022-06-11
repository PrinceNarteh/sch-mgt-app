import path from "path";
import { DataSource } from "typeorm";

export const dataSource = async () => {
  try {
    const conn = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "sch_mgt",
      entities: [path.join(__dirname, "..", "modules", "**/*.ts")],
      synchronize: true,
    });
    await conn.initialize();
    console.log("Database connected successfully.");
  } catch (err) {
    console.error("Error during Data Source initialization", err);
  }
};
