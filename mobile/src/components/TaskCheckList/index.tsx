import React from "react";
import { FlatList, View } from "react-native";
import { TaskCheckItem } from "../TaskCheckItem";
import { TaskType } from "../../@types";
import styles from "./styles";

type TaskCheckListProps = {
  tasks: TaskType[];
  showRightCircleItem?: boolean;
  checkboxColorItem?: string;
  taskTextItemColor?: string;
};

export const TaskCheckList = (props: TaskCheckListProps) => {
  const { tasks, showRightCircleItem, checkboxColorItem, taskTextItemColor } =
    props;

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
