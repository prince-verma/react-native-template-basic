import { Dimensions } from "react-native";
import { isFunction, isAndroid, isIos } from "./validations";
import * as Api from "./api";

const { width, height } = Dimensions.get("window");

export { width, height, Api, isFunction, isAndroid, isIos };
