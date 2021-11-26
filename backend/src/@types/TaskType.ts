import { Document, Schema } from "mongoose";

export type TaskType = Document & {
  _id: Schema.Types.ObjectId;
  description: string;
  color: string;
  due: Date;
  list_id: Schema.Types.ObjectId;
};
