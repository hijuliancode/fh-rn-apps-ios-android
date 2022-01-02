import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {stylesTheme} from '../theme';

export const Page02Screen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Page02Screen useEffect');
    navigation.setOptions({
      title: 'Hello World',
      headerBackTitle: 'Atrás',
    });
  }, [navigation]);

  return (
    <View style={stylesTheme.globalWrapper}>
      <View style={stylesTheme.marginBottom}>
        <Text style={stylesTheme.title}>Page02Screen works!</Text>
      </View>
      <View style={stylesTheme.marginBottom}>
        <Button
          title="Go to Page 03"
          onPress={() => navigation.navigate('Page03Screen' as never)}
        />
      </View>
    </View>
  );
};
