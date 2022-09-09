import { Application } from "express";
import clientRouter from "./api/client.route";
import projectRouter from "./api/project.route";

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.get("/", (_req, res) => {
      res.send("App ranning");
		});
		this.app.use('/api/clients', clientRouter);
		this.app.use("/api/projects", projectRouter);
  }
}

export default AppRouter;
