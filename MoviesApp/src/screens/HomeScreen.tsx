import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import movieDB from '../api/movieDB';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    movieDB.get('/now_playing').then(res => {
      console.log(res.data.results);
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Home Screen</Text>
      <Button
        title="Go to Details Screen"
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
