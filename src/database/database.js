import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "aseguradora", // db name,
  "admin", // username
  "AdM!n$uPo0rT.2022", // password
  {
    host: "aseguradora.cbrvpgzwo1jx.us-east-2.rds.amazonaws.com",
    dialect: "mysql",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
