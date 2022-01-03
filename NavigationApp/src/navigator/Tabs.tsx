import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab01Screen from '../screens/Tab01Screen';
import Tab02Screen from '../screens/Tab02Screen';
import {StackNavigator} from './index';
// import Tab03Screen from '../screens/Tab03Screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={{
        tabBarActiveBackgroundColor: '#fff000',
        tabBarActiveTintColor: '#ff0000',
      }}>
      <Tab.Screen
        name="Tab01Screen"
        options={{
          title: 'Tab 01',
        }}
        component={Tab01Screen}
      />
      <Tab.Screen
        name="Tab02Screen"
        options={{
          title: 'Tab 02',
        }}
        component={Tab02Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
