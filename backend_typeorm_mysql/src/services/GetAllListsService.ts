import { getRepository } from "typeorm";
import { List } from "../entities/List";

export class GetAllListsService {
  async execute(): Promise<List[]> {
    const repo = getRepository(List);

    const lists = await repo.find();

    return lists;
  }
}
