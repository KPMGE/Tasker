import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { View } from "react-native";
import { TaskCheckList } from "../TaskCheckList";
import { TaskType } from "../../@types";
import styles from "./styles";

export const TodayTasks = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get("/tasks");
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  return (
    <View style={styles.container}>
      <TaskCheckList tasks={tasks} />
    </View>
  );
};
