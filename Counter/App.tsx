import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/screens';
// import {CounterScreen} from './src/screens';
import {BoxModelScreen} from './src/screens';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen /> */}
      {/* <CounterScreen /> */}
      <BoxModelScreen />
    </SafeAreaView>
  );
};
