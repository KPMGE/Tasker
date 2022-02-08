import { getRepository } from "typeorm";
import { List } from "../entities/List";
import { Task } from "../entities/Task";

interface TaskRequest {
  description: string;
  due: Date;
  list_id: string;
}

export class CreateTaskService {
  async execute({
    description,
    due,
    list_id,
  }: TaskRequest): Promise<Task | Error> {
    const repo = getRepository(Task);
    const listRepo = getRepository(List);

    const list = await listRepo.findOne({ id: list_id });

    if (!list) {
      return new Error("List not found! Could not create task!");
    }

    const newTask = repo.create({
      description,
      color: list.color,
      due,
      list,
    });

    //console.log("New: ", newTask);

    try {
      await repo.save(newTask);
      return newTask;
    } catch (err) {
      console.log("err: ", err.message);
      return new Error("error when creating task");
    }
  }
}
