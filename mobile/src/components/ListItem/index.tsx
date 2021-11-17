import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ListDetails } from "../ListDetails";

import styles from "./styles";

type ListItemProps = {
  color: string;
};

export const ListItem = ({ color }: ListItemProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={toggleShowDetails}
    >
      {showDetails && <ListDetails color={color} />}

      <View style={styles.texts}>
        <Text style={styles.title}>Inbox</Text>
        <Text style={styles.amountTasks}>4 tasks</Text>
      </View>
    </TouchableOpacity>
  );
};
