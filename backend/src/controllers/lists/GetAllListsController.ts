import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { GetAllListsService } from "../../services/lists/GetAllListsService";

export class GetAllListsController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const getAllListsService = new GetAllListsService();

    try {
      const lists = await getAllListsService.execute();
      return response.json(lists);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
