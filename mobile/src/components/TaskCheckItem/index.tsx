import React, { useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import { theme } from "../../global/theme";
import styles from "./styles";

type TaskCheckItemProps = {
  circleColor: string;
};

export const TaskCheckItem = ({ circleColor }: TaskCheckItemProps) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);

  const toggleCheckbox = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={checkboxChecked}
          color={theme.listColors.blue}
          style={styles.checkbox}
          onValueChange={toggleCheckbox}
        />
        <View style={styles.descriptionContainer}>
          <Text
            style={[styles.description, { opacity: checkboxChecked ? 0.5 : 1 }]}
          >
            Study React Native
          </Text>
        </View>

        <View style={[styles.circle, { backgroundColor: circleColor }]} />
      </View>
    </View>
  );
};
