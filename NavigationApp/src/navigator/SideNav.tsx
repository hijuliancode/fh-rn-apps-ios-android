import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {SettingsScreen} from '../screens';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import {stylesTheme} from '../theme';

const Drawer = createDrawerNavigator();

export const SideNav = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'left',
        drawerType: width > 600 ? 'permanent' : 'front',
      }}
      drawerContent={props => <DrawerContentView {...props} />}>
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

const DrawerContentView = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={stylesTheme.avatarContainer}>
        <Image
          source={{
            uri: 'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
          }}
          style={stylesTheme.avatar}
        />
        <Text>Drawer Content</Text>
      </View>
    </DrawerContentScrollView>
  );
};
