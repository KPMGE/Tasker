import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Backgroud } from "../../components/Backgroud";
import { ListTasks } from "../../components/ListTasks";
import { AddTasksButtons } from "../../components/AddTasksButtons";
import { CircleButton } from "../../components/CircleButton";
import { TodayTasks } from "../../components/TodayTasks";
import { ListType } from "../../@types";
import api from "../../services/api";

import styles from "./styles";

export const Home = () => {
  const [showAddButtons, setShowAddButtons] = useState(false);
  const [lists, setLists] = useState<ListType[]>([]);

  const toggleShowAddButtons = () => {
    setShowAddButtons(!showAddButtons);
  };

  useEffect(() => {
    const getAllLists = async () => {
      const response = await api.get("/lists");
      setLists(response.data);
    };

<<<<<<< HEAD
    console.log("Fetch tasks");

=======
>>>>>>> 57fbd62dd0b08433471cf3ce19fb819d4f385d7c
    getAllLists();
  }, []);

  return (
    <Backgroud>
      <View style={styles.container}>
        <Text style={styles.title}>Today</Text>

        <View style={styles.todayTasksContainer}>
          <TodayTasks />
        </View>

        <View style={styles.listTasksContainer}>
          <Text style={styles.lists}>Lists</Text>
          <ListTasks lists={lists} />
        </View>

        {!showAddButtons && (
          <CircleButton style={styles.button} onPress={toggleShowAddButtons} />
        )}

        <AddTasksButtons
          visible={showAddButtons}
          toggle={toggleShowAddButtons}
        />
      </View>
    </Backgroud>
  );
};
