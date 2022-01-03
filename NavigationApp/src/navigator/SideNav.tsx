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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Tabs} from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Drawer.Screen options={{title: 'Tabs'}} name="Tabs" component={Tabs} />
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

const DrawerContentView = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar Section */}
      <View style={stylesTheme.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
          }}
          style={stylesTheme.avatar}
        />
        <Text>Drawer Content</Text>
      </View>
      {/* Options Section */}
      <View style={stylesTheme.menuContainer}>
        <View style={stylesTheme.marginBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text style={stylesTheme.menuItem}>
              <Icon name="snow-outline" size={12} color="#900" />
              Tabs
            </Text>
          </TouchableOpacity>
        </View>
        <View style={stylesTheme.marginBottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StackNavigator')}>
            <Text style={stylesTheme.menuItem}>
              <Icon name="snow-outline" size={12} color="#900" />
              Stack Navigation
            </Text>
          </TouchableOpacity>
        </View>
        <View style={stylesTheme.marginBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Text style={stylesTheme.menuItem}>
              <Icon name="snow-outline" size={12} color="#900" />
              Settings
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
