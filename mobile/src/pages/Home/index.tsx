import React, { useState } from "react";
import { Text, View } from "react-native";
import { ListTasks } from "../../components/ListTasks";
import { TaskCheckList } from "../../components/TaskCheckList";
import { AddTasksButtons } from "../../components/AddTasksButtons";
import { CircleButton } from "../../components/CircleButton";

import styles from "./styles";

export const Home = () => {
  const [showAddButtons, setShowAddButtons] = useState(false);

  const toggleShowAddButtons = () => {
    setShowAddButtons(!showAddButtons);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today</Text>

      <View style={styles.todayTasksContainer}>
        <TaskCheckList />
      </View>

      <View style={styles.listTasksContainer}>
        <Text style={styles.lists}>Lists</Text>
        <ListTasks />
      </View>

      {!showAddButtons && (
        <CircleButton style={styles.button} onPress={toggleShowAddButtons} />
      )}

      <AddTasksButtons visible={showAddButtons} toggle={toggleShowAddButtons} />
    </View>
  );
};
