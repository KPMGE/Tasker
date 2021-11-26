import { Task } from "../../models/Task";
import { TaskType } from "../../@types/TaskType";
import { List } from "../../models/List";
import { ListType } from "../../@types/ListType";

export class DeleteTaskService {
  async execute(id: string) {
    // find task
    let foundTask: TaskType | undefined;

    try {
      foundTask = await Task.findById(id);
    } catch (err) {
      throw new Error("Can't find task with that id!");
    }

    // find list and delete the task from it
    let foundList: ListType | undefined = undefined;
    try {
      // find list
      foundList = await List.findById(foundTask.list_id);

      // remove task
      foundList.tasks = foundList.tasks.filter(
        (task_id) => task_id.toString() !== foundTask._id.toString()
      );

      // save list
      foundList.save();
    } catch (err) {
      throw new Error("Can't delete task from list!");
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
