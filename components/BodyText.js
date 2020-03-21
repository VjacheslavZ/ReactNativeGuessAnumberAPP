import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const BodyText = ({ children }) => <Text style={styles.body}>{children}</Text>;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});