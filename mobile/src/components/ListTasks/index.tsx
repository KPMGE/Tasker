import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ListItem } from "../ListItem";
import api from "../../services/api";
import { ListType } from "../../@types";

type ListTaskProps = {
  showTaskDetailsItem?: boolean;
  showCheckCircleItem?: boolean;
};

export const ListTasks = ({
  showCheckCircleItem,
  showTaskDetailsItem,
}: ListTaskProps) => {
  const [lists, setLists] = useState<ListType[]>([]);

  useEffect(() => {
    const getAllLists = async () => {
      const response = await api.get("/lists");
      setLists(response.data);
    };

    getAllLists();
  }, []);

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
