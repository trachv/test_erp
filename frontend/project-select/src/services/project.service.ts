import { BACKEND_KEYS } from "../common/consts/app-keys.const";
import { IProject } from "../common/types/types.common";
import { HttpService } from "./http.service";

export interface ICreateProject extends Omit<IProject,'id, ID_PROJECT'> {}

export class ProjectService {
  private httpService: HttpService<IProject>;

  constructor(httpService: HttpService<IProject>) {
    this.httpService = httpService;
  }

  async getAll() {
    const response = await this.httpService.get({
      url: BACKEND_KEYS.PROJECTS,
    });

    return response.data as IProject[];
  }
  async create(payload: ICreateProject) {
    const response = await this.httpService.post({
      url: BACKEND_KEYS.PROJECTS,
      data: payload,
    });

    return response.data as IProject;
  }
}

const projectService = new ProjectService(new HttpService());
export default projectService;
