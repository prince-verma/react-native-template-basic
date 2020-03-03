import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerSideMenu from './drawerSideMenu';
import { ABOUT_US, APP, INITIAL_APP_ROUTE, PROFILE } from '../../constants';
import Profile from '../profile';
import AboutUs from '../aboutUs';

import { MenuIcon } from '../../components/header';
import config from '../../../config';

const { Navigator: DrawerNavigator, Screen: DrawerScreen } = createDrawerNavigator();
const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <Navigator initialRouteName={INITIAL_APP_ROUTE} screenOptions={config.defaultNavigationOptions}>
      <Screen name={PROFILE} component={Profile} options={({ navigation }) => ({
        headerLeft: () => <MenuIcon navigation={navigation} />,
      })} />
      <Screen name={ABOUT_US} component={AboutUs} />
    </Navigator>
  );
}

export default function Drawer() {
  return (
    <DrawerNavigator drawerContent={DrawerSideMenu}>
      <DrawerScreen name={APP} component={AppStack} />
    </DrawerNavigator>
  );
}
