import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <TouchableOpacity onPress={handleIncrease}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Aumentar</Text>
        </View>
      </TouchableOpacity>
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
  button: {
    backgroundColor: '#60a5fa',
    padding: 12,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
