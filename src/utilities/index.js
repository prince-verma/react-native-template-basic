import { Dimensions } from "react-native";

import { isAndroid, isFunction, isIos } from "./validations";
import * as Api from "./api";
import * as Storage from "./storage";
import { dispatch, getResetAction, navigate, setTopLevelNavigator } from "./navigationService";

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
