import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

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
      <View style={[{ flex: 1 }, styles.bgApp, styles.p20]}>
        <View style={[{ flex: 2 }, styles.aCenter]}>
          <Text style={[styles.cWhite, styles.font24]}>Demo-Template</Text>
          <Text style={[styles.cWhite, styles.font18]}>React-Native-Template-Basic</Text>
        </View>

        <View style={[{ flex: 9 }, styles.bgAppDark, styles.shadow2]}/>

        <View style={[{ flex: 5 }, styles.aCenter]}>
          <View style={[{ flex: 1 }]}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
            }}>
              <View style={[{ flex: 1 }, styles.center]}>
                <Text style={[styles.cWhite, styles.font16, styles.bold]}>Continue with facebook</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[{ flex: 1 }, styles.jCenter]}>
            <Text style={[styles.cWhite]}>or continue using email</Text>
          </View>

          <View style={[{ flex: 1 }, styles.flexRow, styles.aCenter]}>
            <TouchableOpacity style={[styles.mh15]} onPress={this.login}>
              <Text style={[styles.cWhite, styles.font16]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.mh15]} onPress={this.signup}>
              <Text style={[styles.cWhite, styles.font16]}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
