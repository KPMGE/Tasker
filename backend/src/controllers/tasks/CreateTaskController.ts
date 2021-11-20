import { Request, Response, NextFunction } from "express";
import { HttpError } from "../../helpers/HttpError";
import { CreateTaskService } from "../../services/tasks/CreateTaskService";
import { TaskType } from "../../@types/TaskType";

export class CreateTaskController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const newTask: TaskType = request.body;
    const createTaskService = new CreateTaskService();

    let createdTask: TaskType;
    try {
      createdTask = await createTaskService.execute(newTask);
    } catch (err) {
      return next(new HttpError(err.message, 400));
    }

    return response.status(201).json(createdTask);
  }
}
