import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {stylesTheme} from '../theme';

interface Props extends StackScreenProps<any, any> {}

export const Page01Screen = ({navigation}: Props) => {
  return (
    <View style={stylesTheme.globalWrapper}>
      <View style={stylesTheme.marginBottom}>
        <Text style={stylesTheme.title}>Page01Screen works!</Text>
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Page 02"
          onPress={() => navigation.navigate('Page02Screen')}
        />
      </View>
    </View>
  );
};
