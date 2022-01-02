import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';

export const App = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello Navigation!</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
