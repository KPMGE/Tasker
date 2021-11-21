import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "../ListItem";
import { ListsContext } from "../../contexts/ListsContext";

type ListTaskProps = {
  showTaskDetailsItem?: boolean;
  showCheckCircleItem?: boolean;
};

export const ListTasks = ({
  showCheckCircleItem,
  showTaskDetailsItem,
}: ListTaskProps) => {
  const lists = useContext(ListsContext);

  return (
    <FlatList
      data={lists}
      showsVerticalScrollIndicator={false}
      keyExtractor={(list) => list._id}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
      renderItem={({ item }) => (
        <ListItem
          list_id={item._id}
          title={item.title}
          color={item.color}
          showDetails={showTaskDetailsItem}
          showCheckCircle={showCheckCircleItem}
        />
      )}
    />
  );
};
