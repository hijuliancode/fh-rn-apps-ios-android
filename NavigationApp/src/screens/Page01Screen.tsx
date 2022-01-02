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
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Meraki Page"
          onPress={() =>
            navigation.navigate('PagePersonaScreen', {id: 1, name: 'Meraki'})
          }
        />
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Ginna Page"
          onPress={() =>
            navigation.navigate('PagePersonaScreen', {id: 2, name: 'Ginna'})
          }
        />
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Gumball Page!"
          onPress={() =>
            navigation.navigate('PagePersonaScreen', {id: 3, name: 'Gumball'})
          }
        />
      </View>
    </View>
  );
};
