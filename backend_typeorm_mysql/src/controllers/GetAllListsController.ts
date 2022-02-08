import { GetAllListsService } from "../services/GetAllListsService";
import { Request, Response } from "express";

export class GetAllListsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllListsService();

    const lists = await service.execute();

    return res.json(lists);
  }
}
