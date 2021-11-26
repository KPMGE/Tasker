import { List } from "../../models/List";
//import { Task } from "../../models/Task";

export class GetTasksFromListService {
  async execute(list_id: string) {
    // find list
    let list;
    try {
      list = await List.findById(list_id).populate("tasks");
    } catch (err) {
      throw new Error("Can't find the list!");
    }

    // get tasks
    return list.tasks;
  }
}
