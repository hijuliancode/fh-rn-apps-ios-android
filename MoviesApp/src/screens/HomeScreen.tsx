import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const navigation = useNavigation();
  const {movies, isLoading} = useMovies();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('DetailsScreen' as any)}
      />
      {isLoading ? <Text>Loading...</Text> : <Text>{movies.length}</Text>}
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
