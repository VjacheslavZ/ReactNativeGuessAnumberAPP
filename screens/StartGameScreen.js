import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { COLORS } from "../constants/colors";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Start new game !</Text>

      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Select a number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
        />


        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' onPress={() => {}} color={COLORS.accent}/>
          </View>
          <View style={styles.button}>
            <Button title='Confirm' onPress={() => {}} color={COLORS.primary} />
          </View>
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
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});
