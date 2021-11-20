import { Request, Response, NextFunction } from "express";
import { CreateListService } from "../../services/lists/CreateListService";
import { HttpError } from "../../helpers/HttpError";

export class CreateListController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { title } = request.body;
    const createListService = new CreateListService();

    try {
      const list = await createListService.execute(title);
      return response.json(list);
    } catch (err) {
      return next(new HttpError(err.message, 500));
    }
  }
}
