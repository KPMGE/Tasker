import { Request, Response, NextFunction } from "express";
import { GetTasksFromListService } from "../../services/lists/GetTasksFromListService";
import { HttpError } from "../../helpers/HttpError";

export class GetTasksFromListController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const getTasksFromListService = new GetTasksFromListService();

    try {
      const tasks = await getTasksFromListService.execute(id);
      return response.json(tasks);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
