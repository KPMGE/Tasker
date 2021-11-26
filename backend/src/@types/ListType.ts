import { Document } from "mongoose";

export type ListType = Document & {
  title: string;
  color: string;
  tasks: string[];
};
