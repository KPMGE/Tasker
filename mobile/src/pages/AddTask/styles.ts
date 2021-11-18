import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: Constants.statusBarHeight + 20,
  },
  topButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
    marginBottom: 30,
  },
  textTopButton: {
    fontSize: 18,
    color: theme.listColors.blue,
  },
  mainSection: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
  },
  circle: {
    height: 24,
    width: 24,
    borderColor: theme.app.grayText,
    opacity: 0.2,
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 18,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 20,
  },
  textInput: {
    fontSize: 18,
  },
});
