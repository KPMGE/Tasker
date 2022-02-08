import { CreateTaskService } from "../services/CreateTaskService";
import { Request, Response } from "express";

export class CreateTaskController {
  async handle(req: Request, res: Response) {
    const { description, list_id, due } = req.body;

    const service = new CreateTaskService();

    const result = await service.execute({
      description,
      list_id,
      due,
    });

    if (result instanceof Error) {
      return res.status(400).send(result.message);
    }

    return res.json(result);
  }
}
