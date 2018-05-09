import React from "react";
import { StackNavigator } from "react-navigation";

import Main from "./main";
import Login from "./login/login";
import Signup from "./signup/signup";
import Welcome from "./welcome/welcome";
import Drawer from "./drawer/drawer";

import styles, { COLOR } from "../styles";

const nullHeader = ({ navigation }) => ( {
  header: null
} );

const ROUTE_CONFIG = {
  Welcome: {
    screen: Welcome,
    navigationOptions: nullHeader
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Signup"
    }
  },
  Main: {
    screen: Main,
    navigationOptions: nullHeader
  },
  Drawer: {
    screen: ({ navigation }) => <Drawer rootNavigation={navigation}/>,
    navigationOptions: nullHeader
  }
};
const STACK_NAVIGATOR_CONFIG = {
  initialRouteName: "Main",
  navigationOptions: {
    headerStyle: styles.bgApp,
    headerBackTitleStyle: COLOR.WHITE,
    headerTintColor: COLOR.WHITE,
    headerTitleStyle: styles.cWhite
  }
};

export default StackNavigator(ROUTE_CONFIG, STACK_NAVIGATOR_CONFIG);
