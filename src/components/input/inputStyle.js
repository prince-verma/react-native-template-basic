import { StyleSheet } from "react-native";

export default StyleSheet.create({
  textInput: {
    alignSelf: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1f1f1f"
  },
  errorView: {
    bottom: 6,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  errorTextStyle: {
    flex: 12,
    fontFamily: "Roboto-Regular",
    color: "#d50000"
  }
});
