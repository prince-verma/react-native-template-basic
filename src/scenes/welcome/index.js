import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from '../../styles';
import { LOGIN, SIGN_UP } from '../../constants';

export default function Welcome(props) {
  const { navigation } = props;

  const login = () => navigation.navigate(LOGIN);
  const signUp = () => navigation.navigate(SIGN_UP);
  const onFbCLick = () => ({});

  return (
    <View style={[styles.f1, styles.bgApp, styles.p40]}>
      <View style={[styles.f2, styles.aCenter]}>
        <Text style={[styles.cWhite, styles.font24]}>Demo-Template</Text>
        <Text style={[styles.cWhite, styles.font18]}>React-Native-Template-Basic</Text>
      </View>

      <View style={[styles.f9, styles.bgAppDark, styles.shadow2]} />

      <View style={[styles.f5, styles.aCenter]}>
        <View style={[styles.f1]}>
          <TouchableOpacity style={styles.f1} onPress={onFbCLick}>
            <View style={[styles.f1, styles.center]}>
              <Text style={[styles.cWhite, styles.font16, styles.bold]}>Continue with facebook</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={[styles.f1, styles.jCenter]}>
          <Text style={[styles.cWhite]}>or continue using email</Text>
        </View>

        <View style={[styles.f1, styles.flexRow, styles.aCenter]}>
          <TouchableOpacity style={[styles.mh15]} onPress={login}>
            <Text style={[styles.cWhite, styles.font16]}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.mh15]} onPress={signUp}>
            <Text style={[styles.cWhite, styles.font16]}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

Welcome.propTypes = {
  navigation: PropTypes.object,
};
