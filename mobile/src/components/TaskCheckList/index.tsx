import React from "react";
import { FlatList, View } from "react-native";
import { TaskCheckItem } from "../TaskCheckItem";
import { DUMMY_COLORS } from "../../../DummyData/dummy-colors";
import styles from "./styles";

export const TaskCheckList = () => {
  return (
    <FlatList
      data={DUMMY_COLORS}
      keyExtractor={(color) => color}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={(item) => <TaskCheckItem circleColor={item.item} />}
    />
  );
};
