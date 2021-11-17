import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    marginTop: Constants.statusBarHeight + 10,
  },
  line: {
    height: 5,
    width: 40,
    position: "absolute",
    top: 5,
    backgroundColor: "#252A31",
    borderRadius: 5,
    opacity: 0.2,
  },
  titleContainer: {
    alignSelf: "flex-start",
    marginTop: 30,
    marginLeft: 60,
    marginBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "#fff",
    marginBottom: 3,
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
    opacity: 0.5,
  },
  tasksContainer: {
    flex: 1,
    width: "100%",
  },
});
