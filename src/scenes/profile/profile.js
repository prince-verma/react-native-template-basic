import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../styles';
import { ABOUT_US } from '../../utilities';

export default class Profile extends React.Component {
  goToAboutUS = () => {
    const { navigation } = this.props;
    navigation.navigate(ABOUT_US);
  };

  openDrawer = () => {
    const { navigation } = this.props;
    navigation.openDrawer();
  };

  render() {
    return (
      <View style={[styles.center, styles.f1]}>
        <Text>My Profile</Text>
        <Text onPress={this.openDrawer}>Open Drawer</Text>
        <Text onPress={this.goToAboutUS}>go to About us screen </Text>
      </View>
    );
  }
}
