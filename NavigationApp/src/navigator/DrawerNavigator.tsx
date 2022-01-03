import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width > 600 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        options={{title: 'Home'}}
        name="StackNavigator"
        component={StackNavigator}
      />
      <Drawer.Screen
        options={{title: 'Settings'}}
        name="Settings"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
