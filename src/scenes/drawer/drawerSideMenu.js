import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Menu from "./drawerMenu";

export default class Drawer extends React.PureComponent {
  render() {
    const { props, rootNavigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={{ height: 172, backgroundColor: "rgba(0,0,0,0.2)" }}>
          <Text>Drawer-Header</Text>
        </View>
        <View style={styles.menuContainer}>
          <Menu
            extras={{ ...props, rootNavigation }}
            icon={"play-circle-outline"}
            title={"Profile"}
            navigateTo={"Profile"}
          />
          <Menu
            extras={{ ...props, rootNavigation }}
            icon={"my-location"}
            title={"About Us"}
            navigateTo={"AboutUs"}
          />
          <Menu
            extras={{ ...props, rootNavigation }}
            icon={"power"}
            title={"Sign out"}
            navigateTo={"Sign out"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    paddingTop: 8,
    justifyContent: "flex-start",
    marginBottom: 50
  }
});
