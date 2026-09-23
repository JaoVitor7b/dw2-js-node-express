import Sequelize from "sequelize";

export const databaseConfig = {
  database: process.env.DB_NAME || "loja",
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  host: process.env.DB_HOST || "localhost",
};

if (!/^[a-zA-Z0-9_]+$/.test(databaseConfig.database)) {
  throw new Error("DB_NAME deve conter apenas letras, números e sublinhados.");
}

const connection = new Sequelize(
  databaseConfig.database,
  databaseConfig.username,
  databaseConfig.password,
  {
    dialect: "mysql",
    host: databaseConfig.host,
    timezone: "-03:00",
    logging: false,
  },
);

export default connection;
