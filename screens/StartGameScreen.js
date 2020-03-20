import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard } from 'react-native';

import { COLORS } from "../constants/colors";
import { Card } from "../components/Card";
import { Input } from "../components/Input";

export const StartGameScreen = () => {
  const [enteredValue, setEnteredNumber] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredNumber('');
    setConfirmed(false);
  };
  const confirmInputHnadler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === undefined || chosenNumber <= 0 || chosenNumber > 99) {
      return
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredNumber('');
  };

  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Chosen number {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
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
            onChangeText={numberInputHandler}
            value={enteredValue}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title='Reset'
                onPress={resetInputHandler}
                color={COLORS.accent}
              />
            </View>
            <View style={styles.button}>
              <Button title='Confirm' onPress={confirmInputHnadler} color={COLORS.primary} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
