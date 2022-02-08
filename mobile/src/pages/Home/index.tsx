import React, { useReducer, useState } from "react";
import { Text, View } from "react-native";
import { Backgroud } from "../../components/Backgroud";
import { ListTasks } from "../../components/ListTasks";
import { AddTasksButtons } from "../../components/AddTasksButtons";
import { CircleButton } from "../../components/CircleButton";
import { TodayTasks } from "../../components/TodayTasks";

//import { useLists } from "../../hooks/useLists";

import styles from "./styles";

export const Home = () => {
  //const { lists } = useLists();
  const [showAddButtons, toggleShowAddButtons] = useReducer(
    (showAddButtons) => !showAddButtons,
    false
  );

  return (
    <Backgroud>
      <View style={styles.container}>
        <Text style={styles.title}>Today</Text>

        <View style={styles.todayTasksContainer}>
          <TodayTasks />
        </View>

        <View style={styles.listTasksContainer}>
          <Text style={styles.lists}>Lists</Text>
          <ListTasks />
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
