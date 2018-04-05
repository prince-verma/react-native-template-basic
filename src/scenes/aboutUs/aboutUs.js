import React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";

export default class AboutUs extends React.Component {
  openDrawer = () => {
    this.props.navigation.navigate("DrawerOpen");
  };
  render() {
    return (
      <View style={[styles.center, { flex: 1 }]}>
        <Text>About Us</Text>
        <Text onPress={this.openDrawer}>Open Drawer</Text>
      </View>
    );
  }
}
