import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { TaskCheckList } from "../TaskCheckList";
import { TaskType } from "../../@types";

export const TodayTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get("/tasks");
      setTasks(response.data);
    };

    fetchTasks();
  }, [tasks]);

  return <TaskCheckList tasks={tasks} />;
};
