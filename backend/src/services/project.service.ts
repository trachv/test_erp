import { Project } from "../models/Project";

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
  async create(data: Project): Promise<Project> {
    const project: Project = await Project.create({ ...data });
    return project;
  }
  async delete(id: string) {
    const deleted: Project | null = await Project.findByPk(id);
    return await Project.destroy({ where: { id } });
  }
}
