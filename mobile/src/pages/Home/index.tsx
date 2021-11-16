import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ListTasks } from "../../components/ListTasks";
import { TaskCheckList } from "../../components/TaskCheckList";

import styles from "./styles";

export const Home = () => {
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

      <TouchableOpacity style={styles.button}>
        <Feather name="plus" size={65} color="#006CFF" />
      </TouchableOpacity>
    </View>
  );
};
