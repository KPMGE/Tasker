import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "../ListItem";
import { DUMMY_COLORS } from "../../../DummyData/dummy-colors";

type ListTaskProps = {
  showTaskDetailsItem?: boolean;
  showCheckCircleItem?: boolean;
};

export const ListTasks = ({
  showCheckCircleItem,
  showTaskDetailsItem,
}: ListTaskProps) => {
  return (
    <FlatList
      data={DUMMY_COLORS}
      showsVerticalScrollIndicator={false}
      keyExtractor={(color) => color}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
      renderItem={(color) => (
        <ListItem
          color={color.item}
          showDetails={showTaskDetailsItem}
          showCheckCircle={showCheckCircleItem}
        />
      )}
    />
  );
};
