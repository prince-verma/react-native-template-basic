import { Dimensions } from 'react-native';
import * as Api from './api';
import * as Storage from './storage';

const { width, height } = Dimensions.get('window');

export { width, height, Api, Storage };
export * from './validations';
export * from './constants';
export * from './navigationService';
