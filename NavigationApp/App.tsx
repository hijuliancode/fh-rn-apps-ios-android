import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SideNav} from './src/navigator';
// import {DrawerNavigator} from './src/navigator';
// import {StackNavigator} from './src/navigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <SideNav />
    </NavigationContainer>
  );
};

export default App;
