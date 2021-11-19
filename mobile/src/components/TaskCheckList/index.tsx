import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { TaskCheckItem } from "../TaskCheckItem";
import api from "../../services/api";
import styles from "./styles";

type TaskType = {
  _id: string;
  description: string;
  color: string;
  due: Date;
};

type TaskCheckListProps = {
  showRightCircleItem?: boolean;
  checkboxColorItem?: string;
  taskTextItemColor?: string;
};

export const TaskCheckList = (props: TaskCheckListProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const { showRightCircleItem, checkboxColorItem, taskTextItemColor } = props;

  useEffect(() => {
    const fechTasks = async () => {
      try {
        const tasks = await api.get("/tasks");
        setTasks(tasks.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fechTasks();
  }, []);

  return (
    <FlatList
      data={tasks}
      keyExtractor={(task) => task._id}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => (
        <TaskCheckItem
          description={item.description}
          showRightCircle={showRightCircleItem}
          checkboxColor={checkboxColorItem}
          circleColor={item.color}
          taskTextColor={taskTextItemColor}
        />
      )}
    />
  );
};
