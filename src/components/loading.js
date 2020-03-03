import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import styles, { COLOR } from '../styles';

export default function Loading() {
  return (
    <View style={[StyleSheet.absoluteFill, styles.center]}>
      <ActivityIndicator color={COLOR.APP} style={[styles.loadingContainer, styles.shadow2]} />
    </View>
  );
}
