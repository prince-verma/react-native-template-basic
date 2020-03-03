import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styles from '../../styles';

export default function AboutUs(props) {
  const { navigation } = props;

  const openDrawer = () => navigation.openDrawer();

  return (
    <View style={[styles.center, styles.f1]}>
      <Text>About Us</Text>
      <Text onPress={openDrawer}>Open Drawer</Text>
    </View>
  );
}

AboutUs.propTypes = {
  navigation: PropTypes.object,
};
