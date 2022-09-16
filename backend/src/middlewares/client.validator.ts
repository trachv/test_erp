import { body } from "express-validator";

export class ClientValidator {
  create() {
    return [
      body("ID_DEP_CLIENT")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Client ID can not be empty!")
        .isString()
        .withMessage("Client ID should be a string"),
      body("NAME_CLIENT")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Client name can not be empty!")
        .isString()
        .withMessage("Client name should be a string"),
    ];
  }
}

const clientValidator = new ClientValidator();
export default clientValidator;
