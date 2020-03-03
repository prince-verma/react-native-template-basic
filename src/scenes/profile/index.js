import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import { showSnackBarWithButton } from 'react-native-swipeable-snackbar';

import { ABOUT_US } from '../../constants';
import styles from '../../styles';
import { updateAuthenticationState } from '../../redux/actions/authentication.actions';

function Profile(props) {
  const { navigation, updateAuthenticationStateConnect } = props;

  const goToAboutUS = () => navigation.navigate(ABOUT_US);
  const openDrawer = () => navigation.openDrawer();
  const signOut = () => updateAuthenticationStateConnect(false);

  return (
    <View style={[styles.center, styles.f1]}>
      <Text>My Profile</Text>
      <Text onPress={() => {
        showSnackBarWithButton('Demo snackbar', null, { position: 'bottom' });
      }}>Snackbar from bottom</Text>
      <Text onPress={() => {
        showSnackBarWithButton('Demo snackbar', null);
      }}>Snackbar from Top</Text>
      <Text onPress={openDrawer}>Open Drawer</Text>
      <Text onPress={goToAboutUS}>go to About us screen </Text>
      <Text onPress={signOut}>SignOut</Text>
    </View>
  );
}

Profile.propTypes = {
  navigation: PropTypes.object,
  updateAuthenticationStateConnect: PropTypes.func,
};

export default connect(null, {
  updateAuthenticationStateConnect: updateAuthenticationState,
})(Profile);
