import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Button} from '../components';
import {useCalculator} from '../hooks';
import {stylesTheme} from '../theme';
import {Operators} from '../types';

export const MainScreen = () => {
  const {
    number,
    previousNumber,
    cleanNumber,
    creatingNumber,
    positiveNegative,
    deleteLastNumber,
    btnOperation,
    btnEqual,
  } = useCalculator();

  return (
    <Container>
      <View style={stylesTheme.resultsContainer}>
        {previousNumber !== '0' && (
          <Text style={stylesTheme.resultSmall}>{previousNumber}</Text>
        )}
        <Text
          style={stylesTheme.resultMain}
          numberOfLines={1}
          adjustsFontSizeToFit>
          {number}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          <Button onPress={cleanNumber} text="C" />
          <Button onPress={deleteLastNumber} text="Del" />
          <Button onPress={positiveNegative} text="+/-" />
          <Button
            onPress={() => btnOperation(Operators.Divide)}
            text="/"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() => creatingNumber('7')}
            text="7"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('8')}
            text="8"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('9')}
            text="9"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => btnOperation(Operators.Multiply)}
            text="*"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() => creatingNumber('4')}
            text="4"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('5')}
            text="5"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('6')}
            text="6"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => btnOperation(Operators.Subtract)}
            text="-"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            onPress={() => creatingNumber('1')}
            text="1"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('2')}
            text="2"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('3')}
            text="3"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => btnOperation(Operators.Add)}
            text="+"
            styleColor="Orange"
          />
        </View>
        <View style={styles.row}>
          <Button
            doubleWidth
            onPress={() => creatingNumber('0')}
            text="0"
            styleColor="GrayLight"
          />
          <Button
            onPress={() => creatingNumber('.')}
            text="."
            styleColor="GrayLight"
          />
          <Button onPress={btnEqual} text="=" styleColor="Orange" />
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
