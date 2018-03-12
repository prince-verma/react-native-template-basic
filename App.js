import React, { Component } from "react";
import { View } from "react-native";
import Index from "./src/scenes";
import { AlertView } from "./src/components";

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Index />
        <AlertView id={"Root_App"} />
      </View>
    );
  }
}
