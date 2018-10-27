import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Login from './login/login';
import Signup from './signup/signup';
import Welcome from './welcome/welcome';

import styles, { COLOR } from '../styles';
import { nullHeader } from '../components';
import { WELCOME, LOGIN, SIGN_UP } from '../utilities';

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
  navigationOptions: {
    headerStyle: styles.bgApp,
    headerBackTitleStyle: COLOR.WHITE,
    headerTintColor: COLOR.WHITE,
    headerTitleStyle: styles.cWhite
  }
};

export default createStackNavigator(ROUTE_CONFIG, STACK_NAVIGATOR_CONFIG);
