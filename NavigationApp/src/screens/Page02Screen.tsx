import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {stylesTheme} from '../theme';

export const Page02Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={stylesTheme.globalWrapper}>
      <View style={stylesTheme.marginBottom}>
        <Text>Page02Screen works!</Text>
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
