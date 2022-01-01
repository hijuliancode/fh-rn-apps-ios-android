import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Button} from '../components';
import {stylesTheme} from '../theme';

export const MainScreen = () => {
  return (
    <Container>
      <View style={stylesTheme.resultsContainer}>
        <Text style={stylesTheme.resultSmall}>1,500.00</Text>
        <Text style={stylesTheme.resultMain}>1,500.00</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button onPress={() => console.log('C')} text="C" />
          <Button
            onPress={() => console.log('+/-')}
            text="+/-"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('%')}
            text="%"
            styleColor="Orange"
          />
          <Button onPress={() => console.log('/')} text="/" />
        </View>
        <View style={styles.row}>
          <Button onPress={() => console.log('C')} text="C" />
          <Button
            onPress={() => console.log('+/-')}
            text="+/-"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('%')}
            text="%"
            styleColor="Orange"
          />
          <Button onPress={() => console.log('/')} text="/" />
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
  },
});
