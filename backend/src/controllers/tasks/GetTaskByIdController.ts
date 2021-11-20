import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { GetTaskByIdService } from "../../services/tasks/GetTaskByIdService";

export class GetTaskByIdController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const getTaskByIdService = new GetTaskByIdService();
    const { id } = request.params;

    try {
      const task = await getTaskByIdService.execute(id);
      return response.json(task);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
