import React from "react";
import { StackNavigator } from "react-navigation";

import Main from "./main";
import Login from "./login/login";
import Signup from "./signup/signup";
import Welcome from "./welcome/welcome";
import Drawer from "./drawer/drawer";

import styles from "../styles";
import { getResetAction } from "../utilities";

let nullHeader = ({ navigation }) => ({
  header: null
});

let ROUTE_CONFIG = {
  Welcome: {
    screen: Welcome,
    navigationOptions: nullHeader
  },
  Login: {
    screen: Login,
    navigationOptions: nullHeader
  },
  Signup: {
    screen: Signup,
    navigationOptions: nullHeader
  },
  Main: {
    screen: Main,
    navigationOptions: nullHeader
  },
  Drawer: {
    screen: ({ navigation }) => <Drawer rootNavigation={navigation} />,
    navigationOptions: nullHeader
  }
};
let STACK_NAVIGATOR_CONFIG = { initialRouteName: "Main" };

export default StackNavigator(ROUTE_CONFIG, STACK_NAVIGATOR_CONFIG);
