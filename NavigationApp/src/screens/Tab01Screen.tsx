import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text} from 'react-native';
import {stylesTheme} from '../theme';

export default function Tab01Screen() {
  useEffect(() => {
    console.log('Tab01Screen Effect');
  }, []);
  return (
    <View style={stylesTheme.globalWrapper}>
      <Text style={stylesTheme.title}>Tab01Screen</Text>
      <Text>
        <Icon name="airplane-outline" size={32} color="#900" />
      </Text>
    </View>
  );
}
