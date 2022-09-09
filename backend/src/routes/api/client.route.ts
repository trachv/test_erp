import { Router } from "express";
import asyncHandler from "express-async-handler";
import clientController from "../../controllers/client.controller";

const clientRouter: Router = Router();

clientRouter.get(
  "",
  asyncHandler(clientController.getAll.bind(clientController))
);
clientRouter.post(
  "",
  asyncHandler(clientController.create.bind(clientController))
);
clientRouter.delete(
  "/:id",
  asyncHandler(clientController.delete.bind(clientController))
);

export default clientRouter;
