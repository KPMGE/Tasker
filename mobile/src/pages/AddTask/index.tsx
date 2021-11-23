import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/theme";
import { AddTimeInformation } from "../../components/AddTimeInformation";
import api from "../../services/api";

import styles from "./styles";

export const AddTask = () => {
  const navigation = useNavigation();
  const [taskText, setTaskText] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedListId, setSelectedListId] = useState("");

  const createTask = async () => {
    if (!taskText || !date || !selectedListId) {
      alert("Please, enter all needed information");
      return;
    }

    try {
      await api.post("/tasks/new", {
        description: taskText,
        due: date,
        list_id: selectedListId,
      });

      console.log("Task created!");
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textTopButton}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={createTask}>
          <Text style={styles.textTopButton}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainSection}>
        <View style={styles.inputContainer}>
          <View style={styles.circle} />
          <TextInput
            placeholder="What do you want do to?"
            placeholderTextColor="rgba(0, 0, 0, 0.2)"
            selectionColor={theme.listColors.blue}
            style={styles.textInput}
            onChangeText={(text) => setTaskText(text)}
          />
        </View>

        <View style={styles.timeInformationContainer}>
          <AddTimeInformation
            onSelectList={setSelectedListId}
            setDate={setDate}
          />
        </View>
      </View>
    </View>
  );
};
