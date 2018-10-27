import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { AUTH_STACK } from '../../utilities';
import styles from '../../styles';
import { Icon } from '../../components';

export default class Menu extends React.PureComponent {
  navigateToMenu = () => {
    const { navigateTo, navigation } = this.props;

    if (navigateTo === AUTH_STACK) {
      navigation.navigate(AUTH_STACK);
    } else {
      navigation.navigate(navigateTo);
    }
  };

  render() {
    const { navigateTo, activeItemKey, icon, title } = this.props;
    const isSelected = activeItemKey === navigateTo;

    return (
      <TouchableHighlight
        underlayColor={'rgba(155,155,155,0.3)'}
        style={[componentStyles.menuStyle, styles.mv1, isSelected && { backgroundColor: 'rgba(155,155,155,0.3)' }]}
        onPress={this.navigateToMenu}
      >
        <View style={[{ flex: 1 }, styles.flexRow, styles.mv2]}>
          {/* ----------------- icon --------------------------- */}
          <Icon name={icon} color={isSelected ? '#0059a3' : '#9B9B9B'} size={24} />
          {/* ----------------- icon --------------------------- */}

          {/* ----------------- title --------------------------- */}
          <View style={{ justifyContent: 'center' }}>
            <Text verticalAlign={'center'} style={[componentStyles.textStyle]}>
              {title}
            </Text>
          </View>
          {/* ----------------- title --------------------------- */}
        </View>
      </TouchableHighlight>
    );
  }
}

const componentStyles = StyleSheet.create({
  menuStyle: {
    flex: 1,
    maxHeight: 48,
    paddingHorizontal: 18,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  textStyle: {
    paddingLeft: 30,
    fontSize: 14,
    lineHeight: 16
  }
});
