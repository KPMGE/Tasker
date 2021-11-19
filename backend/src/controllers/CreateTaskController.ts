import { Request, Response, NextFunction } from "express";
import { HttpError } from "../helpers/HttpError";
import { CreateTaskService } from "../services/CreateTaskService";
import { TaskType } from "../@types/TaskType";

export class CreateTaskController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const { description, color, due } = request.body;
    const createTaskService = new CreateTaskService();

    let createdTask: TaskType;
    try {
      createdTask = await createTaskService.execute(description, color, due);
    } catch (err) {
      return next(new HttpError(err.message, 400));
    }

    return response.status(201).json(createdTask);
  }
}
