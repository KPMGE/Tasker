import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

type ListItemProps = {
  color: string;
};

export const ListItem = ({ color }: ListItemProps) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.texts}>
        <Text style={styles.title}>Inbox</Text>
        <Text style={styles.amountTasks}>4 tasks</Text>
      </View>
    </View>
  );
};
