import { Schema, model } from "mongoose";
import "./List";

const TaskSchema = new Schema({
  description: { type: String, required: true },
  color: { type: String, required: true },
  due: { type: Date, required: true },
  list_id: { type: Schema.Types.ObjectId, ref: "List", required: true },
});

export const Task = model("Task", TaskSchema);
