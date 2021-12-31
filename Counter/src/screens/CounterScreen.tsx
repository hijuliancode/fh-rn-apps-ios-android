import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

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
      <Button title="Aumentar" onPress={handleIncrease} />
    </View>
  );
};
