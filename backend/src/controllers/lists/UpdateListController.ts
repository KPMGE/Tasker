import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { UpdateListService } from "../../services/lists/UpdateListService";

export class UpdateListController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id, title } = request.body;
    const updateListService = new UpdateListService();

    try {
      const updatedList = updateListService.execute(id, title);
      return response.json(updatedList);
    } catch (err) {
      return next(new HttpError(err.message, 500));
    }
  }
}
