import { validationResult } from "express-validator";
import { Response, Request, NextFunction } from "express";

export class CommonValidator {
  validate(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res
      .status(422)
      .json({ message: "Incorrect data", errors: errors.array() });
  }
}

const commonValidator = new CommonValidator();
export default commonValidator;
