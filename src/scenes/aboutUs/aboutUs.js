import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';

export default class AboutUs extends React.Component {
  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  render() {
    return (
      <View style={[styles.center, styles.f1]}>
        <Text>About Us</Text>
        <Text onPress={this.openDrawer}>Open Drawer</Text>
      </View>
    );
  }
}
