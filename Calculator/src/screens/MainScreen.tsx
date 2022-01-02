import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container, Button} from '../components';
import {stylesTheme} from '../theme';

export const MainScreen = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('100');

  const cleanNumber = () => {
    setNumber('0');
  };

  const creatingNumber = (value: string) => {
    // No aceptar doble punto
    if (number.includes('.') && value === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto decimal
      if (value === '.') {
        setNumber(number + value);
        // Evaluar si es otro cero o es un numero negativo
      } else if (value === '0' && number.includes('.')) {
        setNumber(number + value);
        // Evaluar si es diferente de cero y no tiene un punto
      } else if (value !== '0' && !number.includes('.')) {
        setNumber(value);
        // Evitar 0000.00
      } else if (value === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + value);
      }
    } else {
      setNumber(number + value);
    }
  };

  const positiveNegative = () => {
    if (number.charAt(0) === '-') {
      setNumber(number.substring(1));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteLastNumber = () => {
    let negative = '';
    let numberTemp = '';

    // Verificar si es número negativo y eliminar el signo
    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substring(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const saveLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  return (
    <Container>
      <View style={stylesTheme.resultsContainer}>
        <Text style={stylesTheme.resultSmall}>{previousNumber}</Text>
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
          <Button onPress={saveLastNumber} text="/" styleColor="Orange" />
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
            onPress={() => console.log('*')}
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
            onPress={() => console.log('-')}
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
            onPress={() => console.log('+')}
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
