import { Task } from "../models/Task";

export class GetTaskByIdService {
  async execute(id: string) {
    try {
      const task = await Task.find({ _id: id });
      return task;
    } catch (err) {
      throw new Error("Can't find that task!");
    }
  }
}
