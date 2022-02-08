import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/theme";
import { AddTimeInformation } from "../../components/AddTimeInformation";

import styles from "./styles";
import { useLists } from "../../hooks/useLists";
import { useTask } from "../../hooks/useTask";

export const AddTask = () => {
  const navigation = useNavigation();
  const { lists } = useLists();

  if (!lists) return;

  const firstList = lists[0];

  const {
    description,
    _id,
    color,
    due,
    list_id,
    setDescription,
    setId,
    setDue,
    setListId,
    setColor,
  } = useTask({ ...lists[0].tasks[0], description: "", due: new Date() });

  const [selectedListId, setSelectedListId] = useState(firstList._id);

  const { addTask } = useLists();

  const createTask = async () => {
    if (!description || !due || !selectedListId) {
      alert("Please, enter all needed information");
      return;
    }

    const newTask = {
      description,
      _id,
      color,
      due,
      list_id,
      setDescription,
      setId,
      setDue,
      setListId,
      setColor,
    };

    addTask(newTask);
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
            onChangeText={(text) => setDescription(text)}
          />
        </View>

        <View style={styles.timeInformationContainer}>
          <AddTimeInformation
            onSelectList={setSelectedListId}
            setDate={setDue}
            lists={lists}
          />
        </View>
      </View>
    </View>
  );
};
