import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: Constants.statusBarHeight + 10,
  },
  title: {
    fontSize: 32,
    alignSelf: "flex-start",
    fontWeight: "bold",
    color: "#000",
    top: Constants.statusBarHeight,
    left: 60,
    marginBottom: 60,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 35,
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  todayTasksContainer: {
    flex: 1,
    width: "100%",
  },
  listTasksContainer: {
    flex: 1,
    paddingLeft: 60,
    width: "100%",
    alignSelf: "flex-end",
    marginRight: 16,
  },
  lists: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.app.grayText,
    opacity: 0.6,
    marginTop: 10,
    marginBottom: 16,
  },
});
