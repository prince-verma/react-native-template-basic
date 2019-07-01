import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './login/login';
import Signup from './signup/signup';
import Welcome from './welcome/welcome';

import { nullHeader } from '../components';
import { WELCOME, LOGIN, SIGN_UP } from '../constants';
import config from "../../config";

const ROUTE_CONFIG = {
  [WELCOME]: {
    screen: Welcome,
    navigationOptions: nullHeader
  },
  [LOGIN]: {
    screen: Login,
    navigationOptions: {
      title: 'Login'
    }
  },
  [SIGN_UP]: {
    screen: Signup,
    navigationOptions: {
      title: 'Signup'
    }
  },
};
const STACK_NAVIGATOR_CONFIG = {
  initialRouteName: WELCOME,
  headerMode: 'float',
  defaultNavigationOptions: config.defaultNavigationOptions
};

export default createStackNavigator(ROUTE_CONFIG, STACK_NAVIGATOR_CONFIG);
