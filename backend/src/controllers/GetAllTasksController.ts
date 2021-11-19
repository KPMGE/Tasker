import { Request, Response, NextFunction } from "express";
import { HttpError } from "../helpers/HttpError";
import { GetAllTasksService } from "../services/GetAllTasksService";

export class GetAllTasksController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const getAllTasksService = new GetAllTasksService();

    let tasks;
    try {
      tasks = await getAllTasksService.execute();
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }

    return response.json({
      tasks: tasks.map((task) => task.toObject({ getters: true })),
    });
  }
}
