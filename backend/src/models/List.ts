import { Schema, model } from "mongoose";
import "./Task";

const ListSchema = new Schema({
  title: { type: String, required: true },
  color: { type: String, required: true },
  tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
});

export const List = model("List", ListSchema);
