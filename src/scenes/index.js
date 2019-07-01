import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthStack from './authStack';
import AuthLoading from './authLoading';
import App from './drawer/drawer';

import { APP_STACK, AUTH_LOADING, AUTH_STACK } from '../constants';

const routes = {
  [AUTH_LOADING]: AuthLoading,
  [AUTH_STACK]: AuthStack,
  [APP_STACK]: App,
};
const routeConfig = {
  initialRouteName: AUTH_LOADING,
};

export default createAppContainer(createSwitchNavigator(routes, routeConfig))
