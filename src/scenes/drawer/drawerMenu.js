import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';

import styles from '../../styles';
import Icon from '../../components/icon';
import { updateSelectedMenuLabel } from '../../redux/actions/sideMenu.actions';
import { updateAuthenticationState } from '../../redux/actions/authentication.actions';

const componentStyles = StyleSheet.create({
  menuStyle: {
    flex: 1,
    maxHeight: 48,
    paddingHorizontal: 18,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  textStyle: {
    paddingLeft: 30,
    fontSize: 14,
    lineHeight: 16,
  },
});

function Menu(props) {
  const {
    navigateTo, navigation, label, isSignOut, isSelected, icon,
    updateSelectedMenuLabelConnect, updateAuthenticationStateConnect,
  } = props;

  const navigateToMenu = () => {
    if (isSignOut) {
      updateAuthenticationStateConnect(false);
    } else {
      updateSelectedMenuLabelConnect(navigateTo);
      navigation.navigate(navigateTo);
    }
  };

  return (
    <TouchableHighlight
      underlayColor={'rgba(155,155,155,0.3)'}
      style={[componentStyles.menuStyle, styles.mv1, isSelected && { backgroundColor: 'rgba(155,155,155,0.3)' }]}
      onPress={navigateToMenu}
    >
      <View style={[{ flex: 1 }, styles.flexRow, styles.mv2]}>
        <Icon name={icon} color={isSelected ? '#0059a3' : '#9B9B9B'} size={24} />
        <View style={{ justifyContent: 'center' }}>
          <Text verticalAlign={'center'} style={[componentStyles.textStyle]}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

Menu.propTypes = {
  navigateTo: PropTypes.string,
  navigation: PropTypes.object,
  label: PropTypes.string,
  isSignOut: PropTypes.bool,
  isSelected: PropTypes.bool,
  icon: PropTypes.string,
  updateSelectedMenuLabelConnect: PropTypes.func,
  updateAuthenticationStateConnect: PropTypes.func,
};

export default connect(({ sideMenu, viewport }, { navigateTo }) => ({
    isSelected: sideMenu.selectedMenuLabel === navigateTo,
  }),
  {
    updateSelectedMenuLabelConnect: updateSelectedMenuLabel,
    updateAuthenticationStateConnect: updateAuthenticationState,
  },
)
(Menu);
