import { NextFunction, Response, Request } from "express";
import ProjectService from "../services/project.service";
import { Project } from "../models/Project";

export class ProjectController {
  constructor(private projectService: ProjectService) {}

  async getAll(req: Request, res: Response, next: NextFunction) {
    const projects: Project[] = await this.projectService.getAll();
    res.send(projects);
  }

	async getByClient(req: Request, res: Response, next: NextFunction) {
		const { id } = req.params;
    const projects: Project[] = await this.projectService.getByClient(id);
    res.send(projects);
  }

  async create(
    req: Request<{}, {}, Project>,
    res: Response,
    next: NextFunction
  ) {
    const project: Project = await this.projectService.create(req.body);
    res.send(project);
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const deletedClient = await this.projectService.delete(id);
    if (deletedClient) {
      res.send({ message: "Project deleted successfully" });
    } else {
      res.status(404).send({ message: "Project not found" });
    }
  }
}

const projectController = new ProjectController(new ProjectService());
export default projectController;