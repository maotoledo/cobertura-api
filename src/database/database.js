import * as dotenv from 'dotenv';
dotenv.config();
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME, 
  process.env.DATABASE_USER, 
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST_COBERTURA,
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
