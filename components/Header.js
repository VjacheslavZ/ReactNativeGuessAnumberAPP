import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { COLORS } from "../constants/colors";

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
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
  },
  headerTitle: {
    color: '#000',
    fontSize: 18,
  }
});
