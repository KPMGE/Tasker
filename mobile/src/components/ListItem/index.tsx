import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListDetails } from "../ListDetails";
import { AntDesign } from "@expo/vector-icons";
import { TaskType } from "../../@types";

import styles from "./styles";

type ListItemProps = {
  color: string;
  tasks: TaskType[];
  title: string;
  showDetails?: boolean;
  showCheckCircle?: boolean;
};

export const ListItem = ({
  color,
  title,
  tasks,
  showDetails = true,
  showCheckCircle = false,
}: ListItemProps) => {
  const [show, setShow] = useState(false);

  const toggleShowDetails = () => {
    setShow(!show);
  };

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
