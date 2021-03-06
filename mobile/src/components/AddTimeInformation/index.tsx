import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { ListTasks } from "../ListTasks";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

import { theme } from "../../global/theme";
import styles from "./styles";
import { ListType } from "../../@types";

interface AddTimeInformationProps {
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  onSelectList: React.Dispatch<React.SetStateAction<string>>;
  lists: ListType[] | null;
}

export const AddTimeInformation: React.FC<AddTimeInformationProps> = ({
  setDate,
  onSelectList,
  lists,
}) => {
  if (!lists) {
    return null;
  }

  const [selectedListTitle, setSelectedListTitle] = useState(lists[0].title);
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [clockColor, setClockColor] = useState("");
  const [calendarColor, setCalendarColor] = useState("");
  const [colorCircle, setColorCircle] = useState(lists[0].color || "#000");

  const onSelectListItem = (name: string, list_id: string) => {
    setSelectedListTitle(name);
    onSelectList(list_id);
  };

  const onChange = (event, selectedDate: Date) => {
    const currentDate = selectedDate || new Date();
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    // this date will be stored in the date state!
    //alert(selectedDate.getDate());
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
          <Text style={styles.listText}>{selectedListTitle}</Text>
          <View style={[styles.listCircle, { backgroundColor: colorCircle }]} />
        </View>
      </View>

      <View style={styles.mainContent}>
        <ListTasks
          onSelectListItem={onSelectListItem}
          showCheckCircleItem={true}
          showTaskDetailsItem={false}
          setNewColor={setColorCircle}
        />
      </View>

      {show && (
        <DateTimePicker
          value={new Date()}
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
