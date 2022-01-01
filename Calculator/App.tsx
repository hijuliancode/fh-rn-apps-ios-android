import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {MainScreen} from './src/screens';
import {styles} from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.mainBackground}>
      <StatusBar barStyle="light-content" backgroundColor="#060116" />
      <MainScreen />
    </SafeAreaView>
  );
};

export default App;
