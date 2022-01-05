import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator';
// import {DrawerNavigator} from './src/navigator';
// import {Tabs} from './src/navigator';
import {SideNav} from './src/navigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      {/* <Tabs /> */}
      <SideNav />
    </NavigationContainer>
  );
};

export default App;
