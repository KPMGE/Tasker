import { Request, Response } from "express";
import { CreateListService } from "../services/CreateListService";

export class CreateListController {
  async handle(req: Request, res: Response) {
    const { color, title } = req.body;

    const service = new CreateListService();

    const result = await service.execute({ color, title });

    if (result instanceof Error) {
      return res.status(400).send(result.message);
    }

    return res.json(result);
  }
}
