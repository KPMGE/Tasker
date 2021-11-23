import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageSourcePropType,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./styles";

import taskImage from "../../assets/Path.jpg";
import listImage from "../../assets/Rectangle.jpg";

type ScreensListType = {
  Main: undefined;
  AddTask: undefined;
};

type ScreensTypeProps = NavigationProp<ScreensListType>;

type AddTasksButtonsProps = {
  visible: boolean;
  toggle: () => void;
};

export const AddTasksButtons = ({ visible, toggle }: AddTasksButtonsProps) => {
  const navigation = useNavigation<ScreensTypeProps>();

  const navigateToAddTasks = () => {
    toggle();
    navigation.navigate("AddTask");
  };

  return (
    <Modal
      isVisible={visible}
      coverScreen={true}
      style={styles.modal}
      statusBarTranslucent={true}
      hasBackdrop={false}
      onBackButtonPress={toggle}
      animationOut="zoomOutDown"
      animationIn="zoomInDown"
    >
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.button}>
          <Image source={taskImage as ImageSourcePropType} />
          <View style={styles.textContainer}>
            <Text style={styles.text}>List</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.separator} />

        <TouchableOpacity style={styles.button} onPress={navigateToAddTasks}>
          <Image source={listImage as ImageSourcePropType} />
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
