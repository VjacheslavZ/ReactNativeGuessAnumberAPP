import React from 'react';
import { StyleSheet, Text } from 'react-native';

export const BodyText = ({ children, style }) => (<Text style={{...styles.body, ...style}}>{children}</Text>);

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans'
  }
});