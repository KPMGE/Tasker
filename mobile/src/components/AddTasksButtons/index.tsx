import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Modal from "react-native-modal";

import styles from "./styles";

import taskImage from "../../assets/Path.jpg";
import listImage from "../../assets/Rectangle.jpg";

type AddTasksButtonsProps = {
  visible: boolean;
  toggle: () => void;
};

export const AddTasksButtons = ({ visible, toggle }: AddTasksButtonsProps) => {
  return (
    <Modal
      isVisible={visible}
      coverScreen={true}
      style={styles.modal}
      statusBarTranslucent={true}
      hasBackdrop={false}
      onBackButtonPress={toggle}
    >
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.button}>
          <Image source={taskImage as any} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>List</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.button}>
          <Image source={listImage as any} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>Task</Text>
          </View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.buttonClose} onPress={toggle}>
        <AntDesign name="closecircle" size={65} color="#006CFF" />
      </TouchableOpacity>
    </Modal>
  );
};
