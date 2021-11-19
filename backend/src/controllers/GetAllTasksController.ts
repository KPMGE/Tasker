import { Request, Response, NextFunction } from "express";
import { HttpError } from "../helpers/HttpError";
import { GetAllTasksService } from "../services/GetAllTasksService";

export class GetAllTasksController {
  async handle(request: Request, response: Response, next: NextFunction) {
    const getAllTasksService = new GetAllTasksService();

    try {
      const tasks = await getAllTasksService.execute();
      return response.json(tasks);
    } catch (err) {
      return next(new HttpError(err.message, 404));
    }
  }
}
