import React from "react";
import { Keyboard, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { getResetAction } from "../../utilities";
import { Icon, Input } from "../../components";
import styles, { COLOR } from "../../styles";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  onLogin = () => {
    this.props.navigation.dispatch(getResetAction("Drawer"));
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[{ flex: 1 }, styles.bgApp, styles.ph20]}>
          <View style={[styles.pv20]}>
            <Text style={[styles.cWhite, styles.font24]}>Welcome</Text>
          </View>

          <Text style={[styles.cWhite]}>Your email</Text>
          <Input
            type="email"
            borderBottomColor={"#FFF"}
            inputStyle={styles.cWhite}
            placeholder={"example@example.com"}
            placeholderTextColor={"rgba(255,255,255,0.5)"}
            onChangeText={text => {
              this.state.email = text;
            }}
          />

          <Text style={[styles.cWhite]}>Your password</Text>
          <Input
            type="password"
            borderBottomColor={"#FFF"}
            placeholder={"Password"}
            placeholderTextColor={"rgba(255,255,255,0.5)"}
            inputStyle={[styles.cWhite]}
            onChangeText={text => {
              this.state.password = text;
            }}
          />

          <View style={[styles.mv10]}>
            <TouchableOpacity onPress={() => {
            }}>
              <Text style={[styles.cWhite, styles.font16, styles.bold]}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.circle50, styles.bgWhite, styles.shadow2, styles.center, { alignSelf: "flex-end" }]}
            onPress={this.onLogin}
          >
            <Icon name={"keyboard-arrow-right"} size={30} color={COLOR.APP}/>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
