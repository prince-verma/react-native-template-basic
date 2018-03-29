import React from "react";
import { Text, TouchableHighlight, TouchableOpacity, View, StyleSheet } from "react-native";
import { getResetAction } from "../../utilities";
import styles from "../../styles";

export default class Menu extends React.PureComponent {
  navigateToMenu = () => {
    const { navigateTo, extras } = this.props;
    const { selectMenu, navigation, rootNavigation } = extras;

    if (navigateTo === "Sign out") {
      rootNavigation.dispatch(getResetAction("Welcome", 0));
    } else {
      navigation.dispatch(getResetAction(navigateTo));
    }
  };

  render() {
    const { navigateTo, icon, extras, title } = this.props;
    const { selectMenu, navigation } = extras;
    const activeItemKey =
      navigation.state &&
      navigation.state.routes[0] &&
      navigation.state.routes[0].routes[0] &&
      navigation.state.routes[0].routes[0].routeName;
    const isSelected = activeItemKey === navigateTo;

    return (
      <TouchableHighlight
        underlayColor={"rgba(155,155,155,0.3)"}
        style={[componentStyles.menuStyle, styles.mv1, isSelected && { backgroundColor: "rgba(155,155,155,0.3)" }]}
        onPress={this.navigateToMenu}
      >
        <View style={[{ flex: 1 }, styles.flexRow, styles.mv2]}>
          {/* ----------------- icon --------------------------- */}
          {/* <Icon name={icon} color={isSelected ? "#0059a3" : "#9B9B9B"} size={24} /> */}
          {/* ----------------- icon --------------------------- */}

          {/* ----------------- title --------------------------- */}
          <View style={{ justifyContent: "center" }}>
            <Text verticalAlign={"center"} style={[componentStyles.textStyle]}>
              {title}
            </Text>
          </View>
          {/* ----------------- title --------------------------- */}
        </View>
      </TouchableHighlight>
    );
  }
}

const componentStyles = StyleSheet.create({
  menuStyle: {
    flex: 1,
    maxHeight: 48,
    paddingHorizontal: 18,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  textStyle: {
    paddingLeft: 30,
    fontSize: 14,
    lineHeight: 16,
    fontFamily: "Roboto-Medium"
  }
});
