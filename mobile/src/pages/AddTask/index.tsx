import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/theme";
import styles from "./styles";

export const AddTask = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topButtonsContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.textTopButton}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity>
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
          />
        </View>
      </View>
    </View>
  );
};
