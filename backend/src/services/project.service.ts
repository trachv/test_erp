import { Project } from "../models/Project";
import { ICreateProject } from "../types/types.common";

export default class ProjectService {
  async getAll(): Promise<Project[]> {
    const projects: Project[] = await Project.findAll();
    return projects;
  }
  async getByClient(clientId: string): Promise<Project[]> {
    const projects: Project[] = await Project.findAll({
      where: { ID_DEP_CLIENT: clientId },
    });
    return projects;
  }
  async create(data: ICreateProject): Promise<Project> {
    const projects: Project[] = await Project.findAll({
      where: {
        ID_DEP_CLIENT: data.ID_DEP_CLIENT,
        OPERATION_DATE: data.OPERATION_DATE,
      },
    });
    let dayId = 1;
    if (projects.length) {
      projects.sort((a, b) => b.DAY_ID - a.DAY_ID);
      dayId = projects[0].DAY_ID + 1;
    }
    const project: Project = await Project.create({
      ...data,
      DAY_ID: dayId,
      ID_PROJECT: `${data.ID_DEP_CLIENT}-${data.OPERATION_DATE}`,
    });
    return project;
  }
  async delete(id: string) {
    const deleted: Project | null = await Project.findByPk(id);
    return await Project.destroy({ where: { id } });
  }
}
