import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Alert, showSnackBar, Input } from "../components";

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  showAlert = () => {
    Alert({
      title: "Title",
      message: "Your cutom message will stay here.",
      buttons: [{ title: "Ok" }]
    });
  };

  displaySnackBar = () => {
    showSnackBar({
      duration: 5 * 1000,
      position: "top",
      message: "Your cutom message will stay here.",
      confirmText: "ok"
    });
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>This project is build using RN Basic template.</Text>

        <TouchableOpacity onPress={this.showAlert}>
          <View>
            <Text>Show Alert</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.displaySnackBar}>
          <View>
            <Text>Show Snackbar</Text>
          </View>
        </TouchableOpacity>

        <Input type="email" />
      </View>
    );
  }
}
