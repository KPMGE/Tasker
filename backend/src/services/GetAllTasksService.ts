import { Task } from "../models/Task";

export class GetAllTasksService {
  async execute() {
    try {
      const tasks = await Task.find();
      return tasks;
    } catch (err) {
      throw new Error("Can't find users");
    }
  }
}
