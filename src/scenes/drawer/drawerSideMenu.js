import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import Icon from '../../components/icon';
import Menu from './drawerMenu';
import styles, { COLOR } from '../../styles/index';
import { ABOUT_US, PROFILE } from '../../constants';

const componentStyle = StyleSheet.create({
  menuContainer: {
    flex: 10,
    paddingTop: 8,
    justifyContent: 'flex-start',
    marginBottom: 50,
  },
});

export default function DrawerSideMenu({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={[{ flex: 4 }, styles.shadow4, styles.ph16, styles.bgApp]}>
        <View style={[{ flex: 1.2 }, styles.jEnd]}>
          <View style={[styles.circle60, styles.shadow2, styles.bgAppDark]}>
            <Icon name={'person'} size={36} color={COLOR.WHITE} />
          </View>
        </View>
        <View style={[{ flex: 1 }, styles.jCenter]}>
          <Text style={[styles.cWhite, styles.font14]}>Example example</Text>
          <Text style={[styles.cWhite, styles.font14]}>example@example.com</Text>
        </View>
      </View>
      <View style={componentStyle.menuContainer}>
        <Menu
          icon={'play-circle-outline'}
          label={'Profile'}
          navigateTo={PROFILE}
          navigation={navigation}
        />
        <Menu
          icon={'my-location'}
          label={'About Us'}
          navigateTo={ABOUT_US}
          navigation={navigation}
        />
        <Menu
          isSignOut
          icon={'power'}
          label={'Sign out'}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

DrawerSideMenu.propTypes = {
  navigation: PropTypes.object,
};
