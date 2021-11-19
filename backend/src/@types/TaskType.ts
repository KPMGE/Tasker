import { Document } from "mongoose";

export type TaskType = Document & {
  _id: string;
  description: string;
  color: string;
  due: Date;
};
