import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({ style, ...rest }) => {
  return <TextInput {...rest} style={{...styles.input, ...style}}/>
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginVertical: 10,
  }
});