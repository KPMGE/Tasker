import React from "react";
import { useLists } from "../../hooks/useLists";
import { TaskCheckList } from "../TaskCheckList";

export const TodayTasks = () => {
  const { tasks } = useLists();

  return <TaskCheckList tasks={tasks} />;
};
