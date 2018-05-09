import React from "react";
import { DrawerNavigator, StackNavigator } from "react-navigation";
import { TouchableOpacity } from 'react-native';

import { Icon } from '../../components';
import DrawerSideMenu from "./drawerSideMenu";
import { width } from "../../utilities";
import styles, { COLOR } from '../../styles';
// Routes
import Profile from "../profile/profile";
import AboutUs from "../aboutUs/aboutUs";

const MenuIcon = ({ navigation }) => {
  return (
    <TouchableOpacity style={[styles.ph16, styles.pv5]} onPress={() => {
      navigation.navigate("DrawerOpen");
    }}>
      <Icon name="menu" color={COLOR.WHITE} size={30}/>
    </TouchableOpacity>
  )
};

const DRAWER_ROUTES = StackNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          title: "Profile",
          headerLeft: <MenuIcon navigation={navigation}/>
        };
      }
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        title: "About Us"
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
