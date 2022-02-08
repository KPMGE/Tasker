import { getRepository } from "typeorm";
import { List } from "../entities/List";

interface ListRequest {
  title: string;
  color: string;
}

export class CreateListService {
  async execute({ title, color }: ListRequest): Promise<List | Error> {
    const repo = getRepository(List);

    const newList = repo.create({
      title,
      color,
    });

    try {
      await repo.save(newList);
      return newList;
    } catch (err) {
      throw new Error("Error when saving list!");
    }
  }
}
