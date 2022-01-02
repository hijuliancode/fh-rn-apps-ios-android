import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Page01Screen, Page02Screen, Page03Screen} from '../screens';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page01Screen" component={Page01Screen} />
      <Stack.Screen name="Page02Screen" component={Page02Screen} />
      <Stack.Screen name="Page03Screen" component={Page03Screen} />
    </Stack.Navigator>
  );
};
