import { body } from "express-validator";

export class ProjectValidator {
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
      body("OPERATION_DATE")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Operation date can not be empty!")
        .isString()
        .withMessage("Operation date should be a string"),
    ];
  }
}

const projectValidator = new ProjectValidator();
export default projectValidator;
