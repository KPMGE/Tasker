import { getRepository } from "typeorm";
import { Task } from "../entities/Task";

export class GetAllTasksService {
  async execute(): Promise<Task[]> {
    const repo = getRepository(Task);
    const tasks = repo.find();

    return tasks;
  }
}
