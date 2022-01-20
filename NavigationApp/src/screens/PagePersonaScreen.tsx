import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';
import {AuthContext} from '../context';
import {RootStackParamList} from '../navigator/StackNavigator';
import {stylesTheme} from '../theme';

interface Props
  extends StackScreenProps<RootStackParamList, 'PagePersonaScreen'> {}

export const PagePersonaScreen = ({route, navigation}: Props) => {
  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params!.name,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeUsername(params!.name);
  }, []);

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
