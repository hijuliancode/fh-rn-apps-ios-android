import React from 'react';
import {Text, View} from 'react-native';
import {Container} from '../components';
import {styles} from '../theme';

export const MainScreen = () => {
  return (
    <Container>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultSmall}>1,500.00</Text>
        <Text style={styles.resultMain}>1,500.00</Text>
      </View>
    </Container>
  );
};
