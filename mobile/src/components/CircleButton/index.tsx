import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Feather } from "@expo/vector-icons";

type CircleButtonProps = TouchableOpacityProps & {
  color?: string;
};

export const CircleButton = (props: CircleButtonProps) => {
  return (
    <TouchableOpacity {...props}>
      <Feather
        name="plus"
        size={65}
        color={props.color ? props.color : "#006CFF"}
      />
    </TouchableOpacity>
  );
};
