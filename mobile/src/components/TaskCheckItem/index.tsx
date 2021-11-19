import React, { useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import { theme } from "../../global/theme";
import styles from "./styles";

type TaskCheckItemProps = {
  description: string;
  taskTextColor?: string;
  circleColor?: string;
  showRightCircle?: boolean;
  checkboxColor?: string;
};

export const TaskCheckItem = (props: TaskCheckItemProps) => {
  const {
    circleColor = "blue",
    description,
    showRightCircle = true,
    checkboxColor = theme.listColors.blue,
    taskTextColor = theme.app.grayText,
  } = props;

  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const toggleCheckbox = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkboxChecked}
          color={checkboxColor}
          style={styles.checkbox}
          onValueChange={toggleCheckbox}
        />
        <View style={styles.descriptionContainer}>
          <Text
            style={[
              styles.description,
              {
                opacity: checkboxChecked ? 0.5 : 1,
                color: taskTextColor,
                textDecorationLine: checkboxChecked ? "line-through" : "none",
              },
            ]}
          >
            {description}
          </Text>
        </View>

        {showRightCircle && (
          <View style={[styles.circle, { backgroundColor: circleColor }]} />
        )}
      </View>
    </View>
  );
};
