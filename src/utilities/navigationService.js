import React from 'react';
import { StackActions, NavigationActions, createStackNavigator } from 'react-navigation';
import { BackIcon, MenuIcon } from '../components/header';
import styles, { COLOR } from '../styles';

export function getStackResetAction(routeNames, index = 0) {
  const actionJson = { index };

  if (Array.isArray(routeNames)) {
    actionJson.actions = routeNames.map(route => NavigationActions.navigate({ routeName: route }));
  } else {
    actionJson.actions = [NavigationActions.navigate({ routeName: routeNames })];
  }
  return StackActions.reset(actionJson);
}

export const customNavOptions = (title, isMenuIcon) => ({ navigation }) => {
  return {
    title,
    headerLeft: isMenuIcon ? <MenuIcon navigation={navigation} /> : <BackIcon navigation={navigation} />,
    headerStyle: styles.bgApp,
    headerBackTitleStyle: COLOR.WHITE,
    headerTintColor: COLOR.WHITE,
    headerTitleStyle: styles.cWhite
  };
};

export const containerStackNavigator = (screen, title = '', isMenuIcon = true,) => {
  return createStackNavigator({ title: screen }, { navigationOptions: customNavOptions(title, isMenuIcon) });
};
