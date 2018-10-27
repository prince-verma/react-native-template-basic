import React from 'react';
import { APP_STACK, AUTH_STACK } from '../utilities';
import { StatusBar, View } from 'react-native';
import styles from '../styles';
import { Loading } from '../components';

export default class AuthLoading extends React.Component {
  async componentDidMount() {
    const { navigation } = this.props;
    try {
      const user = await Storage.get('user');

      navigation.navigate(user ? APP_STACK : AUTH_STACK);
    } catch (err) {
      navigation.navigate(AUTH_STACK);
    }
  }

  render() {
    return (
      <View style={styles.f1}>
        <StatusBar barStyle="default" />
        <Loading />
      </View>
    );
  }
}
