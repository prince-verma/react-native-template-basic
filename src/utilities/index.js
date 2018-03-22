import { Dimensions } from "react-native";
import { NavigationActions } from "react-navigation";

import { isFunction, isAndroid, isIos } from "./validations";
import * as Api from "./api";
import * as Storage from "./storage";
import {
  getResetAction,
  navigate,
  setTopLevelNavigator,
  dispatch
} from "./navigationService";

const { width, height } = Dimensions.get("window");

export {
  width,
  height,
  Api,
  isFunction,
  isAndroid,
  isIos,
  Storage,
  getResetAction,
  navigate,
  dispatch,
  setTopLevelNavigator
};
