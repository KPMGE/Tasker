import { List } from "../../models/List";

export class GetListByIdService {
  async execute(id: string) {
    try {
      const foundList = await List.findById(id).populate("tasks");
      return foundList;
    } catch (err) {
      throw new Error("Can't get list for this id!");
    }
  }
}
