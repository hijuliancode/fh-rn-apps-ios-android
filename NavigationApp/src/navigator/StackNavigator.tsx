import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  Page01Screen,
  Page02Screen,
  Page03Screen,
  PagePersonaScreen,
} from '../screens';

export type RootStackParamList = {
  Page01Screen: undefined;
  Page02Screen: undefined;
  Page03Screen: undefined;
  PagePersonaScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="Page01Screen"
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          elevation: 0, // Android
          shadowColor: 'transparent', // iOS
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Page01Screen"
        options={{
          title: 'Page 01 ',
        }}
        component={Page01Screen}
      />
      <Stack.Screen
        name="Page02Screen"
        options={{
          title: 'Page 02 ',
        }}
        component={Page02Screen}
      />
      <Stack.Screen
        name="Page03Screen"
        options={{
          title: 'Page 03 ',
        }}
        component={Page03Screen}
      />
      <Stack.Screen
        name="PagePersonaScreen"
        options={{
          title: 'Page Persona',
        }}
        component={PagePersonaScreen}
      />
    </Stack.Navigator>
  );
};
