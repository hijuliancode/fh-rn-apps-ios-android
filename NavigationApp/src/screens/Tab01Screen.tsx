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
        <Icon name="american-football-outline" size={32} color="#900" />
        <Icon name="baseball-outline" size={32} color="#900" />
        <Icon name="beer-outline" size={32} color="#900" />
        <Icon name="bonfire-outline" size={32} color="#900" />
        <Icon name="color-palette-outline" size={32} color="#900" />
        <Icon name="snow-outline" size={32} color="#900" />
        <Icon name="fast-food-outline" size={32} color="#900" />
        <Icon name="finger-print-outline" size={32} color="#900" />
        <Icon name="shirt-outline" size={32} color="#900" />
      </Text>
    </View>
  );
}
