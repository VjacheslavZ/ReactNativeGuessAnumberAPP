import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

import { Card } from "../components/Card";

export const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start new game !</Text>

      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Select a number</Text>
        <TextInput placeholder='Input text' />

        <View style={styles.buttonContainer}>
          <Button title='Reset' onPress={() => {}} />
          <Button title='Confirm' onPress={() => {}} />
        </View>
      </Card>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title:{
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
});
