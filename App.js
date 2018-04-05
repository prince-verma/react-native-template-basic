import React, { Component } from "react";
import { View } from "react-native";
import Index from "./src/scenes";
import { AlertView, SnackBar } from "./src/components";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Index />
        <AlertView id={"Alert_Root_App"} />
        <SnackBar id={"SnackBar_Root_App"} />
      </View>
    );
  }
}
