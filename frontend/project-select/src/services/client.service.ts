import { BACKEND_KEYS } from "../common/consts/app-keys.const";
import { IClient } from "../common/types/types.common";
import { HttpService } from "./http.service";

export class ClientService {
  private httpService: HttpService<IClient>;

  constructor(httpService: HttpService<IClient>) {
    this.httpService = httpService;
  }

  async getAll() {
    const response = await this.httpService.get({
      url: BACKEND_KEYS.CLIENTS,
    });
    console.log(response);

    return response.data as IClient[];
  }
}

const clientService = new ClientService(new HttpService());
export default clientService;
