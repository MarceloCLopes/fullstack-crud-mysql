import { Sequelize } from "sequelize";

const db = new Sequelize("crud_db", "root", "@MarCeLo01#", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
