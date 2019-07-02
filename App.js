import React from 'react';
import { StatusBar, View } from 'react-native';
import { useScreens } from 'react-native-screens';
import SnackBar from 'react-native-swipeable-snackbar';

import Index from './src/scenes';
import { AlertView } from './src/components';
import styles, { COLOR } from './src/styles';

useScreens();

const App = () => {
  return (
    <View style={styles.f1}>
      <StatusBar
        backgroundColor={COLOR.APP_DARK}
        barStyle="light-content"
      />
      <Index/>
      <AlertView id={'Alert_Root_App'}/>
      <SnackBar id={'SnackBar_Root_App'} position={'top'} marginFromTop={30}/>
    </View>
  );
};

export default App;
