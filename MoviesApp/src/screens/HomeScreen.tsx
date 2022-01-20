import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('DetailsScreen' as any)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 42,
  },
});
