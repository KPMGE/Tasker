import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
  },
  checkbox: {
    height: 24,
    width: 24,
    borderRadius: 12,
  },
  descriptionContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: 20,
  },
  description: {
    fontSize: 18,
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
});
