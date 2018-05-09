import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

export default class Loading extends React.PureComponent {
  render() {
    return <ActivityIndicator style={StyleSheet.absoluteFill}/>;
  }
}
