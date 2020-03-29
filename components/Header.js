import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import { COLORS } from "../constants/colors";
import { TitleText } from "./TitleText";

export const Header = ({ title }) => {
  return (
    <View style={{...styles.headerBase, ...Platform.select({ ios: styles.headerIOS, android: styles.headerAndroid })}}>
      <TitleText style={styles.title}>{title}</TitleText>
    </View>
  )
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIOS: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: COLORS.primary,
  },
  title: {
    color: Platform.OS === 'ios' ? COLORS.primary: '#fff'
  },
});
