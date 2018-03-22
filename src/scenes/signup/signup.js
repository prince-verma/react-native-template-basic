import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import { getResetAction } from "../../utilities";

export default class Login extends React.Component {
  onSignup = () => {
    this.props.navigation.dispatch(getResetAction("Drawer"));
  };
  onLogin = () => {
    this.props.navigation.dispatch(getResetAction(["Welcome", "Login"], 1));
  };

  render() {
    return (
      <View style={[styles.center, { flex: 1 }]}>
        <Text>Signup Screen</Text>
        <Text onPress={this.onSignup}>Sucess Signup</Text>
        <Text onPress={this.onLogin}>Have an account, Login here</Text>
      </View>
    );
  }
}
