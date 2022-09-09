import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import "dotenv/config";

import AppRouter from "./routes";
import connection from "./database/config";

const app = express();

const router = new AppRouter(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router.init();

const port = process.env.PORT || 3001;

const start = async (): Promise<void> => {
  try {
    await connection.sync();
    app.listen(port, () => {
      console.log("Server started on port " + port);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

void start();
