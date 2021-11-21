import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListDetails } from "../ListDetails";
import { AntDesign } from "@expo/vector-icons";
import api from "../../services/api";
import { TaskType } from "../../@types";

import styles from "./styles";

type ListItemProps = {
  color: string;
  list_id: string;
  title: string;
  showDetails?: boolean;
  showCheckCircle?: boolean;
};

export const ListItem = ({
  color,
  title,
  list_id,
  showDetails = true,
  showCheckCircle = false,
}: ListItemProps) => {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const toggleShowDetails = () => {
    setShow(!show);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await api.get(`/list/tasks/${list_id}`);
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const amountTasks = tasks.length;

  console.log("TASKS: ", tasks);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={toggleShowDetails}
    >
      {showDetails && show && (
        <ListDetails title={title} tasks={tasks} color={color} />
      )}

      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.amountTasks}>{amountTasks} tasks</Text>
      </View>

      {showCheckCircle && show && (
        <View style={styles.checkContainer}>
          <AntDesign name="checkcircle" size={28} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
};
