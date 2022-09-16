import { NextFunction, Request, Response } from "express";
import { Client } from "../models/Client";

export class ClientExistMiddleWare {
  async isExist(req: Request, res: Response, next: NextFunction) {
    try {
      const deleted: Client | null = await Client.findOne({
        where: { ID_DEP_CLIENT: req.body.ID_DEP_CLIENT },
      });
      if (!deleted) {
        return res.status(404).send({ message: "Client not found" });
      }
      return next();
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  }
}

export const clientExistMiddleware = new ClientExistMiddleWare();
