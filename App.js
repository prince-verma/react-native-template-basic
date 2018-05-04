import React, { Component } from "react";
import { View , StatusBar} from "react-native";
import Index from "./src/scenes";
import { AlertView, SnackBar } from "./src/components";
import styles from './src/styles'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={styles.bgAppDark}
          barStyle="light-content"
        />
        <Index />
        <AlertView id={"Alert_Root_App"} />
        <SnackBar id={"SnackBar_Root_App"} />
      </View>
    );
  }
}
