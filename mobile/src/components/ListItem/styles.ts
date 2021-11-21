import { StyleSheet } from "react-native";

export default StyleSheet.create({
  deleteAction: {
    flex: 1,
    backgroundColor: "#CF081C",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  deleteActionText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },

  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 70,
    width: "100%",
    borderRadius: 12,
  },
  texts: {
    paddingLeft: 16,
  },
  title: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
  },
  amountTasks: {
    fontSize: 14,
    color: "#fff",
    marginTop: 6,
  },
  checkContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 20,
  },
});
