import { TouchableOpacity } from 'react-native';
import styles, { COLOR } from '../../styles';
import Icon from '../icon';
import React from 'react';

export const nullHeader = { header: () => null };

export const MenuIcon = ({ navigation }) => {
  return (
    <TouchableOpacity style={[styles.ph16, styles.pv5]} onPress={() => navigation.openDrawer()}>
      <Icon name={'menu'} color={COLOR.WHITE} size={30} />
    </TouchableOpacity>
  );
};

export const BackIcon = ({ navigation }) => {
  return (
    <TouchableOpacity style={[styles.ph16, styles.pv5]} onPress={() => navigation.openDrawer()}>
      <Icon name={'arrow-back'} color={COLOR.WHITE} size={30} />
    </TouchableOpacity>
  );
};
