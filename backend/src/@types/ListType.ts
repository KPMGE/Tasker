import { Document } from "mongoose";

export type ListType = Document & {
  title: string;
  tasks: string[];
};
