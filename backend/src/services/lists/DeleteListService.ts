import { List } from "../../models/List";
import { ListType } from "../../@types/ListType";
import { Task } from "../../models/Task";

export class DeleteListService {
  async execute(id: string) {
    // find list
    let foundList: ListType | undefined = undefined;
    try {
      foundList = await List.findById(id);
    } catch (err) {
      throw new Error("Can't find the list!");
    }

    // delete list and all related tasks
    try {
      foundList.tasks.forEach(async (task_id) => {
        await Task.findOneAndDelete({ _id: task_id });
      });

      await foundList.delete();
    } catch (err) {
      throw new Error("Can't delete list!");
    }

    return foundList;
  }
}
