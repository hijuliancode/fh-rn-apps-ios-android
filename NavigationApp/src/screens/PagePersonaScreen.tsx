import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {stylesTheme} from '../theme';

interface Props extends StackScreenProps<any, any> {}

export const PagePersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  }, [navigation, params]);

  return (
    <View style={stylesTheme.globalWrapper}>
      <View style={stylesTheme.marginBottom}>
        <Text style={stylesTheme.title}>Page01Screen works!</Text>
      </View>
      <View style={stylesTheme.marginBottom}>
        <Text>{JSON.stringify(params, null, 2)}</Text>
      </View>
    </View>
  );
};
