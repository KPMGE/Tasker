import { List } from "../../models/List";

export class GetAllListsService {
  async execute() {
    try {
      const lists = List.find();
      return lists;
    } catch (err) {
      throw new Error("Can't get lists!");
    }
  }
}
