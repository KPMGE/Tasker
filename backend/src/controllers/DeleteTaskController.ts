import { Request, Response, NextFunction } from "express";
import { DeleteTaskService } from "../services/DeleteTaskService";
import { HttpError } from "../helpers/HttpError";
import { TaskType } from "../@types/TaskType";

export class DeleteTaskController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;
    const deleteTaskService = new DeleteTaskService();

    try {
      const deletedTask: TaskType = await deleteTaskService.execute(id);
      return response.json(deletedTask);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
