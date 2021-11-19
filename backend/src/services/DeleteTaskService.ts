import { Task } from "../models/Task";
import { TaskType } from "../@types/TaskType";

export class DeleteTaskService {
  async execute(id: string) {
    // find task
    let foundTask: TaskType | undefined;

    try {
      foundTask = await Task.findById(id);
    } catch (err) {
      throw new Error("Can't find task with that id!");
    }

    // delete found task
    try {
      await foundTask.delete();
    } catch (err) {
      throw new Error("Can't delete task!");
    }

    return foundTask;
  }
}
