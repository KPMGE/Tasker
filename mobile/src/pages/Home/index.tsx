import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ListTasks } from "../../components/ListTasks";
import { TaskCheckList } from "../../components/TaskCheckList";
import { AddTasksButtons } from "../../components/AddTasksButtons";

import styles from "./styles";

export const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
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

      {!openModal && (
        <TouchableOpacity style={styles.button} onPress={toggleModal}>
          <Feather name="plus" size={65} color="#006CFF" />
        </TouchableOpacity>
      )}

      <AddTasksButtons visible={openModal} toggle={toggleModal} />
    </View>
  );
};
