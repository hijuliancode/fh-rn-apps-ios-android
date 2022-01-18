import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {StackNavigator} from './src/navigator';
// import {DrawerNavigator} from './src/navigator';
// import {Tabs} from './src/navigator';
import {SideNav} from './src/navigator';
import {AuthProvider} from './src/context';

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        {/* <DrawerNavigator /> */}
        {/* <Tabs /> */}
        <SideNav />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
