import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonFab} from '../components/ButtonFab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <ButtonFab onPress={handleDecrease} text="-1" location="left" />
      <ButtonFab onPress={handleIncrease} text="+1" location="right" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    top: -12,
  },
});
