import React from "react";
import { Text, View } from "react-native";
import styles from "./inputStyle";

export default function Error(props) {
  let {
    errorMessage,
    errorTextStyle,
    errorIcon,
    errorIconSize,
    errorIconColor,
    width
  } = props;

  return (
    <View style={[{ width }, styles.errorView]}>
      <Text style={[styles.errorTextStyle, errorTextStyle]}>
        {errorMessage}
      </Text>
    </View>
  );
}
