import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";

import { width } from "../../utilities";
import DrawerSideMenu from "./drawerSideMenu";
import styles, { COLOR } from '../../styles';
// Routes
import Profile from "../profile/profile";
import AboutUs from "../aboutUs/aboutUs";

const DRAWER_ROUTES = StackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Profile"
        };
      }
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: ({ navigation }) => {
        return {
          title: "About Us"
        };
      }
    }
  },
  {
    initialRouteName: "Profile",
    navigationOptions: {
      headerStyle: styles.bgApp,
      headerBackTitleStyle: COLOR.WHITE,
      headerTintColor: COLOR.WHITE,
      headerTitleStyle: styles.cWhite
    }
  }
);

export default class MainDrawer extends React.PureComponent {
  render() {
    const { rootNavigation } = this.props;

    const Drawer = DrawerNavigator(
      {
        drawerNavigatorWrapper: {
          screen: DRAWER_ROUTES
        }
      },
      {
        drawerWidth: width - 50,
        contentComponent: props => <DrawerSideMenu props={props} rootNavigation={rootNavigation}/>
      }
    );
    return <Drawer/>;
  }
}
