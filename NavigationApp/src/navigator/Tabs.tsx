import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab01Screen from '../screens/Tab01Screen';
import Tab02Screen from '../screens/Tab02Screen';
import {StackNavigator} from './index';
import {Text} from 'react-native';
// import Tab03Screen from '../screens/Tab03Screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: '#fff000',
        tabBarActiveTintColor: '#ff0000',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'T';

          switch (route.name) {
            case 'Tab01Screen':
              iconName = 'T1 !';
              break;

            case 'Tab02Screen':
              iconName = 'T 02';
              break;

            case 'StackNavigator':
              iconName = 'ST';
              break;
            default:
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
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
