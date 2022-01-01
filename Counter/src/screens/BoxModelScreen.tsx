import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BoxModel Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    flex: 1,
  },
  title: {
    borderWidth: 10,
    fontSize: 20,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});
