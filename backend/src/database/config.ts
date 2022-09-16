import { Sequelize } from "sequelize-typescript";
import { Dialect } from "sequelize/types";
import { Client } from "../models/Client";
import { Project } from "../models/Project";

const connection = new Sequelize({
  dialect: process.env.DIALECT as Dialect,
  host: process.env.HOST_DB,
  port: process.env.PORT_DB,
  username: process.env.USER_DB,
  password: process.env.PASSWORD_DB,
  database: process.env.NAME_DB,
  logging: false,
  models: [Client, Project],
});

export default connection;
