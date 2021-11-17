import React from "react";
import { FlatList, View } from "react-native";
import { TaskCheckItem } from "../TaskCheckItem";
import { DUMMY_COLORS } from "../../../DummyData/dummy-colors";
import styles from "./styles";

type TaskCheckListProps = {
  showRightCircleItem?: boolean;
  checkboxColorItem?: string;
  taskTextItemColor?: string;
};

export const TaskCheckList = (props: TaskCheckListProps) => {
  const { showRightCircleItem, checkboxColorItem, taskTextItemColor } = props;

  return (
    <FlatList
      data={DUMMY_COLORS}
      keyExtractor={(color) => color}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={(item) => (
        <TaskCheckItem
          showRightCircle={showRightCircleItem}
          checkboxColor={checkboxColorItem}
          circleColor={item.item}
          taskTextColor={taskTextItemColor}
        />
      )}
    />
  );
};
