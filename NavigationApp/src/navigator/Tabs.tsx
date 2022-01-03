import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Tab01Screen from '../screens/Tab01Screen';
import {StackNavigator, TopTabNavigator} from './index';
import {Platform, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import Tab03Screen from '../screens/Tab03Screen';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

// TABS ANDROID

const BottomTabAndroid = createMaterialBottomTabNavigator();

function TabsAndroid() {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: '#fff000',
        tabBarActiveTintColor: '#ff0000',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'snow-outline';

          switch (route.name) {
            case 'Tab01Screen':
              iconName = 'beer-outline';
              break;

            case 'TopTabNavigator':
              iconName = 'snow-outline';
              break;

            case 'StackNavigator':
              iconName = 'color-palette-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={16} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab01Screen"
        options={{
          title: 'Tab 01',
        }}
        component={Tab01Screen}
      />
      <BottomTabAndroid.Screen
        name="TopTabNavigator"
        options={{
          title: 'Tab 02',
        }}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
}

// TABS IOS

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{backgroundColor: 'white'}}
      screenOptions={({route}) => ({
        tabBarActiveBackgroundColor: '#fff000',
        tabBarActiveTintColor: '#ff0000',
        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'snow-outline';

          switch (route.name) {
            case 'Tab01Screen':
              iconName = 'beer-outline';
              break;

            case 'TopTabNavigator':
              iconName = 'snow-outline';
              break;

            case 'StackNavigator':
              iconName = 'color-palette-outline';
              break;
            default:
              break;
          }

          return <Icon name={iconName} size={16} color={color} />;
        },
      })}>
      <BottomTabIOS.Screen
        name="Tab01Screen"
        options={{
          title: 'Tab 01',
        }}
        component={Tab01Screen}
      />
      <BottomTabIOS.Screen
        name="TopTabNavigator"
        options={{
          title: 'Tab 02',
        }}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigator"
        options={{
          title: 'Stack',
        }}
        component={StackNavigator}
      />
    </BottomTabIOS.Navigator>
  );
};
