import React from "react";
import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import { theme } from "../../global/theme";
import styles from "./styles";

type TaskCheckItemProps = {
  circleColor: string;
};

export const TaskCheckItem = ({ circleColor }: TaskCheckItemProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={true}
          color={theme.listColors.blue}
          style={styles.checkbox}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>Study React Native</Text>
        </View>

        <View style={[styles.circle, { backgroundColor: circleColor }]} />
      </View>
    </View>
  );
};
