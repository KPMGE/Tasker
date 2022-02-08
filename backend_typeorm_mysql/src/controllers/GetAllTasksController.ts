import { Request, Response } from "express";
import { GetAllTasksService } from "../services/GetAllTasksService";

export class GetAllTasksController {
  async handle(req: Request, res: Response) {
    const service = new GetAllTasksService();

    const tasks = await service.execute();
    return res.json(tasks);
  }
}
