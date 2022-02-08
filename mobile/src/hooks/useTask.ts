import { useState } from "react";
import { TaskType } from "../@types";

export const useTask = (defaultTask: TaskType) => {
  const [description, setDescription] = useState<string>(
    defaultTask.description
  );
  const [_id, setId] = useState<string>(defaultTask._id);
  const [color, setColor] = useState<string>(defaultTask.color);
  const [due, setDue] = useState<Date>(defaultTask.due);
  const [list_id, setListId] = useState<string>(defaultTask.list_id);

  return {
    description,
    _id,
    color,
    due,
    list_id,
    setDescription,
    setId,
    setDue,
    setListId,
    setColor,
  };
};
