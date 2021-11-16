import React from "react";
import { View } from "react-native";
import styles from "./styles";

type BackgroundProps = {
  children: JSX.Element;
};

export const Backgroud = ({ children }: BackgroundProps) => {
  return <View style={styles.container}>{children}</View>;
};
