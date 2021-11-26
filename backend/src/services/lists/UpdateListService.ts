import { List } from "../../models/List";

export class UpdateListService {
  async execute(id: string, newTitle: string) {
    // find list
    let foundList;
    try {
      foundList = await List.findById(id);
    } catch (err) {
      throw new Error("Can't find a list for the given id!");
    }

    // update list's information
    foundList.title = newTitle;

    // save updated list
    try {
      await foundList.save();
    } catch (err) {
      throw new Error("Can't save updated list!");
    }

    return foundList;
  }
}
