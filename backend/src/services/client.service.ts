import { Client } from "../models/Client";

export default class ClientService {
  async getAll() {
    const clients: Client[] = await Client.findAll();
    return clients;
  }
  async create(data: Client) {
    const client: Client = await Client.create({ ...data });
    return client;
  }
  async delete(id: string) {
    const deletedDog: Client | null = await Client.findByPk(id);
    return await Client.destroy({ where: { id } });
  }
}
