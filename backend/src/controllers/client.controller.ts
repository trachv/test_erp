import { NextFunction, Response, Request } from "express";
import ClientService from "../services/client.service";
import { Client } from "../models/Client";

export class ClientController {
  constructor(private clientService: ClientService) {}

  async getAll(req: Request, res: Response, next: NextFunction) {
    const clients: Client[] = await this.clientService.getAll();
    res.send(clients);
  }
  async create(
    req: Request<{}, {}, Client>,
    res: Response,
    next: NextFunction
  ) {
    const client: Client = await this.clientService.create(req.body);
    res.send(client);
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deletedClient = await this.clientService.delete(id);
    if (deletedClient) {
      res.send({ message: "Client deleted successfully" });
    } else {
      res.status(404).send({ message: "Client not found" });
    }
  }
}

const clientController = new ClientController(new ClientService());
export default clientController;
