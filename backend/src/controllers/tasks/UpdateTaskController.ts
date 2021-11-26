import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { UpdateTaskService } from "../../services/tasks/UpdateTaskService";
import { TaskType } from "../../@types/TaskType";

export class UpdateTaskController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const updateTaskService = new UpdateTaskService();

    const { id } = request.params;
    const newTask: TaskType = request.body;

    try {
      const updatedTask: TaskType = await updateTaskService.execute(
        id,
        newTask
      );
      return response.json(updatedTask);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
