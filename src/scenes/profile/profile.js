import React from "react";
import { Text, View } from "react-native";
import styles from "../../styles";

export default class Profile extends React.Component {
  goToAboutUS = () => {
    this.props.navigation.navigate("AboutUs");
  };

  openDrawer = () => {
    this.props.navigation.navigate("DrawerOpen");
  };

  render() {
    return (
      <View style={[styles.center, { flex: 1 }]}>
        <Text>My Profile</Text>
        <Text onPress={this.openDrawer}>Open Drawer</Text>
        <Text onPress={this.goToAboutUS}>go to About us screen </Text>
      </View>
    );
  }
}
