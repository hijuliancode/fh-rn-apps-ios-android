import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View style={{...styles.cajaMorada, width: width * 0.6}}>
          <Text>60%</Text>
        </View>
        <View style={{...styles.cajaNaranja, width: width * 0.4}}>
          <Text>40%</Text>
        </View>
      </View>
      <Text>
        {' '}
        W: {width} - H: {height}{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f00',
    display: 'flex',
  },
  cajaMorada: {
    backgroundColor: 'purple',
    height: 50,
    width: '50%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    height: 50,
    width: '50%',
  },
});
