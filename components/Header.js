import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { COLORS } from "../constants/colors";
import { TitleText } from "./TitleText";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <TitleText>{title}</TitleText>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
