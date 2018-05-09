import React from 'react';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import Zocial from "react-native-vector-icons/Zocial";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Foundation from "react-native-vector-icons/Foundation";

export default class VectorIcon extends React.PureComponent {
  render() {
    let {
      type = "MaterialIcons", ...other
    } = this.props;

    switch (type) {
      case "MaterialIcons":
        return <MaterialIcons {...other}/>;
      case "FontAwesome":
        return <FontAwesome {...other}/>;
      case "MaterialCommunityIcons":
        return <MaterialCommunityIcons {...other}/>;
      case "Feather":
        return <Feather {...other}/>;
      case "Entypo":
        return <Entypo {...other}/>;
      case "EvilIcons":
        return <EvilIcons {...other}/>;
      case "Ionicons":
        return <Ionicons {...other}/>;
      case "Octicons":
        return <Octicons {...other}/>;
      case "Zocial":
        return <Zocial {...other}/>;
      case "SimpleLineIcons":
        return <SimpleLineIcons {...other}/>;
      case "Foundation":
        return <Foundation {...other}/>;
      default:
        return <MaterialIcons {...other}/>;
    }
  }
}
