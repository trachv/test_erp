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
      body("ID_PROJECT")
        .trim()
        .escape()
        .not()
        .isEmpty()
        .withMessage("Project ID can not be empty!")
        .isString()
        .withMessage("Project ID should be a string"),
    ];
  }
}

const projectValidator = new ProjectValidator();
export default projectValidator;
