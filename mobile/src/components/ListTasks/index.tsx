import React from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "../ListItem";
import { useLists } from "../../hooks/useLists";

type ListTaskProps = {
  showTaskDetailsItem?: boolean;
  showCheckCircleItem?: boolean;
  setNewColor?: (color: string) => void;
  onSelectListItem?: (title: string, list_id: string) => void;
};

export const ListTasks: React.FC<ListTaskProps> = ({
  showCheckCircleItem,
  showTaskDetailsItem,
  setNewColor,
  onSelectListItem,
}) => {
  const { lists } = useLists();

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
          list_id={item._id}
          showDetails={showTaskDetailsItem}
          showCheckCircle={showCheckCircleItem}
          setNewColor={setNewColor}
          onSelect={onSelectListItem}
        />
      )}
    />
  );
};
