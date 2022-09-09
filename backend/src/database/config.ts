import { Sequelize } from "sequelize-typescript";
import { Client } from "../models/Client";
import { Project } from "../models/Project";

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  logging: false,
  models: [Client, Project],
});

export default connection;
