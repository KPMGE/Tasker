import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { DeleteListService } from "../../services/lists/DeleteListService";

export class DeleteListController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const deleteListService = new DeleteListService();
    const { id } = request.params;

    try {
      const deletedList = await deleteListService.execute(id);
      return response.json(deletedList);
    } catch (err) {
      return next(new HttpError(err.message, 500));
    }
  }
}
