import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

export default class Welcome extends React.Component {
  login = () => {
    this.props.navigation.navigate("Login");
  };
  signup = () => {
    this.props.navigation.navigate("Signup");
  };

  render() {
    return (
      <View style={[styles.center, { flex: 1 }]}>
        <Text>Welcome Screen</Text>
        <Text onPress={this.login}>Login</Text>
        <Text onPress={this.signup}>signup</Text>
      </View>
    );
  }
}
