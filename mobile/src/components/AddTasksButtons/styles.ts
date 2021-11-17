import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  modalView: {
    position: "absolute",
    right: 16,
    bottom: 120,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    borderColor: theme.app.grayText,
    width: "100%",
    borderWidth: 1,
    opacity: 0.1,
  },
  button: {
    width: 230,
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonClose: {
    backgroundColor: "#fff",
    borderRadius: 35,
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  textContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.listColors.blue,
  },
});
