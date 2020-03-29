import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, Alert, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { NumberContainer } from "../components/NumberContainer";
import { Card } from "../components/Card";
import { MainButton } from "../components/MainButton";
import { BodyText } from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderItemList = (listLenght, itemData) => (
 <View style={styles.listItem}>
   <BodyText>#{listLenght - itemData.index}</BodyText>
   <BodyText>{itemData.item}</BodyText>
 </View>
);

export const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuess, setPastGuess] = useState([initialGuess.toString()]);
  const [avialebleDeviceWidth, setAvialebleDeviceWidth] = useState(Dimensions.get('window').width);
  const [avialebleDeviceHeight, setAvialebleDeviceHeight] = useState(Dimensions.get('window').height);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    const updateLayout = () => {
      setAvialebleDeviceWidth(Dimensions.get('window').width);
      setAvialebleDeviceHeight(Dimensions.get('window').height);
    };
    Dimensions.addEventListener('change', updateLayout);
    return () => Dimensions.addEventListener('change', updateLayout);
  })

  useEffect(() => {
    if(currentGuess === userChoice) {
      onGameOver(pastGuess.length)
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' }
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPastGuess(curPastGuess => [nextNumber.toString(), ...curPastGuess]);
  };

  let listContainerStyle = styles.listContainer;
  if (avialebleDeviceWidth < 350) {
    listContainerStyle = styles.listContainerBig;
  }

  if (avialebleDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text>Opponent's guess</Text>
        <View style={styles.controls}>
          <MainButton onPress={() => nextGuessHandler('lower')}>
            <Ionicons size={24} name='md-remove' color='white'/>
          </MainButton>

          <NumberContainer>{currentGuess}</NumberContainer>

          <MainButton onPress={() => nextGuessHandler('greater')}>
            <Ionicons size={24} name='md-add' color='white'/>
          </MainButton>
        </View>
        <View style={listContainerStyle}>

          <FlatList
            keyExtractor={item => item}
            data={pastGuess}
            renderItem={renderItemList.bind(this, pastGuess.length)}
            contentContainerStyle={styles.list}
          />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.screen}>
      <Text>Opponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={() => nextGuessHandler('lower')}>
          <Ionicons size={24} name='md-remove' color='white'/>
        </MainButton>
        <MainButton onPress={() => nextGuessHandler('greater')}>
          <Ionicons size={24} name='md-add' color='white'/>
        </MainButton>
      </Card>

      <View style={listContainerStyle}>
        {/*<ScrollView contentContainerStyle={styles.list}>*/}
        {/*  {pastGuess.map((guess, index) => renderItemList(guess, pastGuess.length - index))}*/}
        {/*</ScrollView>*/}
        <FlatList
          keyExtractor={item => item}
          data={pastGuess}
          renderItem={renderItemList.bind(this, pastGuess.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%',
  },
  listContainer: {
    flex: 1,
    width: '60%',
  },
  listContainerBig: {
    flex: 1,
    width: '80%',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  listItem: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    alignItems: 'center'
  }
});