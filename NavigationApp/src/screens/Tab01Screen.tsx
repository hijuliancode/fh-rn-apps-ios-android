import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Tab01Screen() {
  useEffect(() => {
    console.log('Tab01Screen Effect');
  }, []);
  return (
    <View>
      <Text>Tab01Screen</Text>
    </View>
  );
}
