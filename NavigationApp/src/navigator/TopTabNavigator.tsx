import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen, ContactsScreen, AlbumsScreen} from '../screens';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ChatScreen"
        options={{
          title: 'Tab 01',
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{
          title: 'Tab 02',
        }}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{
          title: 'Stack',
        }}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
