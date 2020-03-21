import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Game is over</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});