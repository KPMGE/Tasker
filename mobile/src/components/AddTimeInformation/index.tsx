import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { ListTasks } from "../ListTasks";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { theme } from "../../global/theme";
import styles from "./styles";

/*

        <View style={styles.datePickerContainer}>
          {show && (
            <DateTimePicker
              value={date}
              mode="datetime"
              display="default"
              onChange={onChange as any}
            />
          )}
        </View>

*/

export const AddTimeInformation = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(true);

  const toggleDatePicker = () => {
    setShow(!show);
  };

  const onChange = (event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.calendarContainer}>
          <Feather name="calendar" size={24} color={theme.app.lightGray} />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign
            name="clockcircleo"
            size={22}
            color={theme.app.lightGray}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listContainer}>
          <Text style={styles.listText}>Inbox</Text>
          <View style={styles.listCircle} />
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <ListTasks showCheckCircleItem={true} showTaskDetailsItem={false} />
      </View>
    </View>
  );
};
