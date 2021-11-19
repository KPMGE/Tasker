import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListDetails } from "../ListDetails";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

type ListItemProps = {
  color: string;
  showDetails?: boolean;
  showCheckCircle?: boolean;
};

export const ListItem = ({
  color,
  showDetails = true,
  showCheckCircle = false,
}: ListItemProps) => {
  const [show, setShow] = useState(false);

  const toggleShowDetails = () => {
    setShow(!show);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={toggleShowDetails}
    >
      {showDetails && show && <ListDetails color={color} />}

      <View style={styles.texts}>
        <Text style={styles.title}>Inbox</Text>
        <Text style={styles.amountTasks}>4 tasks</Text>
      </View>

      {showCheckCircle && show && (
        <View style={styles.checkContainer}>
          <AntDesign name="checkcircle" size={28} color="#fff" />
        </View>
      )}
    </TouchableOpacity>
  );
};
