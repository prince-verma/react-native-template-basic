import React from 'react';
import { StatusBar, View } from 'react-native';
import SnackBar from 'react-native-swipeable-snackbar';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import styles, { COLOR } from './src/styles';
import AppEntry from './src/scenes';
import { AlertView } from './src/components/alertView';

import store from './src/redux/store';

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
