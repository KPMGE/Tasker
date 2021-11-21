import React, { useState } from "react";
import { View, Text, Animated, Pressable } from "react-native";
import { ListDetails } from "../ListDetails";
import { AntDesign } from "@expo/vector-icons";
import { TaskType } from "../../@types";
import { Swipeable } from "react-native-gesture-handler";

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
  const amountTasks = tasks.length;

  const toggleShowDetails = () => {
    setShow(!show);
  };

  // Implement this later!
  const deleteList = async (list_id: string) => {
    alert("delete list!");
  };

  const DeleteLeftAction = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });

    return (
      <View style={styles.deleteAction}>
        <Animated.Text
          style={[styles.deleteActionText, { transform: [{ scale }] }]}
        >
          Delete
        </Animated.Text>
      </View>
    );
  };

  return (
    <Swipeable
      onSwipeableLeftWillOpen={() => deleteList("some id")}
      renderLeftActions={DeleteLeftAction}
    >
      <Pressable
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
      </Pressable>
    </Swipeable>
  );
};
