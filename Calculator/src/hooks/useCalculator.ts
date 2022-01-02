import React, {useRef, useState} from 'react';
import {Operators} from '../types';

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('100');

  const lastOperation = useRef<Operators>();

  const cleanNumber = () => {
    setNumber('0');
    setPreviousNumber('0');
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
    let numberTemp = number;

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

  const btnOperation = (operation: Operators) => {
    saveLastNumber();
    lastOperation.current = operation;
  };

  const btnEqual = () => {
    switch (lastOperation.current) {
      case Operators.Divide:
        if (lastOperation.current === Operators.Divide) {
          setNumber(String(Number(previousNumber) / Number(number)));
        }
        break;
      case Operators.Multiply:
        if (lastOperation.current === Operators.Multiply) {
          setNumber(String(Number(previousNumber) * Number(number)));
        }
        break;
      case Operators.Subtract:
        if (lastOperation.current === Operators.Subtract) {
          setNumber(String(Number(previousNumber) - Number(number)));
        }
        break;
      case Operators.Add:
        if (lastOperation.current === Operators.Add) {
          setNumber(String(Number(previousNumber) + Number(number)));
        }
        break;
      default:
        break;
    }
    setPreviousNumber('0');
  };

  return {
    number,
    previousNumber,
    cleanNumber,
    creatingNumber,
    positiveNegative,
    deleteLastNumber,
    btnOperation,
    btnEqual,
  };
};
