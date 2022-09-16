import { Router } from "express";
import asyncHandler from "express-async-handler";
import projectController from "../../controllers/project.controller";
import { clientExistMiddleware } from "../../middlewares/client-exist.middleware";
import commonValidator from "../../middlewares/common.validator";
import projectValidator from "../../middlewares/project.validator";

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
  projectValidator.create(),
  commonValidator.validate.bind(commonValidator),
  clientExistMiddleware.isExist.bind(clientExistMiddleware),
  asyncHandler(projectController.create.bind(projectController))
);
projectRouter.delete(
  "/:id",
  asyncHandler(projectController.delete.bind(projectController))
);

export default projectRouter;
