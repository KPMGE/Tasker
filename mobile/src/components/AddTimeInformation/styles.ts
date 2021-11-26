import { StyleSheet } from "react-native";
import { theme } from "../../global/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonsContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  calendarContainer: {
    marginRight: 30,
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  listText: {
    fontSize: 16,
    color: theme.listColors.blue,
    marginRight: 8,
  },
  listCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  mainContent: {
    paddingHorizontal: 16,
    marginTop: 20,
    flex: 1,
    width: "100%",
  },
});
