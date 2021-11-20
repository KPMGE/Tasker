import { List } from "../../models/List";

export class CreateListService {
  async execute(title: string, color: string) {
    // create new list
    const newList = new List({
      title,
      color,
    });

    // save it
    try {
      await newList.save();
    } catch (err) {
      throw new Error("Can't create list!");
    }

    return newList;
  }
}
