import React, { useState } from "react";
import { View, Text, Modal } from "react-native";
import { TaskCheckList } from "../TaskCheckList";
import styles from "./styles";

type ListDetailsProps = {
  color: string;
};

export const ListDetails = ({ color }: ListDetailsProps) => {
  const [visible, setVisible] = useState(true);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <Modal
      onRequestClose={closeModal}
      presentationStyle="fullScreen"
      animationType="slide"
      visible={visible}
    >
      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Shopping</Text>
          <Text style={styles.subTitle}>3 tasks</Text>
        </View>

        <View style={styles.tasksContainer}>
          <TaskCheckList
            checkboxColorItem={"rgba(255, 255, 255, 0.5)"}
            showRightCircleItem={false}
            taskTextItemColor="#fff"
          />
        </View>
      </View>
    </Modal>
  );
};
