import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import DrawerSideMenu from './drawerSideMenu';
import { ABOUT_US, PROFILE, width, containerStackNavigator } from '../../utilities';

import Profile from '../profile/profile';
import AboutUs from '../aboutUs/aboutUs';


const DRAWER_ROUTES = {
  [PROFILE]: {
    screen: containerStackNavigator(Profile, 'Profile'),
  },
  [ABOUT_US]: {
    screen: containerStackNavigator(AboutUs, 'About Us'),
  }
};
const DRAWER_ROUTES_CONFIG = {
  initialRouteName: PROFILE,
  drawerWidth: width - 50,
  contentComponent: props => <DrawerSideMenu {...props} />
};

export default createDrawerNavigator(DRAWER_ROUTES, DRAWER_ROUTES_CONFIG);
