import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { ListTasks } from "../ListTasks";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { ListContext } from "../../contexts/ListsContext";

import { theme } from "../../global/theme";
import styles from "./styles";

export const AddTimeInformation = () => {
  const lists = useContext(ListContext);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [clockColor, setClockColor] = useState("");
  const [calendarColor, setCalendarColor] = useState("");
  const [colorCircle, setColorCircle] = useState(lists[0].color || "#fff");

  const onChange = (event, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    // this date will be stored in the date state!
    console.log(selectedDate);
  };

  const openDatePicker = () => {
    setMode("date");
    setShow(true);
    setCalendarColor(theme.listColors.blue);
  };

  const openTimePicker = () => {
    setMode("time");
    setShow(true);
    setClockColor(theme.listColors.blue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.calendarContainer}
          onPress={openDatePicker}
        >
          <Feather
            name="calendar"
            size={24}
            color={calendarColor ? calendarColor : theme.app.lightGray}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={openTimePicker}>
          <AntDesign
            name="clockcircleo"
            size={22}
            color={clockColor ? clockColor : theme.app.lightGray}
          />
        </TouchableOpacity>

        <View style={styles.listContainer}>
          <Text style={styles.listText}>Inbox</Text>
          <View style={[styles.listCircle, { backgroundColor: colorCircle }]} />
        </View>
      </View>

      <View style={styles.mainContent}>
        <ListTasks
          lists={lists}
          showCheckCircleItem={true}
          showTaskDetailsItem={false}
          setNewColor={setColorCircle}
        />
      </View>

      {show && (
        <DateTimePicker
          value={date}
          mode={mode as any}
          display="default"
          dateFormat="day month year"
          is24Hour={false}
          onChange={onChange as any}
        />
      )}
    </View>
  );
};
