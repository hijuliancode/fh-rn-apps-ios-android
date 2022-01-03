import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Tab02Screen() {
  useEffect(() => {
    console.log('Tab02Screen Effect');
  }, []);
  return (
    <View>
      <Text>Tab02Screen</Text>
    </View>
  );
}
