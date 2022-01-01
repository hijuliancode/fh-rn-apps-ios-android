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
          <Button onPress={() => console.log('+/-')} text="+/-" />
          <Button onPress={() => console.log('%')} text="%" />
          <Button
            onPress={() => console.log('/')}
            text="/"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() => console.log('7')}
            text="7"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('8')}
            text="8"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('9')}
            text="9"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('*')}
            text="*"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() => console.log('4')}
            text="4"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('5')}
            text="5"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('6')}
            text="6"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('-')}
            text="-"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() => console.log('1')}
            text="1"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('2')}
            text="2"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('3')}
            text="3"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('+')}
            text="+"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            doubleWidth
            onPress={() => console.log('0')}
            text="0"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('.')}
            text="."
            styleColor="GrayLight"
          />
          <Button
            onPress={() => console.log('=')}
            text="="
            styleColor="Orange"
          />
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
