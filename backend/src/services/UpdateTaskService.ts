import { Task } from "../models/Task";
import { TaskType } from "../@types/TaskType";

export class UpdateTaskService {
  async execute(id: string, { description, color, due }: TaskType) {
    // finding task
    let foundTask: TaskType | undefined = undefined;
    try {
      foundTask = await Task.findOne({ _id: id });
    } catch (err) {
      throw new Error("Can't find task!");
    }

    // updating task
    foundTask.description = description;
    foundTask.color = color;
    foundTask.due = due;

    // saving updated task
    try {
      await foundTask.save();
    } catch (err) {
      throw new Error("Can't update task!");
    }

    return foundTask;
  }
}
