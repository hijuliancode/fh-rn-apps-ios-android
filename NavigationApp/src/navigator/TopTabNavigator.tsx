import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen, ContactsScreen, AlbumsScreen} from '../screens';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={
        {
          // paddingTop,
        }
      }
      sceneContainerStyle={{backgroundColor: '#fff'}}
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: '#ffa',
          elevation: 0,
          shadowColor: 'transparent',
        },
        tabBarPressColor: '#0f0',
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: '#0f0',
        },
        tabBarIcon: ({focused, color, size}) => {
          let iconName: string = 'T';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'CHT';
              break;

            case 'ContactsScreen':
              iconName = 'CNTS';
              break;

            case 'AlbumsScreen':
              iconName = 'ALB';
              break;
            default:
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
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
