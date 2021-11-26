import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderColor: theme.app.grayText,
    opacity: 0.1,
    borderWidth: 1,
    alignSelf: "flex-end",
    width: "90%",
  },
});
