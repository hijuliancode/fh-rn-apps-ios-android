import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableIcon} from '../components';
import {stylesTheme} from '../theme';

export default function Tab01Screen() {
  useEffect(() => {
    console.log('Tab01Screen Effect');
  }, []);
  return (
    <View style={stylesTheme.globalWrapper}>
      <Text style={stylesTheme.title}>Tab01Screen</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="american-football-outline" />
        <TouchableIcon iconName="baseball-outline" />
        <TouchableIcon iconName="beer-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="color-palette-outline" />
        <TouchableIcon iconName="snow-outline" />
        <TouchableIcon iconName="fast-food-outline" />
        <TouchableIcon iconName="finger-print-outline" />
        <TouchableIcon iconName="shirt-outline" />
      </Text>
    </View>
  );
}
