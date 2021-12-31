import React, {useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 32,
          top: -12,
        }}>
        Contador: {counter}
      </Text>
      <TouchableOpacity onPress={handleIncrease}>
        <View
          style={{
            backgroundColor: '#60a5fa',
            padding: 12,
            borderRadius: 10,
            margin: 10,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            Aumentar
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
