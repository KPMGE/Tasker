import { Schema, model } from "mongoose";

const TaskSchema = new Schema({
  description: { type: String, required: true },
  color: { type: String, required: true },
  due: { type: Date, required: true },
});

export const Task = model("Task", TaskSchema);
