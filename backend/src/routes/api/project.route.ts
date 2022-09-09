import { Router } from "express";
import asyncHandler from "express-async-handler";
import projectController from "../../controllers/project.controller";

const projectRouter: Router = Router();

projectRouter.get(
  "",
  asyncHandler(projectController.getAll.bind(projectController))
);
projectRouter.get(
  "/:id",
  asyncHandler(projectController.getByClient.bind(projectController))
);
projectRouter.post(
  "",
  asyncHandler(projectController.create.bind(projectController))
);
projectRouter.delete(
  "/:id",
  asyncHandler(projectController.delete.bind(projectController))
);

export default projectRouter;
