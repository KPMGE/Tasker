import React, { useReducer } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TaskCheckList } from "../TaskCheckList";
import Modal from "react-native-modal";
import { TaskType } from "../../@types";
import styles from "./styles";

type ListDetailsProps = {
  title: string;
  color: string;
  tasks: TaskType[];
};

export const ListDetails = ({ title, color, tasks }: ListDetailsProps) => {
  const [visible, toggle] = useReducer((visible) => !visible, true);

  const amountTasks = tasks.length;

  return (
    <Modal
      isVisible={visible}
      style={{ width: "100%", margin: 0 }}
      animationIn="slideInUp"
      hasBackdrop={false}
      swipeDirection="down"
      onBackButtonPress={toggle}
      onSwipeComplete={toggle}
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        <TouchableOpacity style={styles.line} onPress={toggle} />

        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{amountTasks} tasks</Text>
        </View>

        <View style={styles.tasksContainer}>
          <TaskCheckList
            tasks={tasks}
            checkboxColorItem={"rgba(255, 255, 255, 0.5)"}
            showRightCircleItem={false}
            taskTextItemColor="#fff"
          />
        </View>
      </View>
    </Modal>
  );
};
