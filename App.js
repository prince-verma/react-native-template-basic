import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Index from './src/scenes';
import { AlertView, SnackBar } from './src/components';
import styles, { COLOR } from './src/styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.f1}>
        <StatusBar
          backgroundColor={COLOR.APP_DARK}
          barStyle="light-content"
        />
        <Index />
        <AlertView id={'Alert_Root_App'} />
        <SnackBar id={'SnackBar_Root_App'} />
      </View>
    );
  }
}
