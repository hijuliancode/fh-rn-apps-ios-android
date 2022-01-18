import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const context = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top}}>
      <Text>Settings Screen</Text>
      <Text>{JSON.stringify(context.authState, null, 4)}</Text>
    </View>
  );
};
