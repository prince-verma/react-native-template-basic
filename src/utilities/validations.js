import { Platform } from 'react-native';

export function isFunction(func) {
  return func && typeof func === 'function';
}

export const isAndroid = () => Platform.OS === 'android';
export const isIos = () => Platform.OS === 'ios';
