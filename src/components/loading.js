import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

export default class Loading extends React.PureComponent {
  render() {
    return <ActivityIndicator style={StyleSheet.absoluteFill} />;
  }
}
