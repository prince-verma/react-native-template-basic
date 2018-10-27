import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styles, { COLOR } from '../styles';

export default class Loading extends React.PureComponent {
  render() {

    return (
      <View style={[StyleSheet.absoluteFill, styles.center]}>
        <ActivityIndicator color={COLOR.APP} style={[styles.loadingContainer, styles.shadow2]} />
      </View>
    );
  }
}
