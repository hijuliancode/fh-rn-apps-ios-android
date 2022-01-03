import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Tab03Screen() {
  useEffect(() => {
    console.log('Tab03Screen Effect');
  }, []);
  return (
    <View>
      <Text>Tab03Screen</Text>
    </View>
  );
}
