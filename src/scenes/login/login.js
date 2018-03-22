import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { getResetAction } from "../../utilities";

export default class Login extends React.Component {
  onLogin = () => {
    this.props.navigation.dispatch(getResetAction("Drawer"));
  };
  onSignup = () => {
    this.props.navigation.dispatch(getResetAction(["Welcome", "Signup"], 1));
  };

  render() {
    return (
      <View style={[styles.center, { flex: 1 }]}>
        <Text>Login Screen</Text>
        <Text onPress={this.onLogin}>Sucess Login</Text>
        <Text onPress={this.onSignup}>Create an account</Text>
      </View>
    );
  }
}
