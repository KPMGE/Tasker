import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "../ListItem";
import { ListType } from "../../@types";

type ListTaskProps = {
  lists: ListType[];
  showTaskDetailsItem?: boolean;
  showCheckCircleItem?: boolean;
};

export const ListTasks = ({
  showCheckCircleItem,
  showTaskDetailsItem,
  lists,
}: ListTaskProps) => {
  return (
    <FlatList
      data={lists}
      showsVerticalScrollIndicator={false}
      keyExtractor={(list) => list._id}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
      renderItem={({ item }) => (
        <ListItem
          tasks={item.tasks}
          title={item.title}
          color={item.color}
          showDetails={showTaskDetailsItem}
          showCheckCircle={showCheckCircleItem}
        />
      )}
    />
  );
};
