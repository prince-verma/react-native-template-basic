import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';

import { updateAuthenticationState } from '../redux/actions/authentication.actions';
import { updateViewportDimensions } from '../redux/actions/viewport.actions';

import Login from './login';
import SignUp from './signup';
import Welcome from './welcome';
import Drawer from './drawer';

import config from '../../config';
import { WELCOME, LOGIN, SIGN_UP, APP_STACK } from '../constants';
import styles from '../styles';
import Loading from '../components/loading';
import { get } from '../utilities/storage';
import { nullHeader } from '../components/header';

const { Navigator, Screen } = createStackNavigator();

function App(props) {
  const {
    isAuthenticated, isLoading,
    updateAuthenticationStateConnect, updateViewportDimensionsConnect,
  } = props;

  const onDimensionChange = ({ window }) => updateViewportDimensionsConnect(window);

  /**
   * This effect is used to add Dimensions listener.
   * */
  useEffect(() => {
    const window = Dimensions.get('window');
    onDimensionChange({ window });
    Dimensions.addEventListener('change', onDimensionChange);
    return () => {
      Dimensions.removeEventListener('change', onDimensionChange);
    };
  }, []);
  /**
   *  implements here the authentication check, like check user-data is available in async-storage or not
   *  */
  useEffect(() => {
    get('user').then((user) => {
      updateAuthenticationStateConnect(!!user);
    }).catch(() => {
      updateAuthenticationStateConnect(false);
    });
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.f1, styles.bgApp]}>
        <Loading />
      </View>
    );
  }

  return (
    <Navigator screenOptions={config.defaultNavigationOptions}>
      {
        isAuthenticated ?
          <Screen name={APP_STACK} component={Drawer} options={nullHeader} />
          : (
            <>
              <Screen name={WELCOME} component={Welcome} options={nullHeader} />
              <Screen name={LOGIN} component={Login} />
              <Screen name={SIGN_UP} component={SignUp} />
            </>
          )
      }
    </Navigator>
  );
}

App.propTypes = {
  isAuthenticated: PropTypes.bool,
  isLoading: PropTypes.bool,
  updateAuthenticationStateConnect: PropTypes.func,
  updateViewportDimensionsConnect: PropTypes.func,
};

export default connect(({ authentication: { isAuthenticated, isLoading } }) => ({
  isAuthenticated,
  isLoading,
}), {
  updateAuthenticationStateConnect: updateAuthenticationState,
  updateViewportDimensionsConnect: updateViewportDimensions,
})(App);
