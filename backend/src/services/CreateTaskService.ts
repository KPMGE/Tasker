import { Task } from "../models/Task";

export class CreateTaskService {
  async execute(description: string, color: string, due: Date) {
    const newTask = new Task({
      description,
      color,
      due,
    });

    try {
      await newTask.save();
    } catch (err) {
      throw new Error("Can't save the user!");
    }

    return newTask;
  }
}
