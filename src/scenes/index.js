import React from 'react';
import { createSwitchNavigator } from 'react-navigation';

import AuthStack from './authStack';
import AuthLoading from './authLoading';
import App from './drawer/drawer';

import { APP_STACK, AUTH_LOADING, AUTH_STACK } from '../utilities';

export default createSwitchNavigator({
  [AUTH_LOADING]: AuthLoading,
  [APP_STACK]: App,
  [AUTH_STACK]: AuthStack
}, {
  initialRouteName: AUTH_LOADING,
});
