import { Project } from "../models/Project";

export default class ProjectService {
  async getAll() {
    const projects: Project[] = await Project.findAll();
    return projects;
  }
  async getByClient(clientId: string) {
    const projects: Project[] = await Project.findAll({
      where: { ID_DEP_CLIENT: clientId },
    });
    return projects;
  }
  async create(data: Project) {
    const project: Project = await Project.create({ ...data });
    return project;
  }
  async delete(id: string) {
    const deleted: Project | null = await Project.findByPk(id);
    return await Project.destroy({ where: { id } });
  }
}
