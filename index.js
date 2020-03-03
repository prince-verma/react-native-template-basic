import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import SnackBar from 'react-native-swipeable-snackbar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { name as appName } from './app.json';
import styles, { COLOR } from './src/styles';
import AppEntry from './src/scenes/app';
import { AlertView } from './src/components/alertView';

import store from './src/redux/store';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.f1}>
          <StatusBar backgroundColor={COLOR.APP_DARK} barStyle="light-content" />
          <AppEntry />
          <AlertView id={'Alert_Root_App'} />
          <SnackBar id={'SnackBar_Root_App'} position={'top'} marginFromTop={30} />
        </View>
      </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => App);
