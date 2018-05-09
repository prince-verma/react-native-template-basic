import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Menu from "./drawerMenu";
import styles from "../../styles/index";

export default class Drawer extends React.PureComponent {
  render() {
    const { props, rootNavigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={[{ flex: 4 }, styles.shadow4, styles.ph16, styles.bgApp]}>
          <View style={[{ flex: 1.2 }, styles.jEnd]}>
            <View style={[styles.circle60, styles.shadow4]}>
              <Text>IMG</Text>
            </View>
          </View>
          <View style={[{ flex: 1 }, styles.jCenter]}>
            <Text style={[styles.cWhite, styles.font14]}>Prince Verma</Text>
            <Text style={[styles.cWhite, styles.font14]}>example@example.com</Text>
          </View>
        </View>
        <View style={componentStyle.menuContainer}>
          <Menu
            extras={{ ...props, rootNavigation }}
            icon={"play-circle-outline"}
            title={"Profile"}
            navigateTo={"Profile"}
          />
          <Menu extras={{ ...props, rootNavigation }} icon={"my-location"} title={"About Us"} navigateTo={"AboutUs"}/>
          <Menu extras={{ ...props, rootNavigation }} icon={"power"} title={"Sign out"} navigateTo={"Sign out"}/>
        </View>
      </View>
    );
  }
}

const componentStyle = StyleSheet.create({
  menuContainer: {
    flex: 10,
    paddingTop: 8,
    justifyContent: "flex-start",
    marginBottom: 50
  }
});
