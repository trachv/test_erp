import { Router } from "express";
import asyncHandler from "express-async-handler";
import clientController from "../../controllers/client.controller";
import clientValidator from "../../middlewares/client.validator";
import commonValidator from "../../middlewares/common.validator";

const clientRouter: Router = Router();

clientRouter.get(
  "",
  asyncHandler(clientController.getAll.bind(clientController))
);
clientRouter.post(
  "",
  clientValidator.create(),
  commonValidator.validate.bind(commonValidator),
  asyncHandler(clientController.create.bind(clientController))
);
clientRouter.delete(
  "/:id",
  asyncHandler(clientController.delete.bind(clientController))
);

export default clientRouter;
