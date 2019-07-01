import React from 'react';
import { createDrawerNavigator, createStackNavigator } from 'react-navigation';

import config from '../../../config';
import DrawerSideMenu from './drawerSideMenu';
import { width, } from '../../utilities';
import { ABOUT_US, PROFILE } from '../../constants';

import Profile from '../profile/profile';
import AboutUs from '../aboutUs/aboutUs';
import { MenuIcon } from "../../components/header";

const ROUTES = {
  [PROFILE]: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ( {
      title: 'Profile',
      headerLeft: <MenuIcon navigation={navigation}/>,
    } )
  },
  [ABOUT_US]: {
    screen: AboutUs,
    navigationOptions: ({ navigation }) => ( {
      title: 'About us',
      headerLeft: <MenuIcon navigation={navigation}/>,
    } )
  }
};

const STACK_NAVIGATOR_CONFIG = {
  initialRouteName: PROFILE,
  headerMode: 'float',
  defaultNavigationOptions: config.defaultNavigationOptions
};

const DRAWER_ROUTES = { screen: createStackNavigator(ROUTES, STACK_NAVIGATOR_CONFIG) };

const DRAWER_ROUTES_CONFIG = {
  drawerWidth: width - 50,
  useNativeAnimations: true,
  contentComponent: props => <DrawerSideMenu {...props} />,
};

export default createDrawerNavigator(DRAWER_ROUTES, DRAWER_ROUTES_CONFIG);
