import { Task } from "../../models/Task";
import { TaskType } from "../../@types/TaskType";
import { List } from "../../models/List";
import { ListType } from "../../@types/ListType";

export class CreateTaskService {
  async execute({ description, due, list_id }: TaskType) {
    // find the list
    let foundList: ListType;

    try {
      foundList = await List.findById(list_id);
    } catch (err) {
      throw new Error("Can't find a list!");
    }

    // create new task
    const newTask = new Task({
      description,
      color: foundList.color,
      due,
      list_id,
    });

    // save it
    try {
      await newTask.save();
    } catch (err) {
      throw new Error("Can't save the task!");
    }

    // push new task to the list and save
    try {
      foundList.tasks.push(newTask);
      await foundList.save();
    } catch (err) {
      throw new Error("Can't push task to the list!");
    }

    return newTask;
  }
}
