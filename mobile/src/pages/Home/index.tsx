import React, { useState } from "react";
import { Text, View } from "react-native";
import { Backgroud } from "../../components/Backgroud";
import { ListTasks } from "../../components/ListTasks";
import { AddTasksButtons } from "../../components/AddTasksButtons";
import { CircleButton } from "../../components/CircleButton";
import { TodayTasks } from "../../components/TodayTasks";

import { useLists } from "../../hooks/useLists";

import styles from "./styles";

export const Home = () => {
  const { lists } = useLists();
  console.log("Lists!", lists);
  const [showAddButtons, setShowAddButtons] = useState(false);

  const toggleShowAddButtons = () => {
    setShowAddButtons(!showAddButtons);
  };

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
